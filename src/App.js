import React, { Component } from 'react';

import Navbar from './components/Navbar'
import StatusArea from './components/StatusArea'
import MessageList from './components/MessageList'

import store from './store'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar />
          <div className="container" style={{ marginTop: '50px' }}>
            <StatusArea />
            <br /><br />
            <hr />
            <MessageList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
