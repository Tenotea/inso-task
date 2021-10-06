import React from 'react'

const TextField = ({
  label,
  type,
  required,
  placeholder
}) => {
  return (
    <div>
      <label htmlFor="" className="block text-app-primary-green mb-1.5">
        { label }
        { required && <span className="text-red-600"> * </span> }
      </label>
      <input 
        type={type} 
        className="py-5 px-6 border border-app-primary-blue rounded-md block w-full outline-none text-gray-600 text-sm" 
        placeholder={placeholder}
      />
    </div>
  )
}

export default TextField
