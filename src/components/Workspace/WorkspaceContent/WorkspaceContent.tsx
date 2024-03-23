import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { fabric } from 'fabric';
import './style.scss';
import { ArrayState } from '../../Redux/reducer';

const SVGResizer = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const svgStrings = useSelector((state: { svgsSlice: ArrayState }) => state.svgsSlice);
  const canvas = useRef<fabric.Canvas | null>(null);

  useEffect(() => {
    if (canvasRef.current && !canvas.current) {
      canvas.current = new fabric.Canvas(canvasRef.current);
    }

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
    
          // Center the SVG image
          const centerX = parentDiv.clientWidth / 2;
          const centerY = parentDiv.clientHeight / 2;
          svgImage.set({ left: centerX, top: centerY });
    
          canvas.current?.add(svgImage).renderAll();
        }
      });
    }
  }, [svgStrings]);


  return (
    <div>
      <canvas ref={canvasRef}/>
    </div>
  );
};

export default SVGResizer;
