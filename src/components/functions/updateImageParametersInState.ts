import { Dispatch } from 'redux';
import { setWidth, setHeight, setX, setY, setRotate } from '../Redux/inputReducer';
import { setSvg } from '../Redux/downloadSvgReducer';

export const handleMouseDown = (canvas: fabric.Canvas | null, dispatch: Dispatch) => {
  canvas?.on('mouse:down', function () {
    canvas.on('mouse:move', function (options) {
      if (options.target) {
        const selectedObject = options.target;
        const { left, top, angle, scaleX, scaleY } = selectedObject;

        const width = scaleX?.toFixed(2);
        const height = scaleY?.toFixed(2);

        console.log(width, height)

        if (canvas) {
          const svg = canvas.toSVG();
          dispatch(setSvg(svg));
        }
        dispatch(setWidth(Number(width) ?? 0));
        dispatch(setHeight((Number(height) ?? 0)));
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
