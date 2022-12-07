import React, { useEffect, useState } from 'react'
import HeaderBeforeLogin from '../partials/HeaderBeforeLogin'
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import Input from '../partials/Input'
import ListOfTodos from '../partials/ListOfTodos'

const Todos = () => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('currentUser')))

    const [todoInput, setTodoInput] = useState('');
    const [something, setSomething] = useState([])
    const [todosToShow, setTodosToShow] = useState([])

    const saveTodo = async () => {
        // console.log(todoInput);
        if (todoInput) {
            const response = await fetch('http://localhost:5000/todo/save', {
                method: 'post',
                body: JSON.stringify({ todo: todoInput, createdBy: currentUser._id }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            setTodoInput('');
            if (response.status == 200) {
                toast.success('Todo Saved')
            }
            else
                toast.error("Some Error Occured")

            const data = await response.json();
            console.log(data);
            setSomething([...something, data]);

            showTodos()
        }
    }

    const showTodos = async () => {


        const response = await fetch('http://localhost:5000/todo/getbyuser', {
            method: 'post',
            body: JSON.stringify(currentUser),
            headers: {
                'Content-Type': 'application/json'
            }

        })

        const allTodos = await response.json();

        setTodosToShow(allTodos);

    }

    useEffect(() => {
        showTodos()
    }, [])

    const deleteTodo = async (todo) => {
        console.log(todo);
        const response = await fetch('http://localhost:5000/todo/delete', {
            method: 'post',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status == 200)
            toast.success('Todo Deleted');
        showTodos()
    }

    const editTodo = async ( todo) => {
        
        console.log(todo);
        const somePromt = window.prompt('Enter Updated Todo')
        console.log(somePromt)
        if(somePromt != null)
        {
            const response = await fetch('http://localhost:5000/todo/edit',{
                method: 'post',
                body: JSON.stringify({todo: todo, updateTodo: somePromt}),
                headers: {
                    'Content-Type':'application/json'
                }
            })

            const data = await response.json()
            console.log(data);
            if(response.status == 200)
            toast.success('Todo Updated');
            showTodos()
        }
    }


    const renderTodos = () => {

        return (todosToShow.map((ele) => {
            return <li className="list-group-item d-flex justify-content-between align-items-center" key={ele._id}>
                {ele.todo}
                <div>
                    <button className="badge badge-info p-2 mx-2 rounded-pill" onClick={(e) => { editTodo(ele) }}    ><i className="fas fa-pencil-alt    "></i></button>
                    <button className="badge badge-danger p-2 mx-2 rounded-pill" onClick={() => { deleteTodo(ele) }}  ><i className="fas fa-trash-alt    "></i></button>
                </div>
            </li>
        }))
    }


    return (
        <>
            <HeaderBeforeLogin status='signout' />
            {/* <Input/> */}
            {/* <ListOfTodos/> */}

            <div>
                <div className="container">
                    <div className="card m-3">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Todo"
                                aria-label="Enter Todo"
                                value={todoInput}
                                onChange={(e) => { setTodoInput(e.target.value) }}

                                aria-describedby="button-addon2"
                            />
                            <button
                                className="btn btn-outline-primary"
                                type="button"
                                id="saveTodo"
                                onClick={saveTodo}
                                data-mdb-ripple-color="dark"
                            >

                                Save Todo
                            </button>
                        </div></div></div>

            </div>

            <div className="container">
                <div className="card border border-primary">
                    <ul className="list-group list-group-light mx-3">

                        {renderTodos()}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Todos