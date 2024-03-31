import mongoose from 'mongoose'

export function db() {
  const connect = mongoose.connect('mongodb+srv://mohmoud99:mohmoud99@cluster0.ovs1joa.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0');
  try {
    console.log("connect db ^_^")
  } catch {
    console.log(" failed db ^×^")
  }
}