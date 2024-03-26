import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';
import { useDispatch } from 'react-redux';
import { add } from '../Redux/svgReducer';

const UpploadBtn: React.FC = () => {
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
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    }
  }

  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Вставити файл</Button>
    </Upload>
  );
};

export default UpploadBtn;
