import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";


let state = {
    PostsData: [
        {id: 1, text: 'Its my first post', likes: 24},
        {id: 2, text: 'Hello, hi are you?', likes: 3},
        {id: 3, text: 'Yo!', likes: 3}
    ]
};


it('length of post should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('sum text')
    // 2. action
    let new_state = profileReducer(state, action)
    // 3. expectation
    expect(new_state.PostsData.length).toBe(4)
})

it('text message should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('message text')
    // 2. action
    let new_state = profileReducer(state, action)
    // 3. expectation
    expect(new_state.PostsData[3].text).toBe('message text')
})

it('PostData should be decremented', () => {
    // 1. test data
    let action = deletePost(1)
    // 2. action
    let new_state = profileReducer(state, action)
    // 3. expectation
    expect(new_state.PostsData.length).toBe(2)
})

