// applySvgProperties.ts
import { SVGProperties } from '../Redux/inputReducer';
import { fabric } from 'fabric';

export const applySvgProperties = (canvas: fabric.Canvas | null, svgProperties: SVGProperties) => {
    if (canvas) {
      const activeObject = canvas.getActiveObject();
      if (activeObject && activeObject.width && activeObject.height) {
  
        activeObject.set({
          scaleX: svgProperties.width / activeObject.width,
          scaleY: svgProperties.height /activeObject.height,
          left: svgProperties.x,
          top: svgProperties.y,
          angle: svgProperties.rotate,
          originX: 'center',
          originY: 'center',
        });
        canvas.renderAll();
      }
    }
  };
  
  
  
