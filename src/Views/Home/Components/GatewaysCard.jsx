import React, { memo } from 'react';
import { Card, Row, Col, Button } from 'antd';
import { PartitionOutlined } from '@ant-design/icons';
import './index.less';

function GatewaysCard({ data, detail }) {

    return (
        <Row>
            {
                data.map(item =>
                    <Col key={item.gatewayId} className={'card-cursor'}>
                        <div key={item.gatewayId} className="site-card-border-less-wrapper">
                            <Card key={item.gatewayId} title={'Gateway: ' + item.gatewaySerialNumber} bordered={false} style={{ width: 300 }}>
                                <p>{item.gatewayIpAddress}</p>
                                <p>{item.gatewayHumanReadable}</p>
                                <Button type="primary" shape="round" icon={<PartitionOutlined />} size={'default'} onClick={() => detail(item.gatewayId)}>
                                    {'Devices'}
                                </Button>
                            </Card>
                        </div>
                    </Col>
                )
            }
        </Row>
    );
}

export default memo(GatewaysCard);