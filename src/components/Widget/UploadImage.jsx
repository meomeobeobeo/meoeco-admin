import { Modal, Upload } from "antd";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { ref, uploadBytes , getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { storage } from "../../api/firebase";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const UploadImage = ({ imgLink, setImgLink, count }) => {
  //imgLink is state , setImgLink,count is number of image you want to upload
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };



  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
      <Upload
        customRequest={async (options) => {
          console.log(options.file);
          const formData = new FormData();
          formData.append("file", options.file);

          const imageRef = ref(storage, `image/${options.file.name}-${v4()}`);

          try {
          
            let firebaseUpload = await uploadBytes(imageRef, options.file);
            let uploadUrl = await getDownloadURL(firebaseUpload.ref)
            setImgLink(uploadUrl);
            options.onSuccess(uploadUrl, options.file);
          } catch (error) {
            options.onError(error);
          }
        }}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= count ? null : uploadButton}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};

export default UploadImage;
