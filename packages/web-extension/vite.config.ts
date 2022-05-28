import path from "path";
import { defineConfig } from "vite";
import pkgBrowserExtension from "vite-plugin-web-extension";
import react from '@vitejs/plugin-react'

// hack to fix esm default 
const browserExtension = (pkgBrowserExtension as any).default || pkgBrowserExtension;

function root(...paths: string[]): string {
  return path.resolve(__dirname, ...paths);
}

export default defineConfig({
  root: "src",
  build: {
    outDir: root("dist"),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': root('./src'),
      '@api': root('./../greenit-api/src'),
    }
  },
  plugins: [
    react({
      include: '**/*.tsx',
      jsxRuntime: 'classic'
    }),
    browserExtension({
      manifest: root("src/manifest.json"),
      assets: "assets",
      browser: process.env.TARGET || "chrome",
      verbose: true,
      skipManifestValidation: true,
      disableAutoLaunch: false,
      webExtConfig: {
        startUrl: [
          "google.com", 
          "opensea.io",
          "rarible.com", 
          "looksrare.org",
          "https://looksrare.org/collections/0xbCe3781ae7Ca1a5e050Bd9C4c77369867eBc307e/8336"
        ]
      }
    }),
  ]
})