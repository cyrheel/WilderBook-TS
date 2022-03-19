// Imports
import express, {Request, Response, NextFunction, Handler} from "express" ;
import mongoose from "mongoose";
import cors from "cors";
import WilderController from "./controllers/Wilders";
const app = express();

function execAsyncController(controller: Function): Handler {
  return async function (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await controller(req, res, next);
    } catch (err: any) {
      console.log("Error caught in execAsyncController :/");
      next(err);
    }
  };
}

async function init(): Promise<void> {
  try {
    // Database Connection
    await mongoose.connect("mongodb://127.0.0.1:27017/wilderdb", {
      autoIndex: true,
    });
    console.log("Connected to Db");

    //Middleware
    app.use(express.json());
    app.use(cors());

    // Routes
    app.get("/wilders", execAsyncController(WilderController.readAll));
    app.get("/wilders/:id", execAsyncController(WilderController.read));
    app.post("/wilders", execAsyncController(WilderController.create));
    app.put("/wilders/:id", execAsyncController(WilderController.update));
    app.delete("/wilders/:id", execAsyncController(WilderController.delete));

    // Handler for bad request
    app.use((err: any, req: Request, res: Response, next: NextFunction): void => {
      console.log(err);
      res.status(500).json({ Msg: "Internal Error :/" });
    });

    // Handler for bad urls
    app.use((req: Request, res: Response): void => {
      res.status(404).json({ Msg: "URL not found :/" });
    });

    //Start server
    app.listen(4000, ():void => {
      console.log("Server started on port 4000");
    });
  } catch (e: any) {
    console.log(e);
  }
}

init();
