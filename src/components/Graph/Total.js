import "./Total.scss";

function getPercentEvolution(previous, current) {
  const percent = Math.round((100 * current) / previous) / 10;
  if (percent === 0) return "0.0%";
  return percent > 0 ? "+" + percent + "%" : percent + "%";
}

function Total({ total, lastMonth }) {
  return (
    <div className="Total">
      <div className="Total__count">
        <h2 className="Total__count__title">Total this month</h2>
        <p className="Total__count__total">$478.33</p>
      </div>
      <div className="Total__evolution">
        <p className="Total__evolution__count">+2.4%</p>
        <h3 className="Total__evolution__subtitle">from last month</h3>
      </div>
    </div>
  );
}

export default Total;
