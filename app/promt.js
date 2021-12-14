const promt = [
  {
    type: 'confirm',
    name: 'cool',
    message: 'do you want to generator a app'
  }, {
    type: 'input',
    name: 'appName',
    message: 'input app name',
    default: 'app'
  }, {
    type: 'input',
    name: 'version',
    message: 'version 1.0.0',
    default: '1.0.1',
  }
]

module.exports = promt;