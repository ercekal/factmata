import React, { Component } from 'react';
import axios from 'axios';
import {isEmpty} from 'lodash';
import UserList from './components/UserList';

class App extends Component {
  state = {
    data: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        this.setState({data: res.data})
      })
      .catch(err => this.setState({err}))
  }

  renderItems = () => {
    const {data, err} = this.state
    if (isEmpty(data)) return 'Loading...'
    if (err) return 'There is an error!'
    if (!isEmpty(data)) {
      return <UserList data={data} />
    }
  }
  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    )
  }
}

export default App;
