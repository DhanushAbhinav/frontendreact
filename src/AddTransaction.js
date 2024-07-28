import React, {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const AddTransaction = () => {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('Credit')
  const history = useHistory()

  const handleSubmit = async e => {
    e.preventDefault()
    await axios.post('/api/transactions', {
      description,
      amount: parseFloat(amount),
      type,
    })
    history.push('/')
  }

  return (
    <div>
      <h1>Add Transaction</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Type</label>
          <select value={type} onChange={e => setType(e.target.value)}>
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
          </select>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default AddTransaction
