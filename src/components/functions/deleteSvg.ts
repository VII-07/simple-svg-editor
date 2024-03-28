import { Dispatch } from "@reduxjs/toolkit";
import { setSvg } from "../Redux/downloadSvgReducer";

export const handleDeleteSVG = (canvas: fabric.Canvas | null, dispatch: Dispatch) => {
    canvas?.on('mouse:down', function () {
      window.addEventListener('keydown', function (e) {
          if ((e.key === 'Delete' || e.key === 'Backspace') && (e.target as Node).nodeName !== 'INPUT') {
            const activeObjects = canvas?.getActiveObjects();
            activeObjects?.forEach(function (object) {
              canvas?.remove(object);
            });
            if (canvas) {
                const svg = canvas.toSVG();
                dispatch(setSvg(svg));
              }
            canvas?.discardActiveObject().renderAll();
          }
        });
    });
  };