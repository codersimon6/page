import React from 'react';
import {Layout, Typography, Button, message, Space} from 'antd';
import {QrcodeOutlined, CopyOutlined} from '@ant-design/icons';
import QRCode from 'qrcode.react';
import copy from 'copy-to-clipboard';

const {Content} = Layout;
const {Title, Text} = Typography;

const Coffee = () => {
    // const ethAddress = "0x88888A8b367cCE8C82C451f37511905c3028ed49";

    const contentStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 64px)', // Subtracting Header height
        padding: '20px',
        backgroundColor: '#F0F2F5' // Adding a light grey background color
    };

    const qrCodeStyle = {
        marginTop: '20px',
        marginBottom: '20px',
        padding: '20px',
        backgroundColor: '#fff', // Adding a white background to the QR code
        borderRadius: '8px' // Adding some rounded corners to the QR code background
    };

    const textStyle = {
        marginBottom: '20px' // Adding some space below the text
    };

    const copyAddress = () => {
        copy(ethAddress);
        message.success('地址已复制到剪贴板');
    };

    return (
        <Button
            type="link"
            href="https://twitter.com/fngg29154511"
            target="_blank"
            icon={<TwitterOutlined/>}
            size={"middle"}
        />
    );
}

export default Coffee;
