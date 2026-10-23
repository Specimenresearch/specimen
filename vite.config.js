
import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

function aboutMetadataPlugin() {
  return {
    name: 'about-metadata',
    apply: 'build',

    async closeBundle() {
      const indexPath = resolve('dist/index.html')
      const aboutPath = resolve('dist/about.html')

      let html = await readFile(indexPath, 'utf8')

      html = html.replace(
        /<title>[\s\S]*?<\/title>/,
        '<title>About SPECIMEN — Researching Internet Culture</title>',
      )

      html = html.replace(
        /<meta\s+name="description"[\s\S]*?\/>/,
        '<meta name="description" content="Learn about SPECIMEN, an independent research project examining internet-native culture, meme evolution, online communities, and digital attention." />',
      )

      html = html.replace(
        /<meta\s+property="og:title"[\s\S]*?\/>/,
        '<meta property="og:title" content="About SPECIMEN — Researching Internet Culture" />',
      )

      html = html.replace(
        /<meta\s+property="og:description"[\s\S]*?\/>/,
        '<meta property="og:description" content="An independent research project documenting internet-native culture, meme evolution, online communities, and digital attention." />',
      )

      html = html.replace(
        '</head>',
        `    <meta property="og:url" content="https://specimenresearch.xyz/about" />
    <meta name="twitter:title" content="About SPECIMEN — Researching Internet Culture" />
    <meta name="twitter:description" content="An independent research project documenting internet-native culture, meme evolution, online communities, and digital attention." />
    <meta name="twitter:image" content="https://specimenresearch.xyz/og-image.png" />
  </head>`,
      )

      await writeFile(aboutPath, html, 'utf8')
    },
  }
}

export default defineConfig({
  plugins: [react(), aboutMetadataPlugin()],
})
