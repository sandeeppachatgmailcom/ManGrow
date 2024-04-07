import express, { Request, Response } from 'express';

class NodeServer {
    private app = express();
    private port = 7000;

    constructor() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.get('/',(req:Request,res:Response)=>{
            console.log('hello')
        })
    }

    public start() {
        this.app.listen(this.port, () => {
            console.log(`Server is listening on port ${this.port}`);
        });
    }

}

const server = new NodeServer();
server.start();

export default NodeServer;
