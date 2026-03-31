'use client'

import { useReducer, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from '@/lib/i18n/context'
import QuizResults from './QuizResults'

/* ------------------------------------------------------------------ */
/* State                                                               */
/* ------------------------------------------------------------------ */

interface QuizState {
  currentQuestion: number
  answers: Record<number, number>
  showResults: boolean
  direction: 1 | -1
}

type QuizAction =
  | { type: 'SELECT_OPTION'; questionId: number; optionIndex: number }
  | { type: 'NEXT'; totalQuestions: number }
  | { type: 'PREV' }
  | { type: 'COMPLETE' }
  | { type: 'RESTART' }

const initialState: QuizState = {
  currentQuestion: 0,
  answers: {},
  showResults: false,
  direction: 1,
}

function reducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case 'SELECT_OPTION':
      return {
        ...state,
        answers: { ...state.answers, [action.questionId]: action.optionIndex },
      }
    case 'NEXT':
      return {
        ...state,
        currentQuestion: Math.min(
          state.currentQuestion + 1,
          action.totalQuestions - 1
        ),
        direction: 1,
      }
    case 'PREV':
      return {
        ...state,
        currentQuestion: Math.max(state.currentQuestion - 1, 0),
        direction: -1,
      }
    case 'COMPLETE':
      return { ...state, showResults: true }
    case 'RESTART':
      return { ...initialState }
    default:
      return state
  }
}

/* ------------------------------------------------------------------ */
/* Slide variants                                                      */
/* ------------------------------------------------------------------ */

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

export default function ComplianceQuiz() {
  const t = useTranslations()
  const [state, dispatch] = useReducer(reducer, initialState)
  const { currentQuestion, answers, showResults, direction } = state

  // Combine regular questions + classification question
  const allQuestions = [
    ...t.quiz.questions,
    {
      area: t.quiz.classificationQuestion.area,
      question: t.quiz.classificationQuestion.question,
      options: t.quiz.classificationQuestion.options.map((text) => ({ text })),
    },
  ]

  const totalQuestions = allQuestions.length
  const question = allQuestions[currentQuestion]
  const selectedOption = answers[currentQuestion]
  const isLast = currentQuestion === totalQuestions - 1
  const isFirst = currentQuestion === 0
  const progress = ((currentQuestion + 1) / totalQuestions) * 100

  const handleSelect = useCallback(
    (optionIndex: number) => {
      dispatch({
        type: 'SELECT_OPTION',
        questionId: currentQuestion,
        optionIndex,
      })
    },
    [currentQuestion]
  )

  const handleNext = useCallback(() => {
    if (isLast) {
      dispatch({ type: 'COMPLETE' })
    } else {
      dispatch({ type: 'NEXT', totalQuestions })
    }
  }, [isLast, totalQuestions])

  const handlePrev = useCallback(() => {
    dispatch({ type: 'PREV' })
  }, [])

  const handleRestart = useCallback(() => {
    dispatch({ type: 'RESTART' })
  }, [])

  /* Results screen */
  if (showResults) {
    return <QuizResults answers={answers} onRestart={handleRestart} />
  }

  /* Quiz screen */
  return (
    <div>
      {/* Progress bar */}
      <div className="mb-2 flex items-center justify-between">
        <span className="font-mono text-xs tracking-wider-mono text-slate-500">
          {t.quiz.intro.questionLabel} {currentQuestion + 1} {t.quiz.intro.ofLabel} {totalQuestions}
        </span>
        <span className="font-mono text-xs tracking-wider-mono text-gold-400">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="mb-8 h-1.5 w-full overflow-hidden rounded-full bg-navy-800">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-300"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
      </div>

      {/* Question card */}
      <div className="relative min-h-[420px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentQuestion}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Area label */}
            <p className="mb-3 font-mono text-xs uppercase tracking-widest-mono text-gold-400">
              {question.area}
            </p>

            {/* Question */}
            <h2 className="font-display text-xl font-semibold text-slate-100 sm:text-2xl leading-snug">
              {question.question}
            </h2>

            {/* Options */}
            <div className="mt-8 space-y-3">
              {question.options.map((option, idx) => {
                const isSelected = selectedOption === idx
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelect(idx)}
                    className={`group relative w-full rounded-lg border px-5 py-4 text-left transition-all duration-200 ${
                      isSelected
                        ? 'border-gold-500 bg-navy-800 shadow-[0_0_20px_rgba(184,150,12,0.1)]'
                        : 'border-navy-700 bg-navy-900 hover:border-gold-500/50 hover:bg-navy-800/60'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border transition-colors ${
                          isSelected
                            ? 'border-gold-500 bg-gold-500'
                            : 'border-navy-600 bg-navy-900 group-hover:border-navy-500'
                        }`}
                      >
                        {isSelected && (
                          <svg
                            className="h-3 w-3 text-navy-950"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </span>
                      <span
                        className={`font-body text-sm leading-relaxed transition-colors ${
                          isSelected ? 'text-slate-100' : 'text-slate-300'
                        }`}
                      >
                        {option.text}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Navigation */}
            <div className="mt-10 flex items-center justify-between">
              {!isFirst ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex items-center gap-2 font-body text-sm text-slate-400 transition-colors hover:text-slate-200"
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
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  {t.quiz.navigation.back}
                </button>
              ) : (
                <span />
              )}

              <button
                type="button"
                onClick={handleNext}
                disabled={selectedOption === undefined}
                className={`flex items-center gap-2 rounded-lg px-6 py-2.5 font-display text-sm font-semibold uppercase tracking-wide-display transition-all duration-200 ${
                  selectedOption !== undefined
                    ? 'bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-lg shadow-gold-500/20'
                    : 'cursor-not-allowed bg-navy-700 text-slate-500'
                }`}
              >
                {isLast ? t.quiz.navigation.seeResults : t.quiz.navigation.next}
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
