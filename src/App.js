import { Route, Routes } from "react-router-dom";
import Login from './app/pages/Login'
import CreateEmployeeList from './app/pages/CreateEmployeeList'
import EmployeeList from './app/pages/EmployeeList'
import NotFound from "./app/pages/404";
import Department from "./app/pages/Department";
import DepartmentCreateEdit from "./app/pages/DepartmentCreateEdit";

const App = () => {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employee-create" element={<CreateEmployeeList />} />
        <Route path="/employee-edit/:id" element={<CreateEmployeeList />} />
        <Route path="/departments" element={<Department />} />
        <Route path="/departments-create" element={<DepartmentCreateEdit />} />
        <Route path="/departments-edit/:id" element={<DepartmentCreateEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
