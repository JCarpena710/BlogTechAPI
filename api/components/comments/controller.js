import { response } from "../../../network";
import { list, findBy, store, upsert, remove } from "../../../store/dummy";
import commentModel from "./model";


export const save = async (body) => {
  const comment = await store(commentModel, body);

  return {
    ok: true,
    message: comment,
  };
};


//* LISTA COMMENTS
export const showAll = async (req, res) =>
  response({ res, data: await list(commentModel) });



//* DETALLE COMMENT POR ID
export const readComment = async (req, res) => {
  const { id } = req.params;

  const comment = await findBy({ value: id, model: commentModel });

  if (!comment) {
    return response({
      ok: false,
      status: 500,
      res,
      data: "error data not found",
    });
  }

  return response({ res, data: comment });
};

//* CREATE COMMENT

export const createComment = async (req, res) => {
  const comment = req.body;

  const data = {
    comments: comment.comments,
    author: comment.author,
    user_id: comment.user_id,
  };

  const comments = await store(commentModel, data);
  return response({ res, data: comments, status: 201 });
};


//* UPDATE COMMENT

export const updateComment = async (req, res) => {
  const { id } = req.params;

  const comments = await upsert({ model: commentModel, id, data: req.body });

  if (!comments) {
    return response({
      ok: false,
      status: 500,
      res,
      data: "error data not found",
    });
  }

  return response({
    res,
    data: comments,
  });
};

//* DELETE COMMENT

export const deleteComment = async (req, res) => {
  const { id } = req.params;

  const comments = await remove(commentModel, id);

  if (!comments) {
    return response({
      res,
      status: 500,
      ok: false,
      data: { error: "Comment not found" },
    });
  }

  return response({ res, data: comments });
};


