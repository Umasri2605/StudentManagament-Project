import React from "react";
import { Link } from "react-router-dom";
import { useDeleteStudentMutation, useGetAllStudentsQuery, useLazyGetAllStudentsQuery } from "../../services/studentsApi";
function Students(){
   var {isLoading,data}=useGetAllStudentsQuery();
   var [deleteStudentFn]=useDeleteStudentMutation();
   var [getAllStudentsFn]=useLazyGetAllStudentsQuery();
   console.log(data);
    function deleteStudent(id){
        deleteStudentFn(id).then((res)=>{
            console.log(res);
            getAllStudentsFn();
            alert('Successfully Deleted')
        })
        .catch((err)=>{
            alert("Something went wrong"+JSON.stringify(err))
        })
    }
    return (
        <div className="border border-3 p-3 m-3 border-dark">
            {isLoading && <b>Loading...</b>}
            <div className="d-flex justify-content-between align-items-center">
                <h1>Students</h1>
                <Link className="btn btn-success"
                to="/addStudent"> 
                <i class="bi bi-plus-circle"></i>
                Add Student</Link>
            </div>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Course</th>
                    </tr>
                </thead>
                <tbody>
                    {!isLoading && data?.map((student)=>{
                       return (
                        <tr>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                            <td>{student.course}</td>
                            <td>{student.education}</td>
                            <td>
                                <Link className="btn btn-primary me-2" 
                                to={`/updateStudent/${student['_id']}`}>Update</Link>
                                <button className="btn btn-danger" 
                                onClick={()=>{
                                    deleteStudent(student["_id"]);}}>Delete</button>
                            </td>
                        </tr>
                       )
                    })}
                </tbody>
            </table>
            
        </div>
    )
}
export default Students