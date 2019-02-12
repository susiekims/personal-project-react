import styled from 'styled-components';
import React from 'react';

const FlexItem = styled.div`
    width: ${props => props.width};
    @media (max-width: 900px) {
        width: 100%;
        margin-bottom: 30px;
    }
`

export default FlexItem
