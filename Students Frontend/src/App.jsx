import { Outlet } from "react-router-dom"
import Students from "./features/students/Students"
function App() {

  return (
      <div className="border border-1 border-dark m-4 p-4">
        <Students></Students>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      
  )
}
export default App;
