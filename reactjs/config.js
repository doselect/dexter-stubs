// Try not to change this configuration!!

SystemJS.config({
        baseURL:'https://unpkg.com/',
        defaultExtension: true,
        meta: {
            './*.jsx': {
                'babelOptions': {
                    es2015: true,
                    react: true
                }
            }
        },
        map: {
            'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
            'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
            'react': 'react@15.6.2/dist/react.min.js',
            'react-dom': 'react-dom@15.6.2/dist/react-dom.min.js'
        },
        transpiler: 'plugin-babel'
    });

SystemJS.import('./scripts/app.jsx');