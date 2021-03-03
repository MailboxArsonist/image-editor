import React, { useState, useEffect } from 'react';
import { fabric } from 'fabric';
import CanvasToolbar from '../components/CanvasToolbar'
import Button from '../components/Button'
import Div from '../components/Div'
import FileUpload from '../components/FileUpload'
import PrettyJson from '../components/PrettyJson'
import {
    addBackgroundImage,
} from '../canvas/utilities'

function CanvasContainer() {
    const [canvas, setCanvas] = useState(''); 
    const [previousCanvas, setPreviousCanvas] = useState(''); 
    

    useEffect(() => {
        console.log('rendered CanvasContainer');
    }, [canvas]);
      
    const initCanvas = (blob) => {
        const canvi = new fabric.Canvas('canvas', {
            height: 800,
            width: 1200,
            borderColor: 'red'
        })

        if(blob){
            addBackgroundImage(canvi, blob);
        }

        return canvi;
    };

    const newCanvas = (previousCanvi, blob) => {
        const newCanvas = initCanvas(blob);

        if(previousCanvi){
            newCanvas.loadFromJSON(previousCanvas);
        }

        setCanvas(newCanvas);
        setPreviousCanvas('');
    }

    /**
     * export the canvas to JSON
     */
    const handleExport = canvi => {
        console.log(canvi.toJSON());
        setPreviousCanvas(canvi.toJSON());

        canvi.clear();
        canvi.dispose();
        setCanvas('');
    }


    return (
        <div>
            <Div>
                {
                    canvas ?
                    <Button clicked={ () => handleExport(canvas) }>Export</Button> :
                    <>
                        <FileUpload onUpload={(blob) => newCanvas(null, blob)} />
                        { previousCanvas && <Button clicked={ () => newCanvas(previousCanvas) }>New canvas from previous canvas</Button> }
                    </>
                }
            </Div>
            <canvas id="canvas" />
            { canvas && <CanvasToolbar canvas={canvas} />}
            { previousCanvas && <PrettyJson data={previousCanvas.objects}/> }
        </div>
    );
}

export default CanvasContainer;