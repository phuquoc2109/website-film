import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, editComment, removeComment } from './CommentSlice';
import { toast } from 'react-toastify';
import { TextField } from '@material-ui/core';
import './comment.css'
import CommentInput from './CommentInput';

export default function Comment() {
    const comment = useSelector(state => state.comments);
    const dispatch = useDispatch();
    const [valueComment, setValueCommnet] = useState('');
    const [nameComment, setNameCommnet] = useState(''); 
    const [isEdit, setIsEdit] = useState(false);
    
    const [id , setId] = useState();

    const initialComment = {
        id: id,
        name: nameComment,
        comment: valueComment,
        status: true
    }
    

    const handleSubmit = (e) => {
        if(
            initialComment.name !== '' && initialComment.comment !== ''
        ){
            if(isEdit){
                const cmtEdit = initialComment;
                const action = editComment(cmtEdit); 
                dispatch(action);
                setNameCommnet('');
                setValueCommnet('');
                setIsEdit(false);
                toast.success("Chỉnh sửa bình luận thành công")
            }else{
                initialComment.id = Math.random();
                const action = addComment(initialComment);
                dispatch(action);
                toast.success("Bình luận thành công")
                setNameCommnet('');
                setValueCommnet('');
            }
            
        }
        else{
            e.preventDefault();
            toast.warn("Hm... Nhập tên và bình luận đã bạn ơi :D")
        }
       
    }

    const handleDelete = (cmt) => {
        const action = removeComment(cmt.id);
        dispatch(action);
        toast.success("Xoá bình luận thành công")
    }

    const handleEdit = (cmt) => {
        setId(cmt.id);
        setNameCommnet(cmt.name);
        setValueCommnet(cmt.comment);
        setIsEdit(true);
    }

    toast.configure();
    return (
        <div>
            <div className="title-comment">Bình Luận</div>
            <div className="comment_input">
            <label htmlFor="">Tên:</label>
            <TextField size="small" className="comment_input_field" color="primary" value={nameComment} onChange={(e) => setNameCommnet(e.target.value)} id="standard-basic" label="name" />
            <label htmlFor="">Bình luận:</label>
            <TextField className="comment_input_field" value={valueComment} onChange={(e) => setValueCommnet(e.target.value)} id="filled-basic" label="comment"  />
            <button className="comment_input_button" onClick={handleSubmit} >
                {isEdit ? 'Cập nhật' : 'Bình Luận'}
            </button>
            </div>   
            {
                comment.map(cmt => (
                    <CommentInput
                        key={cmt.id}
                        cmt={cmt}
                        handleDelete={handleDelete}
                        handleEdit = {handleEdit}
                    />
                ))
            }
        </div>
    )
}
