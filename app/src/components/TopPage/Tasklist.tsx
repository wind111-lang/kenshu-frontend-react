import { useUpdateTask } from "../../api/useUpdateTask";
import { useQueryTask } from "../../api/useQueryTask";
import { useState } from "react";

type Props = {
  id: string;
  title: string;
  createdAt: string;
  finishedAt: string | null;
};

export const TaskList = ({ id, title, createdAt, finishedAt }: Props) => {
  const queryTask = useQueryTask();
  const { mutateAsync: useUpdateTaskMutate } = useUpdateTask();

  const [isEditing, setIsEditing] = useState(false);
  const onClickTitle = () => setIsEditing(true);

  const [titleValue, setTitleValue] = useState(title);
  const onChange = ({ target: { value } }) => setTitleValue(value);

  const onSubmit = async (e) => {
    e.preventDefault();

    await useUpdateTaskMutate({
      id,
      title: titleValue,
    });
    setIsEditing(false);
    void queryTask.refetch();
  };

  return (
    <>
      <div>
        <p>ID: {id}</p>
        <p>タイトル: {title}</p>
        <p>作成日: {createdAt}</p>
        <p>完了日: {finishedAt}</p>
      </div>
      {isEditing ? (
        <form onSubmit={onSubmit}>
          <input
            className="bg-gray-300"
            type="text"
            value={titleValue}
            onChange={onChange}
          />
        </form>
      ) : (
        <button
          className="bg-yellow-500 border-gray-800"
          onClick={onClickTitle}
        >
          タスク名を編集
        </button>
      )}
    </>
  );
};
