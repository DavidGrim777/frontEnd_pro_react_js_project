import { useState } from "react";
import Button from "../Button/Button";

import "./styles.css";

function Feedback() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const onLike = () => {
    setLikes((pervValue) => {
      return pervValue + 1;
    });
  };

  const onDislike = () => {
    setDislikes((pervValue) => {
      return pervValue + 1;
    });
  };

  const onReset = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedBack_wrapper">
      <div className="button_control">
        <Button buttonName="Like" onClick={onLike}>
          <img
            className="icon"
            src="https://wallpapers.com/images/hd/facebook-like-emoji-icon-vib2ngvvjil1edqr.jpg"
          />
        </Button>
      </div>
      <p className="likes">{likes}</p>
      <div className="button_control">
        <Button buttonName="Dislike" onClick={onDislike}>
          <img
            className="icon"
            src="https://purepng.com/public/uploads/thumbnail/red-dislike-symbol-emoji-agl.png"
          />
        </Button>
      </div>
      <p className="dislikes">{dislikes}</p>
      <div id="reset" className="button_control">
        <Button buttonName="Reset Results" onClick={onReset} />
      </div>
    </div>
  );
}

export default Feedback;
