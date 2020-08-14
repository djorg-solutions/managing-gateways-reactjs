import React, { useContext } from 'react';
import { Form, Input, Button, message, Select, InputNumber } from 'antd';
import axios from 'axios';
import ApiContext from '../../../Context/ApiContext';
import useGateway from '../../Gateway/Hooks/useGateway';

const validateMessages = {
    required: 'This field is required!',
    number: 'This field is not a validate number!',
};

const { Option } = Select;

function DeviceForm() {

    const api = useContext(ApiContext);
    const { data } = useGateway();
    const onFinish = async values => {
        await axios.post(
            api.url + 'device', values
        ).then(() => document.location = '/devices')
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
            <Form layout={'horizontal'} onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item label="UID" name={'DeviceUID'} rules={[
                    { required: true,  type: 'number', min: 1},
                ]}>
                    <InputNumber/>
                </Form.Item>
                <Form.Item label="Vendor" name={'DeviceVendor'} rules={[
                    { required: true },
                ]}>
                    <Input/>
                </Form.Item>
                <Form.Item label="Gateway" name={'DeviceGatewayId'} rules={[
                    { required: true },
                ]}>
                    <Select placeholder="Select a gateway" allowClear>
                        {
                            data.map(item=><Option value={item.gatewayId}>{item.gatewaySerialNumber}</Option>)
                        }
                    </Select>
                </Form.Item>


                <Form.Item>
                    <Button htmlType="submit" type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default DeviceForm;