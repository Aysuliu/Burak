// Architectural pattern backend: MVC, DependencyInjection
// Architectural pattern frontend: MVP(model view presenter)

// MVC = Model View Controller
// Design pattern: MiddleWare, Decorator

//MongoDB structure: 

import dotenv from 'dotenv';
dotenv.config(); // config methodni execute qilish

import mongoose from 'mongoose';
import app from "./app";

mongoose.connect(process.env.MONGO_URL as string, {})
.then(data => {
    console.log('MongoDB connection succeed');
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function() {
        console.log(`The server is running successfully on: ${PORT}`);
    });
})
.catch(err => console.log('ERROR on connection MongoDB', err));