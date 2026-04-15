export type FrontendLogo = {
  name: string
  popularity: number
  color: string | null
  isSquare: boolean
  default?: boolean
}

export const defaultLogoNames = [
  'vue',
  'react',
  'angular',
  'svelte',
  'nextjs',
  'nuxt',
  'react-router',
  'vite',
  'webpack',
  'parcel',
  'babel',
  'esbuild',
  'swc',
  'typescript',
  'eslint',
  'prettier',
  'postcss',
  'tailwindcss',
  'sass',
  'less',
  'unocss',
  'nodejs',
  'npm',
  'yarn',
  'pnpm',
  'jest',
  'vitest',
  'playwright',
  'cypress',
  'graphql',
  'axios',
  'express',
  'storybook',
  'jsdom',
  'zod',
]

const defaultLogoNameSet = new Set<string>(defaultLogoNames)

const iconThemeColorOverrides: Record<string, string> = {
  astro: '#d83333',
  'astro-icon': '#d83333',
  atlassian: '#0052cc',
  'aws-appsync': '#b0084d',
  'aws-cloudformation': '#b0084d',
  'aws-cloudsearch': '#4d27a8',
  'aws-cloudwatch': '#b0084d',
  'aws-config': '#b0084d',
  'aws-dynamodb': '#2e27ad',
  'aws-ec2': '#c8511b',
  'aws-iam': '#bd0816',
  'aws-lambda': '#c8511b',
  'aws-redshift': '#4d27a8',
  'aws-s3': '#1b660f',
  'aws-secrets-manager': '#bd0816',
  'aws-sqs': '#b0084d',
  bitcoin: '#f9aa4b',
  brackets: '#29abe2',
  browserstack: '#797979',
  discover: '#f34f26',
  emacs: '#8381c5',
  fly: '#ba7bf0',
  'fly-icon': '#ba7bf0',
  fogbugz: '#ab68fc',
  forest: '#9bcd98',
  gitter: '#fb0766',
  gunicorn: '#959595',
  horizon: '#e7507e',
  hyper: '#ffb300',
  ink: '#db221a',
  ktor: '#00afff',
  lateral: '#0d57d9',
  'lateral-icon': '#0d57d9',
  airbrake: '#ffa500',
  macosx: '#58b0e3',
  manuscript: '#3933ff',
  malinajs: '#008000',
  medusa: '#592ee1',
  messenger: '#0099ff',
  mlab: '#f8c41b',
  'neon-icon': '#62f755',
  neovim: '#16b0ed',
  pinia: '#52ce63',
  producthunt: '#da552f',
  sap: '#00aeef',
  skype: '#0078d4',
  'stability-ai': '#9d39ff',
  'stability-ai-icon': '#9d39ff',
  swc: '#ffa588',
  swift: '#faae42',
  tailwindcss: '#2298bd',
  telegram: '#2aabee',
  upcase: '#487bf6',
  youtrack: '#905cfb',
  youtube: '#ff0000',
  'youtube-icon': '#ff0000',
  zeit: '#ffffff',
  zigbee: '#dc001f',
  'zoom-icon': '#0845bf',
}

const frontendLogosRaw = [
  {
    "name": "chalk",
    "popularity": 1837432374,
    "color": "#ed8a8a",
    "isSquare": false,
    "default": true
  },
  {
    "name": "postcss",
    "popularity": 853536620,
    "color": "#dd3735",
    "isSquare": true,
    "default": true
  },
  {
    "name": "typescript",
    "popularity": 687550149,
    "color": "#3178c6",
    "isSquare": false,
    "default": true
  },
  {
    "name": "typescript-icon",
    "popularity": 687550149,
    "color": "#3178c6",
    "isSquare": true
  },
  {
    "name": "esbuild",
    "popularity": 669839687,
    "color": "#ffcf00",
    "isSquare": true,
    "default": true
  },
  {
    "name": "browserslist",
    "popularity": 619033589,
    "color": "#ffd539",
    "isSquare": true,
    "default": true
  },
  {
    "name": "zod",
    "popularity": 608653475,
    "color": "#274d82",
    "isSquare": true,
    "default": true
  },
  {
    "name": "lodash",
    "popularity": 571037452,
    "color": "#000",
    "isSquare": true,
    "default": true
  },
  {
    "name": "yaml",
    "popularity": 563509192,
    "color": "#fff",
    "isSquare": false,
    "default": true
  },
  {
    "name": "buffer",
    "popularity": 535444841,
    "color": "#26cdd9",
    "isSquare": true,
    "default": true
  },
  {
    "name": "eslint",
    "popularity": 491473739,
    "color": "#8080f2",
    "isSquare": true,
    "default": true
  },
  {
    "name": "react",
    "popularity": 482323620,
    "color": "#00d8ff",
    "isSquare": true,
    "default": true
  },
  {
    "name": "axios",
    "popularity": 417684064,
    "color": "#5a29e4",
    "isSquare": false,
    "default": true
  },
  {
    "name": "doctrine",
    "popularity": 415710453,
    "color": "#fe8439",
    "isSquare": true,
    "default": true
  },
  {
    "name": "express",
    "popularity": 394457847,
    "color": "#222",
    "isSquare": false,
    "default": true
  },
  {
    "name": "fresh",
    "popularity": 372116026,
    "color": "#ffdb1e",
    "isSquare": true,
    "default": true
  },
  {
    "name": "vite",
    "popularity": 371990419,
    "color": "#7e14ff",
    "isSquare": false,
    "default": true
  },
  {
    "name": "vitejs",
    "popularity": 371990419,
    "color": "#41D1FF",
    "isSquare": true,
    "default": true
  },
  {
    "name": "prettier",
    "popularity": 341910221,
    "color": "#d0d4d8",
    "isSquare": true,
    "default": true
  },
  {
    "name": "tailwindcss",
    "popularity": 330927930,
    "color": "#2d3748",
    "isSquare": false,
    "default": true
  },
  {
    "name": "tailwindcss-icon",
    "popularity": 330927930,
    "color": "#2298bd",
    "isSquare": false
  },
  {
    "name": "pnpm",
    "popularity": 270423453,
    "color": "#f9ad00",
    "isSquare": true,
    "default": true
  },
  {
    "name": "jsdom",
    "popularity": 265768996,
    "color": "#dbc01d",
    "isSquare": true,
    "default": true
  },
  {
    "name": "xtend",
    "popularity": 253016540,
    "color": "#d93b26",
    "isSquare": true,
    "default": true
  },
  {
    "name": "autoprefixer",
    "popularity": 252527130,
    "color": "#dd3835",
    "isSquare": true,
    "default": true
  },
  {
    "name": "chai",
    "popularity": 248262413,
    "color": "#a1070c",
    "isSquare": true,
    "default": true
  },
  {
    "name": "jest",
    "popularity": 188107295,
    "color": "#99425b",
    "isSquare": true,
    "default": true
  },
  {
    "name": "webpack",
    "popularity": 185234199,
    "color": "#fff",
    "isSquare": true,
    "default": true
  },
  {
    "name": "vitest",
    "popularity": 184828492,
    "color": "#729b1b",
    "isSquare": true,
    "default": true
  },
  {
    "name": "playwright",
    "popularity": 184484501,
    "color": "#2d4552",
    "isSquare": true,
    "default": true
  },
  {
    "name": "react-router",
    "popularity": 184053608,
    "color": "#d0021b",
    "isSquare": false,
    "default": true
  },
  {
    "name": "immer",
    "popularity": 177860224,
    "color": "#00e7c3",
    "isSquare": false,
    "default": true
  },
  {
    "name": "immer-icon",
    "popularity": 177860224,
    "color": "#00e7c3",
    "isSquare": false
  },
  {
    "name": "nextjs",
    "popularity": 171897945,
    "color": "#26c1d9",
    "isSquare": false,
    "default": true
  },
  {
    "name": "immutable",
    "popularity": 156665410,
    "color": "#fc4349",
    "isSquare": false,
    "default": true
  },
  {
    "name": "progress",
    "popularity": 152299846,
    "color": "#5ce500",
    "isSquare": true,
    "default": true
  },
  {
    "name": "handlebars",
    "popularity": 150808288,
    "color": "#423426",
    "isSquare": false,
    "default": true
  },
  {
    "name": "json-schema",
    "popularity": 146294969,
    "color": "#002cc4",
    "isSquare": false,
    "default": true
  },
  {
    "name": "json-schema-icon",
    "popularity": 146294969,
    "color": "#002cc4",
    "isSquare": true
  },
  {
    "name": "hono",
    "popularity": 144011266,
    "color": "#ff5b11",
    "isSquare": true
  },
  {
    "name": "testing-library",
    "popularity": 140305515,
    "color": "#e34e70",
    "isSquare": true
  },
  {
    "name": "graphql",
    "popularity": 137244559,
    "color": "#e535ab",
    "isSquare": true
  },
  {
    "name": "swc",
    "popularity": 132405243,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "redux",
    "popularity": 121677924,
    "color": "#764abc",
    "isSquare": true
  },
  {
    "name": "sass",
    "popularity": 109461137,
    "color": "#cd6799",
    "isSquare": true
  },
  {
    "name": "jquery",
    "popularity": 86299597,
    "color": "#1a1918",
    "isSquare": false
  },
  {
    "name": "batch",
    "popularity": 70554345,
    "color": "#0f0f0f",
    "isSquare": false
  },
  {
    "name": "rolldown",
    "popularity": 68324696,
    "color": "#ff19af",
    "isSquare": false
  },
  {
    "name": "rolldown-icon",
    "popularity": 68324696,
    "color": "#ff19af",
    "isSquare": false
  },
  {
    "name": "preact",
    "popularity": 65301118,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "mocha",
    "popularity": 59947016,
    "color": "#8d6748",
    "isSquare": true
  },
  {
    "name": "msw",
    "popularity": 58483167,
    "color": "#7a1818",
    "isSquare": true
  },
  {
    "name": "msw-icon",
    "popularity": 58483167,
    "color": "#70211d",
    "isSquare": true
  },
  {
    "name": "q",
    "popularity": 57590876,
    "color": "#f9df34",
    "isSquare": true
  },
  {
    "name": "ramda",
    "popularity": 56745741,
    "color": "#11100e",
    "isSquare": true
  },
  {
    "name": "storybook",
    "popularity": 56173510,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "storybook-icon",
    "popularity": 56173510,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "npm",
    "popularity": 53875379,
    "color": "#c12127",
    "isSquare": false
  },
  {
    "name": "npm-icon",
    "popularity": 53875379,
    "color": "#c12127",
    "isSquare": true
  },
  {
    "name": "nodemon",
    "popularity": 51327575,
    "color": "#76d04b",
    "isSquare": true
  },
  {
    "name": "mongodb",
    "popularity": 47040274,
    "color": "#01ec64",
    "isSquare": false
  },
  {
    "name": "mongodb-icon",
    "popularity": 47040274,
    "color": "#01ec64",
    "isSquare": false
  },
  {
    "name": "base",
    "popularity": 46729183,
    "color": "#32DAC4",
    "isSquare": true
  },
  {
    "name": "vue",
    "popularity": 46176630,
    "color": "#41b883",
    "isSquare": true
  },
  {
    "name": "ai",
    "popularity": 44797443,
    "color": "#FFC107",
    "isSquare": true
  },
  {
    "name": "d3",
    "popularity": 41960203,
    "color": "#f9a03c",
    "isSquare": true
  },
  {
    "name": "prisma",
    "popularity": 41169689,
    "color": "#d9263e",
    "isSquare": true
  },
  {
    "name": "swr",
    "popularity": 40952795,
    "color": "#26a3d9",
    "isSquare": false
  },
  {
    "name": "less",
    "popularity": 40147798,
    "color": "#faf9f8",
    "isSquare": false
  },
  {
    "name": "effect",
    "popularity": 39035115,
    "color": "#d9269a",
    "isSquare": false
  },
  {
    "name": "effect-icon",
    "popularity": 39035115,
    "color": "#c426d9",
    "isSquare": true
  },
  {
    "name": "yarn",
    "popularity": 38455628,
    "color": "#368fb9",
    "isSquare": true
  },
  {
    "name": "puppeteer",
    "popularity": 37673150,
    "color": "#dfdedf",
    "isSquare": true
  },
  {
    "name": "editorconfig",
    "popularity": 37117749,
    "color": "#fdfdfd",
    "isSquare": true
  },
  {
    "name": "redis",
    "popularity": 36789110,
    "color": "#912626",
    "isSquare": true
  },
  {
    "name": "sigstore",
    "popularity": 35943609,
    "color": "#2f2e71",
    "isSquare": false
  },
  {
    "name": "sigstore-icon",
    "popularity": 35943609,
    "color": "#2f2e71",
    "isSquare": true
  },
  {
    "name": "stylelint",
    "popularity": 33861858,
    "color": "#d9d926",
    "isSquare": true
  },
  {
    "name": "brotli",
    "popularity": 32712917,
    "color": "#ea3",
    "isSquare": true
  },
  {
    "name": "cypress",
    "popularity": 30406677,
    "color": "#58d09e",
    "isSquare": false
  },
  {
    "name": "cypress-icon",
    "popularity": 30406677,
    "color": "#09293f",
    "isSquare": true
  },
  {
    "name": "koa",
    "popularity": 28818473,
    "color": "#26d9ac",
    "isSquare": false
  },
  {
    "name": "firebase",
    "popularity": 27225364,
    "color": "#ff9100",
    "isSquare": false
  },
  {
    "name": "firebase-icon",
    "popularity": 27225364,
    "color": "#ff9100",
    "isSquare": true
  },
  {
    "name": "chromatic",
    "popularity": 26825360,
    "color": "#333",
    "isSquare": false
  },
  {
    "name": "chromatic-icon",
    "popularity": 26825360,
    "color": "#fc521f",
    "isSquare": true
  },
  {
    "name": "passport",
    "popularity": 26389618,
    "color": "#d6ff00",
    "isSquare": true
  },
  {
    "name": "vueuse",
    "popularity": 26214517,
    "color": "#35495e",
    "isSquare": true
  },
  {
    "name": "fastify",
    "popularity": 25760426,
    "color": "#26d985",
    "isSquare": false
  },
  {
    "name": "bootstrap",
    "popularity": 25378128,
    "color": "#7e13f8",
    "isSquare": true
  },
  {
    "name": "angular",
    "popularity": 21470496,
    "color": "#e03440",
    "isSquare": false
  },
  {
    "name": "lit",
    "popularity": 21090721,
    "color": "#00e8ff",
    "isSquare": false
  },
  {
    "name": "xcode",
    "popularity": 19975249,
    "color": "#1492e7",
    "isSquare": true
  },
  {
    "name": "css",
    "popularity": 19101871,
    "color": "#639",
    "isSquare": true
  },
  {
    "name": "xstate",
    "popularity": 17888727,
    "color": "#26cad9",
    "isSquare": false
  },
  {
    "name": "leaflet",
    "popularity": 17863860,
    "color": "#8ac443",
    "isSquare": false
  },
  {
    "name": "svelte",
    "popularity": 17662743,
    "color": "#4a4a55",
    "isSquare": false
  },
  {
    "name": "typeorm",
    "popularity": 17088296,
    "color": "#8e8f8f",
    "isSquare": true
  },
  {
    "name": "expo",
    "popularity": 16691236,
    "color": "#000020",
    "isSquare": false
  },
  {
    "name": "expo-icon",
    "popularity": 16691236,
    "color": "#000020",
    "isSquare": true
  },
  {
    "name": "knex",
    "popularity": 16565003,
    "color": "#e16426",
    "isSquare": true
  },
  {
    "name": "toml",
    "popularity": 16223602,
    "color": "#9c4221",
    "isSquare": true
  },
  {
    "name": "twilio",
    "popularity": 15937282,
    "color": "#f12e45",
    "isSquare": false
  },
  {
    "name": "twilio-icon",
    "popularity": 15937282,
    "color": "#f12e45",
    "isSquare": true
  },
  {
    "name": "jotai",
    "popularity": 15099727,
    "color": "#26d9ca",
    "isSquare": false
  },
  {
    "name": "karma",
    "popularity": 14628118,
    "color": "#429f87",
    "isSquare": true
  },
  {
    "name": "pinia",
    "popularity": 14090967,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "mobx",
    "popularity": 13422663,
    "color": "#ea6618",
    "isSquare": true
  },
  {
    "name": "lexical",
    "popularity": 13209210,
    "color": "#76b6ff",
    "isSquare": false
  },
  {
    "name": "lexical-icon",
    "popularity": 13209210,
    "color": "#76b6ff",
    "isSquare": true
  },
  {
    "name": "ethers",
    "popularity": 12799724,
    "color": "#24339b",
    "isSquare": false
  },
  {
    "name": "electron",
    "popularity": 12613993,
    "color": "#47848f",
    "isSquare": true
  },
  {
    "name": "pug",
    "popularity": 12414032,
    "color": "#f7bd89",
    "isSquare": true
  },
  {
    "name": "ink",
    "popularity": 12070409,
    "color": "#f6b937",
    "isSquare": true
  },
  {
    "name": "webdriverio",
    "popularity": 11786514,
    "color": "#ea5906",
    "isSquare": false
  },
  {
    "name": "webdriverio-icon",
    "popularity": 11786514,
    "color": "#ea5906",
    "isSquare": true
  },
  {
    "name": "jss",
    "popularity": 11576107,
    "color": "#f7df1e",
    "isSquare": true
  },
  {
    "name": "sequelize",
    "popularity": 11525411,
    "color": "#2f406a",
    "isSquare": true
  },
  {
    "name": "stylus",
    "popularity": 11383478,
    "color": "#333",
    "isSquare": false
  },
  {
    "name": "pm2",
    "popularity": 11316406,
    "color": "#9d1fe0",
    "isSquare": false
  },
  {
    "name": "pm2-icon",
    "popularity": 11316406,
    "color": "#9d1fe0",
    "isSquare": true
  },
  {
    "name": "faker",
    "popularity": 11199336,
    "color": "#040002",
    "isSquare": true
  },
  {
    "name": "lighthouse",
    "popularity": 10918762,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "semantic-release",
    "popularity": 10670827,
    "color": "#494949",
    "isSquare": true
  },
  {
    "name": "micro",
    "popularity": 10071419,
    "color": "#2e3192",
    "isSquare": false
  },
  {
    "name": "micro-icon",
    "popularity": 10071419,
    "color": "#2e3192",
    "isSquare": true
  },
  {
    "name": "highcharts",
    "popularity": 9506778,
    "color": "#78758c",
    "isSquare": true
  },
  {
    "name": "sugarss",
    "popularity": 9423259,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "vercel",
    "popularity": 9318128,
    "color": "#26b8d9",
    "isSquare": false
  },
  {
    "name": "vercel-icon",
    "popularity": 9318128,
    "color": "#26d982",
    "isSquare": true
  },
  {
    "name": "eta",
    "popularity": 9104924,
    "color": "#0c022f",
    "isSquare": false
  },
  {
    "name": "eta-icon",
    "popularity": 9104924,
    "color": "#32bebe",
    "isSquare": true
  },
  {
    "name": "madge",
    "popularity": 8574302,
    "color": "#6750e5",
    "isSquare": true
  },
  {
    "name": "gulp",
    "popularity": 8550788,
    "color": "#d34a47",
    "isSquare": false
  },
  {
    "name": "lerna",
    "popularity": 8281787,
    "color": "#26d962",
    "isSquare": true
  },
  {
    "name": "astro",
    "popularity": 8155257,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "heap",
    "popularity": 8149873,
    "color": "#31d891",
    "isSquare": false
  },
  {
    "name": "heap-icon",
    "popularity": 8149873,
    "color": "#31d891",
    "isSquare": false
  },
  {
    "name": "browserify",
    "popularity": 8119214,
    "color": "#e6b35a",
    "isSquare": false
  },
  {
    "name": "browserify-icon",
    "popularity": 8119214,
    "color": "#e6b35a",
    "isSquare": true
  },
  {
    "name": "solidjs-icon",
    "popularity": 7907221,
    "color": "#76b3e1",
    "isSquare": true
  },
  {
    "name": "amp",
    "popularity": 7445937,
    "color": "#1d5fe6",
    "isSquare": false
  },
  {
    "name": "amp-icon",
    "popularity": 7445937,
    "color": "#1d5fe6",
    "isSquare": true
  },
  {
    "name": "svelte-icon",
    "popularity": 7389888,
    "color": "#ff3e00",
    "isSquare": true
  },
  {
    "name": "react-query",
    "popularity": 6855788,
    "color": "#00435b",
    "isSquare": false
  },
  {
    "name": "react-query-icon",
    "popularity": 6855788,
    "color": "#00435b",
    "isSquare": true
  },
  {
    "name": "coffeescript",
    "popularity": 6838930,
    "color": "#28334c",
    "isSquare": true
  },
  {
    "name": "redux-saga",
    "popularity": 6678338,
    "color": "#999",
    "isSquare": false
  },
  {
    "name": "commitizen",
    "popularity": 6237610,
    "color": "#3385ff",
    "isSquare": true
  },
  {
    "name": "jasmine",
    "popularity": 6165530,
    "color": "#8a4182",
    "isSquare": true
  },
  {
    "name": "nuxt",
    "popularity": 5882656,
    "color": "#00dc82",
    "isSquare": false
  },
  {
    "name": "nuxt-icon",
    "popularity": 5882656,
    "color": "#00dc82",
    "isSquare": false
  },
  {
    "name": "aws-amplify",
    "popularity": 5682717,
    "color": "#f90",
    "isSquare": true
  },
  {
    "name": "serverless",
    "popularity": 5630063,
    "color": "#f26d61",
    "isSquare": true
  },
  {
    "name": "websocket",
    "popularity": 5555023,
    "color": "#231f20",
    "isSquare": true
  },
  {
    "name": "flux",
    "popularity": 5489806,
    "color": "#44b74a",
    "isSquare": false
  },
  {
    "name": "auth0",
    "popularity": 5450889,
    "color": "#26d985",
    "isSquare": false
  },
  {
    "name": "auth0-icon",
    "popularity": 5450889,
    "color": "#26d9af",
    "isSquare": true
  },
  {
    "name": "aws-lambda",
    "popularity": 5086227,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "mysql",
    "popularity": 5080207,
    "color": "#00758f",
    "isSquare": true
  },
  {
    "name": "mysql-icon",
    "popularity": 5080207,
    "color": "#00546b",
    "isSquare": true
  },
  {
    "name": "backbone",
    "popularity": 4955477,
    "color": "#002a41",
    "isSquare": false
  },
  {
    "name": "backbone-icon",
    "popularity": 4955477,
    "color": "#002a41",
    "isSquare": true
  },
  {
    "name": "cloudflare",
    "popularity": 4785136,
    "color": "#fbad41",
    "isSquare": false
  },
  {
    "name": "cloudflare-icon",
    "popularity": 4785136,
    "color": "#fbad41",
    "isSquare": false
  },
  {
    "name": "supabase",
    "popularity": 4767744,
    "color": "#3ecf8e",
    "isSquare": false
  },
  {
    "name": "supabase-icon",
    "popularity": 4767744,
    "color": "#3ecf8e",
    "isSquare": true
  },
  {
    "name": "node-sass",
    "popularity": 4724431,
    "color": "#8cc84b",
    "isSquare": true
  },
  {
    "name": "grunt",
    "popularity": 4665795,
    "color": "#463014",
    "isSquare": true
  },
  {
    "name": "imagemin",
    "popularity": 4643981,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "contentful",
    "popularity": 4629553,
    "color": "#fae501",
    "isSquare": true
  },
  {
    "name": "react-spring",
    "popularity": 4534280,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "font-awesome",
    "popularity": 4455204,
    "color": "#528dd7",
    "isSquare": true
  },
  {
    "name": "bun",
    "popularity": 4317642,
    "color": "#febbd0",
    "isSquare": true
  },
  {
    "name": "mixpanel",
    "popularity": 3972146,
    "color": "#33547d",
    "isSquare": false
  },
  {
    "name": "emmet",
    "popularity": 3970892,
    "color": "#1c1c20",
    "isSquare": true
  },
  {
    "name": "saucelabs",
    "popularity": 3705361,
    "color": "#e12826",
    "isSquare": true
  },
  {
    "name": "appium",
    "popularity": 3668520,
    "color": "#662d91",
    "isSquare": true
  },
  {
    "name": "semaphore",
    "popularity": 3349072,
    "color": "#4A4A4A",
    "isSquare": true
  },
  {
    "name": "coveralls",
    "popularity": 3346686,
    "color": "#dce1e2",
    "isSquare": false
  },
  {
    "name": "remix",
    "popularity": 3311926,
    "color": "#121212",
    "isSquare": false
  },
  {
    "name": "browserstack",
    "popularity": 3193307,
    "color": "#f5bb60",
    "isSquare": true
  },
  {
    "name": "fabric",
    "popularity": 3081206,
    "color": "#fec32d",
    "isSquare": true
  },
  {
    "name": "cloudinary",
    "popularity": 3048318,
    "color": "#3448c5",
    "isSquare": false
  },
  {
    "name": "cloudinary-icon",
    "popularity": 3048318,
    "color": "#3448c5",
    "isSquare": false
  },
  {
    "name": "dropzone",
    "popularity": 2889951,
    "color": "#028bf4",
    "isSquare": true
  },
  {
    "name": "protractor",
    "popularity": 2856308,
    "color": "#e23237",
    "isSquare": true
  },
  {
    "name": "threads",
    "popularity": 2825240,
    "color": "#d98826",
    "isSquare": false
  },
  {
    "name": "threads-icon",
    "popularity": 2825240,
    "color": "#d9262f",
    "isSquare": true
  },
  {
    "name": "daisyui",
    "popularity": 2807894,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "daisyui-icon",
    "popularity": 2807894,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "codecov",
    "popularity": 2772776,
    "color": "#f07",
    "isSquare": false
  },
  {
    "name": "codecov-icon",
    "popularity": 2772776,
    "color": "#f07",
    "isSquare": true
  },
  {
    "name": "ava",
    "popularity": 2748325,
    "color": "#4b4b77",
    "isSquare": false
  },
  {
    "name": "verdaccio",
    "popularity": 2728522,
    "color": "#405236",
    "isSquare": false
  },
  {
    "name": "verdaccio-icon",
    "popularity": 2728522,
    "color": "#405236",
    "isSquare": true
  },
  {
    "name": "phoenix",
    "popularity": 2640361,
    "color": "#fd4f00",
    "isSquare": true
  },
  {
    "name": "nats",
    "popularity": 2545745,
    "color": "#27aae1",
    "isSquare": false
  },
  {
    "name": "nats-icon",
    "popularity": 2545745,
    "color": "#34a574",
    "isSquare": true
  },
  {
    "name": "snyk",
    "popularity": 2523718,
    "color": "#333152",
    "isSquare": false
  },
  {
    "name": "jade",
    "popularity": 2437630,
    "color": "#569a83",
    "isSquare": false
  },
  {
    "name": "typesense",
    "popularity": 2243283,
    "color": "#1035bc",
    "isSquare": false
  },
  {
    "name": "typesense-icon",
    "popularity": 2243283,
    "color": "#1035bc",
    "isSquare": true
  },
  {
    "name": "pusher",
    "popularity": 2238082,
    "color": "#300d4f",
    "isSquare": false
  },
  {
    "name": "pusher-icon",
    "popularity": 2238082,
    "color": "#300d4f",
    "isSquare": false
  },
  {
    "name": "rollbar",
    "popularity": 2189096,
    "color": "#3c72ff",
    "isSquare": false
  },
  {
    "name": "rollbar-icon",
    "popularity": 2189096,
    "color": "#3c72ff",
    "isSquare": true
  },
  {
    "name": "hardhat",
    "popularity": 2103062,
    "color": "#fff04d",
    "isSquare": false
  },
  {
    "name": "hardhat-icon",
    "popularity": 2103062,
    "color": "#fff04d",
    "isSquare": true
  },
  {
    "name": "alpinejs",
    "popularity": 2031990,
    "color": "#2d3441",
    "isSquare": false
  },
  {
    "name": "alpinejs-icon",
    "popularity": 2031990,
    "color": "#77c1d2",
    "isSquare": false
  },
  {
    "name": "recoil",
    "popularity": 2016367,
    "color": "#1c1e21",
    "isSquare": false
  },
  {
    "name": "recoil-icon",
    "popularity": 2016367,
    "color": "#1c1e21",
    "isSquare": false
  },
  {
    "name": "sst",
    "popularity": 1867662,
    "color": "#fffbf9",
    "isSquare": false
  },
  {
    "name": "sst-icon",
    "popularity": 1867662,
    "color": "#fffbf9",
    "isSquare": true
  },
  {
    "name": "sanity",
    "popularity": 1845625,
    "color": "#f37368",
    "isSquare": false
  },
  {
    "name": "mariadb",
    "popularity": 1828202,
    "color": "#002b64",
    "isSquare": false
  },
  {
    "name": "mariadb-icon",
    "popularity": 1828202,
    "color": "#002b64",
    "isSquare": false
  },
  {
    "name": "bower",
    "popularity": 1712892,
    "color": "#543729",
    "isSquare": true
  },
  {
    "name": "netlify",
    "popularity": 1581603,
    "color": "#05bdba",
    "isSquare": false
  },
  {
    "name": "netlify-icon",
    "popularity": 1581603,
    "color": "#05bdba",
    "isSquare": true
  },
  {
    "name": "elasticsearch",
    "popularity": 1579590,
    "color": "#343741",
    "isSquare": true
  },
  {
    "name": "bulma",
    "popularity": 1516278,
    "color": "#00d1b2",
    "isSquare": true
  },
  {
    "name": "meilisearch",
    "popularity": 1505257,
    "color": "#ff5caa",
    "isSquare": false
  },
  {
    "name": "parcel",
    "popularity": 1504749,
    "color": "#be4248",
    "isSquare": false
  },
  {
    "name": "parcel-icon",
    "popularity": 1504749,
    "color": "#322214",
    "isSquare": true
  },
  {
    "name": "arc",
    "popularity": 1469871,
    "color": "#1a007f",
    "isSquare": true
  },
  {
    "name": "gatsby",
    "popularity": 1411126,
    "color": "#744c9e",
    "isSquare": true
  },
  {
    "name": "airtable",
    "popularity": 1401274,
    "color": "#ffbf00",
    "isSquare": true
  },
  {
    "name": "broccoli",
    "popularity": 1380239,
    "color": "#598527",
    "isSquare": true
  },
  {
    "name": "payload",
    "popularity": 1366113,
    "color": "#26a3d9",
    "isSquare": true
  },
  {
    "name": "unocss",
    "popularity": 1284974,
    "color": "#858585",
    "isSquare": true
  },
  {
    "name": "randomcolor",
    "popularity": 1251155,
    "color": "#100C72",
    "isSquare": true
  },
  {
    "name": "redux-observable",
    "popularity": 1230361,
    "color": "#e21a8d",
    "isSquare": true
  },
  {
    "name": "net",
    "popularity": 1212935,
    "color": "#0664A8",
    "isSquare": false
  },
  {
    "name": "pkg",
    "popularity": 1193019,
    "color": "#26d9c1",
    "isSquare": true
  },
  {
    "name": "cucumber",
    "popularity": 1171931,
    "color": "#173647",
    "isSquare": true
  },
  {
    "name": "json",
    "popularity": 1169562,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "sqlite",
    "popularity": 1129070,
    "color": "#0f80cc",
    "isSquare": false
  },
  {
    "name": "calibre",
    "popularity": 1096730,
    "color": "#3057f4",
    "isSquare": false
  },
  {
    "name": "calibre-icon",
    "popularity": 1096730,
    "color": "#3057f4",
    "isSquare": true
  },
  {
    "name": "html-5",
    "popularity": 1056643,
    "color": "#e44d26",
    "isSquare": true
  },
  {
    "name": "inferno",
    "popularity": 1054345,
    "color": "#494949",
    "isSquare": true
  },
  {
    "name": "nodejs",
    "popularity": 1049944,
    "color": "#41873f",
    "isSquare": false
  },
  {
    "name": "bourbon",
    "popularity": 947454,
    "color": "#fef9ec",
    "isSquare": true
  },
  {
    "name": "raphael",
    "popularity": 794884,
    "color": "#f89938",
    "isSquare": true
  },
  {
    "name": "stimulus",
    "popularity": 741728,
    "color": "#77e8b9",
    "isSquare": false
  },
  {
    "name": "stimulus-icon",
    "popularity": 741728,
    "color": "#77e8b9",
    "isSquare": true
  },
  {
    "name": "bitbucket",
    "popularity": 703349,
    "color": "#2684ff",
    "isSquare": true
  },
  {
    "name": "ganache",
    "popularity": 701020,
    "color": "#5e464d",
    "isSquare": false
  },
  {
    "name": "ganache-icon",
    "popularity": 701020,
    "color": "#e4a663",
    "isSquare": true
  },
  {
    "name": "square",
    "popularity": 679189,
    "color": "#2e3b4e",
    "isSquare": true
  },
  {
    "name": "babel",
    "popularity": 661881,
    "color": "#f9dc3e",
    "isSquare": false
  },
  {
    "name": "ngrok",
    "popularity": 658907,
    "color": "#3526d9",
    "isSquare": false
  },
  {
    "name": "consul",
    "popularity": 649165,
    "color": "#e03875",
    "isSquare": true
  },
  {
    "name": "forever",
    "popularity": 647292,
    "color": "#71d926",
    "isSquare": false
  },
  {
    "name": "chargebee",
    "popularity": 596493,
    "color": "#222",
    "isSquare": false
  },
  {
    "name": "chargebee-icon",
    "popularity": 596493,
    "color": "#ff6c36",
    "isSquare": true
  },
  {
    "name": "knockout",
    "popularity": 592992,
    "color": "#e42e16",
    "isSquare": false
  },
  {
    "name": "gitlab",
    "popularity": 574301,
    "color": "#fc6d26",
    "isSquare": false
  },
  {
    "name": "gitlab-icon",
    "popularity": 574301,
    "color": "#fc6d26",
    "isSquare": true
  },
  {
    "name": "memcached",
    "popularity": 566385,
    "color": "#db7c7c",
    "isSquare": true
  },
  {
    "name": "nightwatch",
    "popularity": 550439,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "dropbox",
    "popularity": 547747,
    "color": "#0061ff",
    "isSquare": true
  },
  {
    "name": "asana",
    "popularity": 539257,
    "color": "#0d0e10",
    "isSquare": false
  },
  {
    "name": "asana-icon",
    "popularity": 539257,
    "color": "#f06a6a",
    "isSquare": true
  },
  {
    "name": "grpc",
    "popularity": 532730,
    "color": "#244b5a",
    "isSquare": false
  },
  {
    "name": "markdown",
    "popularity": 531928,
    "color": "#59d926",
    "isSquare": false
  },
  {
    "name": "astro-icon",
    "popularity": 521537,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "intel",
    "popularity": 518890,
    "color": "#00c7fd",
    "isSquare": false
  },
  {
    "name": "create-react-app",
    "popularity": 513941,
    "color": "#09d3ac",
    "isSquare": true
  },
  {
    "name": "telegram",
    "popularity": 499581,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "slack",
    "popularity": 478997,
    "color": "#e01e5a",
    "isSquare": false
  },
  {
    "name": "slack-icon",
    "popularity": 478997,
    "color": "#e01e5a",
    "isSquare": true
  },
  {
    "name": "github",
    "popularity": 427913,
    "color": "#11110f",
    "isSquare": false
  },
  {
    "name": "fetch",
    "popularity": 394327,
    "color": "#3c790a",
    "isSquare": true
  },
  {
    "name": "lucene",
    "popularity": 386420,
    "color": "#019b8f",
    "isSquare": false
  },
  {
    "name": "google-maps",
    "popularity": 355456,
    "color": "#34a853",
    "isSquare": true
  },
  {
    "name": "effector",
    "popularity": 341995,
    "color": "#7f2400",
    "isSquare": true
  },
  {
    "name": "jscs",
    "popularity": 336791,
    "color": "#EBD851",
    "isSquare": true
  },
  {
    "name": "pouchdb",
    "popularity": 329011,
    "color": "#64c48c",
    "isSquare": true
  },
  {
    "name": "postgraphile",
    "popularity": 328707,
    "color": "#468bcc",
    "isSquare": true
  },
  {
    "name": "sendgrid",
    "popularity": 320111,
    "color": "#3f72ab",
    "isSquare": false
  },
  {
    "name": "sendgrid-icon",
    "popularity": 320111,
    "color": "#3f72ab",
    "isSquare": true
  },
  {
    "name": "hapi",
    "popularity": 310160,
    "color": "#9b99a6",
    "isSquare": true
  },
  {
    "name": "ffmpeg",
    "popularity": 309787,
    "color": "#0b4819",
    "isSquare": false
  },
  {
    "name": "ffmpeg-icon",
    "popularity": 309787,
    "color": "#0b4819",
    "isSquare": true
  },
  {
    "name": "modernizr",
    "popularity": 303016,
    "color": "#d91b77",
    "isSquare": false
  },
  {
    "name": "aws-appsync",
    "popularity": 294939,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "loggly",
    "popularity": 270631,
    "color": "#0A0B09",
    "isSquare": false
  },
  {
    "name": "iron",
    "popularity": 265371,
    "color": "#3177bc",
    "isSquare": false
  },
  {
    "name": "iron-icon",
    "popularity": 265371,
    "color": "#3177bc",
    "isSquare": true
  },
  {
    "name": "glamorous",
    "popularity": 261259,
    "color": "#ed4c5c",
    "isSquare": false
  },
  {
    "name": "glamorous-icon",
    "popularity": 261259,
    "color": "#da233c",
    "isSquare": true
  },
  {
    "name": "react-styleguidist",
    "popularity": 259616,
    "color": "#00d8fe",
    "isSquare": true
  },
  {
    "name": "couchbase",
    "popularity": 258328,
    "color": "#ed2226",
    "isSquare": true
  },
  {
    "name": "vimeo",
    "popularity": 239240,
    "color": "#1ab7eb",
    "isSquare": false
  },
  {
    "name": "vimeo-icon",
    "popularity": 239240,
    "color": "#32b8e8",
    "isSquare": true
  },
  {
    "name": "material-ui",
    "popularity": 228046,
    "color": "#007fff",
    "isSquare": true
  },
  {
    "name": "appwrite",
    "popularity": 214549,
    "color": "#f02e65",
    "isSquare": false
  },
  {
    "name": "appwrite-icon",
    "popularity": 214549,
    "color": "#f02e65",
    "isSquare": true
  },
  {
    "name": "cordova",
    "popularity": 209627,
    "color": "#444",
    "isSquare": true
  },
  {
    "name": "hexo",
    "popularity": 208222,
    "color": "#0e83cd",
    "isSquare": true
  },
  {
    "name": "esdoc",
    "popularity": 206797,
    "color": "#e55151",
    "isSquare": true
  },
  {
    "name": "rxdb",
    "popularity": 202811,
    "color": "#5f2688",
    "isSquare": true
  },
  {
    "name": "pipedrive",
    "popularity": 199838,
    "color": "#231f1f",
    "isSquare": false
  },
  {
    "name": "realm",
    "popularity": 194610,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "composer",
    "popularity": 193842,
    "color": "#1a1a1a",
    "isSquare": true
  },
  {
    "name": "nginx",
    "popularity": 192256,
    "color": "#009639",
    "isSquare": true
  },
  {
    "name": "deno",
    "popularity": 190007,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "medium",
    "popularity": 177887,
    "color": "#265fd9",
    "isSquare": false
  },
  {
    "name": "medium-icon",
    "popularity": 177887,
    "color": "#cad926",
    "isSquare": false
  },
  {
    "name": "gravatar",
    "popularity": 171832,
    "color": "#4678eb",
    "isSquare": false
  },
  {
    "name": "gravatar-icon",
    "popularity": 171832,
    "color": "#4678eb",
    "isSquare": true
  },
  {
    "name": "surge",
    "popularity": 166409,
    "color": "#564740",
    "isSquare": true
  },
  {
    "name": "truffle",
    "popularity": 165559,
    "color": "#5e464d",
    "isSquare": true
  },
  {
    "name": "truffle-icon",
    "popularity": 165559,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "grommet",
    "popularity": 163991,
    "color": "#7d4cdb",
    "isSquare": false
  },
  {
    "name": "codesandbox",
    "popularity": 163198,
    "color": "#2638d9",
    "isSquare": false
  },
  {
    "name": "codesandbox-icon",
    "popularity": 163198,
    "color": "#6226d9",
    "isSquare": true
  },
  {
    "name": "sparkpost",
    "popularity": 158536,
    "color": "#55555a",
    "isSquare": false
  },
  {
    "name": "asciidoctor",
    "popularity": 156858,
    "color": "#e40046",
    "isSquare": true
  },
  {
    "name": "sails",
    "popularity": 155621,
    "color": "#28a3b2",
    "isSquare": true
  },
  {
    "name": "loopback",
    "popularity": 151452,
    "color": "#3f5dff",
    "isSquare": false
  },
  {
    "name": "loopback-icon",
    "popularity": 151452,
    "color": "#3f5dff",
    "isSquare": true
  },
  {
    "name": "datasette",
    "popularity": 149028,
    "color": "#0e0c82",
    "isSquare": false
  },
  {
    "name": "datasette-icon",
    "popularity": 149028,
    "color": "#0e0c82",
    "isSquare": true
  },
  {
    "name": "teamwork",
    "popularity": 144835,
    "color": "#1d1c39",
    "isSquare": false
  },
  {
    "name": "teamwork-icon",
    "popularity": 144835,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "appdynamics",
    "popularity": 144491,
    "color": "#2647d9",
    "isSquare": false
  },
  {
    "name": "appdynamics-icon",
    "popularity": 144491,
    "color": "#5926d9",
    "isSquare": true
  },
  {
    "name": "rescript",
    "popularity": 137062,
    "color": "#d44140",
    "isSquare": false
  },
  {
    "name": "rescript-icon",
    "popularity": 137062,
    "color": "#d44140",
    "isSquare": true
  },
  {
    "name": "fastly",
    "popularity": 136147,
    "color": "#ff282d",
    "isSquare": false
  },
  {
    "name": "elm",
    "popularity": 133482,
    "color": "#1293d8",
    "isSquare": true
  },
  {
    "name": "aws",
    "popularity": 122931,
    "color": "#252f3e",
    "isSquare": false
  },
  {
    "name": "uikit",
    "popularity": 122157,
    "color": "#2396f3",
    "isSquare": true
  },
  {
    "name": "git",
    "popularity": 121185,
    "color": "#2f2707",
    "isSquare": false
  },
  {
    "name": "git-icon",
    "popularity": 121185,
    "color": "#de4c36",
    "isSquare": true
  },
  {
    "name": "neovim",
    "popularity": 118120,
    "color": "#444",
    "isSquare": false
  },
  {
    "name": "rest",
    "popularity": 115981,
    "color": "#EEB545",
    "isSquare": true
  },
  {
    "name": "drip",
    "popularity": 103073,
    "color": "#d9265f",
    "isSquare": false
  },
  {
    "name": "dojo",
    "popularity": 102890,
    "color": "#f15a24",
    "isSquare": false
  },
  {
    "name": "dojo-icon",
    "popularity": 102890,
    "color": "#f15a24",
    "isSquare": true
  },
  {
    "name": "mithril",
    "popularity": 99571,
    "color": "#010002",
    "isSquare": true
  },
  {
    "name": "million",
    "popularity": 96591,
    "color": "#845ce7",
    "isSquare": false
  },
  {
    "name": "million-icon",
    "popularity": 96591,
    "color": "#845ce7",
    "isSquare": true
  },
  {
    "name": "authy",
    "popularity": 96413,
    "color": "#f22e46",
    "isSquare": true
  },
  {
    "name": "trace",
    "popularity": 95865,
    "color": "#40AA94",
    "isSquare": true
  },
  {
    "name": "mdx",
    "popularity": 92996,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "chartjs",
    "popularity": 92677,
    "color": "#36a2eb",
    "isSquare": true
  },
  {
    "name": "v8",
    "popularity": 88798,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "java",
    "popularity": 88547,
    "color": "#5382a1",
    "isSquare": true
  },
  {
    "name": "appcenter",
    "popularity": 87750,
    "color": "#cb2e63",
    "isSquare": false
  },
  {
    "name": "appcenter-icon",
    "popularity": 87750,
    "color": "#cb2e63",
    "isSquare": true
  },
  {
    "name": "amplitude",
    "popularity": 87672,
    "color": "#10069f",
    "isSquare": false
  },
  {
    "name": "amplitude-icon",
    "popularity": 87672,
    "color": "#10069f",
    "isSquare": true
  },
  {
    "name": "claude",
    "popularity": 86452,
    "color": "#d97757",
    "isSquare": false
  },
  {
    "name": "claude-icon",
    "popularity": 86452,
    "color": "#d97757",
    "isSquare": true
  },
  {
    "name": "zoho",
    "popularity": 85742,
    "color": "#089949",
    "isSquare": false
  },
  {
    "name": "surrealdb",
    "popularity": 85166,
    "color": "#ff00a0",
    "isSquare": false
  },
  {
    "name": "surrealdb-icon",
    "popularity": 85166,
    "color": "#ff00a0",
    "isSquare": true
  },
  {
    "name": "rsmq",
    "popularity": 84987,
    "color": "#b2271b",
    "isSquare": true
  },
  {
    "name": "docusaurus",
    "popularity": 83855,
    "color": "#3ecc5f",
    "isSquare": true
  },
  {
    "name": "tealium",
    "popularity": 82605,
    "color": "#0ab7c9",
    "isSquare": false
  },
  {
    "name": "httpie",
    "popularity": 81339,
    "color": "#91d926",
    "isSquare": false
  },
  {
    "name": "httpie-icon",
    "popularity": 81339,
    "color": "#2c26d9",
    "isSquare": true
  },
  {
    "name": "webgpu",
    "popularity": 78480,
    "color": "#0086e8",
    "isSquare": true
  },
  {
    "name": "rome",
    "popularity": 77948,
    "color": "#27272a",
    "isSquare": false
  },
  {
    "name": "rome-icon",
    "popularity": 77948,
    "color": "#27272a",
    "isSquare": true
  },
  {
    "name": "dev",
    "popularity": 77539,
    "color": "#00C9DB",
    "isSquare": false
  },
  {
    "name": "dev-icon",
    "popularity": 77539,
    "color": "#00C9DB",
    "isSquare": true
  },
  {
    "name": "remix-icon",
    "popularity": 75070,
    "color": "#121212",
    "isSquare": true
  },
  {
    "name": "marko",
    "popularity": 74922,
    "color": "#00cffb",
    "isSquare": false
  },
  {
    "name": "marko-icon",
    "popularity": 74922,
    "color": "#00cffb",
    "isSquare": false
  },
  {
    "name": "shopify",
    "popularity": 74077,
    "color": "#95bf46",
    "isSquare": true
  },
  {
    "name": "travis-ci",
    "popularity": 70341,
    "color": "#0e0f0d",
    "isSquare": true
  },
  {
    "name": "sentry",
    "popularity": 69256,
    "color": "#362d59",
    "isSquare": false
  },
  {
    "name": "sentry-icon",
    "popularity": 69256,
    "color": "#362d59",
    "isSquare": true
  },
  {
    "name": "aerospike",
    "popularity": 68002,
    "color": "#c4373a",
    "isSquare": false
  },
  {
    "name": "aerospike-icon",
    "popularity": 68002,
    "color": "#c4373a",
    "isSquare": true
  },
  {
    "name": "webtorrent",
    "popularity": 67962,
    "color": "#eb324b",
    "isSquare": true
  },
  {
    "name": "hcaptcha",
    "popularity": 67502,
    "color": "#00d4bf",
    "isSquare": false
  },
  {
    "name": "hcaptcha-icon",
    "popularity": 67502,
    "color": "#00d4bf",
    "isSquare": true
  },
  {
    "name": "twitter",
    "popularity": 67313,
    "color": "#55acee",
    "isSquare": true
  },
  {
    "name": "mapbox",
    "popularity": 67091,
    "color": "#485160",
    "isSquare": false
  },
  {
    "name": "mapbox-icon",
    "popularity": 67091,
    "color": "#485160",
    "isSquare": true
  },
  {
    "name": "hubspot",
    "popularity": 66526,
    "color": "#45535e",
    "isSquare": false
  },
  {
    "name": "curl",
    "popularity": 65363,
    "color": "#0c544c",
    "isSquare": false
  },
  {
    "name": "framework7",
    "popularity": 62245,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "framework7-icon",
    "popularity": 62245,
    "color": "#ee350f",
    "isSquare": true
  },
  {
    "name": "delighted",
    "popularity": 60425,
    "color": "#323232",
    "isSquare": false
  },
  {
    "name": "delighted-icon",
    "popularity": 60425,
    "color": "#4c4c4b",
    "isSquare": true
  },
  {
    "name": "nestjs",
    "popularity": 59176,
    "color": "#e0234e",
    "isSquare": true
  },
  {
    "name": "flow",
    "popularity": 57832,
    "color": "#ffca20",
    "isSquare": true
  },
  {
    "name": "airbnb",
    "popularity": 55025,
    "color": "#ff385c",
    "isSquare": false
  },
  {
    "name": "airbnb-icon",
    "popularity": 55025,
    "color": "#ff385c",
    "isSquare": true
  },
  {
    "name": "release",
    "popularity": 54389,
    "color": "#d96b26",
    "isSquare": true
  },
  {
    "name": "azure",
    "popularity": 54367,
    "color": "#0089D6",
    "isSquare": false
  },
  {
    "name": "azure-icon",
    "popularity": 54367,
    "color": "#0089D6",
    "isSquare": true
  },
  {
    "name": "susy",
    "popularity": 53893,
    "color": "#ff0080",
    "isSquare": true
  },
  {
    "name": "jspm",
    "popularity": 52053,
    "color": "#feea5f",
    "isSquare": true
  },
  {
    "name": "snowpack",
    "popularity": 51153,
    "color": "#26d962",
    "isSquare": true
  },
  {
    "name": "jenkins",
    "popularity": 51094,
    "color": "#d33833",
    "isSquare": false
  },
  {
    "name": "heroku",
    "popularity": 50670,
    "color": "#430098",
    "isSquare": false
  },
  {
    "name": "heroku-icon",
    "popularity": 50670,
    "color": "#430098",
    "isSquare": true
  },
  {
    "name": "ionic",
    "popularity": 48283,
    "color": "#3880ff",
    "isSquare": false
  },
  {
    "name": "bugsnag",
    "popularity": 48255,
    "color": "#173647",
    "isSquare": true
  },
  {
    "name": "bugsnag-icon",
    "popularity": 48255,
    "color": "#000D47",
    "isSquare": true
  },
  {
    "name": "wicket",
    "popularity": 47663,
    "color": "#ff9925",
    "isSquare": false
  },
  {
    "name": "wicket-icon",
    "popularity": 47663,
    "color": "#ff9925",
    "isSquare": true
  },
  {
    "name": "purescript",
    "popularity": 45372,
    "color": "#1d222d",
    "isSquare": false
  },
  {
    "name": "purescript-icon",
    "popularity": 45372,
    "color": "#1d222d",
    "isSquare": false
  },
  {
    "name": "python",
    "popularity": 45075,
    "color": "#387eb8",
    "isSquare": true
  },
  {
    "name": "rethinkdb",
    "popularity": 43092,
    "color": "#204956",
    "isSquare": false
  },
  {
    "name": "ghost",
    "popularity": 42787,
    "color": "#3d515b",
    "isSquare": false
  },
  {
    "name": "epsagon",
    "popularity": 42388,
    "color": "#A1BEFF",
    "isSquare": false
  },
  {
    "name": "epsagon-icon",
    "popularity": 42388,
    "color": "#A1BEFF",
    "isSquare": false
  },
  {
    "name": "stash",
    "popularity": 42188,
    "color": "#264970",
    "isSquare": true
  },
  {
    "name": "momentjs",
    "popularity": 41789,
    "color": "#376660",
    "isSquare": true
  },
  {
    "name": "require",
    "popularity": 41203,
    "color": "#4c4c4c",
    "isSquare": true
  },
  {
    "name": "hyperapp",
    "popularity": 38640,
    "color": "#0080ff",
    "isSquare": false
  },
  {
    "name": "headlessui",
    "popularity": 36179,
    "color": "#66e3ff",
    "isSquare": false
  },
  {
    "name": "headlessui-icon",
    "popularity": 36179,
    "color": "#66e3ff",
    "isSquare": true
  },
  {
    "name": "swagger",
    "popularity": 36005,
    "color": "#173647",
    "isSquare": true
  },
  {
    "name": "framer",
    "popularity": 35945,
    "color": "#d99426",
    "isSquare": true
  },
  {
    "name": "google",
    "popularity": 34770,
    "color": "#ff302f",
    "isSquare": false
  },
  {
    "name": "postgresql",
    "popularity": 34006,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "percy",
    "popularity": 33419,
    "color": "#5c007b",
    "isSquare": false
  },
  {
    "name": "percy-icon",
    "popularity": 33419,
    "color": "#5c007b",
    "isSquare": true
  },
  {
    "name": "t3",
    "popularity": 32364,
    "color": "#4d37b9",
    "isSquare": true
  },
  {
    "name": "brunch",
    "popularity": 32315,
    "color": "#3f894a",
    "isSquare": true
  },
  {
    "name": "anthropic",
    "popularity": 32099,
    "color": "#181818",
    "isSquare": false
  },
  {
    "name": "anthropic-icon",
    "popularity": 32099,
    "color": "#181818",
    "isSquare": true
  },
  {
    "name": "midjourney",
    "popularity": 31957,
    "color": "#1a222d",
    "isSquare": true
  },
  {
    "name": "riot",
    "popularity": 29397,
    "color": "#ed1846",
    "isSquare": true
  },
  {
    "name": "fauna",
    "popularity": 28465,
    "color": "#3a1ab6",
    "isSquare": false
  },
  {
    "name": "fauna-icon",
    "popularity": 28465,
    "color": "#3a1ab6",
    "isSquare": true
  },
  {
    "name": "prerender",
    "popularity": 28423,
    "color": "#5d7b8c",
    "isSquare": false
  },
  {
    "name": "prerender-icon",
    "popularity": 28423,
    "color": "#f0da50",
    "isSquare": true
  },
  {
    "name": "compass",
    "popularity": 25584,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "dialogflow",
    "popularity": 25556,
    "color": "#ff9800",
    "isSquare": true
  },
  {
    "name": "weave",
    "popularity": 25063,
    "color": "#ff4b19",
    "isSquare": true
  },
  {
    "name": "prismic",
    "popularity": 24870,
    "color": "#212735",
    "isSquare": false
  },
  {
    "name": "prismic-icon",
    "popularity": 24870,
    "color": "#e55638",
    "isSquare": true
  },
  {
    "name": "chrome",
    "popularity": 24847,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "docker",
    "popularity": 24795,
    "color": "#2396ed",
    "isSquare": false
  },
  {
    "name": "docker-icon",
    "popularity": 24795,
    "color": "#2396ed",
    "isSquare": true
  },
  {
    "name": "jwt",
    "popularity": 24265,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "jwt-icon",
    "popularity": 24265,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "mailgun",
    "popularity": 24050,
    "color": "#131b20",
    "isSquare": false
  },
  {
    "name": "mailgun-icon",
    "popularity": 24050,
    "color": "#f06b66",
    "isSquare": true
  },
  {
    "name": "codesee",
    "popularity": 21620,
    "color": "#26d3d9",
    "isSquare": false
  },
  {
    "name": "codesee-icon",
    "popularity": 21620,
    "color": "#cdd926",
    "isSquare": false
  },
  {
    "name": "kotlin",
    "popularity": 21170,
    "color": "#e44857",
    "isSquare": false
  },
  {
    "name": "kotlin-icon",
    "popularity": 21170,
    "color": "#e44857",
    "isSquare": true
  },
  {
    "name": "snaplet",
    "popularity": 20721,
    "color": "#231f20",
    "isSquare": false
  },
  {
    "name": "snaplet-icon",
    "popularity": 20721,
    "color": "#231f20",
    "isSquare": true
  },
  {
    "name": "seneca",
    "popularity": 20667,
    "color": "#26d96b",
    "isSquare": true
  },
  {
    "name": "nextjs-icon",
    "popularity": 19255,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "apostrophe",
    "popularity": 19125,
    "color": "#b327bf",
    "isSquare": true
  },
  {
    "name": "loader",
    "popularity": 18968,
    "color": "#497bbb",
    "isSquare": true
  },
  {
    "name": "google-wallet",
    "popularity": 17016,
    "color": "#1476C6",
    "isSquare": true
  },
  {
    "name": "nativescript",
    "popularity": 16764,
    "color": "#3c5afd",
    "isSquare": true
  },
  {
    "name": "haml",
    "popularity": 16422,
    "color": "#3f3e29",
    "isSquare": true
  },
  {
    "name": "aws-config",
    "popularity": 15836,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "firefox",
    "popularity": 15758,
    "color": "#fff44f",
    "isSquare": true
  },
  {
    "name": "pulumi",
    "popularity": 15554,
    "color": "#f26e7e",
    "isSquare": false
  },
  {
    "name": "pulumi-icon",
    "popularity": 15554,
    "color": "#f26e7e",
    "isSquare": true
  },
  {
    "name": "ant-design",
    "popularity": 14746,
    "color": "#f74a5c",
    "isSquare": true
  },
  {
    "name": "html5-boilerplate",
    "popularity": 14635,
    "color": "#466770",
    "isSquare": true
  },
  {
    "name": "jsfiddle",
    "popularity": 14551,
    "color": "#0084ff",
    "isSquare": true
  },
  {
    "name": "rax",
    "popularity": 14485,
    "color": "#f76927",
    "isSquare": true
  },
  {
    "name": "semantic-ui",
    "popularity": 14444,
    "color": "#34bdb2",
    "isSquare": true
  },
  {
    "name": "component",
    "popularity": 14283,
    "color": "#7A797A",
    "isSquare": true
  },
  {
    "name": "imba",
    "popularity": 14271,
    "color": "#273240",
    "isSquare": false
  },
  {
    "name": "imba-icon",
    "popularity": 14271,
    "color": "#16cec6",
    "isSquare": true
  },
  {
    "name": "gridsome",
    "popularity": 14201,
    "color": "#27a59b",
    "isSquare": false
  },
  {
    "name": "gridsome-icon",
    "popularity": 14201,
    "color": "#27a59b",
    "isSquare": true
  },
  {
    "name": "whatsapp",
    "popularity": 13994,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "whatsapp-icon",
    "popularity": 13994,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "tauri",
    "popularity": 13807,
    "color": "#ffc131",
    "isSquare": true
  },
  {
    "name": "aurelia",
    "popularity": 13640,
    "color": "#6e4d9b",
    "isSquare": true
  },
  {
    "name": "aws-s3",
    "popularity": 12641,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "replay",
    "popularity": 12580,
    "color": "#f41c52",
    "isSquare": false
  },
  {
    "name": "replay-icon",
    "popularity": 12580,
    "color": "#f41c52",
    "isSquare": true
  },
  {
    "name": "grape",
    "popularity": 12362,
    "color": "#6C8A55",
    "isSquare": true
  },
  {
    "name": "browsersync",
    "popularity": 12175,
    "color": "#f14646",
    "isSquare": false
  },
  {
    "name": "createjs",
    "popularity": 12111,
    "color": "#405261",
    "isSquare": true
  },
  {
    "name": "workos",
    "popularity": 12110,
    "color": "#29363d",
    "isSquare": false
  },
  {
    "name": "workos-icon",
    "popularity": 12110,
    "color": "#6363f1",
    "isSquare": true
  },
  {
    "name": "deploy",
    "popularity": 11712,
    "color": "#030000",
    "isSquare": false
  },
  {
    "name": "svg",
    "popularity": 11361,
    "color": "#ffb13b",
    "isSquare": true
  },
  {
    "name": "meteor",
    "popularity": 11050,
    "color": "#df4f4f",
    "isSquare": false
  },
  {
    "name": "meteor-icon",
    "popularity": 11050,
    "color": "#df4f4f",
    "isSquare": true
  },
  {
    "name": "rocksdb",
    "popularity": 10853,
    "color": "#f7be01",
    "isSquare": true
  },
  {
    "name": "svelte-kit",
    "popularity": 10719,
    "color": "#8d8d93",
    "isSquare": false
  },
  {
    "name": "c",
    "popularity": 10656,
    "color": "#a9b9cb",
    "isSquare": true
  },
  {
    "name": "algolia",
    "popularity": 10339,
    "color": "#5468ff",
    "isSquare": false
  },
  {
    "name": "architect",
    "popularity": 10291,
    "color": "#77d926",
    "isSquare": false
  },
  {
    "name": "architect-icon",
    "popularity": 10291,
    "color": "#269ad9",
    "isSquare": true
  },
  {
    "name": "bash",
    "popularity": 10109,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "bash-icon",
    "popularity": 10109,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "helm",
    "popularity": 10102,
    "color": "#0f1689",
    "isSquare": true
  },
  {
    "name": "ebanx",
    "popularity": 9715,
    "color": "#0051ff",
    "isSquare": false
  },
  {
    "name": "maven",
    "popularity": 9610,
    "color": "#e97826",
    "isSquare": false
  },
  {
    "name": "hugo",
    "popularity": 9515,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "foundation",
    "popularity": 9446,
    "color": "#cde9ee",
    "isSquare": true
  },
  {
    "name": "sherlock",
    "popularity": 8640,
    "color": "#ffc700",
    "isSquare": false
  },
  {
    "name": "milligram",
    "popularity": 8502,
    "color": "#9b4dca",
    "isSquare": true
  },
  {
    "name": "vine",
    "popularity": 8350,
    "color": "#00AA7F",
    "isSquare": false
  },
  {
    "name": "neon",
    "popularity": 7977,
    "color": "#1a1a1a",
    "isSquare": false
  },
  {
    "name": "neon-icon",
    "popularity": 7977,
    "color": "#00e0d9",
    "isSquare": true
  },
  {
    "name": "embedly",
    "popularity": 7925,
    "color": "#4ec6e6",
    "isSquare": true
  },
  {
    "name": "dotnet",
    "popularity": 7823,
    "color": "#512bd4",
    "isSquare": true
  },
  {
    "name": "google-cloud",
    "popularity": 7791,
    "color": "#ea4335",
    "isSquare": true
  },
  {
    "name": "turborepo",
    "popularity": 7748,
    "color": "#1e90ff",
    "isSquare": false
  },
  {
    "name": "turborepo-icon",
    "popularity": 7748,
    "color": "#1e90ff",
    "isSquare": true
  },
  {
    "name": "cssnext",
    "popularity": 7556,
    "color": "#5C70B5",
    "isSquare": true
  },
  {
    "name": "cloudflare-workers",
    "popularity": 7552,
    "color": "#d96504",
    "isSquare": false
  },
  {
    "name": "cloudflare-workers-icon",
    "popularity": 7552,
    "color": "#d96504",
    "isSquare": true
  },
  {
    "name": "lotus",
    "popularity": 7522,
    "color": "#502B4D",
    "isSquare": true
  },
  {
    "name": "io",
    "popularity": 7271,
    "color": "#010101",
    "isSquare": true
  },
  {
    "name": "selenium",
    "popularity": 7263,
    "color": "#2cb134",
    "isSquare": true
  },
  {
    "name": "ember",
    "popularity": 7261,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "trello",
    "popularity": 6922,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "meta",
    "popularity": 6919,
    "color": "#0064e1",
    "isSquare": false
  },
  {
    "name": "meta-icon",
    "popularity": 6919,
    "color": "#0064e1",
    "isSquare": true
  },
  {
    "name": "patreon",
    "popularity": 6686,
    "color": "#ff424d",
    "isSquare": true
  },
  {
    "name": "pwa",
    "popularity": 6673,
    "color": "#3d3d3d",
    "isSquare": false
  },
  {
    "name": "android",
    "popularity": 6584,
    "color": "#34a853",
    "isSquare": false
  },
  {
    "name": "android-icon",
    "popularity": 6584,
    "color": "#34a853",
    "isSquare": false
  },
  {
    "name": "mailchimp",
    "popularity": 6555,
    "color": "#0b0b0a",
    "isSquare": false
  },
  {
    "name": "mparticle",
    "popularity": 6361,
    "color": "#a626d9",
    "isSquare": false
  },
  {
    "name": "mparticle-icon",
    "popularity": 6361,
    "color": "#26d95f",
    "isSquare": true
  },
  {
    "name": "ios",
    "popularity": 6330,
    "color": "#d6d926",
    "isSquare": false
  },
  {
    "name": "edgedb",
    "popularity": 6276,
    "color": "#4d4d4d",
    "isSquare": false
  },
  {
    "name": "fluxxor",
    "popularity": 6131,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "kafka",
    "popularity": 6108,
    "color": "#1a1919",
    "isSquare": false
  },
  {
    "name": "kafka-icon",
    "popularity": 6108,
    "color": "#1a1919",
    "isSquare": false
  },
  {
    "name": "reddit",
    "popularity": 6024,
    "color": "#ff4500",
    "isSquare": false
  },
  {
    "name": "reddit-icon",
    "popularity": 6024,
    "color": "#ff4500",
    "isSquare": true
  },
  {
    "name": "sourcegraph",
    "popularity": 6019,
    "color": "#f96316",
    "isSquare": true
  },
  {
    "name": "x",
    "popularity": 5909,
    "color": "#26d926",
    "isSquare": true
  },
  {
    "name": "jira",
    "popularity": 5826,
    "color": "#2684ff",
    "isSquare": true
  },
  {
    "name": "brave",
    "popularity": 5800,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "webix",
    "popularity": 5734,
    "color": "#542c65",
    "isSquare": false
  },
  {
    "name": "webix-icon",
    "popularity": 5734,
    "color": "#542c65",
    "isSquare": true
  },
  {
    "name": "sonarlint",
    "popularity": 5677,
    "color": "#cb2029",
    "isSquare": false
  },
  {
    "name": "sonarlint-icon",
    "popularity": 5677,
    "color": "#cb2029",
    "isSquare": true
  },
  {
    "name": "swiftype",
    "popularity": 5657,
    "color": "#f55341",
    "isSquare": true
  },
  {
    "name": "drizzle",
    "popularity": 5614,
    "color": "#5e464d",
    "isSquare": true
  },
  {
    "name": "drizzle-icon",
    "popularity": 5614,
    "color": "#5e464d",
    "isSquare": true
  },
  {
    "name": "socket-io",
    "popularity": 5564,
    "color": "#010101",
    "isSquare": true
  },
  {
    "name": "forest",
    "popularity": 5537,
    "color": "#FFF",
    "isSquare": true
  },
  {
    "name": "circleci",
    "popularity": 5379,
    "color": "#343434",
    "isSquare": true
  },
  {
    "name": "lastfm",
    "popularity": 5337,
    "color": "#d41107",
    "isSquare": false
  },
  {
    "name": "pushbullet",
    "popularity": 5236,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "gradle",
    "popularity": 5182,
    "color": "#02303a",
    "isSquare": true
  },
  {
    "name": "hasura",
    "popularity": 5138,
    "color": "#1eb4d4",
    "isSquare": false
  },
  {
    "name": "hasura-icon",
    "popularity": 5138,
    "color": "#1eb4d4",
    "isSquare": true
  },
  {
    "name": "qdrant",
    "popularity": 4964,
    "color": "#24386c",
    "isSquare": false
  },
  {
    "name": "qdrant-icon",
    "popularity": 4964,
    "color": "#24386c",
    "isSquare": true
  },
  {
    "name": "webkit",
    "popularity": 4855,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "fly",
    "popularity": 4816,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "segment",
    "popularity": 4775,
    "color": "#4fb58b",
    "isSquare": false
  },
  {
    "name": "segment-icon",
    "popularity": 4775,
    "color": "#4fb58b",
    "isSquare": true
  },
  {
    "name": "brackets",
    "popularity": 4751,
    "color": "#115a91",
    "isSquare": true
  },
  {
    "name": "neo4j",
    "popularity": 4509,
    "color": "#018bff",
    "isSquare": false
  },
  {
    "name": "pixijs",
    "popularity": 4444,
    "color": "#ea1e63",
    "isSquare": false
  },
  {
    "name": "planetscale",
    "popularity": 4407,
    "color": "#d92680",
    "isSquare": true
  },
  {
    "name": "mootools",
    "popularity": 4377,
    "color": "#414347",
    "isSquare": false
  },
  {
    "name": "ruby",
    "popularity": 4289,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "aws-sqs",
    "popularity": 4164,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "chroma",
    "popularity": 4127,
    "color": "#ffde2d",
    "isSquare": false
  },
  {
    "name": "flask",
    "popularity": 4080,
    "color": "#5f26d9",
    "isSquare": true
  },
  {
    "name": "falcor",
    "popularity": 4056,
    "color": "#4cad31",
    "isSquare": true
  },
  {
    "name": "jquery-mobile",
    "popularity": 3983,
    "color": "#0481a3",
    "isSquare": true
  },
  {
    "name": "speedcurve",
    "popularity": 3860,
    "color": "#4295c2",
    "isSquare": true
  },
  {
    "name": "steam",
    "popularity": 3845,
    "color": "#1a1918",
    "isSquare": true
  },
  {
    "name": "recaptcha",
    "popularity": 3762,
    "color": "#1c3aa9",
    "isSquare": true
  },
  {
    "name": "winglang",
    "popularity": 3681,
    "color": "#68d2c2",
    "isSquare": false
  },
  {
    "name": "winglang-icon",
    "popularity": 3681,
    "color": "#68d2c2",
    "isSquare": false
  },
  {
    "name": "thymeleaf",
    "popularity": 3630,
    "color": "#333",
    "isSquare": false
  },
  {
    "name": "thymeleaf-icon",
    "popularity": 3630,
    "color": "#005f0f",
    "isSquare": true
  },
  {
    "name": "woopra",
    "popularity": 3604,
    "color": "#020202",
    "isSquare": false
  },
  {
    "name": "turbopack",
    "popularity": 3595,
    "color": "#0096ff",
    "isSquare": false
  },
  {
    "name": "turbopack-icon",
    "popularity": 3595,
    "color": "#0096ff",
    "isSquare": true
  },
  {
    "name": "atomic",
    "popularity": 3541,
    "color": "#1e6efa",
    "isSquare": false
  },
  {
    "name": "atomic-icon",
    "popularity": 3541,
    "color": "#1e6efa",
    "isSquare": true
  },
  {
    "name": "terminal",
    "popularity": 3539,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "postman",
    "popularity": 3505,
    "color": "#ff6c37",
    "isSquare": false
  },
  {
    "name": "postman-icon",
    "popularity": 3505,
    "color": "#ff6c37",
    "isSquare": true
  },
  {
    "name": "maestro",
    "popularity": 3487,
    "color": "#6c6bbd",
    "isSquare": true
  },
  {
    "name": "eventbrite",
    "popularity": 3435,
    "color": "#f05537",
    "isSquare": false
  },
  {
    "name": "eventbrite-icon",
    "popularity": 3435,
    "color": "#f05537",
    "isSquare": true
  },
  {
    "name": "discord",
    "popularity": 3404,
    "color": "#5865f2",
    "isSquare": false
  },
  {
    "name": "discord-icon",
    "popularity": 3404,
    "color": "#5865f2",
    "isSquare": true
  },
  {
    "name": "prestashop",
    "popularity": 3382,
    "color": "#d94726",
    "isSquare": false
  },
  {
    "name": "prestashop-icon",
    "popularity": 3382,
    "color": "#65d926",
    "isSquare": true
  },
  {
    "name": "pinecone",
    "popularity": 3167,
    "color": "#201d1e",
    "isSquare": false
  },
  {
    "name": "pinecone-icon",
    "popularity": 3167,
    "color": "#201d1e",
    "isSquare": true
  },
  {
    "name": "myth",
    "popularity": 3131,
    "color": "#000",
    "isSquare": false
  },
  {
    "name": "airbrake",
    "popularity": 3045,
    "color": "orange",
    "isSquare": false
  },
  {
    "name": "fastlane",
    "popularity": 3028,
    "color": "#0a7bff",
    "isSquare": true
  },
  {
    "name": "es6",
    "popularity": 2977,
    "color": "#F26522",
    "isSquare": true
  },
  {
    "name": "haxe",
    "popularity": 2744,
    "color": "#f68712",
    "isSquare": true
  },
  {
    "name": "nocodb",
    "popularity": 2716,
    "color": "#0381fd",
    "isSquare": true
  },
  {
    "name": "jekyll",
    "popularity": 2680,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "fastapi",
    "popularity": 2607,
    "color": "#009688",
    "isSquare": false
  },
  {
    "name": "fastapi-icon",
    "popularity": 2607,
    "color": "#009688",
    "isSquare": true
  },
  {
    "name": "phonegap",
    "popularity": 2477,
    "color": "#266ed9",
    "isSquare": true
  },
  {
    "name": "cocoapods",
    "popularity": 2466,
    "color": "#fa2a00",
    "isSquare": true
  },
  {
    "name": "swift",
    "popularity": 2446,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "qwen",
    "popularity": 2326,
    "color": "#623ae7",
    "isSquare": false
  },
  {
    "name": "qwen-icon",
    "popularity": 2326,
    "color": "#623ae7",
    "isSquare": true
  },
  {
    "name": "letsencrypt",
    "popularity": 2291,
    "color": "#ffa400",
    "isSquare": true
  },
  {
    "name": "google-calendar",
    "popularity": 2280,
    "color": "#4285f4",
    "isSquare": true
  },
  {
    "name": "bosun",
    "popularity": 2269,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "xero",
    "popularity": 2256,
    "color": "#1fc0e7",
    "isSquare": true
  },
  {
    "name": "mandrill",
    "popularity": 2249,
    "color": "#E6E6E1",
    "isSquare": true
  },
  {
    "name": "twitch",
    "popularity": 2233,
    "color": "#5a3e85",
    "isSquare": true
  },
  {
    "name": "trpc",
    "popularity": 2223,
    "color": "#398ccb",
    "isSquare": true
  },
  {
    "name": "zig",
    "popularity": 2136,
    "color": "#f7a41d",
    "isSquare": false
  },
  {
    "name": "tensorflow",
    "popularity": 2130,
    "color": "#e55b2d",
    "isSquare": true
  },
  {
    "name": "php",
    "popularity": 2112,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "wordpress",
    "popularity": 2076,
    "color": "#00749a",
    "isSquare": false
  },
  {
    "name": "wordpress-icon",
    "popularity": 2076,
    "color": "#464342",
    "isSquare": true
  },
  {
    "name": "datadog",
    "popularity": 2048,
    "color": "#632ca6",
    "isSquare": true
  },
  {
    "name": "datadog-icon",
    "popularity": 2048,
    "color": "#632ca6",
    "isSquare": true
  },
  {
    "name": "unity",
    "popularity": 2027,
    "color": "#222c37",
    "isSquare": true
  },
  {
    "name": "aws-redshift",
    "popularity": 2013,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "mastodon",
    "popularity": 2003,
    "color": "#3088d4",
    "isSquare": false
  },
  {
    "name": "mastodon-icon",
    "popularity": 2003,
    "color": "#3088d4",
    "isSquare": true
  },
  {
    "name": "foundationdb",
    "popularity": 1977,
    "color": "#0081ff",
    "isSquare": false
  },
  {
    "name": "foundationdb-icon",
    "popularity": 1977,
    "color": "#0073e0",
    "isSquare": false
  },
  {
    "name": "matplotlib",
    "popularity": 1951,
    "color": "#11557c",
    "isSquare": false
  },
  {
    "name": "matplotlib-icon",
    "popularity": 1951,
    "color": "#ff6800",
    "isSquare": true
  },
  {
    "name": "upstash",
    "popularity": 1932,
    "color": "#00c98d",
    "isSquare": false
  },
  {
    "name": "upstash-icon",
    "popularity": 1932,
    "color": "#00c98d",
    "isSquare": true
  },
  {
    "name": "bem",
    "popularity": 1877,
    "color": "#010101",
    "isSquare": true
  },
  {
    "name": "dreamhost",
    "popularity": 1846,
    "color": "#1f3244",
    "isSquare": true
  },
  {
    "name": "promises",
    "popularity": 1827,
    "color": "#fbde34",
    "isSquare": true
  },
  {
    "name": "bitcoin",
    "popularity": 1824,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "kraken",
    "popularity": 1751,
    "color": "#2e3192",
    "isSquare": true
  },
  {
    "name": "aws-iam",
    "popularity": 1716,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "deepseek",
    "popularity": 1691,
    "color": "#4d6bfe",
    "isSquare": false
  },
  {
    "name": "deepseek-icon",
    "popularity": 1691,
    "color": "#4d6bfe",
    "isSquare": true
  },
  {
    "name": "serveless",
    "popularity": 1647,
    "color": "#FFD426",
    "isSquare": true
  },
  {
    "name": "producthunt",
    "popularity": 1631,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "appcelerator",
    "popularity": 1601,
    "color": "#B01C33",
    "isSquare": true
  },
  {
    "name": "craft",
    "popularity": 1588,
    "color": "#CB5546",
    "isSquare": false
  },
  {
    "name": "webrtc",
    "popularity": 1559,
    "color": "#f60",
    "isSquare": true
  },
  {
    "name": "laravel",
    "popularity": 1554,
    "color": "#ff2d20",
    "isSquare": true
  },
  {
    "name": "go",
    "popularity": 1544,
    "color": "#00acd7",
    "isSquare": false
  },
  {
    "name": "hermes",
    "popularity": 1527,
    "color": "#2bb673",
    "isSquare": true
  },
  {
    "name": "flutter",
    "popularity": 1519,
    "color": "#47c5fb",
    "isSquare": true
  },
  {
    "name": "perplexity",
    "popularity": 1506,
    "color": "#3f7e8b",
    "isSquare": false
  },
  {
    "name": "perplexity-icon",
    "popularity": 1506,
    "color": "#3f7e8b",
    "isSquare": true
  },
  {
    "name": "cloudant",
    "popularity": 1498,
    "color": "#72C7E6",
    "isSquare": true
  },
  {
    "name": "eleventy",
    "popularity": 1471,
    "color": "#5cd926",
    "isSquare": true
  },
  {
    "name": "element",
    "popularity": 1465,
    "color": "#409eff",
    "isSquare": true
  },
  {
    "name": "htmx",
    "popularity": 1384,
    "color": "#111",
    "isSquare": false
  },
  {
    "name": "htmx-icon",
    "popularity": 1384,
    "color": "#111",
    "isSquare": false
  },
  {
    "name": "sonarqube",
    "popularity": 1383,
    "color": "#070707",
    "isSquare": false
  },
  {
    "name": "todomvc",
    "popularity": 1376,
    "color": "#383838",
    "isSquare": true
  },
  {
    "name": "atom",
    "popularity": 1375,
    "color": "#26b2d9",
    "isSquare": false
  },
  {
    "name": "atom-icon",
    "popularity": 1375,
    "color": "#60b57d",
    "isSquare": true
  },
  {
    "name": "dbt",
    "popularity": 1366,
    "color": "#262a38",
    "isSquare": false
  },
  {
    "name": "dbt-icon",
    "popularity": 1366,
    "color": "#ff694a",
    "isSquare": true
  },
  {
    "name": "solr",
    "popularity": 1354,
    "color": "#201f26",
    "isSquare": false
  },
  {
    "name": "neat",
    "popularity": 1334,
    "color": "#00d4ff",
    "isSquare": true
  },
  {
    "name": "geetest",
    "popularity": 1311,
    "color": "#347eff",
    "isSquare": false
  },
  {
    "name": "geetest-icon",
    "popularity": 1311,
    "color": "#347eff",
    "isSquare": true
  },
  {
    "name": "javascript",
    "popularity": 1292,
    "color": "#f7df1e",
    "isSquare": true
  },
  {
    "name": "buddy",
    "popularity": 1283,
    "color": "#00c9ff",
    "isSquare": true
  },
  {
    "name": "vim",
    "popularity": 1281,
    "color": "#fefefe",
    "isSquare": true
  },
  {
    "name": "compose",
    "popularity": 1266,
    "color": "#038dc8",
    "isSquare": false
  },
  {
    "name": "kinto",
    "popularity": 1264,
    "color": "#feec7f",
    "isSquare": false
  },
  {
    "name": "kinto-icon",
    "popularity": 1264,
    "color": "#feec7f",
    "isSquare": false
  },
  {
    "name": "relay",
    "popularity": 1248,
    "color": "#f26b00",
    "isSquare": false
  },
  {
    "name": "derby",
    "popularity": 1241,
    "color": "#e84b52",
    "isSquare": false
  },
  {
    "name": "wmr",
    "popularity": 1223,
    "color": "#371a45",
    "isSquare": true
  },
  {
    "name": "soundcloud",
    "popularity": 1210,
    "color": "#f04923",
    "isSquare": false
  },
  {
    "name": "greensock",
    "popularity": 1201,
    "color": "#efefef",
    "isSquare": false
  },
  {
    "name": "greensock-icon",
    "popularity": 1201,
    "color": "#efefef",
    "isSquare": true
  },
  {
    "name": "marionette",
    "popularity": 1169,
    "color": "#939598",
    "isSquare": true
  },
  {
    "name": "matter",
    "popularity": 1166,
    "color": "#231f20",
    "isSquare": false
  },
  {
    "name": "matter-icon",
    "popularity": 1166,
    "color": "#231f20",
    "isSquare": true
  },
  {
    "name": "signal",
    "popularity": 1147,
    "color": "#3a76f0",
    "isSquare": true
  },
  {
    "name": "hoodie",
    "popularity": 1128,
    "color": "#E94E1B",
    "isSquare": false
  },
  {
    "name": "logstash",
    "popularity": 1114,
    "color": "#fec514",
    "isSquare": true
  },
  {
    "name": "sap",
    "popularity": 1080,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "incident",
    "popularity": 1043,
    "color": "#f25533",
    "isSquare": false
  },
  {
    "name": "incident-icon",
    "popularity": 1043,
    "color": "#f25533",
    "isSquare": true
  },
  {
    "name": "baseline",
    "popularity": 1031,
    "color": "#99dbb1",
    "isSquare": false
  },
  {
    "name": "figma",
    "popularity": 1001,
    "color": "#0acf83",
    "isSquare": true
  },
  {
    "name": "pipefy",
    "popularity": 1000,
    "color": "#3bd926",
    "isSquare": false
  },
  {
    "name": "tsuru",
    "popularity": 989,
    "color": "#3d9",
    "isSquare": true
  },
  {
    "name": "reindex",
    "popularity": 981,
    "color": "#62bbe7",
    "isSquare": true
  },
  {
    "name": "logentries",
    "popularity": 979,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "dat",
    "popularity": 915,
    "color": "#95CA71",
    "isSquare": true
  },
  {
    "name": "mattermost",
    "popularity": 890,
    "color": "#0058cc",
    "isSquare": false
  },
  {
    "name": "mattermost-icon",
    "popularity": 890,
    "color": "#0058cc",
    "isSquare": true
  },
  {
    "name": "kubernetes",
    "popularity": 863,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "messenger",
    "popularity": 860,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "homebrew",
    "popularity": 840,
    "color": "#fefefe",
    "isSquare": false
  },
  {
    "name": "adobe",
    "popularity": 815,
    "color": "#fa0f00",
    "isSquare": false
  },
  {
    "name": "adobe-icon",
    "popularity": 815,
    "color": "#fa0f00",
    "isSquare": true
  },
  {
    "name": "youtube",
    "popularity": 815,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "youtube-icon",
    "popularity": 815,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "graphcool",
    "popularity": 808,
    "color": "#27AE60",
    "isSquare": true
  },
  {
    "name": "moon",
    "popularity": 806,
    "color": "#4600d1",
    "isSquare": true
  },
  {
    "name": "kibana",
    "popularity": 801,
    "color": "#f04e98",
    "isSquare": true
  },
  {
    "name": "vault",
    "popularity": 797,
    "color": "#ffd814",
    "isSquare": false
  },
  {
    "name": "vault-icon",
    "popularity": 797,
    "color": "#ffd814",
    "isSquare": true
  },
  {
    "name": "ansible",
    "popularity": 796,
    "color": "#1a1918",
    "isSquare": true
  },
  {
    "name": "loom",
    "popularity": 793,
    "color": "#222",
    "isSquare": false
  },
  {
    "name": "loom-icon",
    "popularity": 793,
    "color": "#625df5",
    "isSquare": true
  },
  {
    "name": "stability-ai",
    "popularity": 793,
    "color": "#e80000",
    "isSquare": false
  },
  {
    "name": "stability-ai-icon",
    "popularity": 793,
    "color": "#e80000",
    "isSquare": true
  },
  {
    "name": "envato",
    "popularity": 792,
    "color": "#82b541",
    "isSquare": false
  },
  {
    "name": "adyen",
    "popularity": 791,
    "color": "#32aa52",
    "isSquare": false
  },
  {
    "name": "paypal",
    "popularity": 785,
    "color": "#27346a",
    "isSquare": true
  },
  {
    "name": "refactor",
    "popularity": 783,
    "color": "#16A085",
    "isSquare": true
  },
  {
    "name": "mailjet",
    "popularity": 770,
    "color": "#131b20",
    "isSquare": false
  },
  {
    "name": "mailjet-icon",
    "popularity": 770,
    "color": "#9585f4",
    "isSquare": true
  },
  {
    "name": "runnable",
    "popularity": 757,
    "color": "#CCADD2",
    "isSquare": true
  },
  {
    "name": "shipit",
    "popularity": 738,
    "color": "#444361",
    "isSquare": true
  },
  {
    "name": "supportkit",
    "popularity": 735,
    "color": "#EC3F3A",
    "isSquare": true
  },
  {
    "name": "argo",
    "popularity": 717,
    "color": "#fefefe",
    "isSquare": false
  },
  {
    "name": "argo-icon",
    "popularity": 717,
    "color": "#fefefe",
    "isSquare": true
  },
  {
    "name": "django",
    "popularity": 706,
    "color": "#092e20",
    "isSquare": false
  },
  {
    "name": "django-icon",
    "popularity": 706,
    "color": "#092e20",
    "isSquare": true
  },
  {
    "name": "streamlit",
    "popularity": 704,
    "color": "#ff4b4b",
    "isSquare": false
  },
  {
    "name": "launchdarkly",
    "popularity": 698,
    "color": "#265cd9",
    "isSquare": false
  },
  {
    "name": "launchdarkly-icon",
    "popularity": 698,
    "color": "#6ed926",
    "isSquare": true
  },
  {
    "name": "glint",
    "popularity": 693,
    "color": "#6bbfa4",
    "isSquare": false
  },
  {
    "name": "morpheus",
    "popularity": 691,
    "color": "#3db5e6",
    "isSquare": false
  },
  {
    "name": "morpheus-icon",
    "popularity": 691,
    "color": "#3db5e6",
    "isSquare": true
  },
  {
    "name": "sidekiq",
    "popularity": 689,
    "color": "#991b21",
    "isSquare": false
  },
  {
    "name": "sidekiq-icon",
    "popularity": 689,
    "color": "#991b21",
    "isSquare": true
  },
  {
    "name": "rust",
    "popularity": 670,
    "color": "#26d94a",
    "isSquare": true
  },
  {
    "name": "model-context-protocol",
    "popularity": 668,
    "color": "#26d92c",
    "isSquare": false
  },
  {
    "name": "model-context-protocol-icon",
    "popularity": 668,
    "color": "#26d9a9",
    "isSquare": true
  },
  {
    "name": "polymer",
    "popularity": 666,
    "color": "#000",
    "isSquare": true
  },
  {
    "name": "webflow",
    "popularity": 666,
    "color": "#4353ff",
    "isSquare": false
  },
  {
    "name": "rabbitmq",
    "popularity": 662,
    "color": "#a9b5af",
    "isSquare": false
  },
  {
    "name": "rabbitmq-icon",
    "popularity": 662,
    "color": "#f60",
    "isSquare": true
  },
  {
    "name": "microcosm",
    "popularity": 660,
    "color": "#184ae8",
    "isSquare": true
  },
  {
    "name": "microsoft",
    "popularity": 657,
    "color": "#706d6e",
    "isSquare": false
  },
  {
    "name": "microsoft-icon",
    "popularity": 657,
    "color": "#f1511b",
    "isSquare": true
  },
  {
    "name": "manifoldjs",
    "popularity": 643,
    "color": "#F22E2E",
    "isSquare": false
  },
  {
    "name": "box",
    "popularity": 634,
    "color": "#0061d5",
    "isSquare": false
  },
  {
    "name": "hbase",
    "popularity": 611,
    "color": "#d926ca",
    "isSquare": true
  },
  {
    "name": "famous",
    "popularity": 584,
    "color": "#000",
    "isSquare": true
  },
  {
    "name": "litmus",
    "popularity": 584,
    "color": "#6a7a55",
    "isSquare": true
  },
  {
    "name": "solid",
    "popularity": 582,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "squarespace",
    "popularity": 582,
    "color": "#1a1918",
    "isSquare": true
  },
  {
    "name": "hack",
    "popularity": 573,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "crystal",
    "popularity": 567,
    "color": "#5026d9",
    "isSquare": true
  },
  {
    "name": "prometheus",
    "popularity": 551,
    "color": "#da4e31",
    "isSquare": true
  },
  {
    "name": "canjs",
    "popularity": 550,
    "color": "#1a1918",
    "isSquare": false
  },
  {
    "name": "branch",
    "popularity": 546,
    "color": "#333e48",
    "isSquare": false
  },
  {
    "name": "branch-icon",
    "popularity": 546,
    "color": "#333e48",
    "isSquare": true
  },
  {
    "name": "grafana",
    "popularity": 544,
    "color": "#fff100",
    "isSquare": true
  },
  {
    "name": "replit",
    "popularity": 540,
    "color": "#f26207",
    "isSquare": false
  },
  {
    "name": "replit-icon",
    "popularity": 540,
    "color": "#f26207",
    "isSquare": true
  },
  {
    "name": "autocode",
    "popularity": 532,
    "color": "#18112E",
    "isSquare": true
  },
  {
    "name": "spring",
    "popularity": 527,
    "color": "#6db33f",
    "isSquare": false
  },
  {
    "name": "spring-icon",
    "popularity": 527,
    "color": "#6db33f",
    "isSquare": true
  },
  {
    "name": "redsmin",
    "popularity": 515,
    "color": "#ee3a43",
    "isSquare": true
  },
  {
    "name": "brainjs",
    "popularity": 512,
    "color": "#f3df49",
    "isSquare": true
  },
  {
    "name": "steroids",
    "popularity": 509,
    "color": "#36373A",
    "isSquare": true
  },
  {
    "name": "pipedream",
    "popularity": 507,
    "color": "#2647d9",
    "isSquare": false
  },
  {
    "name": "gradio",
    "popularity": 497,
    "color": "#f9d100",
    "isSquare": false
  },
  {
    "name": "gradio-icon",
    "popularity": 497,
    "color": "#f9d100",
    "isSquare": true
  },
  {
    "name": "jupyter",
    "popularity": 486,
    "color": "#4e4e4e",
    "isSquare": true
  },
  {
    "name": "rush",
    "popularity": 470,
    "color": "#c95228",
    "isSquare": false
  },
  {
    "name": "rush-icon",
    "popularity": 470,
    "color": "#555",
    "isSquare": true
  },
  {
    "name": "flat-ui",
    "popularity": 458,
    "color": "#57bbfb",
    "isSquare": true
  },
  {
    "name": "campfire",
    "popularity": 457,
    "color": "#695114",
    "isSquare": true
  },
  {
    "name": "heroku-redis",
    "popularity": 456,
    "color": "#283174",
    "isSquare": true
  },
  {
    "name": "webcomponents",
    "popularity": 452,
    "color": "#166da5",
    "isSquare": true
  },
  {
    "name": "500px",
    "popularity": 451,
    "color": "#d96526",
    "isSquare": false
  },
  {
    "name": "aha",
    "popularity": 451,
    "color": "#0073cf",
    "isSquare": false
  },
  {
    "name": "codebase",
    "popularity": 448,
    "color": "#1b6db2",
    "isSquare": false
  },
  {
    "name": "meanio",
    "popularity": 439,
    "color": "#007D96",
    "isSquare": true
  },
  {
    "name": "nodal",
    "popularity": 431,
    "color": "#138ee2",
    "isSquare": true
  },
  {
    "name": "bitballoon",
    "popularity": 427,
    "color": "#173148",
    "isSquare": false
  },
  {
    "name": "apphub",
    "popularity": 424,
    "color": "#00A4D3",
    "isSquare": true
  },
  {
    "name": "notion",
    "popularity": 424,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "notion-icon",
    "popularity": 424,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "sagui",
    "popularity": 423,
    "color": "#753f8c",
    "isSquare": true
  },
  {
    "name": "webassembly",
    "popularity": 411,
    "color": "#654ff0",
    "isSquare": true
  },
  {
    "name": "cloudera",
    "popularity": 408,
    "color": "#004E6F",
    "isSquare": false
  },
  {
    "name": "marvel",
    "popularity": 407,
    "color": "#20b6ff",
    "isSquare": false
  },
  {
    "name": "vagrant",
    "popularity": 400,
    "color": "#1159cc",
    "isSquare": false
  },
  {
    "name": "vagrant-icon",
    "popularity": 400,
    "color": "#1159cc",
    "isSquare": true
  },
  {
    "name": "perl",
    "popularity": 391,
    "color": "#1b1918",
    "isSquare": true
  },
  {
    "name": "conda",
    "popularity": 389,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "play",
    "popularity": 389,
    "color": "#92d13d",
    "isSquare": false
  },
  {
    "name": "medusa",
    "popularity": 378,
    "color": "#111",
    "isSquare": false
  },
  {
    "name": "medusa-icon",
    "popularity": 378,
    "color": "#592ee1",
    "isSquare": true
  },
  {
    "name": "botanalytics",
    "popularity": 376,
    "color": "#0385cd",
    "isSquare": true
  },
  {
    "name": "spark",
    "popularity": 375,
    "color": "#ffa64d",
    "isSquare": true
  },
  {
    "name": "qlik",
    "popularity": 374,
    "color": "#54565b",
    "isSquare": false
  },
  {
    "name": "mistral-ai",
    "popularity": 357,
    "color": "#eb5829",
    "isSquare": false
  },
  {
    "name": "mistral-ai-icon",
    "popularity": 357,
    "color": "#eb5829",
    "isSquare": true
  },
  {
    "name": "aix",
    "popularity": 356,
    "color": "#6fdc8c",
    "isSquare": false
  },
  {
    "name": "certbot",
    "popularity": 351,
    "color": "#ed1c24",
    "isSquare": false
  },
  {
    "name": "seaborn",
    "popularity": 347,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "seaborn-icon",
    "popularity": 347,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "google-icon",
    "popularity": 338,
    "color": "#4285f4",
    "isSquare": true
  },
  {
    "name": "magento",
    "popularity": 331,
    "color": "#27140D",
    "isSquare": true
  },
  {
    "name": "wix",
    "popularity": 331,
    "color": "#d95026",
    "isSquare": false
  },
  {
    "name": "google-ads",
    "popularity": 327,
    "color": "#fbbc04",
    "isSquare": true
  },
  {
    "name": "maxcdn",
    "popularity": 325,
    "color": "#FFF",
    "isSquare": false
  },
  {
    "name": "godot",
    "popularity": 324,
    "color": "#414042",
    "isSquare": false
  },
  {
    "name": "godot-icon",
    "popularity": 324,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "wire",
    "popularity": 322,
    "color": "#d92647",
    "isSquare": false
  },
  {
    "name": "qwik",
    "popularity": 318,
    "color": "#18b6f6",
    "isSquare": false
  },
  {
    "name": "qwik-icon",
    "popularity": 318,
    "color": "#18b6f6",
    "isSquare": true
  },
  {
    "name": "blossom",
    "popularity": 307,
    "color": "#122941",
    "isSquare": true
  },
  {
    "name": "zsh",
    "popularity": 306,
    "color": "#f15a24",
    "isSquare": false
  },
  {
    "name": "slim",
    "popularity": 304,
    "color": "#729544",
    "isSquare": true
  },
  {
    "name": "gin",
    "popularity": 302,
    "color": "#f3d71d",
    "isSquare": true
  },
  {
    "name": "nodewebkit",
    "popularity": 302,
    "color": "#eff3f3",
    "isSquare": true
  },
  {
    "name": "biomejs",
    "popularity": 298,
    "color": "#60a5fa",
    "isSquare": false
  },
  {
    "name": "biomejs-icon",
    "popularity": 298,
    "color": "#60a5fa",
    "isSquare": true
  },
  {
    "name": "envoy",
    "popularity": 296,
    "color": "#4a0d66",
    "isSquare": false
  },
  {
    "name": "envoy-icon",
    "popularity": 296,
    "color": "#b31aab",
    "isSquare": true
  },
  {
    "name": "apple-pay",
    "popularity": 295,
    "color": "#2fd926",
    "isSquare": false
  },
  {
    "name": "siphon",
    "popularity": 290,
    "color": "#4C728C",
    "isSquare": true
  },
  {
    "name": "intercom",
    "popularity": 284,
    "color": "#d92647",
    "isSquare": false
  },
  {
    "name": "intercom-icon",
    "popularity": 284,
    "color": "#269ad9",
    "isSquare": true
  },
  {
    "name": "google-drive",
    "popularity": 283,
    "color": "#0066da",
    "isSquare": true
  },
  {
    "name": "influxdb",
    "popularity": 282,
    "color": "#020a47",
    "isSquare": false
  },
  {
    "name": "influxdb-icon",
    "popularity": 282,
    "color": "#020a47",
    "isSquare": true
  },
  {
    "name": "ethereum",
    "popularity": 280,
    "color": "#8c8c8c",
    "isSquare": false
  },
  {
    "name": "dart",
    "popularity": 278,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "jhipster",
    "popularity": 270,
    "color": "#343333",
    "isSquare": false
  },
  {
    "name": "jhipster-icon",
    "popularity": 270,
    "color": "#3474ab",
    "isSquare": false
  },
  {
    "name": "aws-dynamodb",
    "popularity": 264,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "cljs",
    "popularity": 262,
    "color": "#96ca4b",
    "isSquare": true
  },
  {
    "name": "descript",
    "popularity": 259,
    "color": "#0062ff",
    "isSquare": false
  },
  {
    "name": "descript-icon",
    "popularity": 259,
    "color": "#0062ff",
    "isSquare": true
  },
  {
    "name": "jsbin",
    "popularity": 258,
    "color": "#8e979a",
    "isSquare": true
  },
  {
    "name": "mautic",
    "popularity": 252,
    "color": "#4e5e9e",
    "isSquare": false
  },
  {
    "name": "mautic-icon",
    "popularity": 252,
    "color": "#4e5e9e",
    "isSquare": true
  },
  {
    "name": "dreamfactory",
    "popularity": 251,
    "color": "#B83C23",
    "isSquare": true
  },
  {
    "name": "malinajs",
    "popularity": 247,
    "color": "green",
    "isSquare": true
  },
  {
    "name": "akamai",
    "popularity": 246,
    "color": "#f79838",
    "isSquare": false
  },
  {
    "name": "lua",
    "popularity": 245,
    "color": "#00007d",
    "isSquare": true
  },
  {
    "name": "stitch",
    "popularity": 243,
    "color": "#ffc600",
    "isSquare": true
  },
  {
    "name": "stdlib",
    "popularity": 240,
    "color": "#f0ad3e",
    "isSquare": false
  },
  {
    "name": "stdlib-icon",
    "popularity": 240,
    "color": "#f0ad3e",
    "isSquare": true
  },
  {
    "name": "tectonic",
    "popularity": 239,
    "color": "#FFF",
    "isSquare": true
  },
  {
    "name": "dgraph",
    "popularity": 236,
    "color": "#ff1800",
    "isSquare": false
  },
  {
    "name": "dgraph-icon",
    "popularity": 236,
    "color": "#ff1800",
    "isSquare": true
  },
  {
    "name": "typeform",
    "popularity": 235,
    "color": "#262627",
    "isSquare": false
  },
  {
    "name": "typeform-icon",
    "popularity": 235,
    "color": "#262627",
    "isSquare": true
  },
  {
    "name": "6px",
    "popularity": 234,
    "color": "#009BDF",
    "isSquare": true
  },
  {
    "name": "linear",
    "popularity": 230,
    "color": "#222326",
    "isSquare": false
  },
  {
    "name": "linear-icon",
    "popularity": 230,
    "color": "#222326",
    "isSquare": true
  },
  {
    "name": "exponent",
    "popularity": 226,
    "color": "#023C69",
    "isSquare": true
  },
  {
    "name": "symfony",
    "popularity": 226,
    "color": "#1a171b",
    "isSquare": true
  },
  {
    "name": "webhooks",
    "popularity": 225,
    "color": "#c73a63",
    "isSquare": true
  },
  {
    "name": "rum",
    "popularity": 224,
    "color": "#883030",
    "isSquare": false
  },
  {
    "name": "puppet",
    "popularity": 222,
    "color": "#ffae1a",
    "isSquare": false
  },
  {
    "name": "puppet-icon",
    "popularity": 222,
    "color": "#ffae1a",
    "isSquare": false
  },
  {
    "name": "snowflake",
    "popularity": 222,
    "color": "#29b5e8",
    "isSquare": false
  },
  {
    "name": "snowflake-icon",
    "popularity": 222,
    "color": "#29b5e8",
    "isSquare": true
  },
  {
    "name": "hibernate",
    "popularity": 219,
    "color": "#59666c",
    "isSquare": true
  },
  {
    "name": "tsu",
    "popularity": 218,
    "color": "#5CD39B",
    "isSquare": true
  },
  {
    "name": "ycombinator",
    "popularity": 215,
    "color": "#fb651e",
    "isSquare": true
  },
  {
    "name": "google-pay",
    "popularity": 214,
    "color": "#5f6368",
    "isSquare": false
  },
  {
    "name": "google-pay-icon",
    "popularity": 214,
    "color": "#EA4335",
    "isSquare": true
  },
  {
    "name": "materializecss",
    "popularity": 207,
    "color": "#eb7077",
    "isSquare": false
  },
  {
    "name": "lit-icon",
    "popularity": 206,
    "color": "#00e8ff",
    "isSquare": true
  },
  {
    "name": "zabbix",
    "popularity": 204,
    "color": "#d40000",
    "isSquare": false
  },
  {
    "name": "hyper",
    "popularity": 203,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "duckduckgo",
    "popularity": 200,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "horizon",
    "popularity": 199,
    "color": "#62B3C5",
    "isSquare": true
  },
  {
    "name": "atlassian",
    "popularity": 197,
    "color": "#2681ff",
    "isSquare": true
  },
  {
    "name": "blueprint",
    "popularity": 196,
    "color": "#00b46f",
    "isSquare": true
  },
  {
    "name": "github-actions",
    "popularity": 196,
    "color": "#4a7ebf",
    "isSquare": true
  },
  {
    "name": "vector",
    "popularity": 195,
    "color": "#10e7ff",
    "isSquare": true
  },
  {
    "name": "couchdb",
    "popularity": 193,
    "color": "#444",
    "isSquare": false
  },
  {
    "name": "couchdb-icon",
    "popularity": 193,
    "color": "#e42528",
    "isSquare": false
  },
  {
    "name": "safari",
    "popularity": 193,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "grok",
    "popularity": 191,
    "color": "#5326d9",
    "isSquare": false
  },
  {
    "name": "grok-icon",
    "popularity": 191,
    "color": "#6b26d9",
    "isSquare": true
  },
  {
    "name": "haiku",
    "popularity": 191,
    "color": "#f1cb2b",
    "isSquare": false
  },
  {
    "name": "haiku-icon",
    "popularity": 191,
    "color": "#f1cb2b",
    "isSquare": true
  },
  {
    "name": "apache",
    "popularity": 187,
    "color": "#e97826",
    "isSquare": false
  },
  {
    "name": "todoist",
    "popularity": 179,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "todoist-icon",
    "popularity": 179,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "ampersand",
    "popularity": 177,
    "color": "#e7168e",
    "isSquare": true
  },
  {
    "name": "facebook",
    "popularity": 177,
    "color": "#1877f2",
    "isSquare": true
  },
  {
    "name": "zulip",
    "popularity": 176,
    "color": "#6e26d9",
    "isSquare": false
  },
  {
    "name": "zulip-icon",
    "popularity": 176,
    "color": "#24adff",
    "isSquare": true
  },
  {
    "name": "arm",
    "popularity": 174,
    "color": "#008fbe",
    "isSquare": false
  },
  {
    "name": "bluetooth",
    "popularity": 174,
    "color": "#0060a9",
    "isSquare": true
  },
  {
    "name": "tumblr",
    "popularity": 174,
    "color": "#303d4d",
    "isSquare": false
  },
  {
    "name": "tumblr-icon",
    "popularity": 174,
    "color": "#303d4d",
    "isSquare": false
  },
  {
    "name": "cassandra",
    "popularity": 173,
    "color": "#373535",
    "isSquare": false
  },
  {
    "name": "bamboo",
    "popularity": 171,
    "color": "#2684ff",
    "isSquare": true
  },
  {
    "name": "leveldb",
    "popularity": 171,
    "color": "#d4eb95",
    "isSquare": true
  },
  {
    "name": "graphene",
    "popularity": 170,
    "color": "#f25f3f",
    "isSquare": true
  },
  {
    "name": "woocommerce",
    "popularity": 168,
    "color": "#7f54b3",
    "isSquare": false
  },
  {
    "name": "woocommerce-icon",
    "popularity": 168,
    "color": "#7f54b3",
    "isSquare": false
  },
  {
    "name": "awesome",
    "popularity": 167,
    "color": "#494368",
    "isSquare": true
  },
  {
    "name": "tor",
    "popularity": 167,
    "color": "#7e4798",
    "isSquare": false
  },
  {
    "name": "modulus",
    "popularity": 165,
    "color": "#C7C8C9",
    "isSquare": true
  },
  {
    "name": "nhost",
    "popularity": 164,
    "color": "#21324b",
    "isSquare": false
  },
  {
    "name": "nhost-icon",
    "popularity": 164,
    "color": "#0052cd",
    "isSquare": true
  },
  {
    "name": "whatwg",
    "popularity": 164,
    "color": "#3c790a",
    "isSquare": true
  },
  {
    "name": "bubble",
    "popularity": 163,
    "color": "#262626",
    "isSquare": false
  },
  {
    "name": "bubble-icon",
    "popularity": 163,
    "color": "#262626",
    "isSquare": true
  },
  {
    "name": "appmaker",
    "popularity": 160,
    "color": "#000",
    "isSquare": true
  },
  {
    "name": "hoa",
    "popularity": 160,
    "color": "#424A52",
    "isSquare": false
  },
  {
    "name": "victorops",
    "popularity": 160,
    "color": "#F9AF4A",
    "isSquare": true
  },
  {
    "name": "codeclimate",
    "popularity": 159,
    "color": "#2b2b2b",
    "isSquare": false
  },
  {
    "name": "codeclimate-icon",
    "popularity": 159,
    "color": "#2b2b2b",
    "isSquare": false
  },
  {
    "name": "keydb",
    "popularity": 156,
    "color": "#ff0",
    "isSquare": false
  },
  {
    "name": "keydb-icon",
    "popularity": 156,
    "color": "#ff0",
    "isSquare": true
  },
  {
    "name": "linkedin",
    "popularity": 155,
    "color": "#0a66c2",
    "isSquare": false
  },
  {
    "name": "linkedin-icon",
    "popularity": 155,
    "color": "#0a66c2",
    "isSquare": true
  },
  {
    "name": "rider",
    "popularity": 155,
    "color": "#dd1265",
    "isSquare": true
  },
  {
    "name": "webplatform",
    "popularity": 150,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "macos",
    "popularity": 149,
    "color": "#be26d9",
    "isSquare": false
  },
  {
    "name": "fsharp",
    "popularity": 147,
    "color": "#378bba",
    "isSquare": true
  },
  {
    "name": "sketch",
    "popularity": 146,
    "color": "#fdad00",
    "isSquare": true
  },
  {
    "name": "yii",
    "popularity": 146,
    "color": "#73b723",
    "isSquare": true
  },
  {
    "name": "mono",
    "popularity": 145,
    "color": "#1a1918",
    "isSquare": true
  },
  {
    "name": "drupal",
    "popularity": 143,
    "color": "#009dde",
    "isSquare": false
  },
  {
    "name": "drupal-icon",
    "popularity": 143,
    "color": "#009dde",
    "isSquare": true
  },
  {
    "name": "supersonic",
    "popularity": 143,
    "color": "#FB5152",
    "isSquare": true
  },
  {
    "name": "zoom",
    "popularity": 141,
    "color": "#0b5cff",
    "isSquare": false
  },
  {
    "name": "zoom-icon",
    "popularity": 141,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "ceylon",
    "popularity": 139,
    "color": "#ab710a",
    "isSquare": false
  },
  {
    "name": "etcd",
    "popularity": 139,
    "color": "#419eda",
    "isSquare": true
  },
  {
    "name": "spotify",
    "popularity": 139,
    "color": "#1ed760",
    "isSquare": false
  },
  {
    "name": "spotify-icon",
    "popularity": 139,
    "color": "#1ed760",
    "isSquare": true
  },
  {
    "name": "joomla",
    "popularity": 137,
    "color": "#f9ae41",
    "isSquare": true
  },
  {
    "name": "jsdelivr",
    "popularity": 137,
    "color": "#e14337",
    "isSquare": true
  },
  {
    "name": "danfo",
    "popularity": 136,
    "color": "#ffdf28",
    "isSquare": true
  },
  {
    "name": "cyclejs",
    "popularity": 135,
    "color": "#51d3d9",
    "isSquare": true
  },
  {
    "name": "amd",
    "popularity": 133,
    "color": "#266ed9",
    "isSquare": false
  },
  {
    "name": "codeception",
    "popularity": 130,
    "color": "#236bfd",
    "isSquare": true
  },
  {
    "name": "dolt",
    "popularity": 130,
    "color": "#29e3c1",
    "isSquare": false
  },
  {
    "name": "clojure",
    "popularity": 129,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "instagram",
    "popularity": 129,
    "color": "#343433",
    "isSquare": false
  },
  {
    "name": "instagram-icon",
    "popularity": 129,
    "color": "#0a0a08",
    "isSquare": true
  },
  {
    "name": "blender",
    "popularity": 128,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "logmatic",
    "popularity": 128,
    "color": "#355E72",
    "isSquare": false
  },
  {
    "name": "raml",
    "popularity": 128,
    "color": "#75c9e1",
    "isSquare": false
  },
  {
    "name": "sidekick",
    "popularity": 128,
    "color": "#E57E41",
    "isSquare": true
  },
  {
    "name": "pypi",
    "popularity": 127,
    "color": "#ccc",
    "isSquare": true
  },
  {
    "name": "bluesky",
    "popularity": 126,
    "color": "#1185fe",
    "isSquare": true
  },
  {
    "name": "solidity",
    "popularity": 125,
    "color": "#7dd926",
    "isSquare": false
  },
  {
    "name": "zest",
    "popularity": 125,
    "color": "#26CDAF",
    "isSquare": false
  },
  {
    "name": "dependabot",
    "popularity": 124,
    "color": "#2b64cf",
    "isSquare": true
  },
  {
    "name": "matomo",
    "popularity": 124,
    "color": "#000",
    "isSquare": false
  },
  {
    "name": "matomo-icon",
    "popularity": 124,
    "color": "#000",
    "isSquare": false
  },
  {
    "name": "chef",
    "popularity": 123,
    "color": "#435363",
    "isSquare": true
  },
  {
    "name": "kirby",
    "popularity": 123,
    "color": "#d98e26",
    "isSquare": false
  },
  {
    "name": "kirby-icon",
    "popularity": 123,
    "color": "#d9267d",
    "isSquare": true
  },
  {
    "name": "arduino",
    "popularity": 122,
    "color": "#00979c",
    "isSquare": true
  },
  {
    "name": "google-adsense",
    "popularity": 122,
    "color": "#fbbc04",
    "isSquare": true
  },
  {
    "name": "multipass",
    "popularity": 121,
    "color": "#e95420",
    "isSquare": true
  },
  {
    "name": "graylog",
    "popularity": 118,
    "color": "#03c3ff",
    "isSquare": false
  },
  {
    "name": "graylog-icon",
    "popularity": 118,
    "color": "#03c3ff",
    "isSquare": true
  },
  {
    "name": "processing",
    "popularity": 117,
    "color": "#0468ff",
    "isSquare": true
  },
  {
    "name": "codeigniter",
    "popularity": 116,
    "color": "#dd4814",
    "isSquare": false
  },
  {
    "name": "codeigniter-icon",
    "popularity": 116,
    "color": "#dd4814",
    "isSquare": true
  },
  {
    "name": "drift",
    "popularity": 115,
    "color": "#111",
    "isSquare": false
  },
  {
    "name": "reapp",
    "popularity": 115,
    "color": "#27ccf5",
    "isSquare": true
  },
  {
    "name": "aurora",
    "popularity": 114,
    "color": "#63c4b1",
    "isSquare": true
  },
  {
    "name": "zeit",
    "popularity": 114,
    "color": "#333",
    "isSquare": false
  },
  {
    "name": "zeit-icon",
    "popularity": 114,
    "color": "#FFF",
    "isSquare": true
  },
  {
    "name": "npm-2",
    "popularity": 113,
    "color": "#C00",
    "isSquare": true
  },
  {
    "name": "ubuntu",
    "popularity": 113,
    "color": "#dd4814",
    "isSquare": true
  },
  {
    "name": "harness",
    "popularity": 111,
    "color": "#00ade5",
    "isSquare": false
  },
  {
    "name": "harness-icon",
    "popularity": 111,
    "color": "#00ade5",
    "isSquare": true
  },
  {
    "name": "componentkit",
    "popularity": 110,
    "color": "#39bcd3",
    "isSquare": true
  },
  {
    "name": "zendesk",
    "popularity": 110,
    "color": "#03363d",
    "isSquare": false
  },
  {
    "name": "zendesk-icon",
    "popularity": 110,
    "color": "#03363d",
    "isSquare": true
  },
  {
    "name": "aws-ec2",
    "popularity": 108,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "metabase",
    "popularity": 108,
    "color": "#509ee3",
    "isSquare": true
  },
  {
    "name": "bitbar",
    "popularity": 107,
    "color": "#173647",
    "isSquare": true
  },
  {
    "name": "mio",
    "popularity": 107,
    "color": "#963398",
    "isSquare": false
  },
  {
    "name": "picasa",
    "popularity": 107,
    "color": "#E9EAEB",
    "isSquare": true
  },
  {
    "name": "google-fit",
    "popularity": 105,
    "color": "#ea4335",
    "isSquare": true
  },
  {
    "name": "mist",
    "popularity": 105,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "tableau",
    "popularity": 105,
    "color": "#7099a6",
    "isSquare": false
  },
  {
    "name": "tableau-icon",
    "popularity": 105,
    "color": "#7099a6",
    "isSquare": true
  },
  {
    "name": "zigbee",
    "popularity": 105,
    "color": "#FFF",
    "isSquare": true
  },
  {
    "name": "julia",
    "popularity": 104,
    "color": "#ca3c32",
    "isSquare": false
  },
  {
    "name": "trac",
    "popularity": 103,
    "color": "#c00000",
    "isSquare": true
  },
  {
    "name": "cpanel",
    "popularity": 101,
    "color": "#ff6c2c",
    "isSquare": false
  },
  {
    "name": "salesforce",
    "popularity": 100,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "containership",
    "popularity": 99,
    "color": "#00F4CB",
    "isSquare": true
  },
  {
    "name": "stackblitz",
    "popularity": 99,
    "color": "#49a2f8",
    "isSquare": false
  },
  {
    "name": "stackblitz-icon",
    "popularity": 99,
    "color": "#49a2f8",
    "isSquare": true
  },
  {
    "name": "rkt",
    "popularity": 98,
    "color": "#54A3DA",
    "isSquare": true
  },
  {
    "name": "rubygems",
    "popularity": 98,
    "color": "#d34231",
    "isSquare": true
  },
  {
    "name": "apple",
    "popularity": 97,
    "color": "#26d9bb",
    "isSquare": true
  },
  {
    "name": "magneto",
    "popularity": 96,
    "color": "#000",
    "isSquare": true
  },
  {
    "name": "appbase",
    "popularity": 95,
    "color": "#3BC7F6",
    "isSquare": true
  },
  {
    "name": "admob",
    "popularity": 93,
    "color": "#404040",
    "isSquare": true
  },
  {
    "name": "bing",
    "popularity": 93,
    "color": "#00bbec",
    "isSquare": false
  },
  {
    "name": "jfrog",
    "popularity": 92,
    "color": "#41bf47",
    "isSquare": true
  },
  {
    "name": "discover",
    "popularity": 88,
    "color": "#0b1015",
    "isSquare": false
  },
  {
    "name": "keycdn",
    "popularity": 88,
    "color": "#2e3234",
    "isSquare": false
  },
  {
    "name": "keycdn-icon",
    "popularity": 88,
    "color": "#2e3234",
    "isSquare": true
  },
  {
    "name": "cockpit",
    "popularity": 87,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "mention",
    "popularity": 87,
    "color": "#5a7281",
    "isSquare": false
  },
  {
    "name": "platformio",
    "popularity": 87,
    "color": "#ff7f00",
    "isSquare": true
  },
  {
    "name": "pyscript",
    "popularity": 87,
    "color": "#fda703",
    "isSquare": false
  },
  {
    "name": "gwt",
    "popularity": 86,
    "color": "#f93535",
    "isSquare": true
  },
  {
    "name": "plasmic",
    "popularity": 86,
    "color": "#0091ff",
    "isSquare": false
  },
  {
    "name": "raspberry-pi",
    "popularity": 86,
    "color": "#75a928",
    "isSquare": true
  },
  {
    "name": "mps",
    "popularity": 85,
    "color": "#21d789",
    "isSquare": false
  },
  {
    "name": "mps-icon",
    "popularity": 85,
    "color": "#21d789",
    "isSquare": true
  },
  {
    "name": "webmin",
    "popularity": 84,
    "color": "#97beef",
    "isSquare": true
  },
  {
    "name": "appveyor",
    "popularity": 83,
    "color": "#00b3e0",
    "isSquare": true
  },
  {
    "name": "beats",
    "popularity": 83,
    "color": "#07c",
    "isSquare": true
  },
  {
    "name": "precursor",
    "popularity": 83,
    "color": "#333",
    "isSquare": true
  },
  {
    "name": "kinvey",
    "popularity": 82,
    "color": "#DA5024",
    "isSquare": true
  },
  {
    "name": "section",
    "popularity": 82,
    "color": "#00a86b",
    "isSquare": false
  },
  {
    "name": "section-icon",
    "popularity": 82,
    "color": "#00a86b",
    "isSquare": false
  },
  {
    "name": "yeoman",
    "popularity": 82,
    "color": "#f4cf8c",
    "isSquare": true
  },
  {
    "name": "autoit",
    "popularity": 81,
    "color": "#f0f0f0",
    "isSquare": true
  },
  {
    "name": "rsa",
    "popularity": 81,
    "color": "#d9222a",
    "isSquare": false
  },
  {
    "name": "airflow",
    "popularity": 80,
    "color": "#51504f",
    "isSquare": false
  },
  {
    "name": "airflow-icon",
    "popularity": 80,
    "color": "#017cee",
    "isSquare": true
  },
  {
    "name": "qt",
    "popularity": 79,
    "color": "#41cd52",
    "isSquare": true
  },
  {
    "name": "lateral",
    "popularity": 78,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "lateral-icon",
    "popularity": 78,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "bluemix",
    "popularity": 77,
    "color": "#00B198",
    "isSquare": true
  },
  {
    "name": "treehouse",
    "popularity": 76,
    "color": "#3e474f",
    "isSquare": false
  },
  {
    "name": "treehouse-icon",
    "popularity": 76,
    "color": "#5fcf80",
    "isSquare": true
  },
  {
    "name": "mida",
    "popularity": 75,
    "color": "#e7d218",
    "isSquare": false
  },
  {
    "name": "mida-icon",
    "popularity": 75,
    "color": "#e7d218",
    "isSquare": true
  },
  {
    "name": "sinatra",
    "popularity": 75,
    "color": "#afadae",
    "isSquare": true
  },
  {
    "name": "braze",
    "popularity": 73,
    "color": "#212124",
    "isSquare": false
  },
  {
    "name": "braze-icon",
    "popularity": 73,
    "color": "#212124",
    "isSquare": true
  },
  {
    "name": "dynatrace",
    "popularity": 70,
    "color": "#1a1a1a",
    "isSquare": false
  },
  {
    "name": "dynatrace-icon",
    "popularity": 70,
    "color": "#1496ff",
    "isSquare": true
  },
  {
    "name": "gleam",
    "popularity": 70,
    "color": "#f36a22",
    "isSquare": true
  },
  {
    "name": "metamask",
    "popularity": 68,
    "color": "#161616",
    "isSquare": false
  },
  {
    "name": "metamask-icon",
    "popularity": 68,
    "color": "#e27625",
    "isSquare": true
  },
  {
    "name": "teamcity",
    "popularity": 68,
    "color": "#07c3f2",
    "isSquare": true
  },
  {
    "name": "frontapp",
    "popularity": 67,
    "color": "#ff0057",
    "isSquare": true
  },
  {
    "name": "kissmetrics",
    "popularity": 67,
    "color": "#4551FF",
    "isSquare": true
  },
  {
    "name": "stackshare",
    "popularity": 67,
    "color": "#0090f9",
    "isSquare": true
  },
  {
    "name": "tiktok",
    "popularity": 66,
    "color": "#ff004f",
    "isSquare": false
  },
  {
    "name": "tiktok-icon",
    "popularity": 66,
    "color": "#ff004f",
    "isSquare": true
  },
  {
    "name": "google-workspace",
    "popularity": 65,
    "color": "#4285f4",
    "isSquare": false
  },
  {
    "name": "ionic-icon",
    "popularity": 65,
    "color": "#3880ff",
    "isSquare": true
  },
  {
    "name": "pytorch",
    "popularity": 65,
    "color": "#ee4c2c",
    "isSquare": false
  },
  {
    "name": "pytorch-icon",
    "popularity": 65,
    "color": "#ee4c2c",
    "isSquare": true
  },
  {
    "name": "evergreen",
    "popularity": 64,
    "color": "#1f4160",
    "isSquare": false
  },
  {
    "name": "evergreen-icon",
    "popularity": 64,
    "color": "#38a065",
    "isSquare": true
  },
  {
    "name": "yammer",
    "popularity": 64,
    "color": "#265495",
    "isSquare": true
  },
  {
    "name": "slides",
    "popularity": 63,
    "color": "#512833",
    "isSquare": true
  },
  {
    "name": "pepperoni",
    "popularity": 61,
    "color": "#441a0d",
    "isSquare": true
  },
  {
    "name": "zapier",
    "popularity": 61,
    "color": "#201515",
    "isSquare": false
  },
  {
    "name": "zapier-icon",
    "popularity": 61,
    "color": "#FF4A00",
    "isSquare": true
  },
  {
    "name": "flight",
    "popularity": 60,
    "color": "#00acee",
    "isSquare": true
  },
  {
    "name": "proofy",
    "popularity": 60,
    "color": "#13c779",
    "isSquare": true
  },
  {
    "name": "elo",
    "popularity": 59,
    "color": "#fc0",
    "isSquare": false
  },
  {
    "name": "wifi",
    "popularity": 59,
    "color": "#d9265f",
    "isSquare": true
  },
  {
    "name": "basecamp",
    "popularity": 58,
    "color": "#1d2d35",
    "isSquare": false
  },
  {
    "name": "basecamp-icon",
    "popularity": 58,
    "color": "#1d2d35",
    "isSquare": true
  },
  {
    "name": "altair",
    "popularity": 57,
    "color": "#33363b",
    "isSquare": true
  },
  {
    "name": "cloud9",
    "popularity": 57,
    "color": "#00a8e9",
    "isSquare": true
  },
  {
    "name": "aws-cloudsearch",
    "popularity": 56,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "aws-secrets-manager",
    "popularity": 56,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "convox",
    "popularity": 56,
    "color": "#313131",
    "isSquare": false
  },
  {
    "name": "convox-icon",
    "popularity": 56,
    "color": "#4f8ce8",
    "isSquare": true
  },
  {
    "name": "cube",
    "popularity": 56,
    "color": "#ff6492",
    "isSquare": false
  },
  {
    "name": "thimble",
    "popularity": 56,
    "color": "#A3B5BE",
    "isSquare": true
  },
  {
    "name": "angular-icon",
    "popularity": 54,
    "color": "#e40035",
    "isSquare": true
  },
  {
    "name": "cube-icon",
    "popularity": 54,
    "color": "#ff6492",
    "isSquare": true
  },
  {
    "name": "eclipse",
    "popularity": 54,
    "color": "#2c2255",
    "isSquare": false
  },
  {
    "name": "eclipse-icon",
    "popularity": 54,
    "color": "#2c2255",
    "isSquare": true
  },
  {
    "name": "enyo",
    "popularity": 54,
    "color": "#ECEDEC",
    "isSquare": false
  },
  {
    "name": "semaphoreci",
    "popularity": 54,
    "color": "#f06332",
    "isSquare": false
  },
  {
    "name": "shields",
    "popularity": 54,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "splunk",
    "popularity": 54,
    "color": "#0c1724",
    "isSquare": false
  },
  {
    "name": "flarum",
    "popularity": 53,
    "color": "#d22929",
    "isSquare": false
  },
  {
    "name": "helpscout",
    "popularity": 53,
    "color": "#2a3b47",
    "isSquare": false
  },
  {
    "name": "helpscout-icon",
    "popularity": 53,
    "color": "#1292ee",
    "isSquare": true
  },
  {
    "name": "gunicorn",
    "popularity": 52,
    "color": "#499848",
    "isSquare": false
  },
  {
    "name": "mdn",
    "popularity": 52,
    "color": "#0069c2",
    "isSquare": false
  },
  {
    "name": "monday",
    "popularity": 52,
    "color": "#f62b54",
    "isSquare": false
  },
  {
    "name": "monday-icon",
    "popularity": 52,
    "color": "#f62b54",
    "isSquare": false
  },
  {
    "name": "stately",
    "popularity": 52,
    "color": "#d98026",
    "isSquare": false
  },
  {
    "name": "stately-icon",
    "popularity": 52,
    "color": "#26b5d9",
    "isSquare": true
  },
  {
    "name": "campaignmonitor",
    "popularity": 51,
    "color": "#002b45",
    "isSquare": false
  },
  {
    "name": "campaignmonitor-icon",
    "popularity": 51,
    "color": "#7856ff",
    "isSquare": true
  },
  {
    "name": "codacy",
    "popularity": 51,
    "color": "#d92688",
    "isSquare": true
  },
  {
    "name": "concourse",
    "popularity": 51,
    "color": "#4da9e1",
    "isSquare": true
  },
  {
    "name": "presto",
    "popularity": 51,
    "color": "#5d88d6",
    "isSquare": false
  },
  {
    "name": "presto-icon",
    "popularity": 51,
    "color": "#5d88d6",
    "isSquare": true
  },
  {
    "name": "confluence",
    "popularity": 50,
    "color": "#0052cc",
    "isSquare": true
  },
  {
    "name": "drone",
    "popularity": 50,
    "color": "#1e375a",
    "isSquare": false
  },
  {
    "name": "drone-icon",
    "popularity": 50,
    "color": "#00abe4",
    "isSquare": true
  },
  {
    "name": "insomnia",
    "popularity": 50,
    "color": "#4000bf",
    "isSquare": true
  },
  {
    "name": "tuple",
    "popularity": 50,
    "color": "#1f2e41",
    "isSquare": false
  },
  {
    "name": "unito",
    "popularity": 50,
    "color": "#0c0c0c",
    "isSquare": false
  },
  {
    "name": "unito-icon",
    "popularity": 50,
    "color": "#3aafa9",
    "isSquare": true
  },
  {
    "name": "prospect",
    "popularity": 49,
    "color": "#93C",
    "isSquare": true
  },
  {
    "name": "coreos",
    "popularity": 47,
    "color": "#F1606D",
    "isSquare": false
  },
  {
    "name": "coreos-icon",
    "popularity": 47,
    "color": "#53A3DA",
    "isSquare": true
  },
  {
    "name": "elementary",
    "popularity": 47,
    "color": "#333",
    "isSquare": true
  },
  {
    "name": "mozilla",
    "popularity": 47,
    "color": "#26d985",
    "isSquare": false
  },
  {
    "name": "close",
    "popularity": 46,
    "color": "#49bc82",
    "isSquare": true
  },
  {
    "name": "flannel",
    "popularity": 46,
    "color": "#54a3da",
    "isSquare": false
  },
  {
    "name": "codium",
    "popularity": 45,
    "color": "#05e5ad",
    "isSquare": false
  },
  {
    "name": "codium-icon",
    "popularity": 45,
    "color": "#05e5ad",
    "isSquare": false
  },
  {
    "name": "disqus",
    "popularity": 45,
    "color": "#2e9fff",
    "isSquare": true
  },
  {
    "name": "runscope",
    "popularity": 45,
    "color": "#0a0b09",
    "isSquare": true
  },
  {
    "name": "shogun",
    "popularity": 45,
    "color": "#5d50c6",
    "isSquare": false
  },
  {
    "name": "cirrus",
    "popularity": 44,
    "color": "#2271ce",
    "isSquare": true
  },
  {
    "name": "apidog",
    "popularity": 43,
    "color": "#99c2ff",
    "isSquare": false
  },
  {
    "name": "apidog-icon",
    "popularity": 43,
    "color": "#99c2ff",
    "isSquare": true
  },
  {
    "name": "ibm",
    "popularity": 43,
    "color": "#d94a26",
    "isSquare": false
  },
  {
    "name": "lumen",
    "popularity": 43,
    "color": "#e54537",
    "isSquare": false
  },
  {
    "name": "milvus",
    "popularity": 43,
    "color": "#4fc4f9",
    "isSquare": false
  },
  {
    "name": "milvus-icon",
    "popularity": 43,
    "color": "#4fc4f9",
    "isSquare": true
  },
  {
    "name": "akka",
    "popularity": 42,
    "color": "#0b5567",
    "isSquare": true
  },
  {
    "name": "jcb",
    "popularity": 42,
    "color": "#007940",
    "isSquare": true
  },
  {
    "name": "ros",
    "popularity": 42,
    "color": "#232e4a",
    "isSquare": false
  },
  {
    "name": "youtrack",
    "popularity": 42,
    "color": "#0cb0f2",
    "isSquare": true
  },
  {
    "name": "cardano",
    "popularity": 41,
    "color": "#0033ad",
    "isSquare": false
  },
  {
    "name": "cardano-icon",
    "popularity": 41,
    "color": "#0033ad",
    "isSquare": true
  },
  {
    "name": "keen",
    "popularity": 40,
    "color": "#f35757",
    "isSquare": false
  },
  {
    "name": "xata",
    "popularity": 40,
    "color": "#06d6a0",
    "isSquare": false
  },
  {
    "name": "xata-icon",
    "popularity": 40,
    "color": "#06d6a0",
    "isSquare": true
  },
  {
    "name": "framed",
    "popularity": 39,
    "color": "#D35052",
    "isSquare": true
  },
  {
    "name": "kong",
    "popularity": 39,
    "color": "#043558",
    "isSquare": false
  },
  {
    "name": "kong-icon",
    "popularity": 39,
    "color": "#169fcc",
    "isSquare": true
  },
  {
    "name": "skylight",
    "popularity": 39,
    "color": "#bac4c5",
    "isSquare": true
  },
  {
    "name": "phalcon",
    "popularity": 38,
    "color": "#73b08f",
    "isSquare": true
  },
  {
    "name": "pingdom",
    "popularity": 38,
    "color": "#FFF000",
    "isSquare": false
  },
  {
    "name": "solarwinds",
    "popularity": 38,
    "color": "#444",
    "isSquare": false
  },
  {
    "name": "clio-lang",
    "popularity": 37,
    "color": "#cc2a41",
    "isSquare": true
  },
  {
    "name": "pluralsight",
    "popularity": 37,
    "color": "#fffffe",
    "isSquare": false
  },
  {
    "name": "pluralsight-icon",
    "popularity": 37,
    "color": "#fffffe",
    "isSquare": true
  },
  {
    "name": "scribd",
    "popularity": 37,
    "color": "#00293f",
    "isSquare": false
  },
  {
    "name": "scribd-icon",
    "popularity": 37,
    "color": "#1e7b85",
    "isSquare": true
  },
  {
    "name": "armory",
    "popularity": 36,
    "color": "#0c4062",
    "isSquare": false
  },
  {
    "name": "armory-icon",
    "popularity": 36,
    "color": "#00bcdd",
    "isSquare": true
  },
  {
    "name": "gnome",
    "popularity": 36,
    "color": "#26d96e",
    "isSquare": false
  },
  {
    "name": "gnome-icon",
    "popularity": 36,
    "color": "#d9262c",
    "isSquare": true
  },
  {
    "name": "ecma",
    "popularity": 35,
    "color": "#cbd7de",
    "isSquare": false
  },
  {
    "name": "krakenjs",
    "popularity": 35,
    "color": "#0081c2",
    "isSquare": true
  },
  {
    "name": "moltin",
    "popularity": 35,
    "color": "#FFF",
    "isSquare": false
  },
  {
    "name": "moltin-icon",
    "popularity": 35,
    "color": "#FFF",
    "isSquare": true
  },
  {
    "name": "rancher",
    "popularity": 35,
    "color": "#2453ff",
    "isSquare": false
  },
  {
    "name": "rancher-icon",
    "popularity": 35,
    "color": "#2453ff",
    "isSquare": false
  },
  {
    "name": "tomcat",
    "popularity": 35,
    "color": "#d1a41a",
    "isSquare": true
  },
  {
    "name": "buildkite",
    "popularity": 34,
    "color": "#30f2a2",
    "isSquare": false
  },
  {
    "name": "buildkite-icon",
    "popularity": 34,
    "color": "#30f2a2",
    "isSquare": true
  },
  {
    "name": "netflix",
    "popularity": 34,
    "color": "#db202c",
    "isSquare": false
  },
  {
    "name": "netflix-icon",
    "popularity": 34,
    "color": "#b1060f",
    "isSquare": true
  },
  {
    "name": "shortcut",
    "popularity": 34,
    "color": "#222",
    "isSquare": false
  },
  {
    "name": "shortcut-icon",
    "popularity": 34,
    "color": "#58b1e4",
    "isSquare": true
  },
  {
    "name": "wufoo",
    "popularity": 34,
    "color": "#e66760",
    "isSquare": false
  },
  {
    "name": "yahoo",
    "popularity": 34,
    "color": "#5f01d1",
    "isSquare": false
  },
  {
    "name": "api-ai",
    "popularity": 33,
    "color": "#EA6F21",
    "isSquare": true
  },
  {
    "name": "astronomer",
    "popularity": 33,
    "color": "#3f2870",
    "isSquare": false
  },
  {
    "name": "divshot",
    "popularity": 33,
    "color": "#FF0",
    "isSquare": true
  },
  {
    "name": "enact",
    "popularity": 33,
    "color": "#5582ff",
    "isSquare": true
  },
  {
    "name": "sencha",
    "popularity": 33,
    "color": "#7cba3d",
    "isSquare": false
  },
  {
    "name": "emacs",
    "popularity": 32,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "glitch",
    "popularity": 32,
    "color": "#f1a5ff",
    "isSquare": false
  },
  {
    "name": "glitch-icon",
    "popularity": 32,
    "color": "#f1a5ff",
    "isSquare": true
  },
  {
    "name": "mesos",
    "popularity": 32,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "apigee",
    "popularity": 31,
    "color": "#FC4C02",
    "isSquare": false
  },
  {
    "name": "codepicnic",
    "popularity": 31,
    "color": "#286A87",
    "isSquare": true
  },
  {
    "name": "grammarly",
    "popularity": 31,
    "color": "#15c39a",
    "isSquare": false
  },
  {
    "name": "grammarly-icon",
    "popularity": 31,
    "color": "#15c39a",
    "isSquare": true
  },
  {
    "name": "json-ld",
    "popularity": 31,
    "color": "#0c479c",
    "isSquare": true
  },
  {
    "name": "alfresco",
    "popularity": 30,
    "color": "#87c040",
    "isSquare": true
  },
  {
    "name": "crowdprocess",
    "popularity": 30,
    "color": "#1BA6D7",
    "isSquare": true
  },
  {
    "name": "jetbrains",
    "popularity": 30,
    "color": "#fe2857",
    "isSquare": true
  },
  {
    "name": "jetbrains-icon",
    "popularity": 30,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "taiga",
    "popularity": 30,
    "color": "#3c3647",
    "isSquare": true
  },
  {
    "name": "tsmc",
    "popularity": 30,
    "color": "#211714",
    "isSquare": true
  },
  {
    "name": "turret",
    "popularity": 30,
    "color": "#195de6",
    "isSquare": true
  },
  {
    "name": "flickr",
    "popularity": 29,
    "color": "#ff0082",
    "isSquare": false
  },
  {
    "name": "flickr-icon",
    "popularity": 29,
    "color": "#ff0084",
    "isSquare": false
  },
  {
    "name": "namecheap",
    "popularity": 29,
    "color": "#d4202c",
    "isSquare": false
  },
  {
    "name": "pinterest",
    "popularity": 29,
    "color": "#cb1f27",
    "isSquare": true
  },
  {
    "name": "coda",
    "popularity": 28,
    "color": "#101010",
    "isSquare": false
  },
  {
    "name": "coda-icon",
    "popularity": 28,
    "color": "#f46a54",
    "isSquare": true
  },
  {
    "name": "compose-multiplatform",
    "popularity": 28,
    "color": "#4285f4",
    "isSquare": true
  },
  {
    "name": "discourse",
    "popularity": 28,
    "color": "#fff9ae",
    "isSquare": false
  },
  {
    "name": "discourse-icon",
    "popularity": 28,
    "color": "#fff9ae",
    "isSquare": true
  },
  {
    "name": "erlang",
    "popularity": 28,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "fortran",
    "popularity": 28,
    "color": "#734f96",
    "isSquare": true
  },
  {
    "name": "riak",
    "popularity": 28,
    "color": "#3d4c67",
    "isSquare": true
  },
  {
    "name": "shippable",
    "popularity": 28,
    "color": "#238189",
    "isSquare": false
  },
  {
    "name": "speakerdeck",
    "popularity": 28,
    "color": "#009287",
    "isSquare": false
  },
  {
    "name": "blocs",
    "popularity": 27,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "debian",
    "popularity": 27,
    "color": "#a80030",
    "isSquare": true
  },
  {
    "name": "fedora",
    "popularity": 27,
    "color": "#294172",
    "isSquare": true
  },
  {
    "name": "gusto",
    "popularity": 27,
    "color": "#f45d48",
    "isSquare": false
  },
  {
    "name": "librato",
    "popularity": 27,
    "color": "#0F80AA",
    "isSquare": true
  },
  {
    "name": "lightstep",
    "popularity": 27,
    "color": "#039c49",
    "isSquare": false
  },
  {
    "name": "lightstep-icon",
    "popularity": 27,
    "color": "#039c49",
    "isSquare": true
  },
  {
    "name": "nodeos",
    "popularity": 27,
    "color": "#00a",
    "isSquare": true
  },
  {
    "name": "analog",
    "popularity": 26,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "capistrano",
    "popularity": 26,
    "color": "#52c1db",
    "isSquare": true
  },
  {
    "name": "google-adwords",
    "popularity": 26,
    "color": "#097243",
    "isSquare": true
  },
  {
    "name": "modx",
    "popularity": 26,
    "color": "#00b5de",
    "isSquare": false
  },
  {
    "name": "modx-icon",
    "popularity": 26,
    "color": "#00b5de",
    "isSquare": true
  },
  {
    "name": "statuspage",
    "popularity": 26,
    "color": "#2684ff",
    "isSquare": true
  },
  {
    "name": "codebeat",
    "popularity": 25,
    "color": "#27a8e0",
    "isSquare": true
  },
  {
    "name": "codecademy",
    "popularity": 25,
    "color": "#204156",
    "isSquare": false
  },
  {
    "name": "codepen",
    "popularity": 25,
    "color": "#26c1d9",
    "isSquare": false
  },
  {
    "name": "codepen-icon",
    "popularity": 25,
    "color": "#afd926",
    "isSquare": true
  },
  {
    "name": "codeship",
    "popularity": 25,
    "color": "#3C4655",
    "isSquare": true
  },
  {
    "name": "dovetail",
    "popularity": 25,
    "color": "#230078",
    "isSquare": false
  },
  {
    "name": "dovetail-icon",
    "popularity": 25,
    "color": "#230078",
    "isSquare": true
  },
  {
    "name": "gitter",
    "popularity": 25,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "hipchat",
    "popularity": 25,
    "color": "#274970",
    "isSquare": true
  },
  {
    "name": "apiary",
    "popularity": 24,
    "color": "#231f20",
    "isSquare": true
  },
  {
    "name": "arangodb",
    "popularity": 24,
    "color": "#a3b34f",
    "isSquare": false
  },
  {
    "name": "arangodb-icon",
    "popularity": 24,
    "color": "#a3b34f",
    "isSquare": true
  },
  {
    "name": "carbide",
    "popularity": 24,
    "color": "#4b608e",
    "isSquare": true
  },
  {
    "name": "celluloid",
    "popularity": 24,
    "color": "#FFF",
    "isSquare": true
  },
  {
    "name": "fomo",
    "popularity": 24,
    "color": "#eba06d",
    "isSquare": false
  },
  {
    "name": "fomo-icon",
    "popularity": 24,
    "color": "#eba06d",
    "isSquare": true
  },
  {
    "name": "infer",
    "popularity": 24,
    "color": "#7d29e4",
    "isSquare": true
  },
  {
    "name": "webstorm",
    "popularity": 24,
    "color": "#07c3f2",
    "isSquare": true
  },
  {
    "name": "codio",
    "popularity": 23,
    "color": "#a3baf0",
    "isSquare": true
  },
  {
    "name": "fleep",
    "popularity": 23,
    "color": "#3e81de",
    "isSquare": false
  },
  {
    "name": "flocker",
    "popularity": 23,
    "color": "#6AB5B0",
    "isSquare": true
  },
  {
    "name": "fogbugz",
    "popularity": 23,
    "color": "#804dda",
    "isSquare": false
  },
  {
    "name": "fogbugz-icon",
    "popularity": 23,
    "color": "#ab68fc",
    "isSquare": true
  },
  {
    "name": "gocd",
    "popularity": 23,
    "color": "#263bd9",
    "isSquare": false
  },
  {
    "name": "hosted-graphite",
    "popularity": 23,
    "color": "#ec7a51",
    "isSquare": true
  },
  {
    "name": "haskell",
    "popularity": 22,
    "color": "#333",
    "isSquare": false
  },
  {
    "name": "haskell-icon",
    "popularity": 22,
    "color": "#453a62",
    "isSquare": true
  },
  {
    "name": "mlab",
    "popularity": 22,
    "color": "#232b32",
    "isSquare": false
  },
  {
    "name": "monero",
    "popularity": 22,
    "color": "#f60",
    "isSquare": true
  },
  {
    "name": "teamgrid",
    "popularity": 22,
    "color": "#3c7dd0",
    "isSquare": false
  },
  {
    "name": "aws-cloudwatch",
    "popularity": 21,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "cinder",
    "popularity": 21,
    "color": "#f15a22",
    "isSquare": false
  },
  {
    "name": "cobalt",
    "popularity": 21,
    "color": "#248bd2",
    "isSquare": true
  },
  {
    "name": "flattr",
    "popularity": 21,
    "color": "#ea5f29",
    "isSquare": true
  },
  {
    "name": "flattr-icon",
    "popularity": 21,
    "color": "#d96b26",
    "isSquare": true
  },
  {
    "name": "humongous",
    "popularity": 21,
    "color": "#373737",
    "isSquare": true
  },
  {
    "name": "behance",
    "popularity": 20,
    "color": "#0a0b09",
    "isSquare": false
  },
  {
    "name": "ifttt",
    "popularity": 20,
    "color": "#d95326",
    "isSquare": false
  },
  {
    "name": "mercurial",
    "popularity": 20,
    "color": "#bfbfbf",
    "isSquare": true
  },
  {
    "name": "nanonets",
    "popularity": 20,
    "color": "#546fff",
    "isSquare": true
  },
  {
    "name": "nodejitsu",
    "popularity": 20,
    "color": "#333",
    "isSquare": false
  },
  {
    "name": "pingy",
    "popularity": 20,
    "color": "#FFF",
    "isSquare": true
  },
  {
    "name": "impala",
    "popularity": 19,
    "color": "#2c6791",
    "isSquare": false
  },
  {
    "name": "kloudless",
    "popularity": 19,
    "color": "#EBAD00",
    "isSquare": true
  },
  {
    "name": "mern",
    "popularity": 19,
    "color": "#FEFEFE",
    "isSquare": true
  },
  {
    "name": "quay",
    "popularity": 19,
    "color": "#40b4e5",
    "isSquare": true
  },
  {
    "name": "scaphold",
    "popularity": 19,
    "color": "#00ACA1",
    "isSquare": true
  },
  {
    "name": "buck",
    "popularity": 18,
    "color": "#4a69a5",
    "isSquare": true
  },
  {
    "name": "digital-ocean",
    "popularity": 18,
    "color": "#0080ff",
    "isSquare": true
  },
  {
    "name": "digital-ocean-icon",
    "popularity": 18,
    "color": "#0080ff",
    "isSquare": true
  },
  {
    "name": "flyjs",
    "popularity": 18,
    "color": "#07CCFF",
    "isSquare": false
  },
  {
    "name": "hashnode",
    "popularity": 18,
    "color": "#2962ff",
    "isSquare": false
  },
  {
    "name": "hashnode-icon",
    "popularity": 18,
    "color": "#2962ff",
    "isSquare": true
  },
  {
    "name": "kore",
    "popularity": 18,
    "color": "#6CC24A",
    "isSquare": true
  },
  {
    "name": "spidermonkey",
    "popularity": 18,
    "color": "#9d26d9",
    "isSquare": false
  },
  {
    "name": "spidermonkey-icon",
    "popularity": 18,
    "color": "#d9c726",
    "isSquare": true
  },
  {
    "name": "undertow",
    "popularity": 18,
    "color": "#8f9495",
    "isSquare": false
  },
  {
    "name": "uservoice",
    "popularity": 18,
    "color": "#ff6720",
    "isSquare": false
  },
  {
    "name": "uservoice-icon",
    "popularity": 18,
    "color": "#ff6720",
    "isSquare": true
  },
  {
    "name": "workplace",
    "popularity": 18,
    "color": "#4326c4",
    "isSquare": false
  },
  {
    "name": "workplace-icon",
    "popularity": 18,
    "color": "#4326c4",
    "isSquare": true
  },
  {
    "name": "blogger",
    "popularity": 17,
    "color": "#f06a35",
    "isSquare": true
  },
  {
    "name": "protonet",
    "popularity": 17,
    "color": "#e15b29",
    "isSquare": false
  },
  {
    "name": "skype",
    "popularity": 17,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "stackoverflow",
    "popularity": 17,
    "color": "#797b7b",
    "isSquare": false
  },
  {
    "name": "stackoverflow-icon",
    "popularity": 17,
    "color": "#bcbbbb",
    "isSquare": true
  },
  {
    "name": "changetip",
    "popularity": 16,
    "color": "#005197",
    "isSquare": true
  },
  {
    "name": "egghead",
    "popularity": 16,
    "color": "#252526",
    "isSquare": true
  },
  {
    "name": "fly-icon",
    "popularity": 16,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "google-inbox",
    "popularity": 16,
    "color": "#CBCBCB",
    "isSquare": true
  },
  {
    "name": "hadoop",
    "popularity": 16,
    "color": "#ffc",
    "isSquare": true
  },
  {
    "name": "khan-academy",
    "popularity": 16,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "khan-academy-icon",
    "popularity": 16,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "memgraph",
    "popularity": 16,
    "color": "#ff9c0b",
    "isSquare": true
  },
  {
    "name": "pivotal-tracker",
    "popularity": 16,
    "color": "#ed7d1a",
    "isSquare": true
  },
  {
    "name": "redwoodjs",
    "popularity": 16,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "torus",
    "popularity": 16,
    "color": "#A34CB4",
    "isSquare": false
  },
  {
    "name": "bowtie",
    "popularity": 15,
    "color": "#333",
    "isSquare": true
  },
  {
    "name": "cachet",
    "popularity": 15,
    "color": "#7ed321",
    "isSquare": false
  },
  {
    "name": "cloudcraft",
    "popularity": 15,
    "color": "#f6b71f",
    "isSquare": false
  },
  {
    "name": "coderwall",
    "popularity": 15,
    "color": "#3e8dcc",
    "isSquare": true
  },
  {
    "name": "dyndns",
    "popularity": 15,
    "color": "#c74634",
    "isSquare": false
  },
  {
    "name": "gopher",
    "popularity": 15,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "ieee",
    "popularity": 15,
    "color": "#1a1918",
    "isSquare": false
  },
  {
    "name": "manuscript",
    "popularity": 15,
    "color": "#FFF",
    "isSquare": true
  },
  {
    "name": "reasonml",
    "popularity": 15,
    "color": "#dd4b39",
    "isSquare": false
  },
  {
    "name": "reasonml-icon",
    "popularity": 15,
    "color": "#dd4b39",
    "isSquare": true
  },
  {
    "name": "unbounce",
    "popularity": 15,
    "color": "#303030",
    "isSquare": false
  },
  {
    "name": "unbounce-icon",
    "popularity": 15,
    "color": "#303030",
    "isSquare": true
  },
  {
    "name": "angellist",
    "popularity": 14,
    "color": "#26d9ca",
    "isSquare": true
  },
  {
    "name": "dribbble",
    "popularity": 14,
    "color": "#3e26d9",
    "isSquare": false
  },
  {
    "name": "dribbble-icon",
    "popularity": 14,
    "color": "#e74d89",
    "isSquare": true
  },
  {
    "name": "google-home",
    "popularity": 14,
    "color": "#3bab59",
    "isSquare": true
  },
  {
    "name": "grav",
    "popularity": 14,
    "color": "#221e1f",
    "isSquare": true
  },
  {
    "name": "keymetrics",
    "popularity": 14,
    "color": "#A8B57D",
    "isSquare": true
  },
  {
    "name": "memsql",
    "popularity": 14,
    "color": "#FF7BFF",
    "isSquare": false
  },
  {
    "name": "memsql-icon",
    "popularity": 14,
    "color": "#A0F",
    "isSquare": true
  },
  {
    "name": "mint-lang",
    "popularity": 14,
    "color": "#3ac155",
    "isSquare": false
  },
  {
    "name": "periscope",
    "popularity": 14,
    "color": "#A2509E",
    "isSquare": true
  },
  {
    "name": "samsung",
    "popularity": 14,
    "color": "#1428a0",
    "isSquare": false
  },
  {
    "name": "unionpay",
    "popularity": 14,
    "color": "#e21836",
    "isSquare": false
  },
  {
    "name": "upcase",
    "popularity": 14,
    "color": "#5f5f5f",
    "isSquare": false
  },
  {
    "name": "yugabyte",
    "popularity": 14,
    "color": "#1e154b",
    "isSquare": false
  },
  {
    "name": "yugabyte-icon",
    "popularity": 14,
    "color": "#ff5f3b",
    "isSquare": true
  },
  {
    "name": "corda",
    "popularity": 13,
    "color": "#e0081c",
    "isSquare": false
  },
  {
    "name": "data-station",
    "popularity": 13,
    "color": "#252539",
    "isSquare": true
  },
  {
    "name": "eager",
    "popularity": 13,
    "color": "#261DDB",
    "isSquare": false
  },
  {
    "name": "fuchsia",
    "popularity": 13,
    "color": "#ed1d7f",
    "isSquare": true
  },
  {
    "name": "github-icon",
    "popularity": 13,
    "color": "#161614",
    "isSquare": true
  },
  {
    "name": "gratipay",
    "popularity": 13,
    "color": "#630",
    "isSquare": true
  },
  {
    "name": "juju",
    "popularity": 13,
    "color": "#dd4813",
    "isSquare": true
  },
  {
    "name": "kde",
    "popularity": 13,
    "color": "#1d99f3",
    "isSquare": true
  },
  {
    "name": "launchkit",
    "popularity": 13,
    "color": "#0092F2",
    "isSquare": true
  },
  {
    "name": "linode",
    "popularity": 13,
    "color": "#004711",
    "isSquare": true
  },
  {
    "name": "miro",
    "popularity": 13,
    "color": "#fd3",
    "isSquare": false
  },
  {
    "name": "miro-icon",
    "popularity": 13,
    "color": "#fd3",
    "isSquare": true
  },
  {
    "name": "rackspace",
    "popularity": 13,
    "color": "#d926b8",
    "isSquare": false
  },
  {
    "name": "rackspace-icon",
    "popularity": 13,
    "color": "#ea0000",
    "isSquare": true
  },
  {
    "name": "webtask",
    "popularity": 13,
    "color": "#5F3237",
    "isSquare": true
  },
  {
    "name": "amex",
    "popularity": 12,
    "color": "#006fcf",
    "isSquare": true
  },
  {
    "name": "coursera",
    "popularity": 12,
    "color": "#0056d2",
    "isSquare": false
  },
  {
    "name": "fabric-io",
    "popularity": 12,
    "color": "#080949",
    "isSquare": true
  },
  {
    "name": "hanami",
    "popularity": 12,
    "color": "#dc3011",
    "isSquare": true
  },
  {
    "name": "harrow",
    "popularity": 12,
    "color": "#2C1137",
    "isSquare": true
  },
  {
    "name": "heron",
    "popularity": 12,
    "color": "#048991",
    "isSquare": true
  },
  {
    "name": "looker",
    "popularity": 12,
    "color": "#34a853",
    "isSquare": false
  },
  {
    "name": "looker-icon",
    "popularity": 12,
    "color": "#34a853",
    "isSquare": false
  },
  {
    "name": "micron",
    "popularity": 12,
    "color": "#0090da",
    "isSquare": false
  },
  {
    "name": "micron-icon",
    "popularity": 12,
    "color": "#0090da",
    "isSquare": true
  },
  {
    "name": "rocket-chat",
    "popularity": 12,
    "color": "#f5455c",
    "isSquare": false
  },
  {
    "name": "rocket-chat-icon",
    "popularity": 12,
    "color": "#f5455c",
    "isSquare": true
  },
  {
    "name": "visa",
    "popularity": 12,
    "color": "#222357",
    "isSquare": false
  },
  {
    "name": "dapulse",
    "popularity": 11,
    "color": "#010101",
    "isSquare": true
  },
  {
    "name": "desk",
    "popularity": 11,
    "color": "#239EDA",
    "isSquare": false
  },
  {
    "name": "ello",
    "popularity": 11,
    "color": "#d92668",
    "isSquare": true
  },
  {
    "name": "gnu",
    "popularity": 11,
    "color": "#8026d9",
    "isSquare": true
  },
  {
    "name": "gordon",
    "popularity": 11,
    "color": "#3E4349",
    "isSquare": true
  },
  {
    "name": "sherlock-icon",
    "popularity": 11,
    "color": "#ffc700",
    "isSquare": true
  },
  {
    "name": "taskade",
    "popularity": 11,
    "color": "#2f2f2f",
    "isSquare": false
  },
  {
    "name": "taskade-icon",
    "popularity": 11,
    "color": "#2f2f2f",
    "isSquare": true
  },
  {
    "name": "tidal",
    "popularity": 11,
    "color": "#2650d9",
    "isSquare": false
  },
  {
    "name": "tidal-icon",
    "popularity": 11,
    "color": "#0a0b09",
    "isSquare": true
  },
  {
    "name": "aws-cloudformation",
    "popularity": 10,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "chevereto",
    "popularity": 10,
    "color": "#34a8dd",
    "isSquare": false
  },
  {
    "name": "envoyer",
    "popularity": 10,
    "color": "#f56857",
    "isSquare": true
  },
  {
    "name": "peer5",
    "popularity": 10,
    "color": "#e44d26",
    "isSquare": true
  },
  {
    "name": "quora",
    "popularity": 10,
    "color": "#b92b27",
    "isSquare": false
  },
  {
    "name": "stetho",
    "popularity": 10,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "zeplin",
    "popularity": 10,
    "color": "#ee6723",
    "isSquare": true
  },
  {
    "name": "delicious",
    "popularity": 9,
    "color": "#FFF",
    "isSquare": true
  },
  {
    "name": "deviantart",
    "popularity": 9,
    "color": "#45ad47",
    "isSquare": false
  },
  {
    "name": "deviantart-icon",
    "popularity": 9,
    "color": "#45ad47",
    "isSquare": false
  },
  {
    "name": "dotcloud",
    "popularity": 9,
    "color": "#000",
    "isSquare": false
  },
  {
    "name": "grove",
    "popularity": 9,
    "color": "#92c83e",
    "isSquare": true
  },
  {
    "name": "spree",
    "popularity": 9,
    "color": "#06c",
    "isSquare": false
  },
  {
    "name": "stackbit",
    "popularity": 9,
    "color": "#002",
    "isSquare": false
  },
  {
    "name": "stackbit-icon",
    "popularity": 9,
    "color": "#ff364e",
    "isSquare": true
  },
  {
    "name": "visual-studio",
    "popularity": 9,
    "color": "#fff",
    "isSquare": true
  },
  {
    "name": "zwave",
    "popularity": 9,
    "color": "#00396f",
    "isSquare": false
  },
  {
    "name": "atomicojs",
    "popularity": 8,
    "color": "#26d965",
    "isSquare": false
  },
  {
    "name": "atomicojs-icon",
    "popularity": 8,
    "color": "#2926d9",
    "isSquare": true
  },
  {
    "name": "basekit",
    "popularity": 8,
    "color": "#02161f",
    "isSquare": true
  },
  {
    "name": "eraser",
    "popularity": 8,
    "color": "#231f1f",
    "isSquare": false
  },
  {
    "name": "eraser-icon",
    "popularity": 8,
    "color": "#eb043b",
    "isSquare": false
  },
  {
    "name": "fastify-icon",
    "popularity": 8,
    "color": "#262cd9",
    "isSquare": false
  },
  {
    "name": "gitup",
    "popularity": 8,
    "color": "#f5f5f5",
    "isSquare": true
  },
  {
    "name": "kickstarter",
    "popularity": 8,
    "color": "#05ce78",
    "isSquare": false
  },
  {
    "name": "kickstarter-icon",
    "popularity": 8,
    "color": "#05ce78",
    "isSquare": true
  },
  {
    "name": "ktor",
    "popularity": 8,
    "color": "#27282c",
    "isSquare": false
  },
  {
    "name": "ktor-icon",
    "popularity": 8,
    "color": "#00afff",
    "isSquare": true
  },
  {
    "name": "lookback",
    "popularity": 8,
    "color": "#192d41",
    "isSquare": false
  },
  {
    "name": "nodejs-icon",
    "popularity": 8,
    "color": "#539e43",
    "isSquare": true
  },
  {
    "name": "saltstack",
    "popularity": 8,
    "color": "#231F1F",
    "isSquare": true
  },
  {
    "name": "udacity",
    "popularity": 8,
    "color": "#2015ff",
    "isSquare": false
  },
  {
    "name": "udacity-icon",
    "popularity": 8,
    "color": "#2015ff",
    "isSquare": true
  },
  {
    "name": "udemy",
    "popularity": 8,
    "color": "#a435f0",
    "isSquare": false
  },
  {
    "name": "udemy-icon",
    "popularity": 8,
    "color": "#a435f0",
    "isSquare": false
  },
  {
    "name": "aerogear",
    "popularity": 7,
    "color": "#e25027",
    "isSquare": false
  },
  {
    "name": "freebsd",
    "popularity": 7,
    "color": "#b5010f",
    "isSquare": true
  },
  {
    "name": "groovehq",
    "popularity": 7,
    "color": "#0ba0be",
    "isSquare": false
  },
  {
    "name": "kemal",
    "popularity": 7,
    "color": "#ff4f4f",
    "isSquare": true
  },
  {
    "name": "middleman",
    "popularity": 7,
    "color": "#f1c761",
    "isSquare": true
  },
  {
    "name": "dailydev",
    "popularity": 6,
    "color": "#7c7c7d",
    "isSquare": false
  },
  {
    "name": "dailydev-icon",
    "popularity": 6,
    "color": "#7c7c7d",
    "isSquare": false
  },
  {
    "name": "invision",
    "popularity": 6,
    "color": "#f06",
    "isSquare": false
  },
  {
    "name": "invision-icon",
    "popularity": 6,
    "color": "#f06",
    "isSquare": true
  },
  {
    "name": "macosx",
    "popularity": 6,
    "color": "#FFF",
    "isSquare": true
  },
  {
    "name": "mixmax",
    "popularity": 6,
    "color": "#e55cff",
    "isSquare": true
  },
  {
    "name": "mockflow",
    "popularity": 6,
    "color": "#7957ff",
    "isSquare": false
  },
  {
    "name": "mockflow-icon",
    "popularity": 6,
    "color": "#7957ff",
    "isSquare": true
  },
  {
    "name": "sensu",
    "popularity": 6,
    "color": "#2b335b",
    "isSquare": false
  },
  {
    "name": "sensu-icon",
    "popularity": 6,
    "color": "#73cc58",
    "isSquare": true
  },
  {
    "name": "sketchapp",
    "popularity": 6,
    "color": "#000",
    "isSquare": true
  },
  {
    "name": "wercker",
    "popularity": 6,
    "color": "#000",
    "isSquare": true
  },
  {
    "name": "google-domains",
    "popularity": 5,
    "color": "#5f6368",
    "isSquare": false
  },
  {
    "name": "google-domains-icon",
    "popularity": 5,
    "color": "#4285f4",
    "isSquare": true
  },
  {
    "name": "poeditor",
    "popularity": 5,
    "color": "#404953",
    "isSquare": true
  },
  {
    "name": "qualcomm",
    "popularity": 5,
    "color": "#3253dc",
    "isSquare": false
  },
  {
    "name": "semantic-web",
    "popularity": 5,
    "color": "#015A9C",
    "isSquare": false
  },
  {
    "name": "google-meet",
    "popularity": 4,
    "color": "#00ac47",
    "isSquare": true
  },
  {
    "name": "uwsgi",
    "popularity": 4,
    "color": "#aec84d",
    "isSquare": false
  },
  {
    "name": "jamstack",
    "popularity": 3,
    "color": "#fff",
    "isSquare": false
  },
  {
    "name": "jamstack-icon",
    "popularity": 3,
    "color": "#f0047f",
    "isSquare": true
  },
  {
    "name": "umu",
    "popularity": 3,
    "color": "#ffbd2b",
    "isSquare": true
  },
  {
    "name": "vite-dark",
    "popularity": 3,
    "color": "#7e14ff",
    "isSquare": false
  },
  {
    "name": "crucible",
    "popularity": 0,
    "color": "#2684ff",
    "isSquare": true
  },
  {
    "name": "customerio",
    "popularity": 0,
    "color": "#ffcd00",
    "isSquare": false
  },
  {
    "name": "customerio-icon",
    "popularity": 0,
    "color": "#ffcd00",
    "isSquare": true
  },
  {
    "name": "eslint-old",
    "popularity": 0,
    "color": "#3a33d1",
    "isSquare": true
  },
  {
    "name": "nomad",
    "popularity": 0,
    "color": "#00ca8e",
    "isSquare": false
  },
  {
    "name": "nomad-icon",
    "popularity": 0,
    "color": "#00ca8e",
    "isSquare": true
  },
  {
    "name": "rails",
    "popularity": 0,
    "color": "#c00",
    "isSquare": false
  },
  {
    "name": "redhat",
    "popularity": 0,
    "color": "#e00",
    "isSquare": false
  },
  {
    "name": "redhat-icon",
    "popularity": 0,
    "color": "#e00",
    "isSquare": true
  },
  {
    "name": "retool",
    "popularity": 0,
    "color": "#262626",
    "isSquare": false
  },
  {
    "name": "retool-icon",
    "popularity": 0,
    "color": "#262626",
    "isSquare": true
  },
  {
    "name": "stepsize",
    "popularity": 0,
    "color": "#613AB5",
    "isSquare": false
  },
  {
    "name": "stepsize-icon",
    "popularity": 0,
    "color": "#613AB5",
    "isSquare": true
  },
  {
    "name": "tutum",
    "popularity": 0,
    "color": "#0096E5",
    "isSquare": true
  },
  {
    "name": "upwork",
    "popularity": 0,
    "color": "#6fda44",
    "isSquare": false
  },
  {
    "name": "vite-icon",
    "popularity": 0,
    "color": "#7e14ff",
    "isSquare": false
  },
  {
    "name": "workboard",
    "popularity": 0,
    "color": "#51bbd6",
    "isSquare": true
  },
  {
    "name": "zenhub",
    "popularity": 0,
    "color": "#eeeff3",
    "isSquare": false
  },
  {
    "name": "zenhub-icon",
    "popularity": 0,
    "color": "#afd94f",
    "isSquare": true
  }
] as const

export const frontendLogos: FrontendLogo[] = frontendLogosRaw.map((l) => ({
  ...l,
  default: defaultLogoNameSet.has(l.name) && !l.name.includes('-icon'),
  color: iconThemeColorOverrides[l.name] ?? l.color,
}))
