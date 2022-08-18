import { useEffect, useState } from "react"
import { Button } from "react-daisyui"
import { useNavigate, useParams } from "react-router-dom"
import AppFrom from "../../components/Form/AppForm"
import AppFormFeilds from "../../components/Form/AppFormFeilds"
import Navbar from "../../components/Navbar"
import { EmployeeSchema } from "../../validation"
import axios from "axios"
const CreateEmployeeList = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [isLoaded, setIsLoaded] = useState(false)
  const [managersList, setManagersList] = useState([])

  const createEmployee = async (values) => {
    console.log(values)
  }

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded === true) {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(
            `${process.env.REACT_APP_PUBLIC_MAIN_PROXY}/get-managers`,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          )
          // console.log(data)
          setManagersList(data)
        } catch (err) {
          console.log(err)
        }
      }
      fetchData()
    }
  }, [isLoaded])

  return (
    <>
      <Navbar />
      <section className="sec">
        <div className="container">
          <h1 className="font-semibold text-2xl mb-8">
            {id ? "Edit Employee" : "Create Employee"}
          </h1>

          <AppFrom
            className="flex flex-col justify-center items-center "
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              telephone: "",
              manager: "",
              status: "",
            }}
            onSubmit={createEmployee}
            validationSchema={EmployeeSchema}
          >
            <AppFormFeilds
              className="app_input"
              name="firstName"
              placeholder="First Name"
            />
            <AppFormFeilds
              className="app_input"
              name="lastName"
              placeholder="Last Name"
            />
            <AppFormFeilds
              className="app_input"
              name="email"
              placeholder="Email"
            />
            <AppFormFeilds
              className="app_input"
              name="telephone"
              placeholder="Telephone"
              type="number"
            />
            <div className="mt-4 flex flex-col justify-between w-full items-center gap-3 font-sans">
              <label className="font-semibold text-sm capitalize block w-full">
                Manger
              </label>
              <select
                name="manager"
                defaultValue={"--Select--"}
                className="select focus:outline-offset-0 select-bordered w-full"
              >
                {managersList.map((item, index) => (
                  <option key={index} value={item._id}>
                    {item.firstName + " " + item.lastName}
                  </option>
                ))}
              </select>
            </div>

            {/* When Edit  */}
            {id && (
              <div className="mt-4 flex flex-col justify-between w-full items-center gap-3 font-sans">
                <label className="font-semibold text-sm capitalize block w-full">
                  Status
                </label>
                <select
                  name="status"
                  defaultValue={"--Select--"}
                  className="select focus:outline-offset-0 select-bordered w-full"
                >
                  <option disabled defaultValue={"--Select--"}>
                    "--Select--"
                  </option>
                  <option value="active">Active</option>
                  <option value="deactivate">Deactivate</option>
                </select>
              </div>
            )}

            <div className="flex justify-end items-center gap-4 mt-4">
              <Button type="submit" color="success" className="text-white">
                Save
              </Button>
            </div>
          </AppFrom>
        </div>
      </section>
    </>
  )
}

export default CreateEmployeeList
