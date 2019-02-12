import React from 'react';
import styled from 'styled-components';

const colors = {
    open: 'green',
    close: 'red',
    merged: 'purple'
}

const Status = styled.div`
    width: 15px;
    height: 15px;
    position: absolute;
    left: 10px;
    border-radius: 50%;
    background-color: ${({status}) => colors[status]};
`
export default Status;
