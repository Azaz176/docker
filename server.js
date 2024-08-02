import express from 'express'
const app= express()

app.use(express.json())

const PORT = process.env.PORT || 8000;

app.get("/", (req, res)=>{
    return res.json({message:"Hey, I am nodejs in container"})
})

app.listen(PORT, ()=>console.log(`server is listening on port:${PORT}`))