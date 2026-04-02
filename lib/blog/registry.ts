import type { ArticleMeta } from './types'

import nis2Scadenze from './articles/2026-03-nis2-scadenze'
import postQuantumMinacce from './articles/2026-03-post-quantum-minacce'
import analisiSolarwinds from './articles/2026-03-analisi-solarwinds'
import supplyChainAttacks from './articles/2026-03-supply-chain-attacks'
import analisiColonialPipeline from './articles/2026-03-analisi-colonial-pipeline'
import geoOperationEpicFury from './articles/2026-04-01-geo-operation-epic-fury'
import threatTempestaZeroDaySupplyChain from './articles/2026-04-01-threat-tempesta-zero-day-supply-chain'
import geoSandwormEuropaGrid from './articles/2026-04-02-geo-sandworm-europa-grid'

const ALL_ARTICLES: ArticleMeta[] = [
  analisiSolarwinds,
  analisiColonialPipeline,
  nis2Scadenze,
  postQuantumMinacce,
  supplyChainAttacks,
  geoOperationEpicFury,
  threatTempestaZeroDaySupplyChain,
  geoSandwormEuropaGrid,
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
