import React from 'react'
import { Avatar } from '@material-ui/core';

export default function CommentInput({cmt, handleDelete, handleEdit }) {
    return (
        <div>
            <div key={cmt.id} className="comment-card">
                <div className="comment-card-name">
                    <Avatar  >{cmt.name.charAt(0).toUpperCase()}</Avatar>
                    <div className="comment-card-name-comment">{cmt.name} :</div>
                </div>
                <div className="comment-card-cmt">"{cmt.comment}"</div>
                {cmt.status ? <i onClick={() => handleDelete(cmt)} style={{marginLeft:'20px', cursor: 'pointer'}} class="fas fa-trash"></i> : ''}
                {cmt.status ? <i onClick={() => handleEdit(cmt)} style={{marginLeft:'20px', cursor: 'pointer'}} class="fas fa-edit"></i> : ''}
            </div>
        </div>
    )
}
