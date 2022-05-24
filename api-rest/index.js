import 'dotenv/config';
import http from "http";
import app from "./app.mjs";

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => 
    console.log(`🚀 Server ready on port http://localhost/${port}`)
);