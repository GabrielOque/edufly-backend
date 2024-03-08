import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const USER = process.env.USER;
export const PASSWORD = process.env.PASSWORD;
export const DBNAME = process.env.DBNAME;

export const MONGODB_URI = `mongodb+srv://${USER}:${PASSWORD}@cluster0.eg2iztl.mongodb.net/${DBNAME}?retryWrites=true&w=majority&appName=Cluster0`;
