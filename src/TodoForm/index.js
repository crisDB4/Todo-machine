import React from "react";
import './TodoForm.css';
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [importanceValue, setImportanceValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue,importanceValue);
        setOpenModal(false);
    }

    const onCancel = (event) => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const selectedImportance = (event) => {
        setImportanceValue(event.target.value)
    }
    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea 
                placeholder="Cortar cebolla para el almuerzo"
                value={newTodoValue}
                onChange={onChange}
            />
            <div>
                <label>
                    <input 
                        type="radio"
                        name="importanceLevel"
                        value="poca"
                        onChange={selectedImportance}
                    />
                    Poca
                </label>
                <label>
                    <input 
                        type="radio"
                        name="importanceLevel"
                        value="moderada"
                        onChange={selectedImportance}
                    />
                    Moderada
                </label>
                <label>
                    <input 
                        type="radio"
                        name="importanceLevel"
                        value="gran"
                        onChange={selectedImportance}
                    />
                    Gran
                </label>
            </div>
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    )
}

export { TodoForm }