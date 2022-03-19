// Imports
import {Request, Response} from 'express';
import WilderModel from "./../models/Wilder";

interface IController {
    readAll: (req: Request, res: Response) => Promise<void>;
    read: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
}

const controller: IController = {
  readAll: async (req: Request, res: Response): Promise<void> => {
    // Get all wilder in db
    const wilders = await WilderModel.find();
    if (wilders.length >= 1) {
      console.log("Get All Wilder...")
      res.status(200).json({ sucess: true, result: wilders });
    } else {
      res.status(404).json({ sucess: false, result: "Zero Wilder stored :/" });
    }
  },

  read: async (req: Request, res: Response): Promise<void> => {
    // Get wilder by id passing trought the url
    const wilder = await WilderModel.findById(req.params.id);
    res.json(wilder);
  },

  create: async (req: Request, res: Response): Promise<void> => {
    try {
      // Initialize model (search for duplicates, uniques, etc)
      await WilderModel.init();
      // Populate model with POST request body
      const wilder = await new WilderModel(req.body);
      // Then save it to db
      await wilder.save();
      console.log("wilder created !");
      res.status(201).json({ result: wilder });
    } catch (e: any) {
      if (e.code === 11000) {
        res.status(400).json({ msg: "Name already taken :/" });
      }
      throw e;
    }
  },

  update: async (req: Request, res: Response): Promise<void> => {
    // Get wilder by id passing trought the url
    const wilder = await WilderModel.findById(req.params.id);
    if (wilder) {
      // Set new values
      req.body.name ? (wilder.name = req.body.name) : wilder;
      req.body.city ? (wilder.city = req.body.city) : wilder;
      req.body.skills ? (wilder.skills = req.body.skills) : wilder;
      // Save changes
      await wilder.save();
      console.log("wilder updated !");
      res.json(wilder);
    } else {
      res.status(404).json({ msg: "Wilder Not Found :/" });
    }
  },

  delete: async (req: Request, res: Response): Promise<void> => {
    // Get wilder by id passing trought the url
    const wilder = await WilderModel.findById(req.params.id);
    if (wilder) {
      // Delete wilder
      await wilder.delete();
      console.log("wilder deleted !");
      res.json({ "wilder deleted": wilder });
    } else {
      res.status(404).json({ msg: "Wilder Not Found :/" });
    }
  }
};

export default controller;
