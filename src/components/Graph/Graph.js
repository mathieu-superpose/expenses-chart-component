import { v4 as uuidv4 } from "uuid";
import Bar from "./Bar";
import Total from "./Total";
import data from "../../data/data.json";
import "./Graph.scss";

const maxAmount = data.results.reduce(
  (max, curr) => (curr.amount > max ? curr.amount : max),
  0
);
const total = data.results.reduce((sum, curr) => sum + curr.amount, 0);
const lastMonth = total * (1 + 2.4 / 100);

function Graph() {
  return (
    <div className="Graph">
      <h2 className="Graph__title">Spending - Last 7 days</h2>
      <ul className="Graph__chart">
        {data.results.map((result) => (
          <li key={uuidv4()}>
            <Bar result={result} maxAmount={maxAmount} />
          </li>
        ))}
      </ul>
      <Total total={total} lastMonth={lastMonth} />
    </div>
  );
}

export default Graph;
