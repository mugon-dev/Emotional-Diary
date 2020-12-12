import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
`;
const Footer = () => {
  return (
    <FooterStyle>
      <h3>Copyright © 2018 tcpschool.co.,Ltd. All rights reserved.</h3>
      <h4>Contact webmaster for more information. 070-1234-5678</h4>
    </FooterStyle>
  );
};

export default Footer;
