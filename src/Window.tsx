import { createDraggable } from "@neodrag/solid";

export default () => {
    const {draggable} = createDraggable();

  return <div use:draggable style="border: 2px solid black; width: 500px ; height: 500px ; background: white">
    Window
  </div>;
};
