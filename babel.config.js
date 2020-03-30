module.exports = {
    "env": {
        "development": {
            "presets": [
                ["@babel/preset-env", {
                    "useBuiltIns": "usage",
                    "corejs": 3,
                    "modules": false
                }]
            ]
        },
        "production": {
            "presets": [
                ["@babel/preset-env", {
                    "useBuiltIns": "usage",
                    "corejs": 3,
                    "modules": false
                }]
            ]
        }
    }
};