import React, { Component } from 'react';
import PropTypes from 'prop-types';
import html2canvas from 'html2canvas';
import { Button, Card, Modal } from 'antd';
import { setStyle, setAttrs } from '@nbfe/tools';
import AlloyFinger from 'alloyfinger';
import './transform';
import { RotateLeft, Close, Confirm } from './svgIcons';

const getInitImageContainerStyle = () => {
    return {
        rotate: 0, // 旋转角度
        scale: 1, // 缩放比
        translateX: 0,
        translateY: 0
    };
};

export default class ImageEditor extends React.Component {
    static propTypes = {
        value: PropTypes.string.isRequired, // 原始图片
        width: PropTypes.number, // 裁剪区固定: 宽度
        height: PropTypes.number // 裁剪区固定: 高度
    };

    static defaultProps = {
        width: 100,
        height: 100
    };

    constructor(props) {
        super(props);
        this.state = {
            imageUrl: ''
        };
        this.imageRef = React.createRef();
        this.containerRef = React.createRef();
        this.captureContainerRef = React.createRef();
        this.imageInstance = null;
        this.domEvents = this.getDomEvents();
        this.customEvents = this.getCustomEvents();
    }

    componentDidMount() {
        this.setState({
            imageUrl: this.props.value
        });

        const element = this.imageRef.current;

        Transform(element);

        let initScale = 1;

        new AlloyFinger(element, {
            // touchStart: () => {},
            // touchMove: () => {},
            // touchEnd: () => {},
            // touchCancel: () => {},
            // 初始化
            multipointStart: () => {
                initScale = element.scaleX;
            },
            // multipointEnd: () => {},
            // tap: () => {},
            // doubleTap: () => {},
            // longTap: () => {},
            // singleTap: () => {},
            // 旋转
            rotate: e => {
                // element.rotateZ += e.angle;
            },
            // 缩放
            pinch: e => {
                element.scaleX = initScale * e.zoom;
                element.scaleY = initScale * e.zoom;
            },
            // 位移
            pressMove: e => {
                element.translateX += e.deltaX;
                element.translateY += e.deltaY;
                e.preventDefault();
            },
            swipe: e => {}
        });
        this.imageInstance = element;
    }

    getDomEvents() {
        return {};
    }

    getCustomEvents() {
        return {
            // 确认
            handleOk: async() => {
                const data = await this.customEvents.getCaptureData();
                if (this.props.onOk) {
                    this.props.onOk(data);
                }
            },
            // 取消
            handleCancel: () => {
                if (this.props.onCancel) {
                    this.props.onCancel();
                }
            },
            // 向左旋转90°
            handleRotateLeft: () => {
                this.imageInstance.rotateZ -= 90;
            },
            // 重置
            handleReset: () => {
                this.imageInstance.rotateZ = 0;
                this.imageInstance.translateX = 0;
                this.imageInstance.translateY = 0;
            },
            // 裁剪区的样式
            getCutContainerStyle: () => {
                const { props } = this;
                const { width, height } = props;
                return { width, height };
            },
            getCaptureData: async () => {
                const elementContainer = this.containerRef.current;
                const elementCaptureContainer = this.captureContainerRef.current;
                const { x, y, width, height } = elementCaptureContainer.getClientRects()[0];
                elementContainer.classList.add('is-capturing');
                const canvas = await html2canvas(elementContainer, { x, y, width, height });
                const canvasDataUrl = canvas.toDataURL('image/jepg');
                elementContainer.classList.remove('is-capturing');
                return canvasDataUrl;
            }
        };
    }

    render() {
        const { props, state, domEvents, customEvents } = this;
        const { imageUrl } = state;
        const { width, height } = props;
        return (
            <div className="modal-image-editor">
                <div className="mask"></div>
                <div className="wrap" ref={this.containerRef}>
                    <div className="content">
                        <div className="image-handler">
                            <img ref={this.imageRef} src={imageUrl} />
                        </div>
                        <div
                            ref={this.captureContainerRef}
                            className="container-cut"
                            style={customEvents.getCutContainerStyle()}
                        >
                            <div className="dashed dashed-h"></div>
                            <div className="dashed dashed-v"></div>
                        </div>
                    </div>
                    <div className="footer">
                        <span className="icon icon-close" onClick={customEvents.handleCancel}>
                            <Close />
                        </span>
                        <span className="text-reset" onClick={customEvents.handleReset}>
                            还原
                        </span>
                        <span className="icon icon-confirm" onClick={customEvents.handleOk}>
                            <Confirm />
                        </span>
                        <span className="icon icon-rotate" onClick={customEvents.handleRotateLeft}>
                            <RotateLeft />
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
