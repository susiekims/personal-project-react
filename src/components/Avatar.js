import React from 'react';
import styled from 'styled-components';

const Avatar = styled.div`
    width: 150px;
    height: 150px;
    background-image: url('${props => props.src}');
    background-position: center;
    background-size: cover;
    border-radius: 50%;
`

export default Avatar;

