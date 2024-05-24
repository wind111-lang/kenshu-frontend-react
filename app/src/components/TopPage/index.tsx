import { useQueryTask } from "../../api/useQueryTask";
import { usePostTask } from "../../api/usePostTask";
import { useDoneTask } from "../../api/useDoneTask";
import { useResumeTask } from "../../api/useResumeTask";
import { useDeleteTask } from "../../api/useDeleteTask";
import { TaskList } from "./TaskList";

export const TopPage = () => {
  const queryTask = useQueryTask();
  const { mutate: useDoneTaskMutate } = useDoneTask();
  const { mutate: useResumeTaskMutate } = useResumeTask();
  const { mutate: useDeleteTaskMutate } = useDeleteTask();

  function formSubmit() {
    usePostTask();
    queryTask.refetch();
  }

  const finishTask = async (id: string) => {
    useDoneTaskMutate(id);
  };
  const unfinishTask = async (id: string) => {
    useResumeTaskMutate(id);
  };
  const deletingTask = async (id: string) => {
    if (!confirm("削除しますか？")) return;
    useDeleteTaskMutate(id);
  };

  return (
    <div>
      <ul>
        {queryTask.data.tasks.map(({ id, title, createdAt, finishedAt }) => (
          <li key={id}>
            <TaskList
              id={id}
              title={title}
              createdAt={createdAt}
              finishedAt={finishedAt}
            />
            {finishedAt != null ? (
              <button
                className="bg-blue-700 text-white"
                onClick={() => unfinishTask(id)}
              >
                未完了
              </button>
            ) : (
              <button className="bg-green-400" onClick={() => finishTask(id)}>
                完了
              </button>
            )}
            <button
              className="bg-red-700 text-white"
              onClick={() => deletingTask(id)}
            >
              削除
            </button>
          </li>
        ))}
      </ul>
      <button
        className="bg-green-800 border-gray-800 text-white"
        onClick={formSubmit}
      >
        タスクを新規作成
      </button>
    </div>
  );
};
