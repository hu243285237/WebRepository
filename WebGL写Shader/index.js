let V_SHADER_SOURCE = `
    void main() {
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
        gl_PointSize = 20.0;
    }
`;

let F_SHADER_SOURCE = `
    void main() {
        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
    }
`;

function drawShader() {
    let canvas = document.querySelector("canvas");
    let gl = canvas.getContext("webgl");

    let vertShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertShader, V_SHADER_SOURCE);
    gl.compileShader(vertShader);

    let fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragShader, F_SHADER_SOURCE);
    gl.compileShader(fragShader);

    let shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertShader);
    gl.attachShader(shaderProgram, fragShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    gl.drawArrays(gl.POINTS, 0, 1);
}

drawShader();