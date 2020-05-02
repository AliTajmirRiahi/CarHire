import React, { useState, useEffect } from 'react';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import DropPreview from './DropPreview';

export interface IProps {
  subFolder: string;
}

const DropzoneUploader: React.FC<IProps> = ({ subFolder }) => {
  // called every time a file's `status` changes
  const handleChangeStatus = (mf: any, status: any) => {
    console.log(mf.meta.percent);
  };

  return (
    <Dropzone
      getUploadParams={() => ({
        url: `http://localhost:5000/api/Photo/${subFolder}`,
      })}
      onChangeStatus={handleChangeStatus}
      PreviewComponent={DropPreview}
      accept='image/*'
      inputContent='برای آپلود کلیک یا عکس ها را اینجا رها کنید'
      inputWithFilesContent='اضافه کنید'
      SubmitButtonComponent={undefined}
      canRemove={true}
    />
  );
};

export default DropzoneUploader;
