import React, { useEffect, useState } from 'react'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { editTodo, singleTodo } from '../features/todo/todoSlice';


const signUpSchema = yup.object({
    title: yup.string().required("Title is Required"),
    description: yup.string().required("Description is Required"),
    dueDate: yup.string().required("DueDate is Required"),
    status: yup.string().required("Status is Required"),

});

const Edit = () => {
 
    const navigate = useNavigate();
    const todoState = useSelector((state) => state?.todo?.todo);
    const dispatch = useDispatch();
    const { id } = useParams("");
    useEffect(() => {
        dispatch(singleTodo(id));
    }, []);
    useEffect(() => {
        if (todoState) {
          formik.setValues(todoState);
        }
      }, [todoState]);
    const formik = useFormik({
        initialValues: {
            title: "demo",
            description:  "123",
            status:  "active",
            dueDate:  "23/2/23"
        },
        onSubmit: async (values) => {
           const action = await dispatch(editTodo({
                prodId: id,
                todoData: values
            }));

            if (!action.error) {
                navigate('/');
              }


        },
    });

    return (
        <div className="container">
            <NavLink to="/">home2</NavLink>
            <form className="mt-4" onSubmit={formik.handleSubmit} >
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Title</label>
                        <input type='text' name='title' value={formik.values.title} onChange={formik.handleChange("title")} onBlur={formik.handleBlur("title")} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Title of Todo :' />
                        <div className="error">
                            {formik.touched.title && formik.errors.title}
                        </div>
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Description</label>
                        <input type="text" name="description" value={formik.values.description} onChange={formik.handleChange("description")} onBlur={formik.handleBlur("description")} placeholder='Enter Description' className="form-control" id="exampleInputPassword1" />
                        <div className="error">
                            {formik.touched.description && formik.errors.description}
                        </div>

                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Due Date</label>
                        <input type="Date" name="dueDate" value={formik.values.dueDate} onChange={formik.handleChange("dueDate")} onBlur={formik.handleBlur("dueDate")} placeholder='Enter DueDate' className="form-control" id="exampleInputPassword1" />
                        <div className="error">
                            {formik.touched.dueDate && formik.errors.dueDate}
                        </div>
                    </div>



                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Status</label>
                        <input type="text" name="status" value={formik.values.status} onChange={formik.handleChange("status")} onBlur={formik.handleBlur("status")} placeholder='Enter Status' className="form-control" id="exampleInputPassword1" />
                        <div className="error">
                            {formik.touched.status && formik.errors.status}
                        </div>
                    </div>

                    <button type='submit' className="button border-0 btn btn-primary" >Edit Todo</button>


                </div>
            </form>





        </div>
    )
}

export default Edit;
