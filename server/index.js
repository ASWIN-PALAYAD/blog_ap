import express from 'express';
import connectDB  from './lib/connectDB.js'
import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';
import commentRouter from './routes/comment.route.js';
import webhookRouter from './routes/webhook.route.js';
import { clerkMiddleware } from '@clerk/express';
import cors from "cors";

const app = express();

app.use(cors(process.env.CLIENT_URL))
app.use(clerkMiddleware());
//webhook using body parser so webhook endpoint placed top , other endpoints are using expressjson
app.use('/webhooks', webhookRouter);

app.use(express.json());


app.use('/users',userRouter);
app.use('/posts',postRouter);
app.use('/comments',commentRouter);

//error handler
app.use((error,req,res,next)=>{
    res.status(error.status || 500).json({
        message:error.message || "Somthing went wrong..",
        status:error.status,
        stack:error.stack
    });
});


app.listen(3000,()=> {
    connectDB();
    console.log("Server is running");  
    
});
