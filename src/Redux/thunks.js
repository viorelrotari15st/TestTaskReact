import {
    actionCreateNewPost,
    createNewPostRejected,
    createNewPostFulfilled,
    actionUnicornsGetFulfiled,
    actionUnicornsGet,
    actionUnicornsGetRejected,
    actionDeteUnicornFulfiled,
    actionDeteUnicornRejected,
    actionDeteUnicorn,
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
    dispach(actionUnicornsGet())
    return service.getAll()
        .then((resp) => dispach(actionUnicornsGetFulfiled(resp)))
        .catch((err) => dispach(actionUnicornsGetRejected(`${err}, Cant't upload list of unicorns`)))

}
export const deteUnicorn = (post) => (dispach, getState, service) => {
    dispach(actionDeteUnicorn())
    return service.deletaPost(post)
        .then((resp) => dispach(actionDeteUnicornFulfiled(post)))
        .catch((err) => dispach(actionDeteUnicornRejected(`${err}, Can't delete item `)))
}
export const updateDataUnicorn = (post, id) => (dispach, getState, service) => {
    actionUpdateDataUnicorn();
    return service.updatePost(id, post)
        .then((resp) => dispach(actionUpdateDataUnicornFulfiled(post, id)))
        .catch((err) => dispach(actionUpdateDataRejected(`${err}, Cant't update this post `)))
}
