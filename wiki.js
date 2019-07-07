// Copyright © 2019 By Fajar Firdaus 
// Please Don't Recode My Program Because i take and long time to complete this project
var req = require("request");
var rl = require("readline");
var style = require("chalk");
var j = require("jsome")
var ch = require("cheerio");
var sh = require("shelljs");

console.log(style.blue("       .-.         _______                         "))                        
console.log(style.blue("      {}``;    |==|_______D   [ WikiPedia Search ] "))                       
console.log(style.blue("      / ('           |              [ By ]         "))                     
console.log(style.blue("     /  |            |         [ Fajar Firdaus ]   "))                  
console.log(style.blue("     _)_]]           |                             "))

j({"Coder" : "Fajar Firdaus", "FB" : "Fajar Firdaus", "IG" : "fajar_firdaus_7", "YT" : "iTech7732"})
                    
const t = rl.createInterface({
    input : process.stdin,
    output : process.stdout
})

var q = style.bgCyan("[ Input ] >_ ");

t.question(q, (user) => {
    req("https://en.wikipedia.org/wiki/" + `${user}`, (err,res,body) => {
        var parse = ch.load(body);
        if(res.statusCode == 200){
            console.log(style.green("[ Result ]"))
            console.log(style.bgCyan(parse("p").text()))
            console.log(style.green("[========================================[Result]====================================]"))
        }else if(res.statusCode == 404){
            console.log(style.red("[!] Keyword Not Found"))
        }else if(res.statusCode == 501){
            console.log(style.red("[!] Connection Error Please Check Your Connection"))
        }
    })
})
