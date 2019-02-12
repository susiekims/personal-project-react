import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    border-radius: 4px;
    padding: 20px;
    box-shadow: 0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
    margin: 20px auto;
    width: 100%;
    position: relative;
`

export default ({children}) => (
    <Card>
        {children}
    </Card>
)
