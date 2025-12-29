import interact from 'interactjs'

export default () => {

    const position = {x: 0, y: 0};

    interact('.draggable').draggable({
        listeners: {
            start: (e) => {
                console.log(e.type, e.target);
            },
            move: (e) => {
                position.x += e.dx;
                position.y += e.dy;
                e.target.style.transform =
                    `translate(${position.x}px, ${position.y}px)`
            }
        }
    })

  return <div class="draggable" style="border: 2px solid black; width: 500px ; height: 500px ; background: white">
    Window
  </div>;
};
