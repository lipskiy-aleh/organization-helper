import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import { Button } from 'antd'
import { store } from '../store'

import 'antd/dist/antd.css'

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <div> Hello my first data in react app </div>
      <Button type="primary">Button</Button>
      <Link to="/about">About</Link>

      <Route path="/about">
        Hello world
      </Route>
    </Router>
  </Provider>
)

export default App