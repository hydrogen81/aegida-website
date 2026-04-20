import jsPDF from 'jspdf'
import type { Translations } from '@/lib/i18n/types'

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface AreaResult {
  name: string
  score: number
  maxScore: number
  percentage: number
  level: 'green' | 'yellow' | 'red'
  label: string
}

interface QuizResultData {
  totalScore: number
  maxScore: number
  percentage: number
  overallLevel: string
  overallDescription: string
  areas: AreaResult[]
  classification: string
}

interface Recommendation {
  text: string
  product: string
}

/* ------------------------------------------------------------------ */
/*  Colors                                                             */
/* ------------------------------------------------------------------ */

const NAVY = { r: 10, g: 14, b: 26 }          // #0a0e1a
const NAVY_LIGHT = { r: 20, g: 28, b: 50 }    // section bg
const GOLD = { r: 184, g: 150, b: 12 }        // #b8960c
const GOLD_LIGHT = { r: 212, g: 173, b: 14 }  // #d4ad0e
const WHITE = { r: 255, g: 255, b: 255 }
const SLATE_200 = { r: 226, g: 232, b: 240 }
const SLATE_400 = { r: 148, g: 163, b: 184 }
const GREEN = { r: 34, g: 197, b: 94 }        // #22c55e
const YELLOW = { r: 212, g: 173, b: 14 }      // #d4ad0e
const RED = { r: 220, g: 38, b: 38 }          // #dc2626

function colorForLevel(level: 'green' | 'yellow' | 'red') {
  if (level === 'green') return GREEN
  if (level === 'yellow') return YELLOW
  return RED
}

function colorForPercentage(pct: number) {
  if (pct > 75) return GREEN
  if (pct >= 50) return YELLOW
  return RED
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function setColor(doc: jsPDF, c: { r: number; g: number; b: number }) {
  doc.setTextColor(c.r, c.g, c.b)
}

function setFillColor(doc: jsPDF, c: { r: number; g: number; b: number }) {
  doc.setFillColor(c.r, c.g, c.b)
}

function setDrawColor(doc: jsPDF, c: { r: number; g: number; b: number }) {
  doc.setDrawColor(c.r, c.g, c.b)
}

/** Wrap long text and return number of lines written */
function writeWrapped(
  doc: jsPDF,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
): number {
  const lines = doc.splitTextToSize(text, maxWidth)
  doc.text(lines, x, y)
  return lines.length * lineHeight
}

/* ------------------------------------------------------------------ */
/*  Main generator                                                     */
/* ------------------------------------------------------------------ */

export function generateReportPdf(
  result: QuizResultData,
  weakAreas: (AreaResult & { originalIndex: number })[],
  recommendations: Recommendation[],
  t: Translations,
  locale: string
): void {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const pageW = 210
  const pageH = 297
  const marginL = 20
  const marginR = 20
  const contentW = pageW - marginL - marginR
  let y = 0

  // Format date based on locale
  const now = new Date()
  const dateStr = now.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  /* ================================================================ */
  /*  HEADER BAR                                                       */
  /* ================================================================ */

  // Dark header background
  setFillColor(doc, NAVY)
  doc.rect(0, 0, pageW, 48, 'F')

  // Gold accent line
  setFillColor(doc, GOLD)
  doc.rect(0, 48, pageW, 1.5, 'F')

  // AEGIDA brand
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(24)
  setColor(doc, GOLD)
  doc.text('AEGIDA', marginL, 20)

  // Subtitle
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  setColor(doc, SLATE_400)
  doc.text('Security Assessment Platform', marginL, 27)

  // Title
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(16)
  setColor(doc, WHITE)
  doc.text(t.quiz.results.pdfTitle, marginL, 40)

  // Right side — date
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  setColor(doc, SLATE_400)
  doc.text(
    `${t.quiz.results.pdfDate}: ${dateStr}`,
    pageW - marginR,
    20,
    { align: 'right' }
  )

  y = 58

  /* ================================================================ */
  /*  CLASSIFICATION                                                   */
  /* ================================================================ */

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  setColor(doc, SLATE_400)
  doc.text(
    `${t.quiz.results.pdfClassification}: ${result.classification}`,
    marginL,
    y
  )
  y += 10

  /* ================================================================ */
  /*  OVERALL SCORE SECTION                                            */
  /* ================================================================ */

  // Section header
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  setColor(doc, GOLD)
  doc.text(t.quiz.results.pdfOverallScore.toUpperCase(), marginL, y)
  y += 2

  // Gold underline
  setFillColor(doc, GOLD)
  doc.rect(marginL, y, 40, 0.5, 'F')
  y += 8

  // Score box
  const scoreBoxH = 38
  setFillColor(doc, NAVY_LIGHT)
  doc.roundedRect(marginL, y, contentW, scoreBoxH, 3, 3, 'F')

  // Big percentage
  const scorePctColor = colorForPercentage(result.percentage)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(36)
  setColor(doc, scorePctColor)
  doc.text(`${result.percentage}%`, marginL + 14, y + 22)

  // Level name
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(14)
  setColor(doc, WHITE)
  doc.text(result.overallLevel, marginL + 55, y + 14)

  // Level description
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  setColor(doc, SLATE_200)
  const descLines = doc.splitTextToSize(result.overallDescription, contentW - 65)
  doc.text(descLines, marginL + 55, y + 22)

  // Score fraction
  doc.setFontSize(8)
  setColor(doc, SLATE_400)
  doc.text(
    `${t.quiz.results.scoreLabel}: ${result.totalScore}/${result.maxScore}`,
    marginL + 55,
    y + 34
  )

  y += scoreBoxH + 12

  /* ================================================================ */
  /*  AREA BREAKDOWN                                                   */
  /* ================================================================ */

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(11)
  setColor(doc, GOLD)
  doc.text(t.quiz.results.pdfAreaBreakdown.toUpperCase(), marginL, y)
  y += 2
  setFillColor(doc, GOLD)
  doc.rect(marginL, y, 40, 0.5, 'F')
  y += 8

  result.areas.forEach((area) => {
    const areaColor = colorForLevel(area.level)
    const barH = 5
    const rowH = 28

    // Check for page break
    if (y + rowH > pageH - 30) {
      doc.addPage()
      y = 20
    }

    // Area box background
    setFillColor(doc, NAVY_LIGHT)
    doc.roundedRect(marginL, y, contentW, rowH, 2, 2, 'F')

    // Area name
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    setColor(doc, WHITE)
    doc.text(area.name, marginL + 6, y + 8)

    // Score fraction (right aligned)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    setColor(doc, SLATE_400)
    doc.text(
      `${area.score}/${area.maxScore}`,
      marginL + contentW - 6,
      y + 8,
      { align: 'right' }
    )

    // Progress bar background
    const barY = y + 13
    const barW = contentW - 12
    setFillColor(doc, { r: 30, g: 35, b: 55 })
    doc.roundedRect(marginL + 6, barY, barW, barH, 2, 2, 'F')

    // Progress bar fill
    const fillW = Math.max(2, (area.percentage / 100) * barW)
    setFillColor(doc, areaColor)
    doc.roundedRect(marginL + 6, barY, fillW, barH, 2, 2, 'F')

    // Level label and percentage
    doc.setFontSize(8)
    setColor(doc, areaColor)
    doc.text(area.label, marginL + 6, y + 25)
    doc.text(`${area.percentage}%`, marginL + contentW - 6, y + 25, {
      align: 'right',
    })

    y += rowH + 4
  })

  y += 4

  /* ================================================================ */
  /*  RECOMMENDATIONS                                                  */
  /* ================================================================ */

  if (weakAreas.length > 0) {
    // Check for page break
    if (y + 20 > pageH - 30) {
      doc.addPage()
      y = 20
    }

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    setColor(doc, GOLD)
    doc.text(t.quiz.results.pdfRecommendations.toUpperCase(), marginL, y)
    y += 2
    setFillColor(doc, GOLD)
    doc.rect(marginL, y, 40, 0.5, 'F')
    y += 8

    weakAreas.forEach((area) => {
      const rec = recommendations[area.originalIndex]
      if (!rec) return

      // Estimate height needed
      const textLines = doc.splitTextToSize(rec.text, contentW - 22)
      const estimatedH = 18 + textLines.length * 4.5

      if (y + estimatedH > pageH - 30) {
        doc.addPage()
        y = 20
      }

      // Recommendation box
      setFillColor(doc, NAVY_LIGHT)
      doc.roundedRect(marginL, y, contentW, estimatedH, 2, 2, 'F')

      // Gold left accent bar
      setFillColor(doc, GOLD)
      doc.rect(marginL, y, 2.5, estimatedH, 'F')

      // Area name
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(9)
      setColor(doc, WHITE)
      doc.text(area.name, marginL + 10, y + 7)

      // Recommendation text
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(8.5)
      setColor(doc, SLATE_200)
      doc.text(textLines, marginL + 10, y + 14)

      // Product suggestion
      const productY = y + 14 + textLines.length * 4.5
      doc.setFontSize(8)
      setColor(doc, GOLD_LIGHT)
      doc.text(
        `${t.quiz.results.recommendedSolution} ${rec.product}`,
        marginL + 10,
        productY
      )

      y += estimatedH + 4
    })
  }

  /* ================================================================ */
  /*  FOOTER                                                           */
  /* ================================================================ */

  const addFooter = (pageNum: number) => {
    const totalPages = doc.getNumberOfPages()

    // Footer separator
    setFillColor(doc, GOLD)
    doc.rect(marginL, pageH - 28, contentW, 0.5, 'F')

    // Generated by line
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(7)
    setColor(doc, SLATE_400)
    doc.text(t.quiz.results.pdfGenerated, marginL, pageH - 22)
    doc.text('H4RESEARCH SRL', marginL, pageH - 17)

    // Disclaimer
    doc.setFontSize(6.5)
    setColor(doc, { r: 100, g: 110, b: 130 })
    const disclaimerLines = doc.splitTextToSize(
      t.quiz.results.pdfDisclaimer,
      contentW - 30
    )
    doc.text(disclaimerLines, marginL, pageH - 11)

    // Page number
    doc.setFontSize(7)
    setColor(doc, SLATE_400)
    doc.text(
      `${pageNum} / ${totalPages}`,
      pageW - marginR,
      pageH - 22,
      { align: 'right' }
    )
  }

  // Apply footer to all pages
  const totalPages = doc.getNumberOfPages()
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i)
    addFooter(i)
  }

  /* ================================================================ */
  /*  SAVE                                                             */
  /* ================================================================ */

  doc.save(`AEGIDA_Self-Assessment_Report_${now.toISOString().slice(0, 10)}.pdf`)
}
