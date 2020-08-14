import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import { Space, Button, Tooltip } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

function DataTable({data, columns, edit, remove}) {

    const actions = {
        title: 'Action',
        key: 'action',
        render: (record) => (
            <Space size="middle">
                <Tooltip title="Edit">
                    <Button type="primary" onClick={() => edit(record)} shape="circle" icon={<EditOutlined />} />
                </Tooltip>
                <Tooltip title="Remove">
                    <Button type="danger" onClick={() => remove(record)} shape="circle" icon={<DeleteOutlined />} />
                </Tooltip>
            </Space>
        )
    };

    const useColumns = (columns, action) => {
        return useMemo(() => {
            let cols = [];
            columns.map(column =>             
                cols.push(column)           
           );
            cols.push(action);
            return cols;
        }, [columns, action]);
    };

    const cols = useColumns(columns, actions)

    return (
        <Table dataSource={data} columns={cols} />
    );
}

export default DataTable;

DataTable.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array,
    edit: PropTypes.func,
    remove: PropTypes.func
};