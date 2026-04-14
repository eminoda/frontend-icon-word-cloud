export interface LogoSeedItem {
  name: string
  npm: string
}

// name 必须对应 @iconify-json/logos 的 icon key，可用于 `i-logos-${name}` 渲染
export const logoSeeds: LogoSeedItem[] = [
  // language / runtime / package managers
  { name: 'typescript', npm: 'typescript' },
  { name: 'javascript', npm: 'javascript' },
  { name: 'nodejs', npm: 'node' },
  { name: 'deno', npm: 'deno' },
  { name: 'bun', npm: 'bun' },
  { name: 'npm', npm: 'npm' },
  { name: 'yarn', npm: 'yarn' },
  { name: 'pnpm', npm: 'pnpm' },

  // platform / web basics
  { name: 'html-5', npm: 'html' },
  { name: 'css', npm: 'css' },

  // frameworks
  { name: 'react', npm: 'react' },
  { name: 'nextjs', npm: 'next' },
  { name: 'remix', npm: '@remix-run/react' },
  { name: 'gatsby', npm: 'gatsby' },
  { name: 'vue', npm: 'vue' },
  { name: 'nuxt-icon', npm: 'nuxt' },
  { name: 'angular', npm: '@angular/core' },
  { name: 'svelte', npm: 'svelte' },
  { name: 'svelte-icon', npm: '@sveltejs/kit' },
  { name: 'astro', npm: 'astro' },
  { name: 'solidjs-icon', npm: 'solid-js' },
  { name: 'qwik', npm: '@builder.io/qwik' },
  { name: 'lit', npm: 'lit' },

  // bundlers / tooling
  { name: 'vite', npm: 'vite' },
  { name: 'webpack', npm: 'webpack' },
  { name: 'rollup', npm: 'rollup' },
  { name: 'parcel-icon', npm: 'parcel' },
  { name: 'esbuild', npm: 'esbuild' },
  { name: 'swc', npm: '@swc/core' },
  { name: 'babel', npm: '@babel/core' },

  // styling
  { name: 'tailwindcss', npm: 'tailwindcss' },
  { name: 'unocss', npm: 'unocss' },
  { name: 'bootstrap', npm: 'bootstrap' },
  { name: 'postcss', npm: 'postcss' },
  { name: 'sass', npm: 'sass' },
  { name: 'less', npm: 'less' },
  { name: 'stylus', npm: 'stylus' },

  // lint / format
  { name: 'eslint', npm: 'eslint' },
  { name: 'prettier', npm: 'prettier' },
  { name: 'stylelint', npm: 'stylelint' },
  { name: 'commitlint', npm: '@commitlint/cli' },
  { name: 'husky', npm: 'husky' },
  { name: 'lint-staged', npm: 'lint-staged' },

  // test / e2e
  { name: 'jest', npm: 'jest' },
  { name: 'vitest', npm: 'vitest' },
  { name: 'testing-library', npm: '@testing-library/react' },
  { name: 'cypress', npm: 'cypress' },
  { name: 'playwright', npm: 'playwright' },

  // state / data
  { name: 'redux', npm: 'redux' },
  { name: 'mobx', npm: 'mobx' },
  { name: 'pinia', npm: 'pinia' },
  { name: 'rxjs', npm: 'rxjs' },
  { name: 'axios', npm: 'axios' },
  { name: 'graphql', npm: 'graphql' },
  { name: 'apollo', npm: '@apollo/client' },

  // UI / docs
  { name: 'storybook-icon', npm: 'storybook' },
  { name: 'vitejs', npm: 'vite' },
  { name: 'vitepress', npm: 'vitepress' },
  { name: 'docusaurus', npm: '@docusaurus/core' },
]

