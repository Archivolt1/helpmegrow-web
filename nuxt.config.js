const fs = require('fs');
const path = require('path');
const nodeExternals = require("webpack-node-externals");

let httpEndpointAddress;
if (process.env.NODE_ENV !== 'production') {
    httpEndpointAddress = "http://localhost:4001";
} else {
    httpEndpointAddress = "http://localhost:4001";
}

module.exports = {
    server: {
        port: 3000, // default: 3000
        host: 'localhost', // default: localhost, change to your local IP for remote device testing.
        /*https: {
            key: fs.readFileSync(path.resolve(__dirname, 'dev-key.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, 'dev-certificate.pem'))
        }*/
    },
    mode: "spa",
    generate: {
        fallback: true
    },
    modules: [
        "@nuxtjs/apollo"
    ],
    pwa: {
        manifest: {
            name: 'Help Me Grow',
            lang: 'en-US',
            display: 'standalone',
            categories: ["utilities"],
            description: "Next-gen gardening diary.",
            orientation: 'portrait-primary',
            scope: 'https://www.helpmegrow.com',
            start_url: 'https://www.helpmegrow.com'
        },
        meta: {
            mobileApp: true,
            name: "Help Me Grow",
            author: "Help Me Grow LLC",
            description: "Next-gen gardening diary.",
        }
    },
    /*
    ** Load Vuetify & vuex-persistedstate into the app
    */
    plugins: [
        '@plugins/vuetify'
    ],
    /*
    ** Load Vuetify CSS globally
    */
    css: [
        "~/assets/app.styl",
        "~/assets/main.css"
    ],
    apollo: {
        tokenName: "helpmegrow-apollo-token", // optional, default: apollo-token
        tokenExpires: 10, // optional, default: 7
        includeNodeModules: false, // optional, default: false (this includes graphql-tag for node_modules folder)
        authenticationType: "Bearer", // optional, default: 'Bearer'
        // required
        clientConfigs: {
            default: {
                // required
                apollo: {
                    defaultOptions: {
                        query: {
                            fetchPolicy: "no-cache"
                        }
                    }
                },
                httpEndpoint: httpEndpointAddress,
                httpLinkOptions: {
                    credentials: "same-origin"
                },
                // You can use `wss` for secure connection (recommended in production)
                // Use `null` to disable subscriptions
                //wsEndpoint: "ws://localhost:4000", // optional
                //wssEndpoint: "wss://localhost:4000", // optional

                // LocalStorage token
                tokenName: "helpmegrow-apollo-token", // optional
                // Enable Automatic Query persisting with Apollo Engine
                persisting: true, // Optional
                // Use websockets for everything (no HTTP)
                // You need to pass a `wsEndpoint` for this to work
                websocketsOnly: false // Optional
            },
            test: {
                httpEndpoint: "http://localhost:4001",
                //wsEndpoint: "http://localhost:4000",
                tokenName: "helpmegrow-apollo-token-test"
            }
        }
    },
    /*
    ** Headers of the page
    */
    head: {
        titleTemplate: "%s - Help Me Grow",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "Next-gen gardening diary." },
            { hid: "og:title", property: "og:title", content: "Help Me Grow" },
            {
                hid: "og:description",
                property: "og:description",
                content: "Next-gen gardening diary."
            },
            { hid: "og:image", property: "og:image", content: "https://www.helpmegrow.com/logo.jpg" }
        ],
        script: [
            { src: "https://polyfill.io/v3/polyfill.min.js?flags=gated&rum=true&features=es6%2Cdefault%2Ces5%2Ces2017%2Ces2016" }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                rel: "stylesheet",
                type: "text/css",
                href: "https://rsms.me/inter/inter.css"
            },
            {
                rel: "stylesheet",
                type: "text/css",
                href: "https://fonts.googleapis.com/icon?family=Material+Icons"
            }
        ]
    },
    /*
    ** Customize the progress bar color
    */
    loading: { color: "#4CAF50" },
    /*
    ** Build configuration
    */
    build: {
        transpile: [/^vuetify/],
        extractCSS: process.env.NODE_ENV === "production",
        postcss:
            {
                preset: {
                    autoprefixer: {
                        grid: true
                    }
                }
            },
        /*
        ** Vuetify into vendor.bundle.js
        */
        extend(config, { isServer }) {
            if (isServer) {
                config.externals = [
                    nodeExternals({
                        whitelist: [/^vuetify/]
                    })
                ];
            }
        }
    }
};
