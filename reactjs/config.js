/*global System */
'use strict';

console.clear();

var INDEX = './scripts/index.jsx';

System.config({
    baseURL: 'https://npm.jspm.io/',
    defaultJSExtensions: false, 
    // CDN resolves
    paths: { 
        'npm:*': 'https://npm.jspm.io/*',
        'unpkg:*': 'https://unpkg.com/*',
        'jsdelivr:*': 'https://cdn.jsdelivr.net/g/*',
        'jsdelivr-npm:*': 'https://cdn.jsdelivr.net/npm/*'
    },
    meta: {
        '*.css': { loader: 'css' }
    },
    map: {
        // The Application path
        'index': INDEX + '?' + Date.now(),
        // SystemJS plugins
        'plugin-babel': 'unpkg:systemjs-plugin-babel@latest/plugin-babel.js',
        'systemjs-babel-build': 'unpkg:systemjs-plugin-babel@latest/systemjs-babel-browser.js',
        // Application modules
	    /* React 15 modules */
        //'react': 'jsdelivr:react@15/react.js',
        //'react-dom': 'jsdelivr:react@15/react-dom.js',
	    /* React 16  */
        'react': 'unpkg:react@16.9.0/umd/react.development.js',
        'react-dom': 'unpkg:react-dom@16.9.0/umd/react-dom.development.js',
        'css': 'jsdelivr-npm:systemjs-plugin-css@0.1.37/css.js',
    },
    packages: {
        'https://npm.jspm.io/' : { defaultExtension: false },
        'https://unpkg.com/' : { defaultExtension: false }
    },
    transpiler: 'plugin-babel', 
    babelOptions: {
        sourceMaps: false,
        stage0: true,
        react: true
    }
});

// Run the application
System.import('index');
