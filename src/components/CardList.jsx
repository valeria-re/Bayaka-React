import { useMemo } from "react";

import { Card } from "./";
import { getByData } from "../helpers";

export const CardList = ({ categoria }) => {
  const heroes = useMemo(() => getByData(categoria), [categoria]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <Card key={hero.id} {...hero} />
      ))}
    </div>
  );
};
