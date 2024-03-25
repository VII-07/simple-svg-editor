import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fabric } from 'fabric';
import './style.scss';
import { ArrayState } from '../../Redux/svgReducer';
import { handleMouseDown } from '../../functions/updateImageParametersInState';

const SVGResizer = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const svgStrings = useSelector((state: { svgsSlice: ArrayState }) => state.svgsSlice);
  const canvas = useRef<fabric.Canvas | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (canvasRef.current && !canvas.current) {
      canvas.current = new fabric.Canvas(canvasRef.current);
    }

    if (svgStrings.length === 0 && canvas.current) {
      canvas.current.clear(); // Clear the canvas if the array is empty
    } else {
      const svgString = svgStrings[svgStrings.length - 1]; // Get the last SVG string

      if (svgString && canvas.current) {
        fabric.loadSVGFromString(svgString, (objects, options) => {
          const svgImage = fabric.util.groupSVGElements(objects, options);
          svgImage.setControlsVisibility({
            mt: true, 
            mb: true, 
            ml: true, 
            mr: true
          });

          // Set canvas size to match the parent div
          const parentDiv = document.getElementById('content');

          if(parentDiv) {
            canvas.current?.setDimensions({
              width: parentDiv.clientWidth,
              height: parentDiv.clientHeight
            });
      
            canvas.current?.add(svgImage).renderAll();

            // Move the event handler here
            handleMouseDown(canvas.current, dispatch);

            canvas.current?.on('mouse:up', function () {
              canvas.current?.off('mouse:move');
          });                               
          }
        });
      }
    }
  }, [svgStrings, dispatch]);

  // Add resize event listener
  useEffect(() => {
    const handleResize = () => {
      const parentDiv = document.getElementById('content');
      if(parentDiv && canvas.current) {
        canvas.current.setDimensions({
          width: parentDiv.clientWidth,
          height: parentDiv.clientHeight
        });
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <canvas ref={canvasRef}/>
    </div>
  );
};

export default SVGResizer;
