import { SVGProperties } from '../Redux/inputReducer';
import { fabric } from 'fabric';

export const applySvgProperties = (canvas: fabric.Canvas | null, svgProperties: SVGProperties) => {
    if (canvas) {
      const activeObject = canvas.getActiveObject();
      if (activeObject) {
        
        activeObject.set({
          left: svgProperties.x,
          top: svgProperties.y,
          scaleX: svgProperties.scaleX,
          scaleY: svgProperties.scaleY,
          angle: svgProperties.rotate,
          strokeWidth: svgProperties.borderWight,
          strokeUniform: true,
        });
        canvas.renderAll();
      }
    }
  };
  
  
