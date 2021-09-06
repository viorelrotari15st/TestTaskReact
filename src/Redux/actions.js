import { CREATE_POSTS, UNICORNS, DELETE_UNICORN, UPDATE_UNICORNS } from "./types";
import UnicornService from '../API/UnicornService';

export const createNewPost = (post) => (dispach) => {
    UnicornService.newPost(post).then((resp) => dispach({
        type: CREATE_POSTS,
        payload: resp
    }))
}

export const unicornsGet = () => (dispach) => {
    UnicornService.getAll().then((resp) => dispach({
        type: UNICORNS,
        payload: resp
    }))

}
export const deteUnicorn = (post) => (dispach) => {
    UnicornService.deletaPost(post)
        .then((resp) => dispach({
            type: DELETE_UNICORN,
            payload: post
        }))
}
export const updateDataUnicorn = (post, id) => (dispach) => {
    UnicornService.updatePost(id, post).then((resp) => dispach({
        type: UPDATE_UNICORNS,
        payload: post,
        id: id
    }))
}
