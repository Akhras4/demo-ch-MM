const { model } = require('mongoose');
const Articleblog=require("../modules/db")

const art=((req,res)=>{
    Articleblog.find()
               .then((result)=> res.render("arti",{ articles:result ,A:true}))
    
})
const querystring = require('querystring');


function addart(req, res) {
    if (req.method === "POST") {
        let body = '';
        
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const formData = querystring.parse(body);
            const Title = formData.Title;
            const Article = formData.Article;
            
            const article = new Articleblog({
                Title: Title,
                Article: Article
            });
            console.log(article);
            
            article.save()
                .then(() => Articleblog.find())
                .then(articles => {
                    res.render("arti", { articles, A: true });
                })
                .catch(error => {
                    console.error("Error adding article:", error);
                    res.status(500).send("Error adding article");
                });
        });
    } else if (req.method === "GET") {
        res.render("addartical");
    }
}
var flag
const artId=((req,res)=>{
    var articleId = req.params.id;
    flag=articleId;
     Articleblog.findById(articleId)
    .then(article => {
    if (!article) {
        return res.status(404).send("Article not found");
    }
    console.log(article);
    res.render("showart",{article})
    })
})

const artIddel=((req,res)=>{
        Articleblog.deleteOne({ _id: flag})
        .then(()=>{
            Articleblog.find()
            .then(result=>res.render("arti",{articles:result ,A:true}))
            .catch(err=>console.log(err))
        })
        .catch(err=>console.log(err))

})
const artedit=((req,res)=>{
    if (req.method === "GET") {
    Articleblog.findById(flag)
               .then(result=>res.render("edit",{ article:result }))
    }else if(req.method === "POST"){
        res.render("arti");
    }
})

module.exports={
art,
addart,
artId,
artIddel,
artedit,
}