import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fabric } from 'fabric';
import './style.scss';
import { ArrayState } from '../../Redux/svgReducer';
import { handleMouseDown } from '../../functions/updateImageParametersInState';
import { SVGProperties } from '../../Redux/inputReducer';
import { applySvgProperties } from '../../functions/applySvgProperties';
import { handleDeleteSVG } from '../../functions/deleteSvg';
import { ColorPropertiesType } from '../../Redux/changeColorReducer';
import { changeSvgProperties } from '../../functions/changeColor';
import setCanvasDimensions from '../../functions/setCanvasDimensions';

export type SvgResizerProps = {
  canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
  canvas: React.MutableRefObject<fabric.Canvas | null>,
}


const SVGResizer = ({ canvasRef, canvas }: SvgResizerProps) => {
  const svgStrings = useSelector((state: { svgsSlice: ArrayState }) => state.svgsSlice);
  const svgProperties = useSelector((state: { inputReducer: SVGProperties }) => state.inputReducer);
  const colorRedux = useSelector((state: { colorProperties: ColorPropertiesType }) => state.colorProperties);
  const dispatch = useDispatch();

  const initializeCanvas = () => {
    if (canvasRef.current && !canvas.current) {
      canvas.current = new fabric.Canvas(canvasRef.current);
      setCanvasDimensions(canvas.current, 'content');
      const savedCanvas = localStorage.getItem('canvas');

      if (savedCanvas && canvas.current) {
        const json = JSON.parse(savedCanvas);
        canvas.current.clear();
        canvas.current.loadFromJSON(json, canvas.current.renderAll.bind(canvas.current));
      }
      handleMouseDown(canvas.current, dispatch);
      handleDeleteSVG(canvas.current, dispatch);
    }
  };

  const handleSvgStringsChange = () => {
    const svgString = svgStrings[svgStrings.length - 1];
  
    if (svgString && canvas.current) {
      fabric.loadSVGFromString(svgString, (objects) => {
        objects.forEach((object) => {
          object.setControlsVisibility({ mt: true, mb: true, ml: true, mr: true });
          canvas.current?.add(object);
        });
        setCanvasDimensions(canvas.current, 'content');
        canvas.current?.renderAll();
        handleMouseDown(canvas.current, dispatch);
        handleDeleteSVG(canvas.current, dispatch);
      });
    }
  };
  

  const handleSvgPropertiesChange = () => {
    applySvgProperties(canvas.current, svgProperties);
    changeSvgProperties(canvas.current, colorRedux);
  };

  const handleResize = useCallback(() => {
    setCanvasDimensions(canvas.current, 'content');
  }, [canvas]);

  useEffect(initializeCanvas, [canvas, svgStrings, dispatch, canvasRef]);
  useEffect(handleSvgStringsChange, [canvas, svgStrings, dispatch]);
  useEffect(handleSvgPropertiesChange, [svgProperties, colorRedux, canvas]);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default SVGResizer;
