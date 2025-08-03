import "./styles.css";

function Input({ name = "", type = "text", placeholder = "", label = "" }) {
  return (
    <div className="input_container">
      <label className="label_container">{label}</label>
      <input
        className="input_component"
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
export default Input;
