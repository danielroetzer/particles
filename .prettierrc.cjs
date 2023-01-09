module.exports = {
    singleQuote: true,
    arrowParens: 'avoid',

    // https://github.com/withastro/prettier-plugin-astro#pnpm-support-1
    plugins: [require.resolve('prettier-plugin-astro')],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
};
