import { User } from "../types/global";

const UserDetails = ({ user }: { user: User }) => {
  const { id, username, email, name } = user;
  return (
    <>
      <input type="radio" name="my-accordion-2" />
      <div className="collapse-title text-xl font-medium">{username}</div>
      <div className="collapse-content">
        <p>
          <span className="text-md text-sky-500 font-bricolageG-bold">
            Name:{" "}
          </span>{" "}
          {name}
        </p>
        <p>
          <span className="text-md text-sky-500 font-bricolageG-bold">
            Email:{" "}
          </span>{" "}
          {email}
        </p>
        <p>
          <span className="text-md text-sky-500 font-bricolageG-bold">
            Id:{" "}
          </span>{" "}
          {id}
        </p>
      </div>
    </>
  );
};

export default UserDetails;
