import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
  useUpgradeRatingMutation,
} from "@/store/api/appApi";
import { useAppSelector } from "@/store/hooks";
import { RatingDto, UpdateDeedDto } from "@/store/types";
import { TodoProps } from "../Todo";

export const useTodo = ({ text, isDone, authorId, _id }: TodoProps) => {
  const { currentUser } = useAppSelector((store) => store.app);
  const isAuthor = currentUser._id === authorId[0];

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
  return { isAuthor, handleDone, handleDelete };
};
