import React from "react"

export const Transaction = ({ transaction }) => {
  const itemClass = transaction.amount < 0 ? "minus" : "plus"
  const sign = transaction.amount < 0 ? "-" : "+"

  return (
    <li className={itemClass}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn">x</button>
    </li>
  )
}
