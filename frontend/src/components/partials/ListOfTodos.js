// import React, { useEffect, useState } from 'react'
// import toast from 'react-hot-toast';

// const ListOfTodos = (props) => {

//     const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('currentUser')))

//     const deleteTodo = async (todo) => { 
//         console.log(todo);
//         const response = await fetch('http://localhost:5000/todo/delete',{
//             method: 'post',
//             body: JSON.stringify(todo),
//             headers:{
//                 'Content-Type':'application/json'
//             }
//         })
//         if(response.status==200)
//         toast.success('Todo Deleted');
//         showTodos()
//     }

//     const editTodo = (target,todo) => {
//         console.log('target',target.target);
//         console.log(todo);
//     }

//     const renderTodos = () => {

//         return (props.thing.map((ele)=>{
//             return <li className="list-group-item d-flex justify-content-between align-items-center" key={ele._id}>
//             {ele.todo}
//             <div>
//             <button className="badge badge-info p-2 mx-2 rounded-pill" onClick={(e)=>{editTodo(e,ele)}}    ><i className="fas fa-pencil-alt    "></i></button>
//             <button className="badge badge-danger p-2 mx-2 rounded-pill" onClick={()=>{deleteTodo(ele)}}  ><i className="fas fa-trash-alt    "></i></button>
//             </div>
//         </li>
//         }))
//     }

//     return (
//         <>
//             <div className="container">
//                 <div className="card border border-primary">
//                     <ul className="list-group list-group-light mx-3">
                        
//                         {renderTodos()}
//                     </ul>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default ListOfTodos