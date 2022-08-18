import React from "react";
import { Button, Table } from "react-daisyui";
import { TABLEDATA } from "../../data";

const TableData = () => {
  return (
    <>
      <div className="w-full mt-10">
        <Table className="!w-[100%]">
          <Table.Head>
            <span>Actions</span>
            <span>First Name</span>
            <span>Last Name</span>
            <span>Telephone Number</span>
            <span>Email Address</span>
            <span>Manager</span>
            <span>Status</span>
          </Table.Head>
          <Table.Body>
            {TABLEDATA.map((item, index) => (
              <Table.Row key={index}>
                <span className="flex items-center gap-4">
                  <Button color="secondary">Edit</Button>
                  <Button color="accent" className="text-white">
                    Deactivate
                  </Button>
                </span>
                <span>{item.firstName}</span>
                <span>{item.lastName}</span>
                <span>{item.telephone}</span>
                <span>{item.email}</span>
                <span>{item.role}</span>
                <span
                  className={`${
                    item.status === "active" ? "bg-green-500 text-white px-5 py-2 rounded-sm" : "bg-red-500 text-white px-5 py-2 rounded-sm"
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
  );
};

export default TableData;
