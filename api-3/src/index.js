import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
const PORT = 3000
app.get('/',(req,res)=>{
    res.json({
        message:"Api 03",
        version:"0.1"
    })
})

app.listen(PORT,()=>console.log(`Server listen on port ${PORT}`))