import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useAddStudentMutation } from "../../services/studentsApi";
function AddStudent() {
    var[addStudentFn]=useAddStudentMutation();
    const navigate = useNavigate();
     var  addStudenForm = useFormik({
    initialValues: {
      name: "",
      age: "",
      gender: "",
      course: "",
      
    },
  
  onSubmit: async (values, { resetForm }) => {
    try {
      await addStudentFn(values);
      alert("Student added successfully!");
      resetForm();
      navigate("/Students");
    } catch (err) {
      alert("Failed to add student!");
      console.error(err);
    }
  },
   });

  return (
    <div style={{maxWidth:400,margin: "2rem auto",padding: 24,borderRadius: 8}}>
      <h3 className="mb-4 text-center">Add Student</h3>
      <form onSubmit={addStudenForm.handleSubmit}>
        <b>Name:</b>
        <input type="text" {...addStudenForm.getFieldProps("name")} placeholder="Enter Name" className="form-control mb-3"/>

        <b>Age:</b>
        <input type="text" {...addStudenForm.getFieldProps("age")} placeholder="Enter Age" className="form-control mb-3"/>

        <b>Gender: </b>
        <input type="radio" name="gender" value="male" onChange={addStudenForm.handleChange}/>Male
        <input type="radio" name="gender" value="female" onChange={addStudenForm.handleChange} className="ms-3"/>Female
        <input type="radio" name="gender" value="others" onChange={addStudenForm.handleChange} className="ms-3"/>Others<br/><br/>
        
        <b>Course:</b>
        <input type="text" {...addStudenForm.getFieldProps("course")} placeholder="Enter Course" className="form-control mb-3"/>
         <br></br>
        <button className="btn btn-primary ms-3">Add</button>
      </form>
    </div>
  );
};

export default AddStudent;