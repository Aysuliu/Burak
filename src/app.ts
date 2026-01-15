import express from 'express';
import path from "path"; //core package
import router from "./router";
import routerAdmin from "./routerAdmin"

/** 1-Entrance **/
const app = express();
app.use(express.static(path.join(__dirname, "public"))); //middleware pattern
app.use(express.urlencoded({extended: true}));
app.use(express.json());

/** 2-Sessions **/

/** 3-Views **/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', "ejs");

/** 4-Routers **/
app.use('/admin', routerAdmin); // BSSR: EJS
app.use('/', router);           //SPA: REACT





export default app; //commonjs => module.exports()