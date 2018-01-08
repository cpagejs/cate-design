
import tabItem from './tabItem';
import tabs from './tabs';

export default {
    install (Vue) {
        Vue.component('tabItem', tabItem);
        Vue.component('tabs', tabs);
    }
}

export { tabs, tabItem };