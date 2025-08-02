import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import "./styles.css";

function Lesson_03() {
  const homerSimpson = {
    avatarURL:
      "https://medias.artmajeur.com/standard/15687763_img-20220426-182732.jpg?v=1738650820",
    name: "Гомер Симпсон",
    job: "инспектор по безопасности на Спрингфилдской АЭС",
    hobby:
      "любовь к пончикам, боулингу, просмотру телевизора и поеданию хот-догов",
  };

  const margeSimpson = {
    avatarURL:
      "https://cdn.costumewall.com/wp-content/uploads/2015/09/marge-simpson-tn.jpg",
    name: "Мардж Симпсон",
    // job: "домохозяйка",
    // hobby: "поп-музыке",
  };

  const bartSimpson = {
    avatarURL: "https://wikimultia.org/images/6/65/Bart_Simpson.png",
    name: "Барт Симпсон",
    job: "ученик 4-го класса в Спрингфилдской начальной школе",
    hobby: "катание на скейтборде, чтение комиксов, просмотр телевизора",
  };

  // Как мы работали с событиями раньше на базовом курсе
  // const button = document.querySelector("#get-button");

  // button.addEventListener('click', () => {
  //   console.log("Button works")
  // });

  const getUser = () => {
    console.log("Button works");
  };

  return (
    <div className="homework03_page_wrapper">
      <Card
        avatarURL={homerSimpson.avatarURL}
        name={homerSimpson.name}
        job={homerSimpson.job}
        hobby={homerSimpson.hobby}
      />
      <Card
        avatarURL={margeSimpson.avatarURL}
        name={margeSimpson.name}
        job={margeSimpson.job}
        hobby={margeSimpson.hobby}
      />
      <Card
        avatarURL={bartSimpson.avatarURL}
        name={bartSimpson.name}
        job={bartSimpson.job}
        hobby={bartSimpson.hobby}
      />
      <div className="buttonContainer">
        <Button onClick={getUser} buttonName={"Get User"} />
        <Button
          onClick={() => {
            console.log("send request");
          }}
          buttonName={"Send request"}
        />
        <Button>
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/9971/9971679.png"
          />
        </Button>
        {/* <button id="get-button">Get</button> */}
        {/* <button onClick={getUser}>Get</button> */}
      </div>
    </div>
  );
}

export default Lesson_03;
