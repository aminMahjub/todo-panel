import useTodo from "../hooks/useTodo";

import { Query } from "../types/global";
const TodoPart = ({ userQuery }: { userQuery: Query }) => {
  const { data: todos, isInitialLoading } = useTodo(userQuery);
  return (
    <section className="border-2 rounded-r-xl pt-4 pb-2 px-5">
      <h2 className="text-2xl text-center mb-3">Todo</h2>

      <div className="mockup-window border bg-base-300">
        <div className="flex justify-center px-4 py-16 bg-base-200">
          {isInitialLoading && (
            <span className="loading loading-spinner loading-lg"></span>
          )}
          <ul>
            {todos?.map(({ id, userId, completed, title }, index) => {
              index++;
              return (
                <li
                  key={id}
                  id={`${userId}`}
                  className={`${completed ? "line-through" : ""}`}
                >
                  {index}.{title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TodoPart;
