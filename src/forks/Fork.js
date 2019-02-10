import React from 'react';
import Card from "../components/Card";

const Fork = ({title, repoUrl, baseRepoUrl}) => (
    <Card>
        <h3><a href={repoUrl}>{title}</a></h3>
        <a href={baseRepoUrl}>Base Repo</a>
    </Card>
) 

export default Fork;