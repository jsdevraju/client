import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Input, Pagination } from "react-daisyui";
import { FaFilter } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import Navbar from "../../components/Navbar";
import SelectFilter from "../../components/SelectFIlter";
import TableData from "../../components/Table";
import DepartmentTable from "../../components/Table/DepartmentTable";
import { PAGE, SELECT } from "../../data";

const Department = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  const [departmentList, setDepartmentList] = useState([])

useEffect(() => {
  setIsLoaded(true)
}, [])

useEffect(() => {
  if (isLoaded === true) {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_PUBLIC_MAIN_PROXY}/get-departments`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        // console.log(data.allDepartments)

        setDepartmentList(data.allDepartments)
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
          <h1 className="font-semibold text-2xl mb-8">Departments</h1>
          {/* Filter  */}
          <div className="border-2 border-gray-900 p-8 rounded-md mt-4">
            <SelectFilter
              title="Status"
              data={SELECT}
              defaultValue="Active Only / (All) / Deactive Only"
            />

            <Button color="secondary" className="flex gap-2">
              <FaFilter /> Filter
            </Button>
          </div>
          {/* Pagination */}
          <div className="flex justify-between flex-wrap items-center mt-10">
            {/* Result Per Page */}
            <div className="w-full md:w-[50%] ">
              <SelectFilter
                title="Show per Page"
                data={PAGE}
                defaultValue="Result Per Page"
              />
            </div>
            {/* Search */}
            <div className="relative md:w-[20%] w-full">
              <Input
                placeholder="Search..."
                className="border-gray-900 border-2 px-8 w-full"
              />
              <GoSearch
                size={20}
                className="text-gray-900 absolute top-4 left-2"
              />
            </div>
          </div>
          {/* Table Data */}
          <DepartmentTable departmentList={departmentList} />

          {/* Pagination */}
          <Pagination className="mt-10">
            <Button>1</Button>
            <Button active>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </Pagination>
        </div>
      </section>
    </>
  )
};

export default Department;
