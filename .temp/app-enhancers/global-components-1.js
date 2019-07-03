import Vue from 'vue'
Vue.component("Bit", () => import("/mnt/e/Blog/local/docs/.vuepress/components/Bit"))
Vue.component("OtherComponent", () => import("/mnt/e/Blog/local/docs/.vuepress/components/OtherComponent"))
Vue.component("UpgradePath", () => import("/mnt/e/Blog/local/docs/.vuepress/components/UpgradePath"))
Vue.component("diagram-markdown-slot-relationship", () => import("/mnt/e/Blog/local/docs/.vuepress/components/diagram-markdown-slot-relationship"))
Vue.component("svg-container", () => import("/mnt/e/Blog/local/docs/.vuepress/components/svg-container"))
Vue.component("demo-1", () => import("/mnt/e/Blog/local/docs/.vuepress/components/demo-1"))
Vue.component("Foo-Bar", () => import("/mnt/e/Blog/local/docs/.vuepress/components/Foo/Bar"))

Vue.component("Badge", () => import("/mnt/e/Blog/local/node_modules/@vuepress/theme-default/global-components/Badge"))


export default {}