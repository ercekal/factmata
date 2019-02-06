import React, { Component } from 'react';
import axios from 'axios';
import {isEmpty} from 'lodash';
import UserList from './components/UserList';
import ReactLoading from "react-loading";
class App extends Component {
  state = {
    data: [],
    filterTerm: ''
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        this.setState({data: res.data})
      })
      .catch(err => this.setState({err}))
  }

  renderItems = () => {
    const {data, err, filterTerm} = this.state
    if (isEmpty(data)) return <ReactLoading type='spin' color="#000" />
    if (err) return 'There is an error!'
    if (!isEmpty(data)) {
      if (filterTerm === '') return <UserList data={data} />
      const filteredData = data.filter((item) => {
        return item['name'].toLowerCase().search(filterTerm.toLowerCase()) !== -1;
      })
      return <UserList data={filteredData} />
    }
  }
  onChange = (event) => {
    const {target} = event
    const {value} = target
    this.setState({
      filterTerm: value
    });
  }

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='Search for name'
          value={this.state.filterTerm}
          onChange={this.onChange}
          style={{margin: '16px'}}
          />
        {this.renderItems()}
      </div>
    )
  }
}

export default App;
