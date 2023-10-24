function getSubDomain() {
  const subdomain = window.location.hostname.split('.').slice(0, -2).join('.');
  return subdomain? subdomain+'.':''

}


export const environment = {
  production: false,
  debugger: true,
  ROBOTS: 'all',
  API_NEWS: 'https://www.mocky.io/v2/5dced45b3000007300931ce8',
  API_PUB: `//${getSubDomain}orcid.org/v3.0`,
  API_WEB: `//${getSubDomain}orcid.org/`,
  BASE_URL: '',
  INFO_SITE: 'https://info.orcid.org/',
  GOOGLE_ANALYTICS_TESTING_MODE: true,
  GOOGLE_TAG_MANAGER: 'GTM-0000000',
  GOOGLE_RECAPTCHA: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI',
  HELP_HERO_ID: 'oYFQMrzFHA',
  ZENDESK: null,
  SHOW_TEST_WARNING_BANNER: true,
  CAN_DISABLE_TEST_WARNING_BANNER: true,
  INSTITUTIONAL_AUTOCOMPLETE_DISPLAY_AMOUNT: 50,
  VERBOSE_SNACKBAR_ERRORS_REPORTS: true,
  LANGUAGE_MENU_OPTIONS: {
    ar: 'العربية',
    cs: 'Čeština',
    de: 'Deutsch',
    en: 'English',
    es: 'Español',
    fr: 'Français',
    it: 'Italiano',
    ja: '日本語',
    ko: '한국어',
    pl: 'Polski',
    pt: 'Português',
    ru: 'Русский',
    tr: 'Türkçe',
    'zh-CN': '简体中文',
    'zh-TW': '繁體中文',
    xx: '** xx',
    src: '** source',
    lr: '** lr',
    rl: '** rl',
    uk: '** Ukrainian',
    ca: '** Catalan',
  },
  proxyMode: true,
}
