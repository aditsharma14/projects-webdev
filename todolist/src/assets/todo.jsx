import React, { useState } from "react";
import "./style.css";

const TodoList = () => {
    const [Todos, SetTodos] = useState([]);
    const [HeadingInput, SetHeadingInput] = useState("");
    const [ListInputs, SetListInputs] = useState({});

    const handleAddTodo = () => {
        if (HeadingInput.trim() !== "") {
            SetTodos((prev) => [...prev, { heading: HeadingInput, lists: [] }]);
            SetHeadingInput("");
        }
    };

    const handleDeleteTodo = (index) => {
        const newTodos = [...Todos];
        newTodos.splice(index, 1);
        SetTodos(newTodos);
    };

    const handleAddlist = (index) => {
        if (ListInputs[index] && ListInputs[index].trim() !== "") {
            const newTodos = [...Todos];
            newTodos[index] = {
                ...newTodos[index],
                lists: [...newTodos[index].lists, ListInputs[index]],
            };
            SetTodos(newTodos);
            SetListInputs((prev) => ({ ...prev, [index]: "" }));
        }
    };

    const handleListInputChange = (index, value) => {
        SetListInputs((prev) => ({ ...prev, [index]: value }));
    };

    return (
        <>
            <div className="todo-container">
                <h1 className="title">Todo-List</h1>
                <div className="input-container">
                    <input
                        type="text"
                        className="heading-input"
                        placeholder="enter-heading"
                        value={HeadingInput}
                        onChange={(e) => SetHeadingInput(e.target.value)}
                    />
                    <button type="button" className="add-list-button" onClick={handleAddTodo}>
                        Add Heading
                    </button>
                </div>
            </div>

            <div className="todo-main">
                {Todos.map((todo, index) => (
                    <div key={index} className="todo-card">
                        <div className="heading-todo">
                            <h3>{todo.heading}</h3>
                            <button
                                type="button"
                                className="delete-button-heading"
                                onClick={() => handleDeleteTodo(index)}
                            >
                                Delete Heading
                            </button>
                        </div>

                        <ul>
                            {todo.lists.map((list, listIndex) => (
                                <li key={listIndex} className="todo_inside_list">
                                    <p>{list}</p>
                                </li>
                            ))}
                        </ul>

                        <div className="add-list">
                            <input
                                type="text"
                                className="list-input"
                                placeholder="Add List"
                                value={ListInputs[index] || ""}
                                onChange={(e) => handleListInputChange(index, e.target.value)}
                            />
                            <button type="button" className="add-list-button" onClick={() => handleAddlist(index)}>
                                Add List
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TodoList;