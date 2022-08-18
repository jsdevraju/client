import Navbar from "../../components/Navbar"
import AppFrom from '../../components/Form/AppForm'
import AppFormFeilds from '../../components/Form/AppFormFeilds'
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-daisyui";
import { DepartmentSchema } from "../../validation";

const DepartmentCreateEdit = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const createDepartment = async (values) => {
    console.log(values);
  };

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
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => createDepartment(values)}
            validationSchema={DepartmentSchema}
          >
            <AppFormFeilds
              className="app_input"
              name="name"
              placeholder="First Name"
            />
            <AppFormFeilds
              className="app_input"
              name="surname"
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
                defaultValue={"--Select--"}
                className="select focus:outline-offset-0 select-bordered w-full"
              >
                <option disabled defaultValue={"--Select--"}>
                  "--Select--"
                </option>
                <option value="manger">Manger</option>
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
              </select>
            </div>

            {/* When Edit  */}
            {id && (
              <div className="mt-4 flex flex-col justify-between w-full items-center gap-3 font-sans">
                <label className="font-semibold text-sm capitalize block w-full">
                  Status
                </label>
                <select
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
              <Button color="success" className="text-white">
                Save
              </Button>
              <Button color="info" className="text-white">
                Cancel
              </Button>
            </div>
          </AppFrom>

        </div>
      </section>
    </>
  )
}

export default DepartmentCreateEdit