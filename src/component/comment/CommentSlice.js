import { createSlice } from '@reduxjs/toolkit'

const initialComment = [{
        id: 1,
        name: 'Quoc Phu',
        comment: 'Quảng cáo hơi nhiều lúc xem phim... Xem không được trọn vẹn :D ... Nên khắc phục...'
    },
    {
        id: 2,
        name: 'Le Van Teo',
        comment: 'Phim tình cảm kia hay quá... Đến đoạn buồn khóc ướt cả gối.. Vì ướt gối nên vote 0☆ !!!'
    }
]

const comment = createSlice({
    name: 'comment',
    initialState: initialComment,
    reducers: {
        addComment: (state, action) => {
            state.push(action.payload);
        },
        removeComment: (state, action) => {
            return state.filter(comment => comment.id !== action.payload)
        },
        editComment: (state, action) => {
            const cmtEdit = action.payload;
            const idIndex = state.findIndex(cmt => cmt.id === cmtEdit.id)
            if (idIndex >= 0) {
                state[idIndex] = cmtEdit;
            }
        }
    }
})

const { reducer, actions } = comment;
export const { addComment, removeComment, editComment } = actions;
export default reducer;