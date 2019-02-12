import React from 'react';
import Fork from './Fork';

const Forks = ({forks}) => (
    <div>
        <h2>Fork Events</h2>
        {
            forks.length === 0 ? <p>This user has no recent fork events.</p> :
            <ul>
                {
                    forks.map(({title, repoUrl, baseRepoUrl, id}) => <Fork key={id} title={title} repoUrl={repoUrl} baseRepoUrl={baseRepoUrl}/>)
                }   
            </ul>
        }
    </div>
)

export default Forks;