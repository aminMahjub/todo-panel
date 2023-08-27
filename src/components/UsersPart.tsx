import useUsers from "../hooks/useUsers";

import UserDetails from "./UserDetails";
const UsersPart = ({
  getSelectedUserId,
}: {
  getSelectedUserId: (id: number) => void;
}) => {
  const { data: users, isInitialLoading } = useUsers();

  return (
    <section className="border-2 rounded-l-xl pt-4 pb-2 px-5">
      <h2 className="text-2xl text-center mb-3">Users</h2>

      <div>
        {isInitialLoading && (
          <span className="loading loading-spinner loading-lg"></span>
        )}
        <ul>
          {users?.map((user) => {
            return (
              <li
                key={user.id}
                className="collapse collapse-arrow bg-base-200 mb-2"
                onClick={() => getSelectedUserId(user.id)}
              >
                <UserDetails key={user.id} user={user} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default UsersPart;
