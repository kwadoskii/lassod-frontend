import React from "react";
import { useFormikContext } from "formik";

import Error from "./Error";

export default function Select({ label, name, options, placeholder }) {
  const { handleBlur, handleChange, errors, touched, values } = useFormikContext();

  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        className="minput"
        name={name}
        onBlur={handleBlur(name)}
        onChange={handleChange(name)}
        value={values[name]}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option value={option.name} key={option.name}>
            {option.value}
          </option>
        ))}
      </select>
      <Error error={errors[name]} visible={touched[name]} />
    </div>
  );
}
