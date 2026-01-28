import express from 'express';
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

// Restaurants router endpoints
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
    .get("/login", restaurantController.getLogin)
    .post("/login", restaurantController.processLogin);
// browser faqat GET methodni qabul qiladi
routerAdmin
    .get("/signup", restaurantController.getSignup)
    .post("/signup", restaurantController.processSignup);

routerAdmin.get("/check-me", restaurantController.checkAuthSession);
    

// Product router endpoints
// User router endpoints

export default routerAdmin;
