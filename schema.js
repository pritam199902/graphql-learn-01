import {buildSchema} from "graphql";

const schema = buildSchema (`
    type Course {
        id : ID
        courseName : String
        category : String
        price: Int
        language : String
        email: String
        stack : Stack
        teachingAssists : [teachingAssists]
    }

    type teachingAssists {
        firstName: String
        lastName : String
        experience : Int
    }

    enum Stack {
        WEB
        MOBILE
        OTHER
    }

    type Query {
        getCourse(id : ID) : Course
    }

    input courseInput {
        id : ID
        courseName : String!
        category : String
        price: Int!
        language : String
        email: String
        stack : Stack
        teachingAssists: [teachingAssistsInput]!
    }

    input teachingAssistsInput {
        firstName: String
        lastName : String
        experience : Int
    }

    type Mutation {
        createCourse (input: courseInput): Course
    }
`);

export default schema;