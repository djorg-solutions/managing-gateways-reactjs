import React from 'react';
import { Modal } from 'antd';
import DeviceFormEdit from '../Components/DeviceFormEdit';

function DeviceEdit({visible, device, cancelar}) {

    const handleCancel = () => {
        cancelar(false);
    };

    return (
        <Modal title="Gateway edit" visible={visible} footer="" onCancel={handleCancel}>
           <DeviceFormEdit device={device}/>
        </Modal>
    );
}

export default DeviceEdit;