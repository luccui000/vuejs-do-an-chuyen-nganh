import * as mutationPost from './mutations-type/post'; 

const mutations = {
    [mutationPost.CREATE_POST](state, payload) {
        state.posts.push({
            id: state.posts.length + 2,
            name: payload.name,
            body: payload.body,
            status: false,
        });
    },
    [mutationPost.DELETE_POST](state, payload) {
        state.posts = state.posts.filter((post) => post.id !== payload.id);
    }
};

export default mutations;
