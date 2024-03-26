import { Dispatch } from 'redux';
import { setWidth, setHeight, setX, setY, setRotate } from '../Redux/inputReducer';
import { setSvg } from '../Redux/downloadSvgReducer';

export const handleMouseDown = (canvas: fabric.Canvas | null, dispatch: Dispatch) => {
  canvas?.on('mouse:down', function () {
    canvas.on('mouse:move', function (options) {
      if (options.target) {
        const selectedObject = options.target;
        const { left, top, angle } = selectedObject;
        const width = selectedObject.getScaledWidth();
        const height = selectedObject.getScaledHeight()

        if (canvas) {
          const svg = canvas.toSVG();
          dispatch(setSvg(svg));
        }

        dispatch(setWidth(Math.round(width ?? 0)));
        dispatch(setHeight(Math.round(height ?? 0)));
        dispatch(setX(Math.round(left ?? 0)));
        dispatch(setY(Math.round(top ?? 0)));
        dispatch(setRotate(Math.round(angle ?? 0)));
      }
    })
  });
  canvas?.on('mouse:up', function () {
    canvas?.off('mouse:move');
  });

};
