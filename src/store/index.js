import { createStore } from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import carts from '@/store/modules/carts';
import posts from '@/store/modules/posts';
import products from '@/store/modules/products';
import sliders from '@/store/modules/sliders';
import categories from '@/store/modules/categories';
import auth from '@/store/modules/auth'
import address from '@/store/modules/address'
import shipping from "@/store/modules/shipping";

const store = createStore({
    getters,
    mutations,
    actions,
    modules: {
        posts,
        sliders,
        carts,
        products,
        categories,
        auth,
        address,
        shipping
    },
});

export default store;
