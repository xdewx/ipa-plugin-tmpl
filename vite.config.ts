import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://ipa-plugin.localhost/demo",
  build: {
    outDir:"./demo"
  },
  plugins: [
    vue(), vueJsx(),
    AutoImport({
      eslintrc: {
        enabled: true,
      },
      imports: ['vue', 'vue-router', 'pinia', '@vueuse/core', '@vueuse/head', {
        'naive-ui': [
          'useDialog',
          'useMessage',
          'useNotification',
          'useLoadingBar'
        ]
      }],
    }),
    Components({
      resolvers: [
        NaiveUiResolver(),
        IconsResolver({
          prefix: 'icon', // 自动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀
          // {prefix}-{collection}-{icon} 使用组件解析器时，您必须遵循名称转换才能正确推断图标。
          // alias: { park: 'icon-park' } 集合的别名
          // 在这个网站找图标，然后将对应的合集名添加至此：https://icones.netlify.app/
          enabledCollections: ["heroicons-outline", "mdi"] // 这是可选的，默认启用 Iconify 支持的所有集合['mdi']
        })
      ]
    }),
    Icons({
      autoInstall: true,
      compiler: "vue3",
    }),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
