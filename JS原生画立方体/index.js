

function drawCube(length) {
    let canvas = document.querySelector("canvas");
    let ctx = canvas.getContext("2d");
    ctx.moveTo(10, 10);
    ctx.lineTo(100, 100);
    ctx.lineTo(100, 200);
    ctx.stroke();

    let dots = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
        [1, 0, 1],
        [1, 1, 0],
        [0, 1, 1],
        [1, 1, 1]
    ];
}

drawCube(1);