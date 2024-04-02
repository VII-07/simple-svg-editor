import { useEffect, useRef } from 'react';
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

const SVGResizer = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const svgStrings = useSelector((state: { svgsSlice: ArrayState }) => state.svgsSlice);
  const svgProperties = useSelector((state: { inputReducer: SVGProperties }) => state.inputReducer);
  const colorRedux = useSelector((state: { colorProperties: ColorPropertiesType }) => state.colorProperties);
  const canvas = useRef<fabric.Canvas | null>(null);
  const dispatch = useDispatch();

  const initializeCanvas = () => {
    if (canvasRef.current && !canvas.current) {
      canvas.current = new fabric.Canvas(canvasRef.current);
      setCanvasDimensions(canvas.current, 'content');
      const savedCanvas = localStorage.getItem('canvas');

      if (svgStrings.length === 0 && canvas.current && !savedCanvas) {
        canvas.current.clear();
      } else {
        if (savedCanvas && canvas.current) {
          const json = JSON.parse(savedCanvas);
          canvas.current.clear();
          canvas.current.loadFromJSON(json, canvas.current.renderAll.bind(canvas.current));
        }
        handleMouseDown(canvas.current, dispatch);
        handleDeleteSVG(canvas.current, dispatch);
      }
    }
  };

  const handleSvgStringsChange = () => {
    const savedCanvas = localStorage.getItem('canvas');
    if (svgStrings.length === 0 && canvas.current && !savedCanvas) {
      canvas.current.clear();
    } else {
      const svgString = svgStrings[svgStrings.length - 1];

      if (svgString && canvas.current) {
        fabric.loadSVGFromString(svgString, (objects, options) => {
          const svgImage = fabric.util.groupSVGElements(objects, options);
          svgImage.setControlsVisibility({
            mt: true,
            mb: true,
            ml: true,
            mr: true
          });

          setCanvasDimensions(canvas.current, 'content');
          canvas.current?.add(svgImage).renderAll();
          handleMouseDown(canvas.current, dispatch);
          handleDeleteSVG(canvas.current, dispatch);
        });
      }
    }
  };

  const handleSvgPropertiesChange = () => {
    applySvgProperties(canvas.current, svgProperties);
    changeSvgProperties(canvas.current, colorRedux);
  };

  const handleResize = () => {
    setCanvasDimensions(canvas.current, 'content');
  };

  useEffect(initializeCanvas, [svgStrings, dispatch]);
  useEffect(handleSvgStringsChange, [svgStrings, dispatch]);
  useEffect(handleSvgPropertiesChange, [svgProperties, colorRedux, canvas]);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default SVGResizer;
