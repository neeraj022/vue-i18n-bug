export const state = () => ([
  {
    key: 1,
    name: 'home',
    active: false,
    link: '/',
    icon: '&#xE88A'
  },
  {
    key: 2,
    name: 'study',
    active: false,
    link: '/study',
    icon: '&#xE31F;'
  }
  // {
  //   key: 3,
  //   name: 'buddy',
  //   active: false,
  //   link: '/buddy',
  //   icon: '&#xE31F;'
  // },
  // {
  //   key: 4,
  //   name: 'games',
  //   active: false,
  //   link: '/games',
  //   icon: '&#xE31F;'
  // }
])

export const mutations = {
  SET_HEADER_ACTIVE: function (state, key) {
    state.forEach(item => {
      if (item.key === key) {
        item.active = true
      } else {
        item.active = false
      }
    })
  }
}

export const actions = {
  navChange ({redirect, commit}, key) {
    commit('SET_HEADER_ACTIVE', key)
  }
}
