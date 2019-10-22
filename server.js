//app.get("/api/shorturl/new",function(req, res) 

var express = require('express'); 
var http = require('http');
var url = require('url');
var bodyParser = require('body-parser');
const dns = require('dns');



const app = express();

app.use(bodyParser.urlencoded({extended : true}))


var urls =[{"original_url":'https://www.google.fr',"short_url":1},
{"original_url":'https://portail.free.fr',"short_url":2},
{"original_url":'https://www.cdiscount.com',"short_url":3}]
var site =""


app.get("/", function(req,res){

    res.sendFile(__dirname+'/index.html')
})

app.get("/new", function(req,res){

    res.sendFile(__dirname+'/index.html')
})


app.get("/:nb", function(req,res){

    var index = req.params.nb;
    
    site=(urls.filter((item)=> item.short_url== index))[0].original_url

    console.log(site)
    //.original_url

    res.redirect(site)


})

app.post("/", function(req,res){
    
        var my_adress =  req.body.url_to_short;

        if(my_adress.substring(0,8)=="https://"){console.log(adress_test = my_adress.substring(8, ))}
        else if(my_adress.substring(0,7)=="http://"){console.log(adress_test =  my_adress.substring(7, ))}
        else{adress_test = my_adress}
        

        dns.lookup(adress_test , (err, address)=>{

            if (err){res.send({"error":"invalid URL"})}
            else{
    
                data =  {"original_url":my_adress,"short_url":urls.length +1}
                urls.push(data)
                res.send(data)
            }

        })

})



app.listen(8080);


/*
if(error){ throw error;res.send({"error":"invalid URL"});}
data =  {"original_url":req.body.url_short,"short_url":urls.length +1}
urls.push(data)
res.send(data)

*/