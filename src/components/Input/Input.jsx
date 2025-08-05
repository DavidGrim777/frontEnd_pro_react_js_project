// import "./styles.css";

// function Input({ name, type, placeholder, label}) {
//   return (
//     <div className="input_container">
//       <label className="label_container">{label}</label>
//       <input
//         className="input_component"
//         name={name}
//         type={type}
//         placeholder={placeholder}
//       />
//     </div>
//   );
// }
// export default Input;

import "./styles.css";
// function Input(props) {
//   console.log(props);
//   const { id, name, type, placeholder, label } = props;
function Input({ id, name, type, placeholder, label }) {
  return (
    <div className="input_container">
      <label className="label_container" htmlFor={id}>
        {label}
      </label>
      <input
        className="input_component"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
export default Input;
