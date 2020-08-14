import React, { memo, useState } from 'react';
import { GatewaysCard, DevicesDescription } from '../Components';
import useGateway from '../../Gateway/Hooks/useGateway';
import { Drawer, Skeleton } from 'antd';

function HomeContainer() {

    const { data, error, loading } = useGateway();

    const [gatewaySelected, setGatewaySelected] = useState();
    const [visible, setVisible] = useState(false);

    const showDrawer = (value) => {
        const gat = data.find(d => d.gatewayId === value);
        setGatewaySelected(gat);
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Drawer title="Devices" placement={'right'} width={500} visible={visible} onClose={onClose} key={1}>
                {gatewaySelected ?
                    <DevicesDescription gateway={gatewaySelected} /> : <></>
                }
            </Drawer>
            {
                loading ? <Skeleton /> : <GatewaysCard data={data} error={error} loading={loading} detail={showDrawer} />
            }

        </>
    );
}

export default memo(HomeContainer);