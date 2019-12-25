# Udemy GraphQL and React

Project for code snippets written in the Udemy course https://www.udemy.com/course/graphql-with-react-course

## GraphQL

Docs at https://graphql.org/learn/

## users-app

Go to http://localhost:4000/graphql to see [GraphiQL](https://github.com/graphql/graphiql) UI, AN in-browser IDE for exploring GraphQL.

Try queries and mutations in this UI, e.g. a query:

```
query {
  company(id: "9") {
    id
    name
    catchPhrase
    users {
      id
      name
      username
    }
  }
}
```

Or a mutation:

```
mutation {
  addUser(name: "Michael", username: "michaelcol") {
    id
    name
    username
  }
}
```

Note: more examples in [sample-queries.graphql](/sample-queries.graphql)
