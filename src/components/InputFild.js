const InputField = ({ label, type, id, placeholder, colSize }) => {
    return (
      <div className={`col-${colSize} mb-3`}>
        <label htmlFor={id} className="form-label">
          {label}
        </label>
        <input
          type={type}
          className="form-control"
          id={id}
          placeholder={placeholder}
        />
      </div>
    );
  };
  
  export default InputField;