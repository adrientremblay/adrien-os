import interact from 'interactjs'

export default () => {

    const position = {x: 0, y: 0};

    interact('.draggable')
        .draggable({
            listeners: {
                start: (e) => {
                    console.log(e.type, e.target);
                },
                move: (e) => {
                    position.x += e.dx;
                    position.y += e.dy;
                    e.target.style.transform = `translate(${position.x}px, ${position.y}px)`
                }
            }
        })
        .resizable({
            edges: {
                top   : true,
                left  : true,
                bottom: true,
                right : true,
            },
            listeners: {
                move: (e) => {
                    //console.log("x: " + x + " y: " + y);
                    //console.log("deltleft: " + e.deltaRect.left + " deltatop: " + e.deltaRect.top);

                    position.x = (parseFloat(position.x) || 0) + e.deltaRect.left
                    position.y = (parseFloat(position.y) || 0) + e.deltaRect.top

                    Object.assign(e.target.style, {
                    width: `${e.rect.width}px`,
                    height: `${e.rect.height}px`,
                    transform: `translate(${position.x}px, ${position.y}px)`
                    })
                }
            }
        });

  return <div class="draggable" style="border: 2px solid black; width: 500px ; height: 500px ; background: white">
    Window
  </div>;
};
