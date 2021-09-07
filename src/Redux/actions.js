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
    UPDATE_UNICORNS_REJECTED,
    UPDATE_UNICORNS_FULFILED
} from "./types";
//actions for new post
export const actionCreateNewPost = () => {
    return {
        type: CREATE_POSTS,
        loading: true
    }
}
export const createNewPostFulfilled = (post) => {
    return {
        type: CREATE_POSTS_FULFILLED,
        payload: post,
        loading: false
    }
}

export const createNewPostRejected = (eror) => {
    return {
        type: CREATE_POSTS_REJECTED,
        error: eror,
        loading: false
    }
}
//actions for getting list of all unicorns 
export const actionUnicornsGet = () => {
    return {
        type: GET_UNICORNS,
        loading: true
    }
}

export const actionUnicornsGetFulfiled = (post) => {
    return {
        type: GET_UNICORNS_FULFILED,
        payload: post,
        loading: false
    }
}

export const actionUnicornsGetRejected = (resp) => {
    return {
        type: GET_UNICORNS_REJECTED,
        error: resp,
        loading: false
    }
}
// actiona creator for deleting unicorns 
export const actionDeteUnicorn = () => {
    return {
        type: DELETE_UNICORN,
        loading: true
    }
}

export const actionDeteUnicornFulfiled = (post) => {
    return {
        type: DELETE_UNICORN_FULFILED,
        payload: post,
        loading: false
    }
}

export const actionDeteUnicornRejected = (resp) => {
    return {
        type: DELETE_UNICORN_REJECTED,
        error: resp,
        loading: false
    }
}
// for update data 
export const actionUpdateDataUnicorn = () => {
    return {
        type: UPDATE_UNICORNS,
        loading: true,
    }
}
export const actionUpdateDataUnicornFulfiled = (post, id) => {
    return {
        type: UPDATE_UNICORNS_FULFILED,
        payload: post,
        id: id,
        loading: false
    }
}
export const actionUpdateDataRejected = (resp) => {
    return {
        type: UPDATE_UNICORNS_REJECTED,
        error: resp,
        loading: false
    }
}

export const actionCreatorHandleError = () => {
    return { type: HANDLE_ERORS }
}