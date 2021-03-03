import Button from './Button'
import Div from './Div'

import {
    addArrow,
    addTextbox,
    addRect,
    populateCanvas,
} from '../canvas/utilities'

function CanvasToolbar({canvas}) {
  return (
    <Div>
        <Button clicked={() => addRect(canvas)}>Rectangle</Button>
        <Button clicked={() => addTextbox(canvas)}>Text</Button>
        <Button clicked={() => addArrow(canvas)}>Arrow</Button>
        <Button clicked={ () => populateCanvas(canvas) }>Populate canvas (400 elements)</Button>
    </Div>
  );
}

export default CanvasToolbar;