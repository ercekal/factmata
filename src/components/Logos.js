import React from 'react';
import styled from 'styled-components';
import Email from '../images/Email'
import Globe from '../images/Globe'

const Div = styled.div`
  display: flex;
  width: 60px;
  justify-content: space-between;
`

const Logos = ({website, email}) => {
  return (
    <Div>
      <a href={`http://www.${website}`} target='_blank' rel="noopener noreferrer">
        <Globe />
      </a>
      <a href={`mailto:${email}`}>
        <Email />
      </a>
    </Div>
  );
};

export default Logos;