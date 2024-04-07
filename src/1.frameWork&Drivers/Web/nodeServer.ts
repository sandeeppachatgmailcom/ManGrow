import express from 'express' 

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
 



const port = 7000;

function    start() {
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
}
export default start 