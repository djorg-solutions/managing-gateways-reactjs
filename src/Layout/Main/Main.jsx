import React from 'react';
import { Layout } from 'antd';
import TopBar from './Components/TopBar';

const { Header, Content } = Layout;

function Main(props) {
    return (
        <Layout>
            <Header>
                <TopBar/>
            </Header>
            
            <Content>{props.children}</Content>
        </Layout>
    );
}

export default Main;