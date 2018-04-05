const envBuild = {
  'client-server': [
    'DEBUG=true',
    'PORT=1337',     
  ],
  'rest-server': [
    'DEBUG=true',
    'NODE_ENV=test',
    'LOCAL_USER=postgres',
    'LOCAL_HOST=localhost',
    'LOCAL_DATABASE=chat',
    'LOCAL_PASSWORD=chat',
    'LOCAL_PORT=5432',   
  ],
  'socket-server': [
    'DEBUG=true',
    'NODE_ENV=test',
    'PORT=4155',    
  ]
}

module.exports = envBuild