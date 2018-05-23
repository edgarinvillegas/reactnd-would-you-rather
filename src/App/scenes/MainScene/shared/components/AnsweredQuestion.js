import React from 'react';
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem } from "reactstrap";

export default function AnsweredQuestion ({ option1Text, option2Text, answer }) {
    const [CHOSEN, NOT_CHOSEN] = [true, false];
    const values = {
        [CHOSEN]: {
            color: 'success',
            className: 'fa fa-check'
        },
        [NOT_CHOSEN]: {
            color: 'danger',
            className: 'fa fa-times'
        }
    };
    const optionOne = values[answer === 'optionOne'];
    const optionTwo = values[answer === 'optionTwo'];

    return (
        <ListGroup>
            <ListGroupItem color={optionOne.color}
                           className="d-flex justify-content-between align-items-center">
                <div> {option1Text} </div>
                <span className={optionOne.className} />
            </ListGroupItem>
            <ListGroupItem color={optionTwo.color}
                           className="d-flex justify-content-between align-items-center">
                <div> {option2Text} </div>
                <span className={optionTwo.className} />
            </ListGroupItem>

        </ListGroup>
    );
};

AnsweredQuestion.propTypes = {
    option1Text: PropTypes.string.isRequired,
    option2Text: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
};
