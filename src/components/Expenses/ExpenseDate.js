import './ExpenseDate.css'
export default function ExpenseDate({expenseDate}) {
  const month = expenseDate.toLocaleString("en-US", { month: "long" });
  const day =expenseDate.toLocaleString("en-US", { day: "2-digit" });
  const year = expenseDate.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-year'>{year}</div>
      <div className='expense-day'>{day}</div>
    </div>
  );
}
