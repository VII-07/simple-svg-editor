import { useState, useRef, useEffect } from 'react';
import { Content } from 'antd/es/layout/layout';
import style from './style.module.scss';

interface Dimensions {
  width: number;
  height: number;
}

interface SvgElement {
  resize: (width: number, height: number) => void;
}

class Circle implements SvgElement {
  private element: SVGCircleElement;

  constructor(element: SVGCircleElement) {
    this.element = element;
  }

  resize(width: number, height: number) {
    const radius = Math.min(width, height) / 2;
    this.element.setAttribute('r', radius.toString());
    this.element.setAttribute('cx', (width / 2).toString());
    this.element.setAttribute('cy', (height / 2).toString());
  }
}

const WorkspaceContent = () => {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 100, height: 100 });
  const [position, setPosition] = useState({ top: 0, left: 0 });


  const svgRef = useRef<SVGSVGElement | null>(null);
  const topLeftRef = useRef<HTMLDivElement | null>(null);
  const topRightRef = useRef<HTMLDivElement | null>(null);
  const bottomLeftRef = useRef<HTMLDivElement | null>(null);
  const bottomRightRef = useRef<HTMLDivElement | null>(null);
  const topRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const circleElement = svgRef.current?.querySelector('circle');
    if (circleElement) {
      const circle = new Circle(circleElement);
      circle.resize(dimensions.width, dimensions.height);
    }
  }, [dimensions]);

  const handleMouseDown = (e: React.MouseEvent, direction: string) => {
    e.preventDefault();
    const svgRect = svgRef.current?.getBoundingClientRect();
    if (!svgRect) return;

    const initialMousePosition = { x: e.clientX, y: e.clientY };

    const onMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - initialMousePosition.x;
      const dy = e.clientY - initialMousePosition.y;

      switch (direction) {
        case 'top-left':
          setDimensions(prev => ({ width: prev.width - dx, height: prev.height - dy }));
          setPosition(prev => ({ top: prev.top + dy, left: prev.left + dx }));
          break;
        case 'top-right':
          setDimensions(prev => ({ width: prev.width + dx, height: prev.height - dy }));
          break;
        case 'bottom-left':
          setDimensions(prev => ({ width: prev.width - dx, height: prev.height + dy }));
          break;
        case 'bottom-right':
          setDimensions(prev => ({ width: prev.width + dx, height: prev.height + dy }));
          break;
        case 'top':
          setDimensions(prev => ({ width: prev.width, height: prev.height - dy }));
          setPosition(prev => ({ top: prev.top + dy, left: prev.left }));
          break;
        case 'bottom':
          setDimensions(prev => ({ width: prev.width, height: prev.height + dy }));
          break;
        case 'left':
          setDimensions(prev => ({ width: prev.width - dx, height: prev.height }));
          setPosition(prev => ({ top: prev.top, left: prev.left + dx }));
          break;
        case 'right':
          setDimensions(prev => ({ width: prev.width + dx, height: prev.height }));
          break;
      }

      initialMousePosition.x = e.clientX;
      initialMousePosition.y = e.clientY;
    };


    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  return (
    <Content className={style.content}>
      <div style={{ position: 'relative', width: dimensions.width, height: dimensions.height, top: position.top, left: position.left }}>                <div ref={topLeftRef} onMouseDown={(e) => handleMouseDown(e, 'top-left')} className={style.marker__topLeft} />
        <div ref={topRightRef} onMouseDown={(e) => handleMouseDown(e, 'top-right')} className={style.marker__topRight} />
        <div ref={bottomLeftRef} onMouseDown={(e) => handleMouseDown(e, 'bottom-left')} className={style.marker__bottomLeft} />
        <div ref={bottomRightRef} onMouseDown={(e) => handleMouseDown(e, 'bottom-right')} className={style.marker__bottomRight} />
        <div ref={topRef} onMouseDown={(e) => handleMouseDown(e, 'top')} className={style.marker__top} />
        <div ref={bottomRef} onMouseDown={(e) => handleMouseDown(e, 'bottom')} className={style.marker__bottom} />
        <div ref={leftRef} onMouseDown={(e) => handleMouseDown(e, 'left')} className={style.marker__left} />
        <div ref={rightRef} onMouseDown={(e) => handleMouseDown(e, 'right')} className={style.marker__right} />
        <svg ref={svgRef} width={dimensions.width} height={dimensions.height} xmlns="http://www.w3.org/2000/svg">
          <circle r="100" cx="150" cy="200" fill="red" />
        </svg>
      </div>
    </Content>
  );
}

export default WorkspaceContent;
