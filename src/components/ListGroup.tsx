import { Fragment } from "react";
import { MouseEvent } from "react";
import { useState } from "react";

interface ListProps {
  items: string[];
  heading: string;
  onSelectItem: (item:string) => void;
}
function ListGroup({items,heading, onSelectItem}: ListProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage =() => {
    return items.length === 0 && <p>"Empty cupboards"</p>;
  } 
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List Group</h1>
      <div>{getMessage()}</div>
      <ul className="list-group">
        {items.map((item, index) => (
          <li className={selectedIndex === index? "list-group-item active":"list-group-item" }
          key={item}
          onClick={() => {
            setSelectedIndex(index)
            onSelectItem(item)
          }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
