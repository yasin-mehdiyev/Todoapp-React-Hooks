import React from 'react';
import TodoItem from '../Item/TodoItem';
import './TodoList.css';

const TodoList = ({ datas, allClearItem, deletedItem, handleEdit }) => {
    console.log(`Test:` + datas);
    return (
        <div>
            {
                datas.length > 0 ?
                    <h4>Todo List</h4>
                    : null
            }


            {
                datas.map(data => {
                    return <TodoItem
                        key={data.id}
                        datas={data}
                        deletedItem={deletedItem}
                        handleEdit={handleEdit}
                    />
                })
            }

            {
                datas.length > 0 ?
                    <button className="btn_all_clear" onClick={allClearItem}>
                        All Clear Item
                    </button>
                    : null
            }

        </div>
    );
}

export default TodoList;
