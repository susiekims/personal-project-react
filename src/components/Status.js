import React from 'react';
import styled from 'styled-components';

const colors = {
    open: 'green',
    close: 'red',
    merged: 'purple'
}

const Status = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${({status}) => colors[status]};
    position: absolute;
    right: 20px;
    top: 50%
    transform: translateY(-50%);
`
export default Status;
