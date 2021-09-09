import {
    actionCreateNewPost,
    createNewPostRejected,
    createNewPostFulfilled,
    actionUnicornsGetFulfiled,
    actionUnicornsGet,
    actionUnicornsGetRejected,
    actionDeleteUnicornFulfiled,
    actionDeleteUnicornRejected,
    actionDeleteUnicorn,
    actionUpdateDataUnicorn,
    actionUpdateDataUnicornFulfiled,
    actionUpdateDataRejected
} from './actions'



export const createNewPost = (post) => (dispach, getState, service) => {
    dispach(actionCreateNewPost());
    return service.newPost(post)
        .then((resp) => dispach(createNewPostFulfilled(resp)))
        .catch((err) => dispach(createNewPostRejected(`${err}, Can't create new post!!`)))
}

export const unicornsGet = () => (dispach, getState, service) => {
    dispach(actionUnicornsGet());
    return service.getAll()
        .then((resp) => { return dispach(actionUnicornsGetFulfiled(resp)) })
        .catch((err) => dispach(actionUnicornsGetRejected(`${err}, Cant't download list of unicorns`)))

}
export const deleteUnicorn = (id) => (dispach, getState, service) => {
    dispach(actionDeleteUnicorn())
    return service.deletePost(id)
        .then((resp) => { dispach(actionDeleteUnicornFulfiled(id)) })
        .catch((err) => dispach(actionDeleteUnicornRejected(`${err}, Can't delete item `)))
}
export const updateDataUnicorn = (post, id) => (dispach, getState, service) => {
    dispach(actionUpdateDataUnicorn());
    return service.updatePost(id, post)
        .then((resp) => dispach(actionUpdateDataUnicornFulfiled(post, id)))
        .catch((err) => dispach(actionUpdateDataRejected(`${err}, Cant't update this post `)))
}
