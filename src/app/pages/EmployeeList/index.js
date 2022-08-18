import React, { useEffect, useState } from "react"
import { Button, Input, Pagination } from "react-daisyui"
import Navbar from "../../components/Navbar"
import SelectFilter from "../../components/SelectFIlter"
import { FaFilter } from "react-icons/fa"
import { GoSearch } from "react-icons/go"
import { PAGE } from "../../data"
import TableData from "../../components/Table"
import axios from "axios"

const EmployeeList = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isFetched, setIsFetched] = useState(false)
  const [employeeList, setEmployeeList] = useState([])
  const [totalPage, setTotalPage] = useState(1)
  const [departmentList, setDepartmentList] = useState([])
  const [managersList, setManagersList] = useState([])

  const STATUS = [
    {
      name: "Active",
      value: "active",
    },
    {
      name: "Deactive",
      value: "inActive",
    },
  ]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded === true) {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(
            `${process.env.REACT_APP_PUBLIC_MAIN_PROXY}/get-employees`,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          )
          // console.log(data.allUser)
          setEmployeeList(data.allUser)
          setTotalPage(data.totalPage)
        } catch (err) {
          console.log(err)
        }

        setIsFetched(true)
      }
      fetchData()
    }
  }, [isLoaded])

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
      <section>
        <Navbar />

        {isFetched === true ? (
          <div className="container sec">
            <h1 className="font-semibold text-2xl mb-8">Employees</h1>
            {/* Filter Employees */}
            <div className="border-2 border-gray-900 p-8 rounded-md">
              <SelectFilter
                onChange={(e) => console.log(e.target.value)}
                title="Status"
                data={STATUS}
                defaultValue="Active Only / (All) / Deactive Only"
              />
              <SelectFilter
                isId={true}
                onChange={(e) => console.log(e.target.value)}
                title="Department"
                data={departmentList}
                defaultValue="- Select -"
              />
              <SelectFilter
                isName={true}
                isId={true}
                onChange={(e) => console.log(e.target.value)}
                title="Manager"
                data={managersList}
                defaultValue="- Select -"
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
                  onChange={(e) => console.log(e.target.value)}
                  title="Show per Page"
                  data={PAGE}
                  defaultValue="Result Per Page"
                />
              </div>
              {/* Search */}
              <div className="relative md:w-[20%] w-full">
                <Input
                  type="text"
                  onChange={(e) => console.log(e.target.value)}
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
            <TableData employeeList={employeeList} />

            {/* Pagination */}
            <Pagination className="mt-10">
              <Button>1</Button>
              <Button active>2</Button>
              <Button>3</Button>
            </Pagination>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </section>
    </>
  )
}

export default EmployeeList
