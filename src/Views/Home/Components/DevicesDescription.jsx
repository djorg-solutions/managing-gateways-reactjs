import React, { memo } from 'react';
import { Descriptions, Tag } from 'antd';

function DevicesDescription({ gateway }) {
    return (
        <>
            {
                gateway.gatewayDevices.map(item =>
                    <Descriptions key={item.deviceId} title={'Device: '+ item.deviceUID}>
                        <Descriptions.Item label="Vendor">{item.deviceVendor}</Descriptions.Item>
                        <Descriptions.Item label="Date created">{item.deviceCreateAt}</Descriptions.Item>
                        <Descriptions.Item label="Status">{item.deviceStatus?
                         <Tag color="#87d068">{'Online'}</Tag>: <Tag color="#f50">{'Offline'}</Tag>}
                        </Descriptions.Item>
                    </Descriptions>
                )
            }
        </>
    );
}

export default memo(DevicesDescription);