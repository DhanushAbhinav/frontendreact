import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Transactions from './components/Transactions'
import AddTransaction from './components/AddTransaction'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Transactions} />
          <Route path="/add" component={AddTransaction} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
