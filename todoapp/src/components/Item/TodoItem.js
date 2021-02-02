import React from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import './TodoItem.css';

const TodoItem = ({ datas, deletedItem, handleEdit }) => {

    const { id, note } = datas;
    return (
        <div>
            <div className="item">
                <div className="text">
                    {note}
                </div>
                <div className="icon">
                    <AiFillEdit className="edit_btn" onClick={() => handleEdit(id)} />
                    <AiFillDelete className="delete_btn" onClick={() => deletedItem(id)} />
                </div>

            </div>
        </div>
    );
}

export default TodoItem;
