import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import {Upload, message } from 'antd';
import './style.scss';

const { Dragger } = Upload;

const UploadComponent: React.FC = () => {
    const [svgCode, setSvgCode] = useState<string>("");

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
                  setSvgCode(e.target.result as string);
                }
              };
              if(originFileObj !== undefined) {
                reader.readAsText(originFileObj);
              }
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
                console.log(svgCode);
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
                <p className="ant-upload-text"><strong>Click or drag an SVG file to this area to upload</strong></p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                    banned files.
                </p>
            </Dragger>
        </div>
    );
};

export default UploadComponent;
