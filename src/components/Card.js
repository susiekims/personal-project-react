import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    border-radius: 10px;
    padding: 10px 25px;
    width: 100%;
    position: relative;
    background: #f2f2f2;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`

export default ({children}) => (
    <Card>
        {children}
    </Card>
)
