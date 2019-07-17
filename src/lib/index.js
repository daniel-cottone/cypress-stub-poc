import * as fooApi from './foo'

// in order to stub methods on an object
// need a plain object reference passed around
// if we import / export then the bundler changes references
// and one import is different from another import
// and we cannot overwrite a method in the same object

// thus we can create an "intermediary" API object
// that calls into true imported functions
// and export this object - then all references will be the same
// and the Cypress tests can stub / spy on methods in the "api"
const api = {
  foo () {
    return fooApi.foo()
  }
}

if (window.Cypress) {
  window.foo = api
}

export default api
