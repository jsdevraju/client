const SelectFilter = ({ title, data, defaultValue }) => {
  return (
    <>
      <div className="flex justify-between w-full component-preview p-4 items-center gap-10 font-sans">
        <h1 className="font-semibold md:text-xl capitalize">{title}</h1>
        <select
          defaultValue={"Active Only / (All) / Deactive Only"}
          className="w-[60%] select focus:outline-offset-0 select-bordered"
        >
          <option
            disabled
            defaultValue={defaultValue}
          >
            { defaultValue }
          </option>
          {data?.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectFilter;
