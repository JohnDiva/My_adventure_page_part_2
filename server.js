let express = require('express')
let path = require('path')
let app = express()


app.get(
    '/home'
    , function( request, response){
    response.sendFile(path.join(__dirname, 'adventure.html'))
}
)


app.get(
    '/choice1'
    , function( request, response){
    response.sendFile(path.join(__dirname, 'choice1.html'))
}
)

app.get(
    '/choice2'
    ,function( request, response){
    response.sendFile(path.join(__dirname, 'choice2.html'))
}
)

app.get(
    '/choice1_1'
    ,function( request, response){
    response.sendFile(path.join(__dirname, 'choice1_1.html'))
}
)

app.get(
    '/choice1_2'
    ,function( request, response){
    response.sendFile(path.join(__dirname, 'choice1_2.html'))
}
)


app.get(
    '/choice2_1'
    ,function( request, response){
    response.sendFile(path.join(__dirname, 'choice2_1.html'))
}
)

app.get(
    '/choice2_2'
    ,function( request, response){
    response.sendFile(path.join(__dirname, 'choice2_2.html'))
}
)

 
app.listen(8080)
app.use(express.static('./'))