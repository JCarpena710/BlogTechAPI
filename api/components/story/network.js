import express from "express";
import {createStory,  readStory, updateStory, deleteStory, showAll} from './controller';

/* networks es que exporta las rutas*/ 
const storyRouter = express.Router();

storyRouter.route("/createStory").post(createStory);
storyRouter.route("/readStory/:id").get(readStory);
storyRouter.route("/updateStory/:id").put(updateStory);
storyRouter.route("/deleteStory/:id").delete(deleteStory);
storyRouter.route("/storys").get(showAll);

export default storyRouter;


