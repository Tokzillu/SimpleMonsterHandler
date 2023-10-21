import Express from 'express'

const app = Express();

const port = 8080;

const myResponse = {
    port: port
}

app.use(Express.static('public'));

app.get("/", (_req, res) => {
    res.send(`Hey, I started a server on ${port}`);
})
app.get("/api", (_req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(myResponse));
} )

app.listen(port, () => {
    console.log(`Server started on port: http://localhost:${port}`);
})
