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
                    e.target.style.transform =
                        `translate(${position.x}px, ${position.y}px)`
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
                    let { x, y } = e.target.dataset

                    x = (parseFloat(x) || 0) + e.deltaRect.left
                    y = (parseFloat(y) || 0) + e.deltaRect.top

                    Object.assign(e.target.style, {
                    width: `${e.rect.width}px`,
                    height: `${e.rect.height}px`,
                    })

                    Object.assign(e.target.dataset, { x, y })
                }
            }
        });

  return <div class="draggable" style="border: 2px solid black; width: 500px ; height: 500px ; background: white">
    Window
  </div>;
};
