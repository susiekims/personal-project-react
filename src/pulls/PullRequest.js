import React from 'react';
import Card from "../components/Card";
import Status from '../components/Status'
import Title from '../components/Title';
import { Tooltip } from 'react-tippy';

const PullRequest = ({id, name, url, merged, state, repoUrl}) => (
    <Card key={id}>
        <Status title={!merged && state === 'closed' ? 'Closed' : merged ? 'Merged' : 'Open'} status={!merged && state === 'closed' ? 'closed' : merged ? 'merged' : 'open'}/>
        <Title spaceLeft><a href={url}>{name}</a></Title>
        <a className="arrow" href={repoUrl}>↗</a>
    </Card>
) 

export default PullRequest;