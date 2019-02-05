import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react'
import Logos from './Logos';

const Div = styled.div`
  border-bottom: 1px solid #EEE;
  width: 800px;
  padding: 16px;
  line-height: 120%;
`
const UpperDiv = styled.div`
  display: flex;
`
const LowerDiv = styled.div`
  display: flex;
  flex-direction: column;
`
const Name = styled.p`
  font-family: 'Roboto Sans';
  font-size: 32px;
`
const Username = styled.p`
  color: #999;
  font-family: 'Roboto';
  font-size: 16px;
`
const P = styled.p`
  line-height: 120%;
  font-family: 'Roboto';
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
    const {item: {name, username, email, address:{street, suite, city}, phone, website, company}} = this.props
    const {clicked} = this.state
    return (
      <Div onClick={() => this.setState({clicked: !clicked})}>
        <UpperDiv>
          <Name>{name}</Name>
          {/* {clicked && <Logos website={website} email={email} />} */}
        </UpperDiv>
        {/* <Icon name='globe'/> */}
        <LowerDiv>
          <Username>@{username}</Username>
          {clicked && this.renderAddress()}
        </LowerDiv>
      </Div>
    );
  }
}

export default Item;
