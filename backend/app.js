import express from express;
import cors from 'cors';
import { config } from "dotenv";

config()

const port = process.env.SERVER_PORT;

const app = express();

app.use(express.json())
app.use(cors())
app.use('/login',loginRouter)
app.use('/dashboard')
app.use('/investment')
app.use('/recommendation')
app.use('/withdraw')
app.use('/history')


app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})

