import React from 'react';
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux';

import { selectors } from 'App/scenes/MainScene/data/users/redux';

const UserDetails = ({rank, name, avatarURL, askedCount, answeredCount, points}) => {
    return (
        <Container>
            <Row className="border">
                <div className="col-md-2 d-flex align-items-center justify-content-end col-3"> Asked By:
                    <h4 className="display-4">{rank}</h4>
                </div>
                <div className="d-flex align-items-center col-md-6 col-6">
                    <div className="d-inline-flex p-2">
                        <img className="rounded-circle"
                             src="https://www.gravatar.com/avatar/de057083353e7435174218bcaa3e191a?s=64&amp;d=identicon&amp;r=PG"
                             width="64px" height="64px" />
                        <div className="px-3 d-flex align-items-center">
                            <h3 className="">{name}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-right d-flex flex-column justify-content-center hidden col-3">
                    <div>
                        <div className="text-info  text-nowrap">Asked: 25</div>
                        <div className="text-info  text-nowrap">Answered: 4</div>
                        <div className="text-primary  text-nowrap"> 29 points</div>
                    </div>
                </div>
            </Row>
        </Container>
    );
};


function mapStateToProps({ scenes: { mainScene: { data: { users } } } }, { userId }){
    //console.log('state: ', state);
    //const users = state.scenes.mainScene.data.users;
    //console.log('users: ', users);
    //return {};
    const user = selectors.getUserById(users, 'tylermcginnis');
    return {
        rank: 3,
        name: user.name,
        avatarURL: user.avatarURL,
        askedCount: 10,
        answeredCount: 25,
        points: 35
    }
}

export default connect(mapStateToProps)(UserDetails);
