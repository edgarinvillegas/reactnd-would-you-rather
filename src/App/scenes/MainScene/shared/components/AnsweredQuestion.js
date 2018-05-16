import React from 'react';
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem } from "reactstrap";

export default function AnsweredQuestion ({ option1Text, option2Text, chosenOption }) {
    const CHOSEN_COLOR =  "success";
    const NOT_CHOSEN_COLOR =  "danger";
    return (
        <ListGroup>
            <ListGroupItem color={chosenOption === 1 ? CHOSEN_COLOR : NOT_CHOSEN_COLOR}
                           className="d-flex justify-content-between align-items-center">
                <div> {option1Text} </div>
                <span className="fa fa-check" />
            </ListGroupItem>
            <ListGroupItem color={chosenOption === 2 ? CHOSEN_COLOR : NOT_CHOSEN_COLOR}
                           className="d-flex justify-content-between align-items-center">
                <div> {option2Text} </div>
                <span className="fa fa-times" />
            </ListGroupItem>
        </ListGroup>
    );
};

AnsweredQuestion.propTypes = {
    option1Text: PropTypes.string.isRequired,
    option2Text: PropTypes.string.isRequired,
    chosenOption: PropTypes.number.isRequired
};
