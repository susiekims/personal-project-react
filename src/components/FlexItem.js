import styled from 'styled-components';
import React from 'react';

const FlexItem = styled.div`
    width: 25%;

    @media (max-width: 900px) {
        width: 100%;
    }
`

export default ({children}) => (<FlexItem>{children}</FlexItem>)
