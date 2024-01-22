import style from './TransacrionHistory.module.css';

export const TransactionHistory = ({transactions}) => {
  return (
    <table className={style.transactionhistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(item => (
            <tr key={item.id}>
            <td className={style.type}>{item.type}</td>
            <td className={style.amount}>{item.amount}</td>
            <td className={style.currency}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
