import * as actionPost from './mutations-type/post';

const actions = {
    createPost({ commit }, payload) {
        commit({
            type: actionPost.CREATE_POST,
            payload,
        });
    },
    detelePost({ commit }, payload) {
        commit({
            type: actionPost.DELETE_POST,
            payload,
        });
    },
};

export default actions;
