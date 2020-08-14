import React, { memo, useState, useCallback, useMemo, useContext } from 'react';
import useDevice from '../Hooks/useDevice';
import columns from '../constants/columns';
import DataTable from '../../../Components/DataTable';
import { PageHeader, message } from 'antd';
import DeviceNew from './DeviceNew';
import DeviceEdit from './DeviceEdit';
import axios from 'axios';
import ApiContext from '../../../Context/ApiContext';

function DeviceContainer() {
    const api = useContext(ApiContext);
    const { data } = useDevice();

    const [edit, setEdit] = useState(false);
    const [deviceSelected, setDeviceSelected] = useState();

    const handleEdit = useCallback((value) => {
        const selected = data.find(d => d.deviceId === value.deviceId);
        setDeviceSelected(selected);
        setEdit(true);
    }, [data]);

    const handleDelete = useCallback((value) => {
        axios.delete(
            api.url + 'device/' + value.deviceId,
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
    }, [api.url]);

    const table = useMemo(() => {
        return <DataTable data={data} columns={columns} edit={handleEdit} remove={handleDelete} />;
    }, [data, handleEdit, handleDelete]);

    return (
        <div className={'gateway-container'}>
            <PageHeader ghost={false} onBack={() => window.history.back()} title={'Devices'}
                subTitle="Devices List"
                extra={[
                    <DeviceNew />
                ]}>
            </PageHeader>
            {table}
            <DeviceEdit device={deviceSelected} visible={edit} cancelar={setEdit} />
        </div>
    );
}

export default memo(DeviceContainer);