import React from 'react'
import { Tag } from 'antd';
const columns = [
    {
        title: 'UID',
        dataIndex: 'deviceUID',
        key: 'deviceUID',
    },
    {
        title: 'Vendor',
        dataIndex: 'deviceVendor',
        key: 'deviceVendor',
    },
    {
        title: 'Date Created',
        dataIndex: 'deviceCreateAt',
        key: 'deviceCreateAt',
    },
    {
        title: 'Status',
        dataIndex: 'deviceStatus',
        key: 'deviceStatus',
        render: tag => 
            tag?
                <Tag color="#87d068">{'Online'}</Tag> : <Tag color="#f50">{'Offline'}</Tag>   
    },
    {
        title: 'Gateway',
        dataIndex: 'deviceGatewayName',
        key: 'deviceGatewayName',
    },
];

export default columns;