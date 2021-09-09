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


    }
}
export const createNewPostFulfilled = (post) => {
    return {
        type: CREATE_POSTS_FULFILLED,
        payload: post,

    }
}

export const createNewPostRejected = (eror) => {
    return {
        type: CREATE_POSTS_REJECTED,
        error: eror,

    }
}
//actions for getting list of all unicorns 
export const actionUnicornsGet = () => {
    return {
        type: GET_UNICORNS,

    }
}

export const actionUnicornsGetFulfiled = (post) => {
    return {
        type: GET_UNICORNS_FULFILED,
        payload: post,

    }
}

export const actionUnicornsGetRejected = (resp) => {
    return {
        type: GET_UNICORNS_REJECTED,
        error: resp,

    }
}
// actiona creator for deleting unicorns 
export const actionDeleteUnicorn = () => {
    return {
        type: DELETE_UNICORN,

    }
}

export const actionDeleteUnicornFulfiled = (id) => {
    return {
        type: DELETE_UNICORN_FULFILED,
        payload: id,

    }
}

export const actionDeleteUnicornRejected = (resp) => {
    return {
        type: DELETE_UNICORN_REJECTED,
        error: resp,

    }
}
// for update data 
export const actionUpdateDataUnicorn = () => {
    return {
        type: UPDATE_UNICORNS,

    }
}
export const actionUpdateDataUnicornFulfiled = (post, id) => {
    return {
        type: UPDATE_UNICORNS_FULFILED,
        payload: post,
        id: id,

    }
}
export const actionUpdateDataRejected = (resp) => {
    return {
        type: UPDATE_UNICORNS_REJECTED,
        error: resp,

    }
}

export const actionCreatorHandleError = () => {
    return { type: HANDLE_ERORS }
}