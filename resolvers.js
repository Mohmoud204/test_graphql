import { User } from "./user.schema.js"
export const resolvers = {
  Query: {
    hello: () => "hello would",
    getAllData: async () => {
      return await User.find().exec()
    },
    getOne: async (_, { _id }) => {
      return await User.findById(_id).exec()
    }
  },
  Mutation: {
    addUser: async (_, { x }) => {
      const newUser = await User.create(x)
      return await newUser.save()
    },
    editUser: async (_, { x, _id }) => {
      const edit = await User.findByIdAndUpdate(_id, x, { new: true })
      return edit
    },
    deleteUser: async (_, { _id }) => {
      await User.findOneAndDelete(_id)
      return `success delect user by id {$_id}`
    }
  }
}