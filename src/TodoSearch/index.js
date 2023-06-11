import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
    const {
        searchValue,
    setSearchValue
    } = React.useContext(TodoContext)
    return (
        <input 
        className='TodoSearch' 
        type='text' 
        placeholder="Cortar cebolla"
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);
        }}
        />
    );
}

export {TodoSearch };