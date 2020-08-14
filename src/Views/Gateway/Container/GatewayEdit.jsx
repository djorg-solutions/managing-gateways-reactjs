import React from 'react';
import { Modal } from 'antd';
import GatewayFormEdit from '../Components/GatewayFormEdit';

function GatewayEdit({visible, gateway, cancelar}) {

    const handleCancel = () => {
        cancelar(false);
    };

    return (   
        <Modal title="Gateway edit" visible={visible} footer="" onCancel={handleCancel}>
           <GatewayFormEdit gateway={gateway}/>
        </Modal>
    );
}

export default GatewayEdit;