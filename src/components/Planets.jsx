import { useState } from "react";
import { data } from "../data";
import Cards from "./Cards";

export default function Planets() {
  const [planets, setPlanets] = useState(data);
  return (
    <>
      <h2>Planets</h2>
      <div className="container">
        {planets.map((item) => {
          const { id, img, planet, info } = item;
          return <Cards key={id} image={img} planet={planet} info={info} />;
        })}
      </div>
    </>
  );
}
