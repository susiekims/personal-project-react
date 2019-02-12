import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
    width: 70%;
    font-weight: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 5px;
`

export default ({children}) => (<Title>{children}</Title>)