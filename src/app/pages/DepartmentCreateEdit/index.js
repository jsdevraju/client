import Navbar from "../../components/Navbar";
import AppFrom from "../../components/Form/AppForm";
import AppFormFeilds from "../../components/Form/AppFormFeilds";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-daisyui";
import { DepartmentSchema } from "../../validation";
import { useEffect, useState } from "react";
import axios from "axios";

const DepartmentCreateEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("")
  const [manager, setManager] = useState("");
  const [managersList, setManagersList] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  const createDepartment = async (e) => {
    e.preventDefault();
    const data = {
      name,
      status,
      manager,
    }

    await axios.post(
      `${process.env.REACT_APP_PUBLIC_MAIN_PROXY}/create-deparment`,
      { ...data },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )

    navigate("/departments")

    
  };

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
            {id ? "Edit Department" : "Create Department"}
          </h1>

          <form
            onSubmit={createDepartment}
            className="w-full flex flex-col items-center justify-center"
          >
            <div className="w-full p-3 ">
              <lable>Name</lable>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                placeholder="Department Name"
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
};

export default DepartmentCreateEdit;


//  ;<AppFrom
//    className="flex flex-col justify-center items-center "
//    initialValues={{ email: "", password: "" }}
//    onSubmit={(values) => createDepartment(values)}
//    validationSchema={DepartmentSchema}
//  >
//    <AppFormFeilds className="app_input" name="name" placeholder="Name" />
//    <div className="mt-4 flex flex-col justify-between w-full items-center gap-3 font-sans">
//      <label className="font-semibold text-sm capitalize block w-full">
//        Manger
//      </label>
//      <select
//        defaultValue={"--Select--"}
//        className="select focus:outline-offset-0 select-bordered w-full"
//      >
//        <option disabled defaultValue={"--Select--"}>
//          "--Select--"
//        </option>
//        <option value="manger">Manger</option>
//        <option value="admin">Admin</option>
//        <option value="employee">Employee</option>
//      </select>
//    </div>

//    {/* When Edit  */}
//    {id && (
//      <div className="mt-4 flex flex-col justify-between w-full items-center gap-3 font-sans">
//        <label className="font-semibold text-sm capitalize block w-full">
//          Status
//        </label>
//        <select
//          defaultValue={"--Select--"}
//          className="select focus:outline-offset-0 select-bordered w-full"
//        >
//          <option disabled defaultValue={"--Select--"}>
//            "--Select--"
//          </option>
//          <option value="active">Active</option>
//          <option value="deactivate">Deactivate</option>
//        </select>
//      </div>
//    )}

//    <div className="flex justify-end items-center gap-4 mt-4">
//      <Button color="success" className="text-white">
//        Save
//      </Button>
//      <Button color="info" className="text-white">
//        Cancel
//      </Button>
//    </div>
//  </AppFrom>