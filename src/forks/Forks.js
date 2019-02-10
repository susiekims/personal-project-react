import React from 'react';
import Fork from './Fork';

const Forks = ({forks}) => (
    <div>
        <h2>Fork Events</h2>
        {
            forks.length === 0 ? <p>This user has no recent fork events.</p> :
            <ul>
                {
                    forks.map(({title, repoUrl, baseRepoUrl}) => <li><Fork title={title} repoUrl={repoUrl} baseRepoUrl={baseRepoUrl}/></li>)
                }   
            </ul>
        }
    </div>
)

export default Forks;