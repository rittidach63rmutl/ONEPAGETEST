const express = require('express');
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const produtRouter = express.Router();

const app = express();  
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","./src/views");
app.set("view engine","ejs")

produtRouter.route("/").get((req,res)=>{
    res.render("products",{
        products:[
            {productsTitle:'น้ำยาล้างจาน',productsDescription: 'น้ำยาล้างจานสูตร 1 ดีเลิศ',productsPrice: 45},
            {productsTitle:'น้ำยาล้างจาน 2',productsDescription: 'น้ำยาล้างจานสูตร 2 ดีมาก',productsPrice: 40},
            {productsTitle:'น้ำยาล้างจาน 3',productsDescription: 'น้ำยาล้างจานสูตร 3 ดีมั้ง',productsPrice: 35},
            {productsTitle:'น้ำยาล้างจาน 4',productsDescription: 'น้ำยาล้างจานสูตร 4 ดีเฉยๆ',productsPrice: 30},
        ],
    });
});

app.use("/products",produtRouter)

app.get("/",(req,res)=>{

    res.render('index',{username: 'BOOKZA888+',customers:["kitty ","picachu","doramoneiei"]});
})

app.listen(PORT,()=>{

        debug("Listening on PORT" + chalk.red(" : "+PORT));

})

