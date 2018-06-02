import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';

import { selectors } from 'App/scenes/MainScene/data/users/redux';
import UserDetails from 'App/scenes/MainScene/common/components/UserDetails';

function LeaderboardScene({ userIds }) {
    return (
        <Fragment>
            <div className="py-5">
                <Container>
                    <Row>
                        <div className="col-md-12">
                            <h1 className="pb-4">Leaderboard</h1>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-md-12">
                            {userIds.map((userId, i) => (
                                <UserDetails key={userId} userId={userId} rank={i+1} />
                            ))}
                        </div>
                    </Row>
                </Container>
            </div>
        </Fragment>
    );
}

function mapStateToProps(state){
    return {
        userIds: selectors.getSortedUsers(state.scenes.mainScene.data.users)
    };
}

export default connect(mapStateToProps)(LeaderboardScene)