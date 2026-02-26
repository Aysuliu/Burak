import express from 'express';
import path from "path"; //core package
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from './libs/config';

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import {T} from "./libs/types/common";
import cookieParser from "cookie-parser";

const MongoDbStore = ConnectMongoDB(session);
const store = new MongoDbStore({
    uri: String(process.env.MONGO_URL),
    collection: 'sessions',
});

/** 1-Entrance **/
const app = express();
app.use(express.static(path.join(__dirname, "public"))); //middleware pattern
app.use("/uploads", express.static("./uploads"));
app.use(express.urlencoded({extended: true})); // traditional api
app.use(express.json()); //restapi
app.use(cookieParser());
app.use(morgan(MORGAN_FORMAT)); //middleware design pattern

/** 2-Sessions **/
app.use(
    session({
        secret: String(process.env.SESSION_SECRET),
        cookie: {
            maxAge: 1000 * 3600 * 6 //6h
        },
        store: store,
        resave: true,
        saveUninitialized: true
    })
);

app.use(function(req,res,next){
    const sessionInstance = req.session as T;
    res.locals.member = sessionInstance.member;
    next();
});


/** 3-Views **/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', "ejs");

/** 4-Routers **/
app.use('/admin', routerAdmin); // BSSR: EJS
app.use('/', router);           //SPA: REACT





export default app; //commonjs => module.exports()