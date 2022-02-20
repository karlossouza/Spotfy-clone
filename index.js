const express=require('express');
const app=express();
const port=4000;

app.set('view engine','ejs');

app.use(express.static('public'));
/*home*/
app.get('/',function(req,res){
  res.render('index');
});



app.listen(4000,function(erro) {
  if (erro) {
    console.log('Temos um problema!');
  }else {
    console.log('Rodando com sucesso!');
  }
});
