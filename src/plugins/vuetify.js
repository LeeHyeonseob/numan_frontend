import 'vuetify/styles' // Vuetify 스타일 임포트
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

// vuetify 객체를 기본 내보내기로 설정
export default vuetify;
