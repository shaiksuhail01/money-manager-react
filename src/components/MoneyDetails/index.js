import './index.css'

const MoneyDetails = props => {
  const {amounts, incomes, expensess} = props
  return (
    <>
      <div className="balanceContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="moneyDetailsImages"
        />
        <div className="detailsContainer">
          <p className="detailName">Your Balance</p>
          {amounts === '' ? (
            <p className="detailMoney" data-testid="balanceAmount">
              Rs 0
            </p>
          ) : (
            <p className="detailMoney" data-testid="balanceAmount">
              Rs {amounts}
            </p>
          )}
        </div>
      </div>
      <div className="incomeContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="moneyDetailsImages"
        />
        <div className="detailsContainer">
          <p className="detailName">Your Income</p>
          <p className="detailMoney" data-testid="incomeAmount">
            Rs {incomes}
          </p>
        </div>
      </div>
      <div className="expensesContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="moneyDetailsImages"
        />
        <div className="detailsContainer">
          <p className="detailName">Your Expenses</p>
          <p className="detailMoney" data-testid="expensesAmount">
            Rs {expensess}
          </p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
