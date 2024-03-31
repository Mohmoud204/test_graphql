import { gql } from "apollo-server-express"
export const typeDefs = gql`
type User {
  _id:String!
  name:String!
  email:String!
  password:String!
}

input add {
  name:String!
  email:String!
  password:String!
}
input edit {
  name:String
  email:String
  password:String
}
type Query {
  hello:String!
  getAllData:[User]!
  getOne(_id:String!):User!
}
type Mutation {
  addUser(x:add):User!
  editUser(x:edit,_id:String):User!
  deleteUser(_id:String!):String
}
`