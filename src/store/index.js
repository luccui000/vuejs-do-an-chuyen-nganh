import { createStore } from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import carts from '@/store/modules/carts';
import posts from '@/store/modules/posts';
import products from '@/store/modules/products';
import sliders from '@/store/modules/sliders';
import categories from '@/store/modules/categories';

const store = createStore({
    getters,
    mutations,
    actions,
    modules: {
        posts,
        sliders,
        carts,
        products,
        categories
    },
});

export default store;
