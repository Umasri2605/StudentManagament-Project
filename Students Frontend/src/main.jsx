import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import App from "./App.jsx"
import { store } from './app/store.js';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import AddStudent from './features/students/addStudent';
import Students from './features/students/Students.jsx';
import UpdateStudent from './features/students/updateStudent.jsx';
  const router = createBrowserRouter([
    {
          path: "/",
          element:<App></App>,
    },  
    
        {
            path:"/Students",
            element:<Students></Students>
         },
         {
            path:"/addStudent",
            element:<AddStudent></AddStudent>
         },
         {
            path:"/updateStudent/:id",
            element:<UpdateStudent></UpdateStudent>
         },
    
  ]);
  createRoot(document.getElementById('root')).render(
    <Provider store={store}>
       <RouterProvider router={router}>
       </RouterProvider>
    </Provider>
     
 )  
