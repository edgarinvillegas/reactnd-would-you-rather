import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';

class NewQuestionScenePres extends Component {

    /**
     * Null is the initial state.
     * Each one will become string for good once user interacts with the form
     * @field {string | null} optionOne
     * @field {string | null} optionTwo
     */
    state = {
        optionOne: null,
        optionTwo: null,
    };

    /**
     * Null is considered valid so first time UI doesn't show validation errors.
     * @param {string} text
     * @returns {boolean}
     */
    isOptionValid = (text) => text === null || !!text.trim();

    onSubmitClick = (event) => {
        event.preventDefault();
        this.setState( currState => ({
            optionOne: currState.optionOne || '',   // This invalidates nulls.
            optionTwo: currState.optionTwo || '',   // This invalidates nulls.
        }), () => {
            const { optionOne, optionTwo } = this.state;
            if(this.isOptionValid(optionOne) && this.isOptionValid(optionTwo)){
                this.props.saveQuestion(optionOne, optionTwo);
            }
        })
    };

    getOptionChangeHandler = (option) => {
        return (event) => {
            this.setState({
                [option]: event.target.value
            });
        };
    };

    render() {
        const { optionOne, optionTwo } = this.state;
        return (
            <div className="py-5">
                <Container>
                    <Row>
                        <div className="col-md-12">
                            <h1 className="">Would you rather...?</h1>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-md-12">
                            <Form>
                                <FormGroup>
                                    <Label>Option 1</Label>
                                    <Input
                                        invalid={!this.isOptionValid(optionOne)}
                                        placeholder="Enter question 1 here"
                                        onChange={this.getOptionChangeHandler('optionOne')}
                                        value={optionOne || ''}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Option 2</Label>
                                    <Input
                                        invalid={!this.isOptionValid(optionTwo)}
                                        placeholder="Enter question 2 here"
                                        onChange={this.getOptionChangeHandler('optionTwo')}
                                        value={optionTwo || ''}
                                    />
                                </FormGroup>
                                <Button color="primary" onClick={this.onSubmitClick}>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }
};

export default NewQuestionScenePres;