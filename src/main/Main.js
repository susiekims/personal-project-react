import React from 'react';
import FlexWrapper from '../components/FlexWrapper';
import Forks from '../forks/Forks';
import PullRequests from '../pulls/PullRequests';
import User from './User';
import FlexItem from '../components/FlexItem';

const Main = ({forks, pulls, user}) => (
    <FlexWrapper>
        <FlexItem>
            <User />
        </FlexItem>
        <FlexItem>
            <Forks forks={forks}/>
        </FlexItem>
        <FlexItem>
            <PullRequests pulls={pulls}/>
        </FlexItem>
    </FlexWrapper>
)

export default Main;
