import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(server);

server.unsubscribe(middlewares);

const PORT = process.env.PORT || 3001
server.listen(PORT, ()=> {
    console.log("json server is running");
})

