import { fabric } from 'fabric';

const addRect = canvi => {
    const rect = new fabric.Rect({
        height: 280,
        width: 200,
        stroke: 'palevioletred',
        strokeWidth: 3,
        fill: 'rgba(0,0,0,0)'
    });
    canvi.add(rect).setActiveObject(rect);;
    canvi.renderAll();
}

const addBackgroundImage = (canvi, blob) => {
    const img = blob ? blob : "http://fabricjs.com/lib/pug.jpg";
    // Define 

    canvi.setBackgroundImage(img, canvi.renderAll.bind(canvi), {
        // Optionally add an opacity lvl to the image
        // backgroundImageOpacity: 0.5,
        // should the image be resized to fit the container?
        // backgroundImageStretch: true
        // scaleX: 2,
        // scaleY: 2

    });

}

const addImage = canvi => {
    const src = "http://fabricjs.com/lib/pug.jpg";
    fabric.util.loadImage(src, (img) => {
        const image = new fabric.Image(img);
        image.set({
            left: 0,
            top: 0,
            selectable: false,
        });

        image.scaleToHeight(canvi.getHeight());
        image.scaleToWidth(canvi.getWidth());
        image.sendToBack();
        canvi.add(image);
        canvi.renderAll();
    });
}

const addTextbox = canvi => {
    const textbox = new fabric.Textbox('Enter text here...', {
        left: 50,
        top: 50,
        width: 150,
        fontSize: 20
    });
    canvi.add(textbox).setActiveObject(textbox);
    canvi.renderAll();
}

const addArrow = canvi => {

    const triangle = new fabric.Triangle({
        width: 10, 
        height: 15, 
        fill: 'red', 
        left: 235, 
        top: 65,
        angle: 90
    });

    const line = new fabric.Line([50, 100, 200, 100], {
        left: 75,
        top: 70,
        stroke: 'red'
    });

    const arrow = new fabric.Group([line, triangle]);
    canvi.add(arrow).setActiveObject(arrow);
    canvi.renderAll();
}

const exportToJson = canvi => {
    
}


const populateCanvas = canvi => {
    
    for(let i = 0; i < 150; i++){
        const triangle = new fabric.Triangle({
            width: 10, 
            height: 15, 
            fill: 'red', 
            left: 235, 
            top: 65,
            angle: 90
        });
    
        const line = new fabric.Line([50, 100, 200, 100], {
            left: 75,
            top: 70,
            stroke: 'red'
        });
    
        const arrow = new fabric.Group([line, triangle]);
        arrow.setCoords(randomIntFromInterval(1, canvi.getWidth(), randomIntFromInterval(1, canvi.getHeight())));
        canvi.add(arrow);

        const textbox = new fabric.Textbox('Text text', {
            left: randomIntFromInterval(1, canvi.getWidth()),
            top: randomIntFromInterval(1, canvi.getHeight()),
            width: 150,
            fontSize: 20
        });
        canvi.add(textbox);

        const rect = new fabric.Rect({
            height: randomIntFromInterval(1, canvi.getWidth()),
            width: randomIntFromInterval(1, canvi.getHeight()),
            stroke: 'palevioletred',
            strokeWidth: 3,
            fill: 'rgba(0,0,0,0)',
            left: randomIntFromInterval(1, canvi.getWidth()),
            top: randomIntFromInterval(1, canvi.getHeight()),
        });
        canvi.add(rect);

    }
    canvi.renderAll();
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

export {
    addArrow,
    addTextbox,
    addRect,
    addBackgroundImage,
    populateCanvas,
    addImage,
}