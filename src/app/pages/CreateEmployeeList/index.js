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
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [telephone, setTelephone] = useState("")
  const [manager, setManager] = useState("")
  const [status, setStatus] = useState("")

  const createEmployee = async (e) => {
    e.preventDefault()

    const data = {
      firstName,
      lastName,
      email,
      telephone,
      manager,
      status,
    }

    await axios.post(
      `${process.env.REACT_APP_PUBLIC_MAIN_PROXY}/create-employee`,
      { ...data },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    
    navigate("/employee-list")

    
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

          <form
            onSubmit={createEmployee}
            className="w-full flex flex-col items-center justify-center"
          >
            <div className="w-full p-3 ">
              <lable>First Name</lable>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                name="firstName"
                placeholder="Your First Name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="w-full p-3 ">
              <lable>Last Name</lable>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                name="lastName"
                placeholder="Your Last Name"
                className="input input-bordered w-full"
              />
            </div>

            <div className="w-full p-3 ">
              <lable>Email</lable>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="Your email address..."
                className="input input-bordered w-full"
              />
            </div>

            <div className="w-full p-3 ">
              <lable>Telephone</lable>
              <input
                onChange={(e) => setTelephone(e.target.value)}
                type="number"
                name="telephone"
                placeholder="Your telephone number..."
                className="input input-bordered w-full"
              />
            </div>

            <div className="w-full p-3 ">
              <label className="font-semibold text-sm capitalize block w-full">
                Manger
              </label>
              <select
                onChange={(e) => setManager(e.target.value)}
                name="manager"
                className="select focus:outline-offset-0 select-bordered w-full"
              >
                {managersList.map((item, index) => (
                  <option key={index} value={item._id}>
                    {item.firstName + " " + item.lastName}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full p-3 ">
              <label className="font-semibold text-sm capitalize block w-full">
                Status
              </label>
              <select
                disabled
                onChange={(e) => setStatus(e.target.value)}
                name="status"
                className="select focus:outline-offset-0 select-bordered w-full"
              >
                <option value="Active">Active</option>
                <option value="inActive">Deactive</option>
              </select>
            </div>

            <div className="w-full p-3 ">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default CreateEmployeeList
