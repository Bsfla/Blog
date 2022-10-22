import React, { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  return [value, onChange, setValue];
};

export default useInput;
