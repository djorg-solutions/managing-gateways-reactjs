import React, { useContext } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import ApiContext from '../../../Context/ApiContext';

const validateMessages = {
    required: 'This field is required!',
};

function GatewayFormEdit({gateway}) {

    const api = useContext(ApiContext);

    const onFinish = async values => {
        await axios.put(
            api.url + 'gateway/'+ gateway.gatewayId, values
        ).then(() => document.location = '/gateways')
            .catch(function (err) {
                if (err.response) {
                    console.log(err.response);
                } else if (err.request) {
                    console.log(err.request);
                } else {
                    console.log(err.message);
                }
                return message.error('Error!');
            });
    };

    return (
        <>
            <Form layout={'horizontal'} initialValues={gateway} onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item label="Serial number" name={'gatewaySerialNumber'} rules={[
                    { required: true, },
                ]}>
                    <Input placeholder="GWD-3261" />
                </Form.Item>
                <Form.Item label="Human readable" name={'gatewayHumanReadable'} rules={[
                    { required: true },
                ]}>
                    <Input placeholder="John Newman" />
                </Form.Item>
                <Form.Item label="IP Address" name={'gatewayIpAddress'} rules={[
                    { required: true },
                ]}>
                    <Input placeholder="10.8.200.120" />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default GatewayFormEdit;