import React, { useReducer } from "react";

interface Item {
  id: string;
  name: string;
}

interface State {
  data: Item[];
}

interface Action {
  type: "ADD" | "REMOVE";
  payload?: Item;
}

const initialState: State = {
  data: [
    { id: "a", name: "Devin" },
    { id: "b", name: "Gabe" },
    { id: "c", name: "Kim" },
  ],
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        data: [...state.data, action.payload!],
      };
    case "REMOVE":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload!.id),
      };
    default:
      return state;
  }
};

const List: React.FC = () => {
  const textColor = "blue";

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAdd = () => {
    const newItem: Item = {
      id: Math.random().toString(),
      name: "New Item",
    };
    dispatch({ type: "ADD", payload: newItem });
  };

  const handleRemove = (item: Item) => {
    dispatch({ type: "REMOVE", payload: item });
  };

  return (
    <div>
      {state.data.map((item) => (
        <div key={item.id}>
          <p style={{ color: textColor }}>{item.name}</p>
          <button onClick={() => handleRemove(item)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default List;
