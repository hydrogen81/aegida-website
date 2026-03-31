import type { ArticleMeta } from './types'

import nis2Scadenze from './articles/2026-03-nis2-scadenze'
import postQuantumMinacce from './articles/2026-03-post-quantum-minacce'
import analisiSolarwinds from './articles/2026-03-analisi-solarwinds'
import supplyChainAttacks from './articles/2026-03-supply-chain-attacks'
import analisiColonialPipeline from './articles/2026-03-analisi-colonial-pipeline'

const ALL_ARTICLES: ArticleMeta[] = [
  analisiSolarwinds,
  analisiColonialPipeline,
  nis2Scadenze,
  postQuantumMinacce,
  supplyChainAttacks,
].sort((a, b) => b.date.localeCompare(a.date))

export function getAllArticles(): ArticleMeta[] {
  return ALL_ARTICLES
}

export function getArticleBySlug(slug: string): ArticleMeta | undefined {
  return ALL_ARTICLES.find((a) => a.slug === slug)
}

export function getArticlesByCategory(category: string): ArticleMeta[] {
  return ALL_ARTICLES.filter((a) => a.category === category)
}
