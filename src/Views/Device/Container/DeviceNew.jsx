import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import DeviceForm from '../Components/DeviceForm';

function DeviceNew() {

    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true)
    };
   
    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <>
        <Button key="1" type="primary" onClick={showModal}>{'New'}</Button>
        <Modal title="Device new" visible={open} footer="" onCancel={handleCancel}>
           <DeviceForm/>
        </Modal>
    </>
    );
}

export default DeviceNew;