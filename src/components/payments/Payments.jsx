import { useState } from "react";
import "./Payments.scss";

const Payments = () => {
  const [moneyAmount, setmoneyAmount] = useState("");
  let [accountBalance, setAccountBalance] = useState(0);
  console.log(accountBalance);
  const depositMoney = () => {
    setAccountBalance(
      Number((accountBalance + Number(moneyAmount)).toFixed(2))
    );
    setmoneyAmount("");
  };

  const payOutMoney = () => {
    if (accountBalance - Number(moneyAmount) < 0) {
      alert("you can no longer debit");
      setmoneyAmount("");
      return;
    }
    setAccountBalance(
      Number((accountBalance - Number(moneyAmount)).toFixed(2))
    );
    setmoneyAmount("");
  };

  return (
    <section className="section-payments">
      <h2 className="heading-secondary">My current account </h2>
      <p className="account-balance">{`${accountBalance} €`}</p>
      <input
        type="number"
        name="input-money"
        id="input-money"
        className="input-money"
        placeholder="Amount in €"
        value={moneyAmount}
        onChange={(e) => setmoneyAmount(e.target.value)}
      />
      <div className="pay-btns-wrapper">
        <button onClick={depositMoney} className="btn">
          Deposit
        </button>
        <button onClick={payOutMoney} className="btn">
          Pay out
        </button>
      </div>
    </section>
  );
};

export default Payments;
