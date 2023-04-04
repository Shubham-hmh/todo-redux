
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import {  useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, getAllTodos } from "../features/todo/todoSlice";
const Table = () => {
    const todoState = useSelector((state) => state?.todo?.todo);
    const dispatch = useDispatch();
    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = () => {
        dispatch(getAllTodos());
    }

    const deleteUser = async (id) => {
        await dispatch(deleteTodo(id));
        getProducts();
    }

    return (
        <>
            <div className="mt-5">
                <div className="container">
                 
                    <p><b>table

                        data  column..........</b></p>
                    <table class="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">DueDate</th>
                                <th scope="col">Status</th>
                                <th scope="col">TimeStamp</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                Array.isArray(todoState) ? todoState.map((element, index) => {
                                    let date = new Date(element.createdAt);
                                    return (
                                        <>
                                            <tr>
                                                <td >{element?.title}</td>
                                                <td >{element?.description}</td>
                                                <td >{element?.dueDate}</td>
                                                <td >{element?.status}</td>
                                                <td >{date.toLocaleDateString()}</td>
                                                <td className="d-flex justify-content-between">
                                                    <NavLink to={`edit/${element?._id}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink>
                                                    <button className="btn btn-danger" onClick={() => deleteUser(element?._id)}><DeleteOutlineIcon /></button>
                                                </td>

                                            </tr>

                                        </>
                                    )
                                }) : null
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )

}

export default Table