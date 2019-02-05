import React, { Component } from 'react';
import styled from 'styled-components';
import Logos from './Logos';

const Div = styled.div`
  border-bottom: 1px solid #EEE;
  display: flex;
  flex-direction: column;
  width: 800px;
  padding: 16px 0;
  margin: 0 16px;
  cursor: pointer;
`
const UpperDiv = styled.div`
  display: flex;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  justify-content: space-between;
  width: 100%;
`
const LowerDiv = styled.div`
  display: flex;
  flex-direction: column;
`
const Name = styled.p`
  font-family: 'Roboto Slab', serif;
  line-height: 120%;
  margin: 0;
  font-size: 32px;
`
const Username = styled.p`
  color: #999;
  font-family: 'Roboto', sans-serif;
  line-height: 120%;
  padding: 16px 0;
  font-size: 16px;
`
const P = styled.p`
  line-height: 120%;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
`

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  renderAddress() {
    const {item: {address:{street, suite, city, zipcode}, company}} = this.props
    return (
      <LowerDiv>
        <P><strong>{company.name}</strong></P>
          <P>{`${street} ${suite}`}</P>
          <P>{city}</P>
          <P>{zipcode}</P>
      </LowerDiv>
    )
  }

  render() {
    const {item: {name, username, email, website}} = this.props
    const {clicked} = this.state
    return (
      <Div onClick={() => this.setState({clicked: !clicked})}>
        <UpperDiv>
          <Name>{name}</Name>
          {clicked && <Logos website={website} email={email} /> }
        </UpperDiv>
        <Username>@{username}</Username>
        {clicked && this.renderAddress()}
      </Div>
    );
  }
}

export default Item;
