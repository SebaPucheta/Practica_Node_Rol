const express = require('express');
const app = express();
const rolling = require('./dices');
const pjHero = require('./Character');
const pjEnemy=require('./Enemies');
const fight=require('./battle');
let body = require('body-parser');


app.use(body.json());

app.get('/', (req, res) => { res.send("Hola aventurero!!") });


app.get('/GetClasses', (req, res) => {
  res.send(pjHero.classes);
});

app.get('/GetEnemies', (req, res) => {
  res.send(pjEnemy.EnemyList)
})

app.get('/CreateHeroe/:class/:Name', (req, res) => {
  let selectedClass = req.params.class;
  let nameOfHero = req.params.Name;
  let character =  pjHero.CreateHero(nameOfHero,selectedClass);
  res.send(character);

});

app.get('/CreateEnemy/:class/:name', (req, res) => {
  let selectedEnemy = req.params.class;
  let nameEnemy = req.params.name;

  let enemy =pjEnemy.CreateEnemies(nameEnemy,selectedEnemy);
  res.send(enemy);
})

app.post('/combat/:enemy/', (req, res) => {
  let hero = req.body;
  let nameEnemy = req.params.enemy;
  let enemy = pjEnemy.CreateEnemies(nameEnemy);

  let combatRegister = [];
  while (hero.HP > 0 && enemy.HP > 0) {

   
    let heroInitiative = rolling.diceRoller();

    let enemyInitiative = rolling.diceRoller();

    if (heroInitiative > enemyInitiative) {

     let res =  fight.attack(hero,enemy,heroInitiative,enemyInitiative);
     combatRegister.push(res);

    } else {
      let res =  fight.attack(enemy,hero,enemyInitiative,heroInitiative);
      combatRegister.push(res);
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