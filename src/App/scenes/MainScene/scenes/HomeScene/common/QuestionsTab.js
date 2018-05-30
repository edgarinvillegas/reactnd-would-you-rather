import React from 'react';
import { ListGroup } from 'reactstrap';

const QuestionsTab = ({ title, tabId, children, Message }) => {
    return (
        <div className="tab-content mt-2">
            <div className="tab-pane fade show active" id={tabId} role="tabpanel">
                <h1 className="">{title}</h1>
                <Message />
                <div className="col-md-12">
                    <ListGroup>
                        {children}
                    </ListGroup>
                </div>
            </div>
        </div>
    );
};

export default QuestionsTab;