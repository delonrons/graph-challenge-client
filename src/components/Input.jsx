import React from 'react';

const Input = ({placeholder, type, onChange, maxLength}) => {

  return (
    <>
      <input
        className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none
                  w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-full py-4 px-2"
        type={type}
        aria-label={placeholder}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={(event) => onChange(event.target.value)}
      />
    </>
  )
};

export default Input;