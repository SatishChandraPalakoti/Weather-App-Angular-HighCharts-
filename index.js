var express=require('express')
var path=require('path')
var app=express()
var alfa=express.Router()
var port=process.env.PORT || 4001

app.use(express.static(__dirname+'/'))
alfa.get('/',function(req,res){

	res.sendFile(path.join(__dirname+'/practice/index.html'))
});
 

app.use('/',alfa)
app.listen(port);
console.log('Go to the port : ' + port);
