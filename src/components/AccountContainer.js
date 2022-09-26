import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  // state for searchTerm
  const [searchTerm, setSearchTerm] = React.useState("")
  // state for transactions
  const [transactions, setTransactions] = React.useState([])

  // fetch transactions from API
  React.useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(resp => resp.json())
      .then(data => setTransactions(data))
  }, [])

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div>
      <Search searchTerm={searchTerm} handleChange={handleChange} />
      <AddTransactionForm />
      <TransactionsList transactions={transactions} searchTerm={searchTerm} />
    </div>
  );
}

export default AccountContainer;
