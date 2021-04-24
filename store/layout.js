const layoutModule = {
  state: () => ({
    isSidebarOpen: false
  }),

  mutations: {
    TOGGLE_SIDEBAR: (state, status) => {
      state.isSidebarOpen = status !== undefined ? status : !state.isSidebarOpen
    }
  }
}

export default layoutModule
