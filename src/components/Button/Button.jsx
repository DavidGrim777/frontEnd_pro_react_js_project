import "./styles.css";

function Button({
  buttonName = "Send",
  onClick = () => {},
  children,
  type,
}) {
  return (
    <button className="button_component" onClick={onClick} type={type}>
      {/* {buttonName}                   //Показаны оба send + icon */}
      {buttonName}                   
      {/* {children ? "" : buttonName}   //Показан icon */}

      {/* Улосвный рендеринг */}

      {/* {children && buttonName}          //если children true = send + icon / если children false = icon */}
      {/* {!children && buttonName} */}
      {children}
    </button>
  );
}

export default Button;
