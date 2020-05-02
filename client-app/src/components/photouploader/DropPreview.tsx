import React, { useState, useEffect } from 'react';
import { IPreviewProps } from 'react-dropzone-uploader';
import { ProgressBar, Button } from 'react-bootstrap';
// dzu-dropzoneDisabled
const DropPreview: React.FC<IPreviewProps> = (prop) => {
  const {
    meta: { name, percent, status, previewUrl, size },
    canRemove,
    files,
  } = prop;
  const onDelete = () => {
    files.filter((p) => p.meta.name === name).map((p) => p.remove());
  };
  return (
    <div className='dzu-prevImg'>
      <img
        className={`dzu-previewImage ${
          status !== 'done' ? 'dzu-dropzoneDisabled' : ''
        }`}
        src={previewUrl !== undefined ? previewUrl : '/assets/defaultIco.png'}
        alt={`${name}, ${Math.round(size / 1024)}kB`}
        title={`${name}, ${Math.round(size / 1024)}kB`}
      />
      <div className='dzu-progressBar'>
        {status !== 'done' && (
          <ProgressBar animated now={Math.round(percent)} />
        )}
      </div>
      <div className='' style={{ textAlign: 'center' }}>
        <a
          className=' btn animated-button victoria-two w-50 m-0 p-1'
          style={{ fontSize: 14 }}
          onClick={onDelete}
        >
          <i className='fa fa-times' aria-hidden='true'></i> حذف
        </a>
      </div>
    </div>
  );
};

export default DropPreview;
