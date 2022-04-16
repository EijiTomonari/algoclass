
import type { I18n } from '@lingui/core'
import { en, es,pt } from 'make-plural/plurals'

export function initTranslation(i18n: I18n): void {
  i18n.loadLocaleData({
    pt: { plurals: pt },
    en: { plurals: en },
    es: { plurals: es },
    pseudo: { plurals: en }
  })
}