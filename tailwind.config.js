module.exports = {
    purge: {
        mode: "all",
        enabled: true,
        content: [
            "./src/*.js",
            "./src/*.jsx",
            "./src/**/*.js",
            "./src/**/*.jsx",
            "./src/**/**/*.js",
            "./src/**/**/*.jsx"
        ]
    },
    theme: {
        extend: {
            height: {
                "68": "20rem",
                "72": "24rem",
                "76": "28rem",
                "80": "32rem",
                "84": "36rem",
                "88": "40rem"
            },

            width: {
                "68": "20rem",
                "72": "24rem",
                "76": "28rem",
                "80": "32rem",
                "84": "36rem",
                "88": "40rem"
            }
        }
    },
    variants: {},
    plugins: []
};
