import { useEffect, useState } from "react";

export default function Facts() {
  const [apiData, setApiData] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setApiData(data);
      });
  }, []);
  console.log(apiData);

  const handleClickIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleClickDecrease = () => {
    if (count === 0) {
      setCount(0);
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
            <img src={apiData[count].imageUrl} alt={apiData[count]?.title} />
            <p className="container-slider-text">{apiData[count]?.summary}</p>
            <p className="container-slider-text">{apiData[count]?.title}</p>
            <p className="container-slider-text">{apiData[count]?.newsSite}</p>
          </div>
        </div>
        <button onClick={handleClickIncrease} className="btn btnSlider">
          next
        </button>
      </div>
    </>
  );
}
