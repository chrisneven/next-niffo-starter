module.exports = {
    '!(src/generated/**/*)*.{js,jsx,ts,tsx}': ['eslint --cache --fix --max-warnings=0'],
    '*.{ts,tsx}': () => 'tsc -p tsconfig.json --noEmit',
    '*.{js,jsx,ts,tsx,md,html,graphql,json}': ['prettier --write'],
}
