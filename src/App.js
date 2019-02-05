import React, { Component } from 'react';
import axios from 'axios';
import {isEmpty} from 'lodash';
import Item from './components/Item';

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
      return data.map(item => <Item item={item} key={item.id}/>)
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
