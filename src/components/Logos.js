import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Email from '../images/Email'
import Globe from '../images/Globe'

const Div = styled.div`
  display: flex;
`

const Logos = ({website, email}) => {
  return (
    <Div>
      <a href={website}>
        Globe
        {/* <Globe style={{height: '30px'}}/> */}
      </a>
      <a href={`mailto:${email}`}>
        Email
        {/* <Email style={{height: '30px'}}/> */}
      </a>
    </Div>
  );
};

Logos.propTypes = {
  website: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default Logos;