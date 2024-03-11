import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// Vuetify 플러그인과 transformAssetUrls를 임포트합니다.
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineConfig({
  plugins: [
    vue({
      // transformAssetUrls 설정을 vue 플러그인에 적용합니다.
      template: { transformAssetUrls },
    }),
    // Vuetify 플러그인을 설정에 추가합니다.
    vuetify({ autoImport: true }),
  ],
  // Vuetify 컴포넌트를 번들링 과정에서 제대로 처리하기 위해 transpile 설정을 추가합니다.
  build: {
    transpile: ['vuetify'],
  },
  // 필요한 경우 여기에 추가적인 Vite 설정을 추가할 수 있습니다.
});



