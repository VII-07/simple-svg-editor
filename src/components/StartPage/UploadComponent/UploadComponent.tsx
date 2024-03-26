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
        accept: '.svg',
        showUploadList: false,
        customRequest({ file, onSuccess, onError }) {
            if (typeof file === 'string' || !(file instanceof Blob)) {
                onError && onError(new Error('Invalid file type'));
                return;
            }
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                if (e.target?.result) {
                    const newSvgCode = e.target.result as string;
                    onSuccess && onSuccess('ok');
                    dispatch(add(newSvgCode));
                }
            };
            reader.onerror = () => {
                onError && onError(new Error('FileReader error'));
            };
            reader.readAsText(file);
        },
        onChange(info) {
            const { status } = info.file;
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
