import React, { memo, useState, useCallback, useMemo, useContext } from 'react';
import useGateway from '../Hooks/useGateway';
import columns from '../constants/columns';
import DataTable from '../../../Components/DataTable';
import { PageHeader, message } from 'antd';
import GatewayNew from './GatewayNew';
import GatewayEdit from './GatewayEdit';
import axios from 'axios';
import ApiContext from '../../../Context/ApiContext';

function GatewayContainer() {
    const api = useContext(ApiContext);
    const { data } = useGateway();

    const [edit, setEdit] = useState(false);
    const [gatewaySelected, setGatewaySelected] = useState();
    const handleEdit = useCallback((value) => {
        const selected = data.find(d => d.gatewayId === value.gatewayId);
        setGatewaySelected(selected);
        setEdit(true);
    }, [data]);

    const handleDelete = useCallback((value) => {
        axios.delete(
            api.url + 'gateway/' + value.gatewayId,
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
    }, [api.url]);

    const table = useMemo(() => {
        return <DataTable data={data} columns={columns} edit={handleEdit} remove={handleDelete} />;
    }, [data, handleEdit, handleDelete]);

    return (
        <div className={'gateway-container'}>
            <PageHeader ghost={false} onBack={() => window.history.back()} title={'Gateways'}
                subTitle="Gateways List"
                extra={[
                    <GatewayNew />
                ]}>
            </PageHeader>
            {table}
            <GatewayEdit gateway={gatewaySelected} visible={edit} cancelar={setEdit} />
        </div>
    );
}

export default memo(GatewayContainer);