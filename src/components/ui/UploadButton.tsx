import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';



const UpploadBtn: React.FC = () => {

  const [svgCode, setSvgCode] = useState<string>('');

  const props: UploadProps = {
    name: 'file',
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
            console.log(svgCode);
          }
        };
        if (originFileObj !== undefined) {
          reader.readAsText(originFileObj);
        }
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },

  };
  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Вставити файл</Button>
    </Upload>
  )
};

export default UpploadBtn;