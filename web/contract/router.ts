import type { InferContractRouterInputs } from '@orpc/contract'
import { bindPartnerStackContract, invoicesContract } from './console/billing'
import {
  exploreAppDetailContract,
  exploreAppsContract,
  exploreBannersContract,
  exploreInstalledAppAccessModeContract,
  exploreInstalledAppMetaContract,
  exploreInstalledAppParametersContract,
  exploreInstalledAppPinContract,
  exploreInstalledAppsContract,
  exploreInstalledAppUninstallContract,
} from './console/explore'
import { systemFeaturesContract } from './console/system'
import { trialAppDatasetsContract, trialAppInfoContract, trialAppParametersContract, trialAppWorkflowsContract } from './console/try-app'
import { collectionPluginsContract, collectionsContract, searchAdvancedContract } from './marketplace'

export const marketplaceRouterContract = {
  collections: collectionsContract,
  collectionPlugins: collectionPluginsContract,
  searchAdvanced: searchAdvancedContract,
}

export type MarketPlaceInputs = InferContractRouterInputs<typeof marketplaceRouterContract>

export const consoleRouterContract = {
  systemFeatures: systemFeaturesContract,
  explore: {
    apps: exploreAppsContract,
    appDetail: exploreAppDetailContract,
    installedApps: exploreInstalledAppsContract,
    uninstallInstalledApp: exploreInstalledAppUninstallContract,
    updateInstalledApp: exploreInstalledAppPinContract,
    appAccessMode: exploreInstalledAppAccessModeContract,
    installedAppParameters: exploreInstalledAppParametersContract,
    installedAppMeta: exploreInstalledAppMetaContract,
    banners: exploreBannersContract,
  },
  trialApps: {
    info: trialAppInfoContract,
    datasets: trialAppDatasetsContract,
    parameters: trialAppParametersContract,
    workflows: trialAppWorkflowsContract,
  },
  billing: {
    invoices: invoicesContract,
    bindPartnerStack: bindPartnerStackContract,
  },
}

export type ConsoleInputs = InferContractRouterInputs<typeof consoleRouterContract>
