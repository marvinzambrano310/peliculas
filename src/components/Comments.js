import React from "react";
import {Button, Comment, Form, Input, List, Modal} from "antd";
const Comments=({show, ok, cancel, id, comments, add})=>{
    const { TextArea } = Input;
    const [form] = Form.useForm();
    const handleAddComment = () => {
        form.resetFields();
        add();
    }
    return (
        <>
            <Modal
                title="Comments"
                visible={show}
                onOk={ok}
                onCancel={cancel}
            >

                <List  className={'comment-list'}>
                    {
                        comments.map((comment,index)=>(
                            comment.id2===id ?
                                <li key={index}>
                                    <Comment
                                        author={comment.name}
                                        avatar='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
                                        content={comment.text}
                                        datetime={comment.date}
                                    />
                                </li>
                                : ''
                        ))
                    }
                </List>

                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    form={form}
                    //onFinish={onFinish}
                    //onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Comment"
                        name="Enter your Comment"
                        rules={[{ required: false, message: 'Please input your comment!', whitespace:true, value:'' }]}
                    >
                        <TextArea id='comment' rows={4} />
                    </Form.Item>
                    <Form.Item>

                        <Button htmlType='submit' type='primary' onClick={handleAddComment}>Summit</Button>

                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}
export default Comments;