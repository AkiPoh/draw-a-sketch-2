// y axis = height
// x xis = width

// [x, y]

function generateCanvas (canvasContainer, canvasSize = 32, canvasColor = [256, 0, 0]) {

    const canvas = document.createElement("div")
    canvas.classList.add("canvas")

    for (let row = 0; row < canvasSize; row++) {

        const canvasRow = document.createElement("div")
        canvasRow.classList.add("canvasRow")

        for (let pixel = 0; pixel < canvasSize; pixel++) {

            let canvasPixel = document.createElement("div")
            canvasPixel.classList.add("canvasPixel")

            applyColor(canvasPixel, [pixel, row], canvasColor)

            pixelHandler(canvasPixel, location)

            canvasRow.appendChild(canvasPixel)

        }

        canvas.appendChild(canvasRow)
    }
    
    canvasContainer.appendChild(canvas)
}

function pixelHandler (pixel, location) {
    pixel.addEventListener("mouseover", function() {
        applyColor(this, location)
    });
    pixel.addEventListener("touchmove", function(e) {
        e.preventDefault(); //prevent scrolling
        const touchPoint = e.touches[0]; //selects first touch point
        const elementThatTouched = document.elementFromPoint(touchPoint.clientX, touchPoint.clientY); //selects specfic element that was touched

        if (elementThatTouched && elementThatTouched.classList.contains("canvasPixel")) {
            applyColor(this, location)
        }
    });
}

function applyColor (pixel, location, color = [0, 0, 0]) {
    pixel.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`
}

const canvasContainer = document.querySelector("#canvasContainer")

generateCanvas(canvasContainer)