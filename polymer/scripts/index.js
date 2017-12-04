HTMLImports.whenReady(() => {
  class XFoo extends Polymer.Element {
    static get is() { return 'x-foo'; }

    static get properties() {
      return {
        foo: {
          type: String,
          value: 'hello world!'
        }
      };
    }
  }
  customElements.define(XFoo.is, XFoo);
});
