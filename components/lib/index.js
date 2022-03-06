import MyTitle from './mytitle';
import MyCard from './mycard';
import SearchInList from './searchinlist';

import { version } from '../../package.json';

const components = {
  MyTitle,
  MyCard,
  SearchInList
};

const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key]);
  })
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  version,
  install,
  ...components
};

export default API;
