
import { postsReducer } from "./postsReducer";
import { createNewPostFulfilled, actionDeleteUnicornFulfiled } from './actions';
import { unicornsGet } from './thunks'

const initialState = {
    posts: [
        {
            _id: '61385c03dc46c203e8b3d169',
            name: 'Sparkle Angel',
            age: 2,
            colour: 'blue'
        },
        {
            _id: '61385c04dc46c203e8b3d16a',
            name: 'Sparkle Angel',
            age: 2,
            colour: 'blue'
        },
        {
            _id: '61385c2edc46c203e8b3d16b',
            name: 'Nigga Type',
            age: '2',
            colour: 'Red'
        }
    ],
    loading: false,
}


it('new post shud be added', () => {
    let action = createNewPostFulfilled({
        name: 'Nigga',
        age: '2',
        colour: 'Red',
        _id: '1234566'
    });
    let newState = postsReducer(initialState, action)

    expect(newState.posts.length).toBe(4);
})
it('delete post from state check state length of post should be 2', () => {
    let action = actionDeleteUnicornFulfiled('61385c2edc46c203e8b3d16b')
    let newState = postsReducer(initialState, action)
    expect(newState.posts.length).toBe(2);
})

it('Check getData from server if initial state gets new elements', () => {
    let action = unicornsGet()
    let newState = postsReducer(initialState, action)
    expect(newState.posts.length).toBe(3)
})