// Start your es6 scripts here
import express from "express";
import resolver from './resolver'
import schema from './schema'
import {graphqlHTTP} from "express-graphql"

const app = express()

app.get('/', (req, res)=>{
    res.send("Grapgql srver setup running... ")
})

const root = resolver
app.use('/graphql', graphqlHTTP({
    schema : schema,
    rootValue : root,
    graphiql : true
}))

app.listen(8080, ()=>{console.log("Listening on port 8080..")})