import style from './style.module.scss';
import { Button } from 'antd';

type ButtonCreateFigureType = {
    title: string,
    createFigureVoid: () => void,
}

const ButtonCreateFigure = ({title, createFigureVoid} : ButtonCreateFigureType) => {
    return ( 
        <div className={style.button_shapes__container}>
            <Button onClick={createFigureVoid}>{title}</Button>
        </div>
     );
}
 
export default ButtonCreateFigure;