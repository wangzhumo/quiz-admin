import { message, UploadProps } from 'antd'
import Dragger from 'antd/es/upload/Dragger'
import { AiOutlineInbox } from 'react-icons/ai'
import { UploadChangeParam, UploadFile } from 'antd/es/upload/interface'
import * as React from "react";


const ImagePicker = (props: UploadProps) => {

  const { onChange, onDrop, ...newProps } = props
  const onChangeInner = (info: UploadChangeParam<UploadFile>) => {
    const { status } = info.file
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
    if (onChange) {
      onChange(info);
    }
  }
  const onDropInner = (e:React.DragEvent<HTMLDivElement>) => {
    console.log('Dropped files', e.dataTransfer.files)
    if (onDrop) {
      onDrop(e);
    }
  }


  return (
    <Dragger onChange={onChangeInner} onDrop={onDropInner} {...newProps}>
      <p className='inline-flex'>
        <AiOutlineInbox size={42}/>
      </p>
      <p className='text-lg'>
        Click or drag file to this area to upload
      </p>
      <p className='text-sm text-secondary'>
        Support for a single or bulk upload. Strictly prohibited from uploading
        company data or other banned files.
      </p>
    </Dragger>
  )
}

export default ImagePicker
