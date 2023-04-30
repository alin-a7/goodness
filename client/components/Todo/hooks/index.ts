import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
  useUpgradeRatingMutation,
} from "@/store/api/appApi";
import { useAppSelector } from "@/store/hooks";
import { CreateCommentDto, RatingDto, UpdateDeedDto } from "@/store/types";
import { TodoProps } from "../Todo";
import { useState } from "react";

export const useTodo = ({ text, isDone, authorId, _id }: TodoProps) => {
  const [showComments, setShowComments] = useState(false);
  const { currentUser } = useAppSelector((store) => store.app);
  const isAuthor = currentUser._id === authorId[0];

  const changeShow = () => {
    setShowComments((prev) => !prev);
  };
  const [deleteTodo] = useDeleteTodoMutation();
  const handleDelete = async () => {
    await deleteTodo(_id);
  };

  const [updateTodo] = useUpdateTodoMutation();
  const [ratingUpgrade] = useUpgradeRatingMutation();

  const handleDone = async () => {
    const updateDeedDto: UpdateDeedDto = {
      isDone: !isDone,
      text: text,
      id: _id,
    };
    const ratingDto: RatingDto = {
      id: currentUser._id,
      increase: !isDone,
    };
    await ratingUpgrade(ratingDto);
    await updateTodo(updateDeedDto);
  };

  const createCommentDto: CreateCommentDto = {
    deedId: _id,
    text: "",
    author: currentUser.name,
  };

  return {
    isAuthor,
    handleDone,
    handleDelete,
    showComments,
    changeShow,
    createCommentDto,
  };
};
