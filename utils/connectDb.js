const mongoose = require('mongoose')

export async function connectDb(){

    try {
        const URL = 'mongodb://localhost/nextjs-db'
        await mongoose.connect(URL)
        console.log('Connected to DB')
    } catch (error) {
        console.log(error)
    }
}