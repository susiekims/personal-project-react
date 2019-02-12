import React from 'react';
import PullRequest from './PullRequest';
import { connect } from 'react-redux';

const PullRequests = ({pulls}) => (
    <div>
        <h2>Pull Request Events</h2>
        {
            pulls.length === 0 ? <p>This user has no recent pull requests.</p> :
            <ul>
                {
                    pulls.map(({merged, name, state, url, id, repoUrl}) => <PullRequest key={id} merged={merged} name={name} state={state} url={url} repoUrl={repoUrl}/>)
                }
            </ul>
        }
    </div>
)

const mapStateToProps = ({events: {pulls}}) => {
   return { pulls }
}

export default connect(mapStateToProps)(PullRequests);