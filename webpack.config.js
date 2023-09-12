module.exports = {
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: {
                    compilerOptions: {
                        module: "esnext"
                    },
                },
            }
        ]
    },
}