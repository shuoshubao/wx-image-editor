import React, { Component } from 'react';
import vConsole from 'vconsole';
import { Button, Card, Modal } from 'antd';
import { setStyle, setAttrs } from '@nbfe/tools';
import { RotateLeft, Close, Confirm } from './svgIcons';
import ImageEditor from './ImageEditor';
import './app.scss';
import AvatarImage from './demo.jpeg';

new vConsole();

const avatar = AvatarImage;
// const avatar = 'http://10.33.78.86:3000/11.png';
// const avatar = 'http://image1.ljcdn.com/usercenter/images/uc_ehr_avatar/03ae1732-5f81-45b9-aaa7-9192b14308f3.jpg.1131x1600.jpg';
// const avatar = 'https://img-blog.csdn.net/20180123153116388?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdTAxMDM5NDAxNQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            previewImageUrl: avatar,
            visibileModal: false
        };
        this.domEvents = this.getDomEvents();
        this.customEvents = this.getCustomEvents();
    }

    getDomEvents() {
        return {
            handleChangeImage: () => {
                const { customEvents } = this;
                const eInput = document.createElement('input');
                setStyle(eInput, { visibility: 'hidden' });
                setAttrs(eInput, {
                    type: 'file',
                    name: 'shuoshubao-test',
                    accept: '.png, .jpg, .jpeg'
                });
                document.body.appendChild(eInput);
                eInput.addEventListener('change', customEvents.changeImageListener);
                eInput.click();
                document.body.removeChild(eInput);
            }
        };
    }
    getCustomEvents() {
        return {
            changeImageListener: e => {
                const [file] = e.target.files;
                const { name, size, type } = file;
                const URL = window.URL || window.webkitURL;
                const imgURL = URL.createObjectURL(file);
                this.setState(
                    {
                        previewImageUrl: imgURL
                    },
                    () => {
                        this.customEvents.showModal();
                    }
                );
            },
            showModal: () => {
                this.setState({
                    visibileModal: true
                });
            },
            handleOk: data => {
                this.setState({
                    visibileModal: false
                });
                this.setState({
                    previewImageUrl: data
                });
            },
            handleCancel: () => {
                this.setState({
                    visibileModal: false
                });
            }
        };
    }

    render() {
        const { state, domEvents, customEvents } = this;
        const { previewImageUrl, visibileModal } = state;
        return (
            <div className="app-container">
                <Card title="Card title" bordered={false} style={{ width: 300 }}>
                    <Button
                        type="primary"
                        onClick={() => {
                            domEvents.handleChangeImage();
                        }}
                    >
                        更换照片
                    </Button>
                    <div onClick={customEvents.showModal}>
                        <img src={previewImageUrl} className="preview-image" />
                    </div>
                </Card>
                {visibileModal && (
                    <ImageEditor
                        value={previewImageUrl}
                        width={300}
                        height={300}
                        onOk={customEvents.handleOk}
                        onCancel={customEvents.handleCancel}
                    />
                )}
            </div>
        );
    }
}
