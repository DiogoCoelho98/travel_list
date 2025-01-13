import { useState } from "react";
import Item from "./Item.jsx";

export default function PackingList({
  items,
  onDeleteItems,
  onUpdateItems,
  onClearList,
}) {
  const [sort, setSort] = useState("input");

  function onChange(event) {
    setSort(event.target.value);
  }

  let sortedItens;
  if (sort === "input") sortedItens = items;
  if (sort === "description")
    sortedItens = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sort === "packed")
    sortedItens = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItens.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onUpdateItems={onUpdateItems}
          />
        ))}
      </ul>

      <div className="action">
        <select value={sort} onChange={onChange}>
          <option value="input">Sort by the input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by the packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
