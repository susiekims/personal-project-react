import React from 'react';
import Card from "../components/Card";
import Title from '../components/Title';

const Fork = ({title, repoUrl, baseRepoUrl}) => (
    <li>
        <Card>
            <Title><a href={repoUrl}>{title}</a></Title>
            <a className="arrow" href={baseRepoUrl}>↗</a>
        </Card>
    </li>
) 

export default Fork;