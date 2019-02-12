import React from 'react';
import FlexWrapper from '../components/FlexWrapper';
import Forks from '../forks/Forks';
import PullRequests from '../pulls/PullRequests';
import User from './User';
import FlexItem from '../components/FlexItem';

const Main = () => (
    <FlexWrapper>
        <FlexItem width="20%">
            <User />
        </FlexItem>
        <FlexItem width="36%">
            <Forks/>
        </FlexItem>
        <FlexItem width="36%">
            <PullRequests/>
        </FlexItem>
    </FlexWrapper>
)

export default Main;
