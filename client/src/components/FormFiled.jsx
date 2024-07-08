import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-grey-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="bg-[#ececf1] font-semibold text-xs text-black px-2 py-1 rounded-[5px]"
          >
            Surprise Me
          </button>
        )}
      </div>

      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        required
        className="bg-gray-50 text-gray-600 border border-gray-300 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
      ></input>
    </div>
  );
};

export default FormField;
