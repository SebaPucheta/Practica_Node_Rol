const set = () => {
  const scope = this;

  scope.diceRoller = () => {
    return Math.floor((Math.random() * 20) + 1);
  }
  return scope;

}
module.exports = set();