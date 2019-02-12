import styled from 'styled-components';
import React from 'react';

const FlexWrapper = styled.div`
    display: flex;
    width: 90%;
    margin: 20px auto 0;
    justify-content: space-between;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`
export default ({children}) => <FlexWrapper>{children}</FlexWrapper>;