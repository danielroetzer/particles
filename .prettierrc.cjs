module.exports = {
    singleQuote: true,
    arrowParens: 'avoid',

    plugins: [
        require.resolve('prettier-plugin-astro'),
        require.resolve('prettier-plugin-svelte'),
    ],
    overrides: [
        {
            // https://github.com/withastro/prettier-plugin-astro#pnpm-support-1
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
};
