'use strict'
exports.config = {
    paths: {
        watched: ['public'],
        public: 'public'
    },
    files: {
        javascripts: {
            joinTo: {
                'js/vendor.min.js': /^node_modules/,
                'js/app.min.js': /^public\/js/
            },
            order: {
                before: [
                    'public/js/app.js',
                    'public/js/**/*.md.js',
                    'public/js/component/**/*.js'
                ]
            }
        },
        stylesheets: {
            joinTo: {
                'css/vendor.min.css': [],
                'css/app.min.css': /^public\/scss/
            }
        }
    },
    npm: {
        enabled: true,
        compilers: ['angular', 'angular-ui-router']
    },
    conventions: {
        assets: /static[\\/]/,
        ignored: ['public/**/*.min.js', 'public/css/*']
    },
    modules: {
        wrapper: false,
        definition: 'commonjs'
    },
    plugins: {
        autoReload: {
            enabled: {
                css: 'on',
                js: 'on',
                json: 'on'
            }
        },
        babel: {
            ignore: [
                /^(node_modules)/
            ]
        }
    },
    overrides: {
        production: {
            sourceMaps: false,
            plugins: {
                autoReload: {
                    enabled: false
                }
            }
        }
    },
    server: {
        path: 'server.js',
        port: 9070,
        run: true
    }
}
