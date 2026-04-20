import type { ArticleMeta } from './types'

import nis2Scadenze from './articles/2026-03-nis2-scadenze'
import postQuantumMinacce from './articles/2026-03-post-quantum-minacce'
import analisiSolarwinds from './articles/2026-03-analisi-solarwinds'
import supplyChainAttacks from './articles/2026-03-supply-chain-attacks'
import analisiColonialPipeline from './articles/2026-03-analisi-colonial-pipeline'
import geoOperationEpicFury from './articles/2026-04-01-geo-operation-epic-fury'
import threatTempestaZeroDaySupplyChain from './articles/2026-04-01-threat-tempesta-zero-day-supply-chain'
import geoSandwormEuropaGrid from './articles/2026-04-02-geo-sandworm-europa-grid'
import threatAttaccoUffizi from './articles/2026-04-03-threat-attacco-uffizi'
import geoEuropaSottoAssedioCyber from './articles/2026-04-03-geo-europa-sotto-assedio-cyber'
import geoOperationTruechaosCina from './articles/2026-04-04-geo-operation-truechaos-cina'
import threatLinkedinBrowsergate from './articles/2026-04-04-threat-linkedin-browsergate-sorveglianza'
import threatMedusaZeroDay from './articles/2026-04-07-threat-medusa-ransomware-zero-day'
import threatBluehammerFortinet from './articles/2026-04-07-threat-bluehammer-fortinet-zero-day'
import geoIranPasswordSprayingMissili from './articles/2026-04-07-geo-iran-password-spraying-missili'
import geoSaltTyphoonEuropaTelecom from './articles/2026-04-08-geo-salt-typhoon-europa-telecom'
import threatStorm1175MedusaZeroDay from './articles/2026-04-08-threat-storm1175-medusa-ransomware-zero-day'
import geoIranPlcInfrastruttureCriticheUsa from './articles/2026-04-09-geo-iran-plc-infrastrutture-critiche-usa'
import deepGtigZeroDayEnterprise from './articles/2026-04-09-deep-gtig-zero-day-enterprise-campo-battaglia'
import caseStrykerHandalaIntune from './articles/2026-04-09-case-stryker-handala-intune-arma'
import geoApt28PrismexNatoUcraina from './articles/2026-04-10-geo-apt28-prismex-nato-ucraina'
import deepEqualizeItaliaBancheDati from './articles/2026-04-10-deep-equalize-italia-banche-dati'
import threatSmartSliderWordpress from './articles/2026-04-11-threat-smart-slider-wordpress-supply-chain'
import threatMarimoRceExploit9Ore from './articles/2026-04-11-threat-marimo-rce-exploit-9-ore'
import geoIranGolfoPostKhamenei from './articles/2026-04-13-geo-iran-golfo-escalation-post-khamenei'
import threatForticlientEmsCve35616 from './articles/2026-04-13-threat-forticlient-ems-cve-35616'
import geoHormuzGpsSpoofing from './articles/2026-04-14-geo-hormuz-gps-spoofing-ais-jamming'
import caseAdobeMrRaccoon from './articles/2026-04-14-case-adobe-breach-mr-raccoon-bpo'
import caseRockstarShinyHunters from './articles/2026-04-15-case-rockstar-shinyhunters-snowflake-anodot'
import caseDriftProtocolDprk from './articles/2026-04-16-case-drift-protocol-dprk-durable-nonces'
import threatApt28FrostarmadaDns from './articles/2026-04-17-threat-apt28-frostarmada-dns-hijacking-router'
import deepStrapiNpmSupplyChainRedTeam from './articles/2026-04-17-deep-strapi-npm-supply-chain-red-team'
import caseBitcoinDepotHotWallet from './articles/2026-04-17-case-bitcoin-depot-hot-wallet-settlement'

const ALL_ARTICLES: ArticleMeta[] = [
  analisiSolarwinds,
  analisiColonialPipeline,
  nis2Scadenze,
  postQuantumMinacce,
  supplyChainAttacks,
  geoOperationEpicFury,
  threatTempestaZeroDaySupplyChain,
  geoSandwormEuropaGrid,
  threatAttaccoUffizi,
  geoEuropaSottoAssedioCyber,
  geoOperationTruechaosCina,
  threatLinkedinBrowsergate,
  threatMedusaZeroDay,
  threatBluehammerFortinet,
  geoIranPasswordSprayingMissili,
  geoSaltTyphoonEuropaTelecom,
  threatStorm1175MedusaZeroDay,
  geoIranPlcInfrastruttureCriticheUsa,
  deepGtigZeroDayEnterprise,
  caseStrykerHandalaIntune,
  geoApt28PrismexNatoUcraina,
  deepEqualizeItaliaBancheDati,
  threatSmartSliderWordpress,
  threatMarimoRceExploit9Ore,
  geoIranGolfoPostKhamenei,
  threatForticlientEmsCve35616,
  geoHormuzGpsSpoofing,
  caseAdobeMrRaccoon,
  caseRockstarShinyHunters,
  caseDriftProtocolDprk,
  threatApt28FrostarmadaDns,
  deepStrapiNpmSupplyChainRedTeam,
  caseBitcoinDepotHotWallet,
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
