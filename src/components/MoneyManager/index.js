import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'Income',
    transactionList: [],
    income: 0,
    expenses: 0,
    balance: 0,
  }

  onChangeTitleInput = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmountInput = event => {
    this.setState({amount: event.target.value})
  }

  onChangeSelectEl = event => {
    const optionValue = transactionTypeOptions.filter(
      eachOpt => eachOpt.optionId === event.target.value,
    )
    this.setState({type: optionValue[0].displayText})
  }

  addButton = () => {
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    if (type === 'Income') {
      this.setState({income: amount})
      this.setState({balance: amount})
    } else {
      this.setState(prevState => ({
        expenses: parseInt(prevState.expenses) + parseInt(amount),
      }))
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
    }))
  }

  onClickDeleteButton = id => {
    const {transactionList} = this.state

    const deletedItem = transactionList.filter(eachItem => eachItem.id === id)

    if (deletedItem[0].type === 'Expenses') {
      this.setState(prevState => ({
        expenses:
          parseInt(prevState.expenses) - parseInt(deletedItem[0].amount),
      }))
    } else {
      this.setState({balance: 0, expenses: 0, income: 0})
    }

    this.setState(prevState => ({
      transactionList: prevState.transactionList.filter(
        eachItem => id !== eachItem.id,
      ),
    }))
  }

  render() {
    const {
      title,
      amount,
      transactionList,
      income,
      expenses,
      balance,
    } = this.state
    const balanceAmount = balance - expenses

    return (
      <div className="mainContainer">
        <div className="nameContainer">
          <h1 className="name">Hi, Suhail</h1>
          <p className="description">
            Welcome back to your <span className="spanEl">Money Manager</span>
          </p>
        </div>
        <div className="moneyDetailsContainer">
          <MoneyDetails
            amounts={balanceAmount}
            incomes={income}
            expensess={expenses}
          />
        </div>
        <div className="transactionHistoryContainers">
          <div className="transactions">
            <h1 className="heading">Add Transaction</h1>
            <form className="transactionsContainer">
              <label className="title" htmlFor="titleInput">
                TITLE
              </label>
              <br />
              <input
                type="text"
                id="titleInput"
                placeholder="TITLE"
                className="inputEl"
                value={title}
                onChange={this.onChangeTitleInput}
              />
              <br />
              <label className="title" htmlFor="amountInput">
                AMOUNT
              </label>
              <br />
              <input
                type="text"
                id="amountInput"
                placeholder="AMOUNT"
                className="inputEl"
                value={amount}
                onChange={this.onChangeAmountInput}
              />
              <br />
              <label className="title" htmlFor="selectInput">
                TYPE
              </label>
              <br />
              <select
                id="selectInput"
                className="inputEl"
                onChange={this.onChangeSelectEl}
              >
                <option value={transactionTypeOptions[0].optionId}>
                  {transactionTypeOptions[0].displayText}
                </option>
                <option value={transactionTypeOptions[1].optionId}>
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
              <br />
              <button
                type="button"
                className="buttonEl"
                onClick={this.addButton}
              >
                Add
              </button>
            </form>
          </div>
          <div className="historyContainer">
            <h1 className="heading2">History</h1>
            <div className="headingsContainer">
              <p className="heads heads1">Title</p>
              <p className="heads heads2">Amount</p>
              <p className="heads">Type</p>
            </div>
            <ul className="listContainer">
              {transactionList.map(eachItem => (
                <TransactionItem
                  key={eachItem.id}
                  itemDetails={eachItem}
                  onClickDeleteButton={this.onClickDeleteButton}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
