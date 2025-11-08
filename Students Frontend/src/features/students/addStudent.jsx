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
      education: "",
    },
  
  onSubmit: async (values, { resetForm }) => {
    try {
      await addStudentFn(values);
      alert("Student added successfully!");
      resetForm();
      navigate("/");
    } catch (err) {
      alert("Failed to add student!");
      console.error(err);
    }
  },
   });

  return (
    <div style={{maxWidth: 400,margin: "2rem auto",padding: 24,borderRadius: 8}}>
      <h3 className="mb-4 text-center">Add Student</h3>
      <form onSubmit={addStudenForm.handleSubmit}>
        <label>Name:</label>
        <input type="text" {...addStudenForm.getFieldProps("name")} placeholder="Enter Name" className="form-control mb-3"/>

        <label>Age:</label>
        <input type="text" {...addStudenForm.getFieldProps("age")} placeholder="Enter Age" className="form-control mb-3"/>

        <label>Gender:</label>
        <input type="text" {...addStudenForm.getFieldProps("gender")} placeholder="Enter Gender" className="form-control mb-3"/>

        <label>Course:</label>
        <input type="text" {...addStudenForm.getFieldProps("course")} placeholder="Enter Course" className="form-control mb-3"/>

        <label>Education:</label>
        <input type="text" {...addStudenForm.getFieldProps("education")} placeholder="Enter Education" className="form-control mb-3"/>

        <button className="btn btn-primary ms-3">Add</button>
      </form>
    </div>
  );
};

export default AddStudent;