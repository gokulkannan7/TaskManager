import { useState } from 'react';
import './App.css';

function App() {
    const [todos, setTodos] = useState([
        {
            title: 'Go to gym',
            description: 'go to gym from 5-7 pm',
            completed: true,
        },
        {
            title: 'Study for CAT',
            description: 'Study from 3-5 pm',
            completed: false,
        },
    ]);

    function ButtonHandler() {
        setTodos([
            ...todos,
            {
                title: 'new todo',
                description: 'new desc',
            },
        ]);
    }

    return (
        <div>
            <button onClick={ButtonHandler}> Add a random todo </button>
            {todos.map(function (todos) {
                return (
                    <CustomTodoComponent
                        title={todos.title}
                        description={todos.description}
                        completed={todos.completed}
                    />
                );
            })}
        </div>
    );
}

function CustomTodoComponent(props) {
    return (
        <div>
            {props.title}
            {props.description}
            {props.completed}
        </div>
    );
}

export default App;
