import React from "react";
import { Button, Input, Pagination } from "react-daisyui";
import Navbar from "../../components/Navbar";
import SelectFilter from "../../components/SelectFIlter";
import { FaFilter } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { PAGE, SELECT } from "../../data";
import TableData from "../../components/Table";

const EmployeeList = () => {
  return (
    <section>
      <Navbar />
      <div className="container sec">
        <h1 className="font-semibold text-2xl mb-8">Employees</h1>
        {/* Filter Employees */}
        <div className="border-2 border-gray-900 p-8 rounded-md">
          <SelectFilter
            title="Status"
            data={SELECT}
            defaultValue="Active Only / (All) / Deactive Only"
          />
          <SelectFilter
            title="Department"
            data={SELECT}
            defaultValue="Active Only / (All) / Deactive Only"
          />
          <SelectFilter
            title="Manager"
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
            <SelectFilter title="Show per Page" data={PAGE}  defaultValue="Result Per Page" />
          </div>
          {/* Search */}
          <div className="relative md:w-[20%] w-full">
            <Input
              placeholder="Search..."
              className="border-gray-900 border-2 px-8 w-full"
            />
            <GoSearch size={20} className="text-gray-900 absolute top-4 left-2" />
          </div>
        </div>
        {/* Table Data */}
        <TableData />

         {/* Pagination */}
         <Pagination className="mt-10">
            <Button>1</Button>
            <Button active>2</Button>
            <Button>3</Button>
            <Button>4</Button>
          </Pagination>
      </div>
    </section>
  );
};

export default EmployeeList;
