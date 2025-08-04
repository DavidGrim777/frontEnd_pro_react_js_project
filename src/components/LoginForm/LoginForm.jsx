import "./styles.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

function LoginForm() {
  const login = () => {
    console.log("Login Process");
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
    </div>
  );
}

export default LoginForm;
