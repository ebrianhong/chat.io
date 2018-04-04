const envBuild = {
  'client-server': [    
    'PORT=1337',     
  ],
  'rest-server': [
    'NODE_ENV=test',
    'LOCAL_USER=postgres',
    'LOCAL_HOST=localhost',
    'LOCAL_DATABASE=chat',
    'LOCAL_PASSWORD=chat',
    'LOCAL_PORT=5432',   
  ],
  'socket-server': [
    'NODE_ENV=test',
    'PORT=4155',    
  ]
}

module.exports = envBuild