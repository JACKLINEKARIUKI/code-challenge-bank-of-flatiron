import React, { useState } from "react";

function AddTransactionForm({ setTransactions }) {
  const [date, setDate] = useState(new Date());
  const [description, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (event) => {
    if (!date || !description || !category || !amount) return;
    event.preventDefault();
    setTransactions((transactions) => [
      ...transactions,
      { date, description, category, amount },
    ]);
    setDate(new Date());
    setDesc("");
    setAmount(0);
    setCategory("");
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            value={date}
            type="date"
            name="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            value={description}
            type="text"
            name="description"
            placeholder="Description"
            onChange={(e) => setDesc(e.target.value)}
          />
          <input
            value={category}
            type="text"
            name="category"
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            value={amount}
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
