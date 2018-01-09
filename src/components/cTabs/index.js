
import cTabItem from './tabItem';
import cTabs from './tabs';

export default {
    install (Vue) {
        Vue.component('cTabItem', cTabItem);
        Vue.component('cTabs', cTabs);
    }
}

export { cTabs, cTabItem };