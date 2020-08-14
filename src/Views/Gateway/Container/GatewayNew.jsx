import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import GatewayForm from '../Components/GatewayForm';

function GatewayNew() {

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
            <Modal title="Gateway new" visible={open} footer="" onCancel={handleCancel}>
               <GatewayForm/>
            </Modal>
        </>
    );
}

export default GatewayNew;