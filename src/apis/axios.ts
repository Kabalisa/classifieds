import axios from "axios";

//https://tic-tac-to.herokuapp.com/api/v1
//http://localhost:3000 ios
//http://10.0.2.2:5000 android
const AUTH_SERVER_URL = "https://tic-tac-to.herokuapp.com/api/v1";

export const AuthServer = axios.create({ baseURL: AUTH_SERVER_URL });
