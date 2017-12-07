(function (global) {
  System.config({
    transpiler: 'ts',
    typescriptOptions: {},
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    paths: {
      'npm:': 'https://unpkg.com/'
    },
    map: {
      'app': 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core@4.4.6/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common@4.4.6/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler@4.4.6/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser@4.4.6/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@4.4.6/bundles/platform-browser-dynamic.umd.js',

      // other libraries
      'rxjs': 'npm:rxjs@5.0.1',
      'ts': 'npm:plugin-typescript@5.2.7/lib/plugin.js',
      'typescript': 'npm:typescript@2.3.2/lib/typescript.js',

    },
    packages: {
      app: {
        main: './main.ts',
        defaultExtension: 'ts',
        meta: {
          './*.ts': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
