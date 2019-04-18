import { beforeRegistration } from './hooks/beforeRegistration'
import { VueStorefrontModule, VueStorefrontModuleConfig } from '@vue-storefront/core/lib/module'

export const KEY = 'vsf-facebook-sdk'

const moduleConfig: VueStorefrontModuleConfig = {
  key: KEY,
  beforeRegistration
}

export const VsfFacebookJsSdk = new VueStorefrontModule(moduleConfig)
