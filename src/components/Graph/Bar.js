import './Bar.scss';

const maxBarHeight = 150; // px

function Bar({ result, maxAmount }) {
  return (
    <div className="Bar">
      <div className="Bar__details">
        <p>${result.amount}</p>
      </div>
      <div className="Bar__bar" style={{"height": `${Math.round(maxBarHeight * result.amount / maxAmount)}px`}} />
      <p className="Bar__day">{result.day}</p>
    </div>
  );
}

export default Bar;
