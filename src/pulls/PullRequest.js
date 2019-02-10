import React from 'react';
import Card from "../components/Card";
import Status from '../components/Status'

const PullRequest = ({id, name, url, merged, state}) => (
    <Card key={id}>
        <h3><a href={url}>{name}</a></h3>
        <p>Status: { !merged && state === 'closed' ? 'Closed' : merged ? 'Merged' : 'Open'}</p>
        <Status status={!merged && state === 'closed' ? 'closed' : merged ? 'merged' : 'open'}/>
    </Card>
) 

export default PullRequest;