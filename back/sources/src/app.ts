import * as bodyParser from "body-parser";
import * as express from "express";
import * as logger from "morgan";

// import CompilerApi from "./routes/compiler.api";

import cors = require("cors");

class App {

    public express: express.Application;

    constructor() {
        this.express = express();

        // Enable CORS
        this.express.use(cors());

        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(logger("dev"));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        // Messages
        // this.express.use("/", MessageApi);

    }

}

export default new App().express;

