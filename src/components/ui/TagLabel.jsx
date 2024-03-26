export function TagLabel({children}) {
    return (
      <label
          className="block text-sm font-medium text-gray-400"
          htmlFor={htmlFor}
      >
          {children}
      </label>
    )
  }
  
  export default TagLabel