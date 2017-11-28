var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.get('/tasks', function(req, res){
res.send('Нету задач на сегодня');
});

app.get('/tasks/:id', function(req, res){
	res.send(
		'Вы хотите получить задачу с Id='+
		req.params.id +
		'но сегодня задач нет');
});

app.post('/tasks', function(req, res) {
  res.send(
    'Ви хочете створити задачу з ім\'ям "' +
    req.body.name +
    '", але на сьогодні задач не було і не буде!'
  );
});

//res.sendStatus(201);
//res.send({ name: 'Quests'});
app.use('/', express.static(__dirname + '/static'));

var arr = [ 
 app.get('/tasks',function(req,res){
 res.send(taskName);
})
];
app.listen(3000);

