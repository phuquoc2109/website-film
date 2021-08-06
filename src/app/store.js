import { configureStore } from '@reduxjs/toolkit'
import reducer from '../component/comment/CommentSlice'

const rootReducer = {
    comments: reducer,
}

const store = configureStore({
    reducer: rootReducer
})

export default store;