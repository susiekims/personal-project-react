import React from 'react';
import FlexWrapper from '../components/FlexWrapper';
import Forks from '../forks/Forks';
import PullRequests from '../pulls/PullRequests';

const Main = ({forks, pulls, user}) => (
    <FlexWrapper>
        <Forks forks={forks}/>
        <PullRequests pulls={pulls}/>
    </FlexWrapper>
)

export default Main;
