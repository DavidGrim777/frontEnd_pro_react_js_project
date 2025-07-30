import "./styles.css";

function Card() {
  return (
    <div className="card">
      <img
        className="card__avatar"
        src="https://upload.wikimedia.org/wikipedia/en/0/https://static.wikia.nocookie.net/p__/images/3/3c/HomerSimpson.png/revision/latest?cb=20210813010304&path-prefix=protagonist/Homer_Simpson_2006.png"
        alt="Homer Simpson"
      />
      <h2 className="card__name">Гомер Симпсон</h2>
      <p className="card__info">
        Род деятельности: инспектор по безопасности на Спрингфилдской АЭС
      </p>
      <p className="card__info">
        Хобби: любовь к пончикам, боулингу, просмотру телевизора и поеданию
        хот-догов
      </p>
    </div>
  );
}

export default Card;
