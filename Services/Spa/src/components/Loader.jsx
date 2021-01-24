import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import React from 'react';

const LoaderWrapper = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export default ({visible}) => (<LoaderWrapper>
    <Loader type='MutatingDots' visible={visible} color='#F9D342' height={100} width={100} />
  </LoaderWrapper>);