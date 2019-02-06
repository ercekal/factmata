import React, { Component } from 'react';
import axios from 'axios';
import {isEmpty} from 'lodash';
import UserList from './components/UserList';
import ReactLoading from "react-loading";
import styled from 'styled-components';

const Error = styled.div`
  line-height: 120%;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: red;
  margin: 16px;
`

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
    if (!err && isEmpty(data)) return <ReactLoading type='spin' color="#000" />
    if (err) return <Error>There is an error! {err.message}</Error>
    if (!isEmpty(data)) {
      const filteredData = data.filter((item) => {
        return item['name'].toLowerCase().search(filterTerm.toLowerCase()) !== -1;
      })
      return (
        <div>
          <input
            type='text'
            placeholder='Search for name'
            value={filterTerm}
            onChange={this.onChange}
            style={{margin: '16px'}}
            />
            <UserList data={filterTerm === '' ? data : filteredData} />
        </div>
      )


    }
  }
  onChange = (event) => {
    const {target: {value}} = event
    this.setState({
      filterTerm: value
    });
  }

  render() {
    return this.renderItems()
  }
}

export default App;
