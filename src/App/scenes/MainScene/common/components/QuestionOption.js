import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Button, ListGroupItem } from 'reactstrap';

function QuestionOption ({ text, isVoted = null, badgeText, onVote }) {
    const [CHOSEN, NOT_CHOSEN, NONE] = [true, false, null];
    const optionConfig = {
        [CHOSEN]: {
            color: 'success',
            iconClassName: 'fa fa-check'
        },
        [NOT_CHOSEN]: {
            color: 'danger',
            iconClassName: 'fa fa-times'
        },
        [NONE]: {
            color: 'info',
            iconClassName: ''
        }
    }[isVoted];

    const onVoteClick = (event) => {
        event.preventDefault();
        onVote();
    };
    return (
        <ListGroupItem
            color={optionConfig.color}
            className="d-flex justify-content-between align-items-center"
        >
            <div> {text} </div>
            <div>
                <Badge pill className="badge-dark">{badgeText}</Badge>
                <span className={optionConfig.iconClassName} />
                {!!onVote && (
                    <Button onClick={onVoteClick} color="primary">
                        Vote
                    </Button>
                )}
            </div>
        </ListGroupItem>
    );
}

QuestionOption.propTypes = {
    text: PropTypes.string.isRequired,
    isVoted: PropTypes.bool,
    badgeText: PropTypes.string,
    onVote: PropTypes.func
};

export default QuestionOption;