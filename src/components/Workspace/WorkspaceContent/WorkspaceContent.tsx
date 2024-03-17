import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import './style.scss';

interface SVGItem {
  svgString: string;
  color?: string;
  border?: string;
  zIndex?: number;
}

interface SVGResizerProps {
  svgItems: SVGItem[];
}

const SVGResizer: React.FC<SVGResizerProps> = ({ svgItems }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);

    // Sort SVG items by z-index
    const sortedSvgItems = [...svgItems].sort((a, b) => (a.zIndex || 0) - (b.zIndex || 0));

    sortedSvgItems.forEach(({ svgString, color, border }) => {
      fabric.loadSVGFromString(svgString, (objects, options) => {
        const svgImage = fabric.util.groupSVGElements(objects, options);
        svgImage.setControlsVisibility({
          mt: true, 
          mb: true, 
          ml: true, 
          mr: true
        });

        // Set color if provided
        if (color) {
          svgImage.set({ fill: color });
        }

        // Set border if provided
        if (border) {
          svgImage.set({ stroke: border });
        }

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
  }, [svgItems]);

  return (
    <div>
      <canvas ref={canvasRef}/>
    </div>
  );
};

export default SVGResizer;
