import { useChangeFollowMutation } from "@/store/api/appApi";
import { useActions, useAppSelector } from "@/store/hooks";
import { SuccessFetch, changeFollowDto } from "@/store/types";
import { useRouter } from "next/router";

export const useUserCard = (_id: string) => {
  const { push } = useRouter();
  const [changeFollow] = useChangeFollowMutation();

  const { currentUserId, currentUser } = useAppSelector((store) => store.app);
  const { setCurrentUser } = useActions();

  const isFriend = currentUser.friends?.includes(_id);
  const isDisabled = !!currentUser._id;
  const isFollowButton = currentUserId !== _id;

  const handleChangeFollow = async () => {
    const changeFollowDto: changeFollowDto = {
      myId: currentUserId,
      friendId: _id,
    };

    const result = (await changeFollow(changeFollowDto)) as SuccessFetch;
    setCurrentUser(result.data);
  };

  return { isDisabled, isFollowButton, isFriend, handleChangeFollow, push };
};
