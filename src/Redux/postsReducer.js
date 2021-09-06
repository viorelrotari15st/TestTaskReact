import { CREATE_POSTS, UNICORNS, DELETE_UNICORN, UPDATE_UNICORNS } from "./types";

const initialState = {
    posts: [],
}

const reduceData = (state, dataForUpdate, id) => {
    dataForUpdate._id = id
    const index = state.findIndex((e) => e._id === id);
    const newArr = [...state];
    newArr[index] = dataForUpdate;
    return newArr;
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_POSTS:
            return { ...state, posts: [...state.posts, action.payload] }
        case UNICORNS:
            return { ...state, posts: action.payload }
        case DELETE_UNICORN:
            return { ...state, posts: state.posts.filter(el => el._id !== action.payload) }
        case UPDATE_UNICORNS:
            return { ...state, posts: reduceData(state.posts, action.payload, action.id) }
        default: return state;
    }
}