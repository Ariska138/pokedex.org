var h = require('virtual-dom/h');

var getMonsterBackground = require('../monster/getMonsterBackground');
var getMonsterDisplayName = require('../monster/getMonsterDisplayName');

function renderMonster(monster) {
  return h('li', {
    style: {background: getMonsterBackground(monster)}
  }, [
    h(`button.monster-sprite.sprite-${monster.national_id}`, {
      type: 'button'
    }),
    h('span', getMonsterDisplayName(monster))
  ]);
}

function renderStub(monster) {
  return h('li', {
    style: {
      background: getMonsterBackground(monster)
    }
  }, [
    h('span', getMonsterDisplayName(monster))
  ]);
}

module.exports = (monsters, start, end) => {
  var startingStubs = monsters.slice(0, start);
  var monstersToRender = monsters.slice(start, end);
  var endingStubs = monsters.slice(end);

  var listItems = startingStubs.map(renderStub)
    .concat(monstersToRender.map(renderMonster))
    .concat(endingStubs.map(renderStub));

  return h('ul', {id: 'monsters-list'}, listItems);
};