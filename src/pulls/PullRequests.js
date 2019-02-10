import React from 'react';
import PullRequest from './PullRequest';

const PullRequests = ({pulls}) => (
    <div>
        <h2>Pull Request Events</h2>
        {
            pulls.length === 0 ? <p>This user has no recent pull requests</p> :
            <ul>
                {
                    pulls.map(({merged, name, state, url, id}) => <li key={id}><PullRequest merged={merged} name={name} state={state} url={url}/></li>)
                }
            </ul>
        }
    </div>
)

export default PullRequests;