export default class State {
    authedUserId = '';
    users = {}; //Table<userId, User>
    questions = {}; //Table<questionId, Question>
}

/**
 * {
        id: 'sarahedo',
        name: 'Sarah Edo',
        avatarURL: 'https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/female/5.png',
        answers: {
            "8xf0y6ziyjabvozdd253nd": 'optionOne',
            "6ni6ok3ym7mf1p33lnez": 'optionOne',
            "am8ehyc8byjqgar0jgpub9": 'optionTwo',
            "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    }
 */
export class User {
    id = '';
    name = '';
    avatarURL = '';
    answers = {};
    questions = [];
    constructor(apiUser){
        Object.assign(this, apiUser);
    }
    static getNormalizedSetFromApiSet(apiUsers){
        let users = {};
        Object.keys(apiUsers).forEach( userId => {
            users[userId] = new User(apiUsers[userId]);
        });
        return users;
    }
}

/**
 {
        id: '8xf0y6ziyjabvozdd253nd',
        author: 'sarahedo',
        timestamp: 1467166872634,
        optionOne: {
            votes: ['sarahedo'],
            text: 'have horrible short term memory',
        },
        optionTwo: {
            votes: [],
            text: 'have horrible long term memory'
        }
    }
 */

export class Question {
    id = '';
    author = '';
    timestamp = 0;
    optionOne = {};  //Option
    optionTwo = {};  //Option

    constructor(apiQuestion){
        Object.assign(this, apiQuestion);
        this.optionOne = new Option(apiQuestion.optionOne);
        this.optionTwo = new Option(apiQuestion.optionTwo);
    }

    static getNormalizedSetFromApiSet(apiQuestions){
        let questions = {};
        Object.keys(apiQuestions).forEach( questionId => {
            questions[questionId] = new Question(apiQuestions[questionId]);
        });
    }
}


/*
{
    votes: ['sarahedo'],
    text: 'have horrible short term memory',
}
 */
export class Option {
    votes = [];
    text = '';
    constructor(apiOption) {
        Object.assign(this, apiOption);
    }
}



