export default  function  RadioButton({ name, id, label }){
    return (
        <div className="form-check me-3">
          <input className="form-check-input" type="radio" name={name} id={id} />
          <label className="form-check-label" htmlFor={id}>
            {label}
          </label>
        </div>
      );}