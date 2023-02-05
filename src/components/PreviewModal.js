import { Button, Form, Input, Modal, Radio } from "antd";
import { useState } from "react";
import { useRecoilState } from "recoil";

import { previewState } from "../store/previewComponents";
const CollectionCreateForm = ({ open, onCreate, onCancel, dropBox }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Preview the final form"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        {dropBox.map((element) => {
          if (element.type === "checkbox") {
          } else if (element.type === "radio") {
          } else {
            <Form.Item
              name="title"
              label="Title"
              rules={[
                {
                  required: true,
                  message: "Please input the title of collection!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          }
        })}

        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item
          name="modifier"
          className="collection-create-form_last-form-item"
        >
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export const PreviewModal = ({ setOpen, open, dropBox }) => {
  const [allPreviews,setAllPreviews]=useRecoilState(previewState);
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setOpen(false);
    setAllPreviews({...allPreviews,class:values.class,label:values.label,placeholder:values.placeholder,description:values.description,required:values.required});
  };
  return (
    <div>
      <CollectionCreateForm
        dropBox={dropBox}
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
      {console.log("allPreviews",allPreviews)}
    </div>
  );
};
