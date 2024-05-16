import { useQueryTask } from "../../api/useQueryTask";
import { postTask } from "../../api/postTask";
import { doneTask } from "../../api/doneTask";
import { resumeTask } from "../../api/resumeTask";
import { deleteTask } from '../../api/deleteTask';
import { Tasklist } from "./Tasklist";

export const TopPage = () => {
  const querytask = useQueryTask();
  const doneTaskMutate = doneTask();
  const resumeTaskMutate = resumeTask();
  const deleteTaskMutate = deleteTask();

  function formSubmit() {
    postTask();
    querytask.refetch();
  }

  const finishTask = async (id: string) => {
    doneTaskMutate.mutate(id)
  };
  const unfinishTask = async (id: string) => {
    resumeTaskMutate.mutate(id)
  }; 
  const deletingTask = async (id: string) => {
    if (!confirm('削除しますか？')) return;
    deleteTaskMutate.mutate(id)
  };
  
  return (
    <div>
      <ul>
        {querytask.data.tasks.map(({ id, title, createdAt, finishedAt }) => (
          <li key={id}>
            <Tasklist id={id} title={title} createdAt={createdAt} finishedAt={finishedAt} />
            {finishedAt != null ?  (
              <button 
                className="bg-blue-700 text-white"
                onClick={() => unfinishTask(id)}
              >
                未完了
              </button>
            ) : (
              <button 
                className="bg-green-400"
                onClick={() => finishTask(id)}
              >
              完了
              </button>
            )
           }
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
