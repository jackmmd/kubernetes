import express from 'express'

const app = express()
const PORT = 3000
app.get('/',(req,res)=>{
    res.json({
        message:"Api 04",
        version:"0.1"
    })
})

app.listen(PORT,()=>console.log(`Server listen on port ${PORT}`))