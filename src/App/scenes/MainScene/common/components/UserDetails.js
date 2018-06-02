import React from 'react';
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux';

import { selectors as userSelectors } from 'App/scenes/MainScene/data/users/redux';

const UserDetails = ({rank, name, avatarURL, askedCount, answeredCount, points}) => {
    return (
        <Container>
            <Row className="border">
                <div className="col-md-2 d-flex align-items-center justify-content-end col-3">
                    {rank ? (
                        <h4 className="display-4">#{rank}</h4>
                    ) :
                        'Asked By:'
                    }

                </div>
                <div className="d-flex align-items-center col-md-6 col-6">
                    <div className="d-inline-flex p-2">
                        <img className="rounded-circle"
                             src="https://www.gravatar.com/avatar/de057083353e7435174218bcaa3e191a?s=64&amp;d=identicon&amp;r=PG"
                             width="64px" height="64px"
                             alt={name}
                        />
                        <div className="px-3 d-flex align-items-center">
                            <h3 className="">{name}</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-right d-flex flex-column justify-content-center hidden col-3">
                    <div>
                        <div className="text-info  text-nowrap">Asked: {askedCount}</div>
                        <div className="text-info  text-nowrap">Answered: {answeredCount}</div>
                        <div className="text-primary  text-nowrap"> {points} points</div>
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
    console.log(userSelectors);
    console.log('userId:', userId);
    const user = userSelectors.getUserById(users, userId);
    return {
        // rank: showRank ? 1 : 0,
        name: user.name,
        avatarURL: user.avatarURL,
        askedCount: userSelectors.getAuthoredQuestionsCount(users, userId),
        answeredCount: userSelectors.getAnswersCount(users, userId),
        points: userSelectors.getPoints(users, userId)
    };
}

export default connect(mapStateToProps)(UserDetails);
