import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useGetStudentDetailsByIdQuery, useLazyGetAllStudentsQuery, useLazyGetStudentDetailsByIdQuery, useUpdateStudentMutation } from "../../services/studentsApi";

function UpdateStudent(){
    const navigate = useNavigate();
     var {id}=useParams();
    var{isLoading,data}=useGetStudentDetailsByIdQuery(id);
    var[updateStudentFn]=useUpdateStudentMutation();
    var [getAllStudentsFn]=useLazyGetAllStudentsQuery();
    var[getStudentDeatailsFn]=useLazyGetStudentDetailsByIdQuery();

    var studentForm=useFormik({
            initialValues:{
              "name":"",
              "age":"",
              "gender":"",
              "course":"",
              "education":""
            },
            onSubmit:(values)=>{
                updateStudentFn(values).then(()=>{
                    alert("Student Updated")
                    getAllStudentsFn();
                    getStudentDeatailsFn();
                    navigate("/");
                })
            },
        });
        useEffect(()=>{
            getStudentDeatailsFn(id).then(()=>{
                studentForm.setValues({...data})
            })
        },[data]);
        
      return (
        <div className="border border-3 p-3 m-3 border-dark">
            <h1>UpdateStudent</h1>
            {isLoading && <b>Loading....</b>}
            {!isLoading && 
            <form onSubmit={studentForm.handleSubmit}>
            <input type="text" {...studentForm.getFieldProps("name")}/><br/>
            <input type="text" {...studentForm.getFieldProps("age")}/><br/>
            <input type="text" {...studentForm.getFieldProps("gender")}/><br/>
            <input type="text" {...studentForm.getFieldProps("course")}/><br/>
            <input type="text" {...studentForm.getFieldProps("education")}/><br/>
            <button className="btn btn-success" >UpdateStudent</button>
          </form>
          }
        </div>
    );
}
export default UpdateStudent