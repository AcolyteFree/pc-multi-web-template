
  var cp = require('child_process')
  process.env.NODE_ENV = 'production'
  if (process.env.NODE_ENV !== 'development' && process.argv[2]) {
    process.env.NODE_ENV = process.argv[2]
  }

  var workerProcess = cp.exec(' webpack --progress --hide-modules', {})
  workerProcess.stdout.on('data', function (data) {
    console.log('stdout: ' + data)
  })

  workerProcess.stderr.on('data', function (data) {
    console.log('stderr: ' + data)
  })
