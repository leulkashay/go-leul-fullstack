console.log("Hi server");
require('dotenv').config()
const http=require('http');
const app=require('./app');

const normalizeport=val=>{

    const port=parseInt(val,10);

    if(isNaN(port)){
        return val;
    }
    if(port >=0){
        return port;
    }
    return false;
}

const port=normalizeport(process.env.PORT || 9000);

app.set('port',process.env.PORT || 9000);

const errorHandler=error=>{
    if(error.syscall !== 'listen'){
        throw error;
    }
    const adress=server.address();
    const bind=typeof address === 'string' ? 'pipe' + address : 'port' + port;

    switch(error.code){
        case 'EACCES':
            console.error(bind  + 'requires elevated previlage');
            process.exit(1);
            break
        case 'EADDRINUSE':
            console.error(bind + 'is in use aready');
            process.exit(1);
        default:
            throw error;
            
    }


};


const server=http.createServer(app);

server.on('error',errorHandler);
server.on('listening',()=>{
    const address=server.address();
    const bind=typeof address === 'string' ? 'pipe' + address : 'port' + port;
    console.log('listening on ' + bind);

});


server.listen(port);