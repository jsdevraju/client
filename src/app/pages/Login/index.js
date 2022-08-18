import AppFormFeilds from "../../components/Form/AppFormFeilds"
import AppFrom from "../../components/Form/AppForm"
import { LoginSchema } from "../../validation"
import { Button } from "react-daisyui"
import axios from "axios"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { login } from "../../../store/userSlice"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const loginUser = async (values) => {
    try {
      setIsLoading(true)
      const { data } = await axios.post(
        `${process.env.REACT_APP_PUBLIC_MAIN_PROXY}/login`,
        values
      )

      localStorage.setItem("user", JSON.stringify(data.user))
      localStorage.setItem("token", data.token)
      toast.success("Login Successful")
      dispatch(login(data))
      setIsLoading(false)

      navigate("/employee-list")
    } catch (error) {
      setIsLoading(false)

      toast.error(error.response.data.message || "something went wrong")
    }
  }

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/employee-list")
    }
  }, [navigate])

  return (
    <>
      <section
        className="w-screen h-screen flex flex-col justify-center items-center
      bg-gradient-to-br from-purple-700 to-amber-700"
      >
        <div className="bg-white rounded-lg p-10 md:w-[550px] w-[350px]">
          <AppFrom
            className="flex flex-col justify-center items-center "
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => loginUser(values)}
            validationSchema={LoginSchema}
          >
            <h1 className="text-center text-3xl">Welcome Login</h1>
            <AppFormFeilds
              className="app_input"
              name="email"
              placeholder="Email"
            />
            <AppFormFeilds
              className="app_input"
              name="password"
              password={true}
              placeholder="Password"
            />

            <Button
              loading={isLoading}
              color="secondary"
              className="w-full mt-4"
            >
              Login
            </Button>
          </AppFrom>
        </div>
      </section>
    </>
  )
}

export default Login
