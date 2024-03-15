import { useState, useRef } from 'react';
import { Content } from 'antd/es/layout/layout';
import style from './style.module.scss';

interface Dimensions {
    width: number;
    height: number;
}

const WorkspaceContent = () => {
    const [dimensions, setDimensions] = useState<Dimensions>({ width: 100, height: 100 });
    const svgRef = useRef<SVGSVGElement | null>(null);
    const topRef = useRef<HTMLDivElement | null>(null);
    const bottomRef = useRef<HTMLDivElement | null>(null);
    const leftRef = useRef<HTMLDivElement | null>(null);
    const rightRef = useRef<HTMLDivElement | null>(null);

    const handleMouseDown = (e: React.MouseEvent, direction: string) => {
        e.preventDefault();
        const svgRect = svgRef.current?.getBoundingClientRect();
        if (!svgRect) return;

        const onMouseMove = (e: MouseEvent) => {
            switch (direction) {
                case 'top':
                    setDimensions(prev => ({ ...prev, height: svgRect.bottom - e.clientY }));
                    break;
                case 'bottom':
                    setDimensions(prev => ({ ...prev, height: e.clientY - svgRect.top }));
                    break;
                case 'left':
                    setDimensions(prev => ({ ...prev, width: svgRect.right - e.clientX }));
                    break;
                case 'right':
                    setDimensions(prev => ({ ...prev, width: e.clientX - svgRect.left }));
                    break;
            }
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
            <div style={{ position: 'relative', width: dimensions.width, height: dimensions.height }}>
                <div ref={topRef} onMouseDown={(e) => handleMouseDown(e, 'top')} className={style.marker__top} />
                <div ref={bottomRef} onMouseDown={(e) => handleMouseDown(e, 'bottom')} className={style.marker__bottom} />
                <div ref={leftRef} onMouseDown={(e) => handleMouseDown(e, 'left')} className={style.marker__left} />
                <div ref={rightRef} onMouseDown={(e) => handleMouseDown(e, 'right')} className={style.marker__right}/>
                <svg ref={svgRef} width={dimensions.width} height={dimensions.height} xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%"  rx="20" ry="20" fill="blue" />
                </svg>
            </div>
        </Content>
    );
}

export default WorkspaceContent;
