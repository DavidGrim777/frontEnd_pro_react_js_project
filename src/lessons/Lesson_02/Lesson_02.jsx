import getPlanteaterStatus, {hello, animal} from "./data.js";
import Button from "../../components/Button/Button.jsx";

import "./styles.css";

function Lesson_02() {
  return (
    <div>
      {/* <P>{hello}</P> */}
      <div className="animal_card">
        <h3 className="card_title">Animal card: {animal.type}</h3>
        <img className="avatar" src={animal.avatarURL} alt="Animal image" />
        <p className="card-info">Name: {animal.fullName}</p>
        <p className="card-info">Age: {animal.age}</p>
        <p className="card-info">Color: {animal.color}</p>
        <p className="card-info">
          Is planteater? {getPlanteaterStatus(animal.isPlanteater)}
        </p>
        {/* <p className="card-info">
          Is planteater? {animal.isPlanteater ? "Yes" : "No"}
        </p> */}
        <Button />
      </div>
    </div>
  );
}

export default Lesson_02;
