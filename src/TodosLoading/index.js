import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
    return (
        <div className='LoadingTodo-container'>
            <span className='LoadingTodo-completeIcon'></span>
            <span className='LoadingTodo-importanceLevel'></span>
            <p className='LoadingTodo-text'></p>
            <span className='LoadingTodo-deleteIcon'></span>
        </div>
    );
}

export {TodosLoading };