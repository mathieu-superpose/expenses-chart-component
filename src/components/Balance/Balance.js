import logo from './img/logo.svg'
import './Balance.scss';

function Balance() {
    return (
        <div className="Balance">
            <div className="Balance__left">
                <h1 className="Balance__left__title">My balance</h1>
                <p className="Balance__left__balance">$921.48</p>
            </div>
            <div className="Balance__right">
                <img src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default Balance;
