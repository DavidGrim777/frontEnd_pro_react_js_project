import "./styles.css";
import Input from "../Input/Input";
// import Button from "../Button/Button";

function LoginForm() {
  // Trigger onClick
  //1 пример: функция прописанна заранее
  // const testFunction = () => {
  //   console.log("Click on button Test works");
  // };

  const login = (event) => {
    event.preventDefault();
    console.log(event);
    console.log("Login started");
  };

  return (
    <div className="login_container">
      <p className="login_title">Login form</p>
      <Input
        name="email"
        type="email"
        placeholder="Enter your email"
        label="Email"
      />

      <Input
        name="password"
        type="password"
        placeholder="Enter your password"
        label="Password"
      />
      <Button onClick={LoginForm} buttonName={"Login"} />

      {/* 1 пример: функция прописанна заранее */}
      {/* <button type="button" onClick={testFunction}>Test</button> */}
      {/* 2 пример: функция прописанна непосредственно в фигурных скобках в onClick */}
      {/* <button
        type="button"
        onClick={() => {
          console.log("Click on button Test works");
        }}
      >
        Test
      </button> */}
    </div>
  );
}

export default LoginForm;
