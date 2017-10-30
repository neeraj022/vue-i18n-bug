export const state = () => ({
  locales: [{code: 'en',
    name: 'English'},
  {
    code: 'kk',
    name: 'Kazakh'
  },
  {
    code: 'ru',
    name: 'Russian'
  }],
  selectedLocale: 'en',
  now: new Date().getTime()
})

export const mutations = {
  SET_LANG (state, locale) {
    // console.log('set lang called', locale)
    let found = false
    for (let i = 0; i < state.locales.length; i++) {
      if (locale === state.locales[i].code) {
        found = true
        break
      }
    }
    if (found) {
      state.selectedLocale = locale
    }
  },
  UPDATE_TIME (state) {
    state.now = new Date().getTime()
  }
}

export const actions = {
  setlanguage ({redirect, commit}, {locale, context}) {
    commit('SET_LANG', locale)
    // return currentRouteSplit.splice(currentRouteSplit.length-1, 1)
    context.$router.replace({ path: locale })
  },
  start ({ commit }) {
    setInterval(() => {
      commit('UPDATE_TIME')
    }, 1000 * 30)
  }
}
