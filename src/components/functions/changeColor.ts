import { ColorPropertiesType } from '../Redux/changeColorReducer';
import { fabric } from 'fabric';

export const changeSvgProperties = (canvas: fabric.Canvas | null, colorState: ColorPropertiesType) => {
    if (canvas) {
      const activeObject = canvas.getActiveObject();
      if (activeObject) {
        console.log(activeObject);
        
        activeObject.set({
            fill: colorState.color,
        });
        canvas.renderAll();
      }
    }
  };
  
  
