import Vue from 'vue'
Vue.component("Bit", () => import("/Users/VanGogh/个人/Blog/local/docs/.vuepress/components/Bit"))
Vue.component("OtherComponent", () => import("/Users/VanGogh/个人/Blog/local/docs/.vuepress/components/OtherComponent"))
Vue.component("UpgradePath", () => import("/Users/VanGogh/个人/Blog/local/docs/.vuepress/components/UpgradePath"))
Vue.component("demo-1", () => import("/Users/VanGogh/个人/Blog/local/docs/.vuepress/components/demo-1"))
Vue.component("diagram-markdown-slot-relationship", () => import("/Users/VanGogh/个人/Blog/local/docs/.vuepress/components/diagram-markdown-slot-relationship"))
Vue.component("svg-container", () => import("/Users/VanGogh/个人/Blog/local/docs/.vuepress/components/svg-container"))
Vue.component("Foo-Bar", () => import("/Users/VanGogh/个人/Blog/local/docs/.vuepress/components/Foo/Bar"))

Vue.component("Badge", () => import("/Users/VanGogh/个人/Blog/local/node_modules/@vuepress/theme-default/global-components/Badge"))


export default {}