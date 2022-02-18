import { useState } from "react";
import { data } from "../data";

export default function Facts() {
  const [slider, setSlider] = useState(data);
  const [count, setCount] = useState(0);

  const handleClickIncrease = () => {
    if (count === slider.length - 1) {
      setCount(0);
    } else {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const handleClickDecrease = () => {
    if (count === 0) {
      setCount(slider.length - 1);
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <>
      <h2>Facts</h2>
      <div className="container-facts">
        <button onClick={handleClickDecrease} className="btn btnSlider">
          back
        </button>

        <div className="container-slider-inner">
          <div className="container-slider">
            <img
              src={slider[count].img}
              alt={slider[count].planet}
              width="300px"
              height="230px"
            />
            <p className="header">{slider[count].planet}</p>
          </div>
        </div>
        <button onClick={handleClickIncrease} className="btn btnSlider">
          next
        </button>
      </div>
    </>
  );
}
