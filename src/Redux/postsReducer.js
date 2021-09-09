import {
    CREATE_POSTS,
    GET_UNICORNS,
    DELETE_UNICORN,
    UPDATE_UNICORNS,
    HANDLE_ERORS,
    CREATE_POSTS_FULFILLED,
    CREATE_POSTS_REJECTED,
    GET_UNICORNS_FULFILED,
    GET_UNICORNS_REJECTED,
    DELETE_UNICORN_FULFILED,
    DELETE_UNICORN_REJECTED,
    UPDATE_UNICORNS_FULFILED,
    UPDATE_UNICORNS_REJECTED
} from "./types";

const initialState = {
    posts: [],
    loading: false,
    error: null,
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
            return { ...state, loading: true }
        case CREATE_POSTS_FULFILLED:
            return { ...state, posts: [...state.posts, action.payload], loading: false }
        case CREATE_POSTS_REJECTED:
            return { ...state, error: action.error, loading: false };

        case GET_UNICORNS:
            return { ...state, loading: true }
        case GET_UNICORNS_FULFILED:
            return { ...state, posts: action.payload, loading: false }
        case GET_UNICORNS_REJECTED:
            return { ...state, error: action.error, loading: false }

        case DELETE_UNICORN:
            return { ...state, loading: true }
        case DELETE_UNICORN_FULFILED:
            return { ...state, posts: state.posts.filter(el => el._id !== action.payload), loading: false }
        case DELETE_UNICORN_REJECTED:
            return { ...state, error: action.error, loading: false }

        case UPDATE_UNICORNS:
            return { ...state, loading: true }
        case UPDATE_UNICORNS_FULFILED:
            return { ...state, posts: reduceData(state.posts, action.payload, action.id), loading: false }
        case UPDATE_UNICORNS_REJECTED:
            return { ...state, error: action.error, loading: false }
        case HANDLE_ERORS:
            return state
        default: return state;
    }
}

export const getPosts = (state) => state.postsReducer.posts;
export const isLoading = (state) => state.postsReducer.loading;
export const getError = (state) => state.postsReducer.error;