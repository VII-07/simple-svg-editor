import { ColorPropertiesType } from '../Redux/changeColorReducer';
import { fabric } from 'fabric';

export const changeSvgProperties = (canvas: fabric.Canvas | null, colorState: ColorPropertiesType) => {
    if (canvas) {
      const activeObject = canvas.getActiveObject();
      if (activeObject) {
        
        activeObject.set({
            fill: colorState.color,
            stroke: colorState.colorBorder,
        });
        canvas.renderAll();
      }
    }
  };
  
  
