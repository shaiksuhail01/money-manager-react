import './index.css'

const TransactionItem = props => {
  const {itemDetails, onClickDeleteButton} = props
  const {id, title, amount, type} = itemDetails

  const onClickDelete = () => {
    onClickDeleteButton(id)
  }
  return (
    <li>
      <div className="transactionItemContainer">
        <p className="transactionStyle">{title}</p>
        <p className="transactionStyle amountPad">Rs {amount}</p>
        <p className="transactionStyle typePad">{type}</p>
        <button
          type="button"
          className="deleteButton"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="deleteImage"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
