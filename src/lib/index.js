import * as foo from './foo';
export * from './foo';

if (window.Cypress) {
  window.foo = foo;
}