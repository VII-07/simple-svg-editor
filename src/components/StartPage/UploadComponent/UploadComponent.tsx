import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Upload, message } from 'antd';
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../../Redux/svgReducer';

const { Dragger } = Upload;

const UploadComponent: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const props: UploadProps = {
        name: 'file',
        multiple: true,
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        accept: '.svg',
        showUploadList: false,
        onChange(info) {
            const { status, originFileObj } = info.file;
            if (status !== 'uploading') {
                const reader = new FileReader();
                reader.onload = (e: ProgressEvent<FileReader>) => {
                    if (e.target?.result) {
                        const newSvgCode = e.target.result as string;
                        dispatch(add(newSvgCode));
                    }
                };
               if (originFileObj !== undefined) {
                   reader.readAsText(originFileObj);
                }
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
                return navigate("/workspace");
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },

        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return (
        <div className='upload__container'>
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text"><strong>Клацніть або перетягніть файл SVG в цю область для завантаження</strong></p>
                <p className="ant-upload-hint">
                    Підтримка одиночного або масового завантаження. Суворо заборонено завантажувати корпоративні дані або інші
                    заборонені файли.
                </p>

            </Dragger>
        </div>
    );
};

export default UploadComponent;
