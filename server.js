const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const quotes ={
    'quoteone': {
        'quote': 'You Got this!',
        'whoSaidIt': 'Tylor Clont',
    },
    'quotetwo':{
        'quote': 'LETS GOOOO',
        'whoSaidIt': 'Tylor C',
    },
    'unknown':{
        'quote': 'unknown',
        'whoSaidIt': 'unknown',
    },
}
//Main Page
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:number',(request,response)=>{
    const quoteNum = request.params.number.toLowerCase()
    //console.log( quotes[quoteNum].quote )
    if( quotes[quoteNum] ){
        response.json(quotes[quoteNum].quote )
    }else{
        response.json(quotes['unknown'])
    }
})

//Listen Here
app.listen(PORT,()=>{
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})