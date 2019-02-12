import React from 'react';
import FlexWrapper from '../components/FlexWrapper';
import Forks from '../forks/Forks';
import PullRequests from '../pulls/PullRequests';
import User from './User';
import FlexItem from '../components/FlexItem';

const Main = ({forks, pulls, user}) => (
    <FlexWrapper>
        <FlexItem width="20%">
            <User />
        </FlexItem>
        <FlexItem width="36%">
            <Forks forks={forks}/>
        </FlexItem>
        <FlexItem width="36%">
            <PullRequests pulls={pulls}/>
        </FlexItem>
    </FlexWrapper>
)

export default Main;
