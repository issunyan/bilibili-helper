import Vue from 'vue';
import { Dialog, Button } from 'element-ui';

import App from './App/App.vue';
import insert from '@/utils/insert';

// 插入组件到页面中
insert(App);
Vue.use(Dialog);
Vue.use(Button);

const element_css = document.createElement('link');
element_css.href = 'https://unpkg.com/element-ui/lib/theme-chalk/index.css';
element_css.rel = 'stylesheet';
document.head.append(element_css);

function injectJS() {
  document.addEventListener('readystatechange', () => {
    const injectPath = 'inject.js';
    const temp = document.createElement('script');

    temp.setAttribute('type', 'text/javascript');
    temp.src = chrome.extension.getURL(injectPath);
    document.body.appendChild(temp);
  });
}

// 注入js到页面
injectJS();
