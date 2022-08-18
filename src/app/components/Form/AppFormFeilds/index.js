import React, { useState } from "react";
import { useFormikContext } from "formik";
import AppErrorMessage from "../AppErrorMessage";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function AppFormFeilds({
  name,
  password = false,
  ...otherProps
}) {
  const [showPassword, setShowPassword] = useState(password);
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();

  return (
    <div className="relative">
      <label htmlFor={name} className="text-sm font-semibold text-gray-800 capitalize mt-4 block">{name}</label>
      <input
        onBlur={() => setFieldTouched(name)}
        onChange={handleChange(name)}
        type={showPassword ? 'password' : 'text'}
        value={values[name]}
        id={name}
        {...otherProps}
      />
      {password && (
        <div
          className="absolute top-[45px] right-[15px]"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <AiFillEye size={24} color="#000" />
          ) : (
            <AiFillEyeInvisible size={24} color="#000" />
          )}
        </div>
      )}
      <AppErrorMessage visible={touched[name]} error={errors[name]} />
    </div>
  );
}
