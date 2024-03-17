import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import './style.scss';

interface SVGResizerProps {
  svgStrings: string[];
}

const SVGResizer: React.FC<SVGResizerProps> = ({ svgStrings }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);

    svgStrings.forEach(svgString => {
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
          canvas.setDimensions({
            width: parentDiv.clientWidth,
            height: parentDiv.clientHeight
          });
    
          // Center the SVG image
          const centerX = parentDiv.clientWidth / 2;
          const centerY = parentDiv.clientHeight / 2;
          svgImage.set({ left: centerX, top: centerY });
    
          canvas.add(svgImage).renderAll();
        }
      });
    });
  }, [svgStrings]);

  return <canvas ref={canvasRef}/>;
};

export default SVGResizer;
