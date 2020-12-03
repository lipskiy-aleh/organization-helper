import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import { store } from '../store'


const App: React.FC<{}> = () => (
  <Provider store={store}>
    <Router>
      <div> Hello my first data in react app </div>
      <Link to="/about">About</Link>

      <Route path="/about">
        Hello world
      </Route>
    </Router>
  </Provider>
)

export default App