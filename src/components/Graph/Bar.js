import "./Bar.scss";

const maxBarHeight = 220; // px

function today(day) {
  const days = {
    0: "sun",
    1: "mon",
    2: "tue",
    3: "wed",
    4: "thu",
    5: "fri",
    6: "sat",
  };
  const dayToday = days[new Date().getDay()];
  return dayToday === day ? "--today" : "";
}

function Bar({ result, maxAmount, index }) {
  return (
    <div className="Bar">
      <div className="Bar__details">
        <p>${result.amount}</p>
      </div>
      <div
        className="Bar__container"
        style={{
          height: `${Math.round((maxBarHeight * result.amount) / maxAmount)}px`,
        }}
      >
        <div
          className={`Bar__container__bar${today(result.day)}`}
          style={{
            height: `${Math.round(
              (maxBarHeight * result.amount) / maxAmount
            )}px`,
            animation: `happening 1s forwards ${index / 5}s`,
          }}
        />
      </div>
      <p className="Bar__day">{result.day}</p>
    </div>
  );
}

export default Bar;
