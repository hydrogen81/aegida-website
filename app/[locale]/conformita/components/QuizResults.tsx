'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useTranslations, useLocale } from '@/lib/i18n/context'
import { QUIZ_QUESTIONS } from '@/lib/quiz-data'
import { generateReportPdf } from '@/lib/generate-report-pdf'

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

interface AreaResult {
  name: string
  score: number
  maxScore: number
  percentage: number
  level: 'green' | 'yellow' | 'red'
  label: string
}

/* ------------------------------------------------------------------ */
/* Score Ring                                                          */
/* ------------------------------------------------------------------ */

function ScoreRing({ percentage }: { percentage: number }) {
  const radius = 70
  const stroke = 8
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  let ringColor = 'stroke-danger-red'
  if (percentage > 75) ringColor = 'stroke-success-green'
  else if (percentage >= 50) ringColor = 'stroke-gold-400'

  const t = useTranslations()

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        width={180}
        height={180}
        viewBox="0 0 180 180"
        className="-rotate-90"
      >
        <circle
          cx={90}
          cy={90}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          className="text-navy-800"
        />
        <motion.circle
          cx={90}
          cy={90}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          className={ringColor}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          style={{ strokeDasharray: circumference }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="font-display text-4xl font-bold text-slate-50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {percentage}%
        </motion.span>
        <span className="font-mono text-xs tracking-wider-mono text-slate-500">
          {t.quiz.results.scoreLabel}
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Area Bar                                                            */
/* ------------------------------------------------------------------ */

function AreaBar({ area, index }: { area: AreaResult; index: number }) {
  let barColor = 'bg-danger-red'
  let textColor = 'text-danger-red'
  if (area.level === 'green') {
    barColor = 'bg-success-green'
    textColor = 'text-success-green'
  } else if (area.level === 'yellow') {
    barColor = 'bg-gold-400'
    textColor = 'text-gold-400'
  }

  return (
    <div className="rounded-lg border border-navy-700 bg-navy-900/60 p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-base font-semibold uppercase tracking-wide-display text-slate-200">
            {area.name}
          </h3>
          <span className="flex-shrink-0 font-mono text-sm tracking-wider-mono text-slate-400">
            {area.score}/{area.maxScore}
          </span>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-navy-800">
          <motion.div
            className={`h-full rounded-full ${barColor}`}
            initial={{ width: 0 }}
            animate={{ width: `${area.percentage}%` }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.4 + index * 0.15,
            }}
          />
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className={`font-body text-xs font-medium ${textColor}`}>
            {area.label}
          </span>
          <span className={`font-mono text-xs tracking-wider-mono ${textColor}`}>
            {area.percentage}%
          </span>
        </div>
      </div>
  )
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

interface QuizResultsProps {
  answers: Record<number, number>
  onRestart: () => void
}

export default function QuizResults({ answers, onRestart }: QuizResultsProps) {
  const t = useTranslations()
  const { locale } = useLocale()

  // Calculate results using the original quiz-data point values
  // but using translated area names and labels
  const result = useMemo(() => {
    const areaScores: Record<number, { score: number; maxScore: number }> = {
      0: { score: 0, maxScore: 12 },
      1: { score: 0, maxScore: 9 },
      2: { score: 0, maxScore: 9 },
      3: { score: 0, maxScore: 12 },
    }

    // Classification is the last question
    const classificationIdx = t.quiz.questions.length
    const classificationAnswer = answers[classificationIdx]
    const classification = classificationAnswer !== undefined
      ? t.quiz.classificationQuestion.options[classificationAnswer]
      : t.quiz.classificationQuestion.options[2] // default: not classified

    // Calculate scores from the regular questions using original point values
    QUIZ_QUESTIONS.forEach((q, qIdx) => {
      if (q.areaIndex < 0) return // skip classification
      const selectedOption = answers[qIdx]
      if (selectedOption === undefined) return
      areaScores[q.areaIndex].score += q.options[selectedOption]?.points ?? 0
    })

    const totalScore = Object.values(areaScores).reduce((sum, a) => sum + a.score, 0)
    const maxScore = 42

    const areas: AreaResult[] = t.quiz.areas.map((name, i) => {
      const { score, maxScore: areaMax } = areaScores[i]
      const percentage = Math.round((score / areaMax) * 100)
      let level: 'green' | 'yellow' | 'red' = 'red'
      let label = t.quiz.areaLevels.red
      if (percentage > 75) {
        level = 'green'
        label = t.quiz.areaLevels.green
      } else if (percentage >= 50) {
        level = 'yellow'
        label = t.quiz.areaLevels.yellow
      }
      return { name, score, maxScore: areaMax, percentage, level, label }
    })

    const percentage = Math.round((totalScore / maxScore) * 100)

    let overallLevel = ''
    let overallDescription = ''
    if (totalScore >= 36) {
      overallLevel = t.quiz.levels.advanced
      overallDescription = t.quiz.levels.advancedDesc
    } else if (totalScore >= 25) {
      overallLevel = t.quiz.levels.intermediate
      overallDescription = t.quiz.levels.intermediateDesc
    } else if (totalScore >= 14) {
      overallLevel = t.quiz.levels.insufficient
      overallDescription = t.quiz.levels.insufficientDesc
    } else {
      overallLevel = t.quiz.levels.critical
      overallDescription = t.quiz.levels.criticalDesc
    }

    return {
      totalScore,
      maxScore,
      percentage,
      overallLevel,
      overallDescription,
      areas,
      classification,
    }
  }, [answers, t])

  const weakAreas = result.areas
    .map((a, i) => ({ ...a, originalIndex: i }))
    .filter((a) => a.percentage <= 75)

  const handleDownload = () => {
    generateReportPdf(result, weakAreas, t.quiz.recommendations, t, locale)
  }

  let levelColor = 'text-danger-red'
  if (result.percentage > 75) levelColor = 'text-success-green'
  else if (result.percentage >= 50) levelColor = 'text-gold-400'

  return (
    <div className="relative">
      {/* Overall Score */}
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-widest-mono text-gold-400 mb-6">
          {t.quiz.results.title}
        </p>
        <ScoreRing percentage={result.percentage} />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h2
            className={`mt-6 font-display text-2xl font-bold uppercase tracking-wide-display sm:text-3xl ${levelColor}`}
          >
            {result.overallLevel}
          </h2>
          <p className="mt-3 mx-auto max-w-lg font-body text-slate-300 leading-relaxed">
            {result.overallDescription}
          </p>
          <p className="mt-2 font-mono text-sm tracking-wider-mono text-slate-500">
            {t.quiz.results.scoreLabel}: {result.totalScore}/{result.maxScore}
          </p>
        </motion.div>
      </div>

      {/* Area Breakdown */}
      <div className="mt-12">
        <h3 className="font-display text-xl font-bold uppercase tracking-wide-display text-slate-100 mb-6">
          {t.quiz.results.analysisTitle}
        </h3>
        <div className="space-y-4">
          {result.areas.map((area, i) => (
            <AreaBar key={area.name} area={area} index={i} />
          ))}
        </div>
      </div>

      {/* Classification */}
      <div className="mt-8 rounded-lg border border-navy-700 bg-navy-800/50 px-6 py-4">
        <div className="flex items-start gap-3">
          <svg
            className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wide-display text-slate-200">
              {t.quiz.results.classificationType}
            </p>
            <p className="mt-1 font-body text-sm text-slate-400">
              {result.classification}
            </p>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      {weakAreas.length > 0 && (
        <div className="mt-12">
          <h3 className="font-display text-xl font-bold uppercase tracking-wide-display text-slate-100 mb-6">
            {t.quiz.results.recommendationsTitle}
          </h3>
          <div className="space-y-4">
            {weakAreas.map((area, i) => {
              const rec = t.quiz.recommendations[area.originalIndex]
              if (!rec) return null
              return (
                <div key={area.name} className="rounded-lg border border-navy-700 bg-navy-900/60 p-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold-500/10">
                      <svg
                        className="h-3.5 w-3.5 text-gold-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <div>
                      <h4 className="font-display text-sm font-semibold uppercase tracking-wide-display text-slate-200">
                        {area.name}
                      </h4>
                      <p className="mt-2 font-body text-sm text-slate-400 leading-relaxed">
                        {rec.text}
                      </p>
                      <p className="mt-3 font-mono text-xs tracking-wider-mono text-gold-400">
                        {t.quiz.results.recommendedSolution}: {rec.product}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="mt-14 rounded-xl border border-gold-500/20 bg-gradient-to-br from-navy-800 to-navy-900 p-8 text-center">
        <h3 className="font-display text-2xl font-bold uppercase tracking-wide-display text-slate-50">
          {t.quiz.results.ctaTitle}
        </h3>
        <p className="mt-3 mx-auto max-w-lg font-body text-slate-300 leading-relaxed">
          {t.quiz.results.ctaDescription}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href={`/${locale}/#contatti`}
            className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-8 py-3 font-display text-sm font-semibold uppercase tracking-wide-display text-navy-950 transition-colors hover:bg-gold-400 shadow-lg shadow-gold-500/20"
          >
            {t.quiz.results.ctaButton}
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <button
            type="button"
            onClick={handleDownload}
            className="inline-flex items-center gap-2 rounded-lg border border-navy-600 bg-navy-800 px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide-display text-slate-300 transition-colors hover:border-navy-500 hover:text-slate-100"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            {t.quiz.results.downloadReport}
          </button>
        </div>
      </div>

      {/* Restart */}
      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={onRestart}
          className="font-body text-sm text-slate-500 underline underline-offset-4 transition-colors hover:text-slate-300"
        >
          {t.quiz.results.restart}
        </button>
      </div>
    </div>
  )
}
