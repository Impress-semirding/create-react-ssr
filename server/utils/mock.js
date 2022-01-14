const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const dimension = 10;
const res = [];
for (let y = 1; y < dimension + 1; y++) {
  for (let x = 1; x < dimension + 1; x++) {
    res.push(createData(x, y, dimension))
  }
}

function createData(x, y, dimension) {
  const ran = Math.random();
  const types = {
    1: 'O',
    2: 'R',
    3: 'N',
    0: '-'
  }

  const type = parseInt(ran * 100) % 4;

  return {
    x,
    y,
    groupId: uuidv4(),
    count: ran * 100000,
    name: `${x}_${y}`,
    percent: ran * 100,
    type: types[type],
    long_time: 0,
    customer_time: ran * 1000,
    customer_percent: 0,
    conversation: ran * 1000,
    quite_percent: 0,
    customer_speed: ran * 100,
    dimension
  }
}

const totalCount = res.reduce((sum, current) => {
  return sum + current.count;
}, 0);
const list = res.map(item => ({ ...item, percent: (item.count / totalCount) * 100 }));
const total =  {
  count: totalCount,
  name: "整体",
  percent: 100,
  type: "-",
  long_time: 0,
  customer_time: 848.3843951289784,
  customer_percent: 0,
  conversation: 848.3843951289784,
  quite_percent: 0,
  customer_speed: 84.83843951289785,
  dimension
}
let data = JSON.stringify({ list, total });

fs.writeFileSync(path.resolve(__dirname, `../db/${dimension}.json`), data);
