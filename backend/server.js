import path from "path";
import express from "express";
import { app, server } from "./socket/socket.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
const __dirname = path.resolve();
const port = 5000;

app.use(express.json());
//to access cookies
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello worldkdfkj!");
})

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

//middleware used for searching static files such as music, images,html files, etc
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
server.listen(port, () => {
    connectToMongoDB();
    console.log(`Server is runing at ${port}`);
});