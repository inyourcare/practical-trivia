import React, { useState } from "react";
import { BiTrash, BiGridVertical, BiPlus } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import Roulette from "./Roulette";
import Draggable from 'react-draggable';

const DraggableForm = () => {
  // const [inputList, setInputList] = useState([
  //   {
  //     id: uuidv4(),
  //     text: "test1",
  //   },
  //   {
  //     id: uuidv4(),
  //     text: "test2",
  //   },
  //   {
  //     id: uuidv4(),
  //     text: "test3",
  //   },
  // ]);
  // handle input change
  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   index: number
  // ) => {
  //   const { name, value } = e.target;
  //   const list = [...inputList];
  //   list[index][name as "id" | "text"] = value;
  //   setInputList(list);
  // };

  // // handle click event of the Remove button
  // const handleRemoveClick = (index: number) => {
  //   const list = [...inputList];
  //   list.splice(index, 1);
  //   setInputList(list);
  // };

  // // handle click event of the Add button
  // const handleAddClick = () => {
  //   setInputList([...inputList, { text: "", id: uuidv4() }]);
  // };

  // function handleOnDragEnd(result: any) {
  //   if (!result.destination) return;

  //   const items = Array.from(inputList);
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);

  //   setInputList(items);
  // }

  return (
    <div>
      {/*  */}
      {/* <Roulette data={inputList} /> */}
      <Draggable>
        <div>We can move this text</div>
      </Draggable>
      <Draggable>
        <div>We can move this text2</div>
      </Draggable>
      <Draggable>
        <div>We can move this text3</div>
      </Draggable>
      {/* <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="items">
          {(provided) => (
            <ul
              className="items"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ listStyle: "none" }}
            >
              {inputList.map((x, index) => {
                return (
                  <Draggable key={x.id} draggableId={x.id} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="list-item"
                      >
                        <div className="item">
                          <BiGridVertical />
                          <input
                            name="text"
                            placeholder="Введи что-нибудь(или нет)"
                            value={x.text}
                            onChange={(e) => handleInputChange(e, index)}
                            className="input"
                          />
                          <div className="btn-box">
                            {inputList.length !== 1 && (
                              <button
                                className="button"
                                onClick={() => handleRemoveClick(index)}
                              >
                                <BiTrash />
                              </button>
                            )}
                          </div>
                        </div>
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext> */}
      {/* <button
        onClick={handleAddClick}
        style={{ marginLeft: "2.1rem" }}
        className="button"
      >
        <BiPlus />
      </button> */}
    </div>
  );
};

export default DraggableForm;
