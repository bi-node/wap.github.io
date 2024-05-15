const express=require('express');
const path=require('path');

//routers
const productsRouter=require('./routes/product');
const usersRouter=require('./routes/user');
const indexRouter=require('./routes/index');

//initializing
const app=express();

app.use(express.static(path.join(__dirname,'public')));
app.use('/',indexRouter);
app.use('/products',productsRouter);
app.use('/users',usersRouter);

//404 handling

app.use((req,resp,next)=>{
    resp.sendFile((path.join(__dirname,'views','404.html')));
});

//custom error handling

app.use((err, req, res, next)=> {
    res.status(500).sendFile((path.join(__dirname,'views','500.html')))
    });



const port=process.env.PORT || 4500;
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});

