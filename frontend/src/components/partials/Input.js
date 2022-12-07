// import React, { useEffect, useState } from 'react'
// import Swal from 'sweetalert2';
// import toast from 'react-hot-toast';
// import ListOfTodos from './ListOfTodos';


// const Input = () => {
// // 
//     const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('currentUser')));
//     const [todoInput, setTodoInput] = useState('');
//     const [something, setSomething] = useState([])
//     const [todosToShow, setTodosToShow] = useState([])

    


//     const saveTodo = async () => {
//         // console.log(todoInput);
//         if (todoInput) {
//             const response = await fetch('http://localhost:5000/todo/save', {
//                 method: 'post',
//                 body: JSON.stringify({ todo: todoInput, createdBy: currentUser._id }),
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             })
//             setTodoInput('');
//             if (response.status == 200) {
//                 toast.success('Todo Saved')
//             }
//             else
//                 toast.error("Some Error Occured")

//             const data = await response.json();
//             console.log(data);
//             setSomething([...something, data]);

//             showTodos()
//         }
//     }

//     const showTodos = async () => {


//         const response = await fetch('http://localhost:5000/todo/getbyuser', {
//             method: 'post',
//             body: JSON.stringify(currentUser),
//             headers: {
//                 'Content-Type': 'application/json'
//             }

//         })

//         const allTodos = await response.json();

//         setTodosToShow(allTodos);
        
//     }

//     useEffect(() => {
//         showTodos()
//     }, [])





//     return (
//         <>

//             <div>
//                 <div className="container">
//                     <div className="card m-3">
//                         <div className="input-group">
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Enter Todo"
//                                 aria-label="Enter Todo"
//                                 value={todoInput}
//                                 onChange={(e) => { setTodoInput(e.target.value) }}

//                                 aria-describedby="button-addon2"
//                             />
//                             <button
//                                 className="btn btn-outline-primary"
//                                 type="button"
//                                 id="saveTodo"
//                                 onClick={saveTodo}
//                                 data-mdb-ripple-color="dark"
//                             >

//                                 Save Todo
//                             </button>
//                         </div></div></div>

//             </div>
//             {/* {
//                 ()
//                 ?
//                 :<ListOfTodos thing={something} />
//             } */}
//             <ListOfTodos thing={todosToShow} />

//         </>
//     )
// }

// export default Input
