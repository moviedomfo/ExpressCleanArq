import * as dotenv from "dotenv";
//import express from "express";
import cors from "cors";
import helmet from "helmet";

import { authRouter } from "./infra/router/auth.router";
import { adnRouter } from "./infra/router/adn.router";

import routes from "./infra/router";

import morgan from "morgan";
import { errorHandler } from "./common/error.middleware";
import { notFoundHandler } from "./common/not-found.middleware";
import express from "express";
import { logsHandler, logsHandlerFakes } from "./common/log.middlewar";
import { infoRouter } from "./infra/router/info.router";
import { itemsRouter } from "./infra/router/items.router";
import { usersRouter } from "./infra/router/users.router";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

//const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();
const PORT = process.env.PORT || 3000;

/**
 *  App Configuration
 */
app.use(helmet());
app.use(cors());
app.use(express.json());

//logger middleware--> ::1 - - [13/Jan/2022:15:23:23 +0000] "GET /api/fakes/gertUsers HTTP/1.1" 200 801 "-" "PostmanRuntime/7.28.4"
//app.use(morgan('combined'));
// logger middleware --> GET /api/fakes/gertUsers 200 801 - 190.525 ms
//app.use(morgan('tiny'));
//:remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms
app.use(morgan("short"));

// /** Logging */
// itemsRouter.use(morgan('dev'));
// /** Logging */
// authRouter.use(morgan('dev'));
// app.get("/", function (req, res) {
//   res.send("This Apps is --> " + process.env.SERVER_NAME);
// });
/** Parse the request */
//itemsRouter.use(express.urlencoded({ extended: false }));
app.use(logsHandler);
//app.use("/api/fakes", logsHandlerFakes, fakeRouter);

app.use("/api/auth", authRouter);
app.use("/api/adn", adnRouter);
app.use("/api/info", infoRouter);
app.use("/api/items", itemsRouter);
app.use("/api/users", usersRouter);
//app.use(`/`, routes);

// You must mount the errorHandler middleware function after you have mounted all the controller functions
// of your application.
app.use(errorHandler);

// errorHandler won't catch 404 errors.
// However, you can catch these errors by making notFoundHandler the last middleware
// function that you mount, which effectively creates a catch-all handler for your app.
app.use(notFoundHandler);

/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  console.log(`url : http://localhost:${PORT}`);
});
