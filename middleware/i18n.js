export default function ({ isHMR, app, store, route, params, error, redirect }) {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return
  // Get locale from params
  const locale = params.lang || 'en'
  /* if (store.state.locale.locales.indexOf(locale) === -1) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  } */
  let found = false
  for (let i = 0; i < store.state.locale.locales.length; i++) {
    if (locale === store.state.locale.locales[i].code) {
      found = true
      break
    }
  }
  if (!found) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }
  // Set locale
  store.commit('locale/SET_LANG', locale)
  app.i18n.locale = store.state.locale.selectedLocale
  // If route is /en/... -> redirect to /...
  if (locale === 'en' && route.fullPath.indexOf('/en') === 0) {
    return redirect(route.fullPath.replace(/^\/en/, ''))
  }
}
