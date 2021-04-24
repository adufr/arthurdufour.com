import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted)

export default ({ app }) => {
  // Success toast
  Vue.toasted.register('success', (payload) => {
    return payload.message
      ? payload.message
      : 'Success'
  }, {
    type: 'success',
    duration: '5000'
  })

  // Error toast
  Vue.toasted.register('error', (payload) => {
    return payload.message
      ? payload.message
      : 'Error'
  }, {
    type: 'error',
    duration: '5000'
  })
}
