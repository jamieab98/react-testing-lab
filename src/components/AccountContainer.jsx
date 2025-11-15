import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import Sort from "./Sort";

function AccountContainer() {
  const [transactions,setTransactions] = useState([])
  const [search, setSearch] = useState("")
  const [sorting, setSorting] = useState("description")

  useEffect(()=>{
    fetch("http://localhost:6001/transactions")
    .then(r=>r.json())
    .then(data=>setTransactions(data))
  },[])

  function postTransaction(newTransaction){
    fetch('http://localhost:6001/transactions',{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTransaction)
    })
    .then(r=>r.json())
    .then(data=>setTransactions([...transactions,data]))
  }
  
  // Sort function here
  function onSort(sortBy){
    const sortFilter = sortBy;
    setSorting(sortBy)
  }

  // Filter using search here and pass new variable down
  let filteredTransactions = [];
  if (sorting === "description") {
    filteredTransactions = transactions.filter((t) => t.description.toLowerCase().includes(search.toLowerCase()))
  } else {
    filteredTransactions = transactions.filter((t) => t.category.toLowerCase().includes(search.toLowerCase()))
  }

  function checkFilter() {
    console.log(filteredTransactions)
  }


  return (
    <div>
      <Search setSearch={setSearch}/>
      <AddTransactionForm postTransaction={postTransaction}/>
      <Sort onSort={onSort} setSorting={setSorting}/>
      <TransactionsList transactions={filteredTransactions} />
      <button onClick={checkFilter}>Filter Check</button>
    </div>
  );
}

export default AccountContainer;
