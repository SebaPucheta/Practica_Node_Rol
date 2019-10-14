const express = require('express');
const app = express();
const dices = require('./dices');
const character = require('./character'); 
const enemy = require('./enemy');
const battle = require('./battle');
let body = require('body-parser');


app.use(body.json());

app.get('/', (req, res) => { res.send("Hola aventurero!!") });


app.get('/classes', (req, res) => {
  res.send(hero.classes);
});

app.get('/enemies', (req, res) => {
  res.send(enemy.EnemyList)
})

app.post('/heroes', (req, res) => {
  let selectedClass = req.body.class;
  let nameOfHero = req.body.Name;
  let character = hero.create(nameOfHero, selectedClass);
  res.send(character);

});

app.post('/enemies', (req, res) => {
  let selectedEnemy = req.body.class;
  let enemyName = req.body.name;

  let newEnemy = enemy.create(enemyName, selectedEnemy);
  res.send(newEnemy);
})

app.post('/battles', (req, res) => {
  let hero = req.body;
  let enemyName = req.body.enemyName;
  let enemy = enemy.create(enemyName); //El identificador de un instancia de un modelo deberia ser unico.

  let combatRegister = [];
  while (hero.HP > 0 && enemy.HP > 0) {

   
    let heroInitiative = dices.diceRoller();

    let enemyInitiative = dices.diceRoller();

    if (heroInitiative > enemyInitiative) {

     let res =  battle.attack(hero, enemy, heroInitiative, enemyInitiative);
     combatRegister.push(res);

    } else {
      let res =  battle.attack(enemy, hero, enemyInitiative, heroInitiative);
      battleRegister.push(res);
    }
  }

  let result = {
    combatRegister,
    hero,
  };

  res.send(result);

});

const port = 3000;
app.listen(port, () => { console.log(`Server iniciado en port ${port}`) });
