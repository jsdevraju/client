import React from "react"
import { Button, Table } from "react-daisyui"
import { useSelector } from "react-redux"
// import { TABLEDATA } from "../../data";

const DepartmentTable = ({ departmentList }) => {
  const user = useSelector((state) => state.user.user)
  return (
    <>
      <div className="w-full mt-10">
        <Table className="!w-[100%]">
          <Table.Head>
            <span>Actions</span>
            <span>Name</span>
            <span>Manager</span>
            <span>Status</span>
          </Table.Head>
          <Table.Body>
            {departmentList.map((item, index) => (
              <Table.Row key={index}>
                <span className="flex items-center gap-4">
                  {user?.role === "ADMIN" ? (
                    <>
                      <Button color="secondary">Edit</Button>
                      <Button color="accent" className="text-white">
                        Deactivate
                      </Button>
                    </>
                  ) : undefined}
                </span>
                <span>{item.manager.firstName + item.manager.lastName}</span>
                
                <span
                  className={`${
                    item.status === "active"
                      ? "bg-green-500 text-white px-5 py-2 rounded-sm"
                      : "bg-red-500 text-white px-5 py-2 rounded-sm"
                  }`}
                >
                  {item.status}
                </span>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  )
}

export default DepartmentTable
