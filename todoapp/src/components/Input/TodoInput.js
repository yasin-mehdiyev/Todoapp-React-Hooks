import React from 'react';
import './TodoInput.css';
import { BsBook } from 'react-icons/bs';


const TodoInput = ({ note, handleNote, handleSubmit, editable }) => {
    return (
        <div>
            <h4>Todo Input</h4>

            <div className="input_form">
                <form onSubmit={handleSubmit}>
                    <div className="form_center">
                        <div className="form_group_icon">
                            <BsBook />
                        </div>
                        <div className="form_group">
                            <input type="text"
                                className="form_control"
                                value={note}
                                onChange={handleNote} />
                        </div>
                    </div>

                    <button className="btn">
                        {
                            !editable ? 'Add Item' : 'Edit Item'
                        }
                    </button>
                </form>
            </div>



        </div>
    );
}

export default TodoInput;
