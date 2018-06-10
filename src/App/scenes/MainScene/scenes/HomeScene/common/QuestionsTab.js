import React, { Fragment } from 'react';
import { ListGroup } from 'reactstrap';
import { connect } from 'react-redux';

import withSpinner from 'App/scenes/MainScene/common/components/withSpinner';
import { selectors as loadingSelectors } from 'App/scenes/MainScene/redux';

const FragmentWithSpinner = withSpinner(Fragment);

const QuestionsTab = ({ title, tabId, children, Message, loading }) => {
    return (
        <div className="tab-content mt-2">
            <div className="tab-pane fade show active" id={tabId} role="tabpanel">
                <h1 className="pb-3">{title}</h1>
                <FragmentWithSpinner isLoading={loading}>
                    <Message />
                    <div className="col-md-12">
                        <ListGroup>
                            {children}
                        </ListGroup>
                    </div>
                </FragmentWithSpinner>
            </div>
        </div>
    );
};

function mapStateToProps(stateTree){
    return {
        loading: loadingSelectors.areQuestionsAndUsersLoading(stateTree.scenes.mainScene.loading)
    };
}
export default connect(mapStateToProps)(QuestionsTab);