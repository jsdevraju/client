import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./app/pages/Login"
import CreateEmployeeList from "./app/pages/CreateEmployeeList"
import EmployeeList from "./app/pages/EmployeeList"
import NotFound from "./app/pages/404"
import Department from "./app/pages/Department"
import DepartmentCreateEdit from "./app/pages/DepartmentCreateEdit"
import axios from "axios"
import { login, logout } from "./store/userSlice"
import { store } from "./store/store"
import { useEffect, useState } from "react"

const App = () => {
  const router = useNavigate()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded === true) {
      console.log("loaded")
      const userData = localStorage.getItem("user")

      if (userData) {
        store.dispatch(login(JSON.parse(userData)))
      }
    }
  }, [isLoaded])
  //declare the axios instance method to chcek if the token is valid unless force the client to logout.
  axios.interceptors.response.use(
    (response) => {
      return response
    },
    function (error) {
      const res = error.response

      console.log(error)
      // Your account is disabled
      if (
        res?.status === 401 ||
        res?.data.message.indexOf("invalid token") === 0 ||
        // eslint-disable-next-line no-mixed-operators
        res?.data.message.indexOf(
          "Your account is disabled. please contatct support"
        ) === 0 ||
        (res.data.message.indexOf("jwt expired") === 0 &&
          // eslint-disable-next-line no-mixed-operators
          res.config &&
          !res.config.__isRetryRequest)
      ) {
        return new Promise((response, reject) => {
          axios(`${process.env.REACT_APP_PUBLIC_MAIN_PROXY}/logout`)
            .then((data) => {
              localStorage.removeItem("user")
              store.dispatch(logout({ user: null, token: "" }))
              router("/login")
            })
            .catch((err) => {
              console.log(err)
              reject(error)
            })
        })
      }
      return Promise.reject(error)
    }
  )

  return (
    <>
      <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employee-create" element={<CreateEmployeeList />} />
        <Route path="/employee-edit/:id" element={<CreateEmployeeList />} />
        <Route path="/departments" element={<Department />} />
        <Route path="/departments-create" element={<DepartmentCreateEdit />} />
        <Route
          path="/departments-edit/:id"
          element={<DepartmentCreateEdit />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
