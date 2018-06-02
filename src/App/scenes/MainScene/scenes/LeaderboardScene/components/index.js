import React, {Fragment} from 'react';
import { connect } from 'react-redux';

import { selectors } from 'App/scenes/MainScene/data/users/redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import UserDetails from 'App/scenes/MainScene/common/components/UserDetails';

function LeaderboardScene({ userIds }) {
    return (
        <Fragment>
            <div className="col-md-12">
                <h1 className="">Leaderboard</h1>
                <ListGroup>
                    {userIds.map( userId => (
                        <ListGroupItem>
                            <UserDetails userId={userId} />
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </div>
        </Fragment>
    );
}

function mapStateToProps(state){
    return {
        userIds: selectors.getTopUsers(state.scenes.mainScene.data.users)
    };
}

export default connect(mapStateToProps)(LeaderboardScene)