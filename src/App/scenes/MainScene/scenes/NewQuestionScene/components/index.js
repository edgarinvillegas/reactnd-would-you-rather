import React, { Component } from 'react';
import { Button, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';

class NewQuestionScene extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        optionOneValid: true,
        optionTwoValid: true
    };

    onSubmitClick = (event) => {
        event.preventDefault();
        this.validate$().then(({ optionOne, optionTwo }) => {
            this.saveQuestion(optionOne, optionTwo);
        });
    };

    saveQuestion = (optionOne, optionTwo) => {
        alert(`Saving \n${optionOne} \n${optionTwo}`)
    };

    getOptionChangeHandler = (option) => {
        return (event) => {
            this.setState({
                [option]: event.target.value,
                [option + 'Valid']: this.isOptionValid(event.target.value)
            });
        };
    };

    validate$ = () => {
        return new Promise((resolve, reject) => {
            this.setState(
                currentState => ({
                    optionOneValid: this.isOptionValid(currentState.optionOne),
                    optionTwoValid: this.isOptionValid(currentState.optionTwo)
                }),
                () => {
                    const {optionOne, optionTwo, optionOneValid, optionTwoValid } = this.state;
                    if(optionOneValid && optionTwoValid){
                        resolve({ optionOne, optionTwo });
                    } else {
                        reject();
                    }
                }
            )
        })
    };

    isOptionValid = (text) => !!text.trim()

    render() {
        const { optionOneValid, optionTwoValid } = this.state;
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
                                        invalid={!optionOneValid}
                                        placeholder="Enter question 1 here"
                                        onChange={this.getOptionChangeHandler('optionOne')}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Option 2</Label>
                                    <Input
                                        invalid={!optionTwoValid}
                                        placeholder="Enter question 2 here"
                                        onChange={this.getOptionChangeHandler('optionTwo')}
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

export default NewQuestionScene;