import { response } from "../../../network";
import { list, findBy, store, upsert, remove } from "../../../store/dummy";
import storyModel from "./model";

//* LISTA STORIES
export const showAll = async (req, res) =>
  response({ res, data: await list(storyModel) });

//* DETALLE STORY POR ID
export const readStory = async (req, res) => {
  const { id } = req.params;

  const story = await findBy({ value: id, model: storyModel });

  if (!story) {
    return response({
      ok: false,
      status: 500,
      res,
      data: "error data not found",
    });
  }

  return response({ res, data: story });
};

//* CREATE STORY

export const createStory = async (req, res) => {
  const story = req.body;

  const data = {
    title: story.title,
    author: story.author,
    text: story.text,
    dateTime: story.dateTime,
    user_id: story.user_id,
  };

  const stories = await store(storyModel, data);
  return response({ res, data: stories, status: 201 });

};


//* UPDATE STORY

export const updateStory = async (req, res) => {
  const { id } = req.params;

  const stories = await upsert({ model: storyModel, id, data: req.body });

  if (!stories) {
    return response({
      ok: false,
      status: 500,
      res,
      data: "error data not found",
    });
  }

  return response({
    res,
    data: stories,
  });
};

//* DELETE STORY

export const deleteStory = async (req, res) => {
  const { id } = req.params;

  const stories = await remove(storyModel, id);

  if (!stories) {
    return response({
      res,
      status: 500,
      ok: false,
      data: { error: "Story not found" },
    });
  }

  return response({ res, data: stories });
};


