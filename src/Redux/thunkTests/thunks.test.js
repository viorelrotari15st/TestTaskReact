import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { unicornsGet, deleteUnicorn, createNewPost, updateDataUnicorn } from '../thunks';
import { UnicornService } from '../../API/UnicornService';

jest.mock('../../API/UnicornService.js');

const api = new UnicornService();

const middlewares = [
    thunk.withExtraArgument(api),
];
const mockStore = configureMockStore(middlewares);
const store = mockStore();


describe("Tests Thunk actions", () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('get data from server with axios with succesful response', async () => {
        api.getAll.mockResolvedValueOnce([{ name: "test2" }, { name: "test2" }])
        await store.dispatch(unicornsGet())
        const [, fulfilled] = store.getActions();
        let expectedValue = { type: 'POST/UNICORNS/FULFILED', payload: [{ name: "test2" }, { name: "test2" }] };
        expect(fulfilled).toEqual(expectedValue);
    });

});

describe('Test For delete', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('Delete post request, fulfiled', async () => {
        api.deletePost.mockResolvedValueOnce([{}]);
        let id = "1000";
        await store.dispatch(deleteUnicorn(id));

        let expectedValue = {
            type: 'POST/DELETE/FULFILED', payload: '1000'
        }
        const [, fulfiled] = store.getActions();
        expect(fulfiled).toEqual(expectedValue);
        //console.log("Delete posts fulfiled", store.getActions())
    });

    it('Delete request to server , send id and get', async () => {
        api.deletePost.mockRejectedValueOnce(new Error())
        let id = "1000"
        await store.dispatch(deleteUnicorn(id));

        let expectedValue = {
            type: 'POST/DELETE/REJECTED',
            error: "Error, Can't delete item ",

        }
        const [, rejected] = store.getActions();
        expect(rejected).toEqual(expectedValue);
        //console.log("Delete posts", store.getActions())
    });

    describe('Tests for update Post', () => {
        beforeEach(() => {
            store.clearActions();
        });
        it('POST request to server , send data and get response', async () => {
            api.newPost.mockResolvedValueOnce([
                { _id: 3, name: "test3" },
            ])
            const newPost = { _id: 3, name: "test3" }
            await store.dispatch(createNewPost(newPost));
            const [, fullfiled] = store.getActions();
            let expectedValue = { type: 'POST/CREATE_POST/FULFILED', payload: [{ _id: 3, name: "test3" }] };
            expect(fullfiled).toEqual(expectedValue);
            //console.log("post fulfilede", store.getActions());
        });

        it('POST request to server , rejected', async () => {
            api.newPost.mockRejectedValueOnce([
                new Error()
            ])
            const newPost = { _id: 3, name: "test3" }
            await store.dispatch(createNewPost(newPost));
            console.log("Post rejected", store.getActions());
            const [, rejected] = store.getActions();
            let expectedValue = { type: 'POST/CREATE_POST/REJECTED', error: "Error, Can't create new post!!" };
            expect(rejected).toEqual(expectedValue);
            //console.log(rejected)
        });
    })


    describe('UPDATE posts tests', () => {
        beforeEach(() => {
            store.clearActions();
        });

        it('PUT request fulfiled', async () => {
            api.updatePost.mockResolvedValueOnce([{ name: "test3" }]);
            const post = { name: "test3" };
            const id = 3;
            await store.dispatch(updateDataUnicorn(post, id));
            //console.log(store.getActions());

            const expectedValue = {
                type: 'POST/UPDATE/FULFILED',
                payload: { name: 'test3' },
                id: 3,

            }
            const [, fulfiled] = store.getActions();
            expect(fulfiled).toEqual(expectedValue);
        });

        it('PUT request rejected', async () => {
            api.updatePost.mockRejectedValueOnce([
                new Error()
            ])
            const post = { name: "test3" };
            const id = 3;
            await store.dispatch(updateDataUnicorn(post, id));
            //console.log(store.getActions());

            const expectedValue = {
                type: 'POST/UPDATE/REJECTED',
                error: "Error, Cant't update this post ",

            }
            const [, rejected] = store.getActions();
            expect(rejected).toEqual(expectedValue);
        });
    });
});