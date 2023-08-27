import { useState } from "react";
import TodoPart from "./components/TodoPart";
import UsersPart from "./components/UsersPart";

import { Query } from "./types/global";

const App = () => {
  const [query, setQuery] = useState<Query>({
    selectedUserId: 0,
  });

  return (
    <div className="grid h-screen font-bricolageG-regular">
      <main className="self-center mx-auto  grid grid-cols-2">
        <UsersPart getSelectedUserId={(id: number) => setQuery({ selectedUserId: id})}/>
        <TodoPart userQuery={query}/>
      </main>
    </div>
  );
};

export default App;
