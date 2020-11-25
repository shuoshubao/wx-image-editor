import React from 'react';
import PropTypes from 'prop-types';
import html2canvas from 'html2canvas';
import { classNames } from '@nbfe/tools';
import AlloyFinger from 'alloyfinger';
import { pick } from 'lodash';
import { RotateLeft, Close, Confirm } from '../svgIcons';
import Transform from './transform';
import style from './index.scss';

// setState => promise
export const setAsyncState = (context, newState) => {
    return new Promise(resolve => {
        context.setState(newState, resolve);
    });
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
            imageUrl: '',
            isCapturing: false // 正在截图
        };
        this.imageRef = React.createRef();
        this.containerRef = React.createRef();
        this.captureContainerRef = React.createRef();
        this.imageInstance = null;
        this.domEvents = this.getDomEvents();
        this.customEvents = this.getCustomEvents();
    }

    async componentDidMount() {
        const { value } = this.props;
        const { url } = await this.customEvents.getImgaeInfo(value);
        this.setState(
            {
                imageUrl: url
            },
            () => {
                this.customEvents.initAlloyFingerImage();
            }
        );
    }

    getDomEvents() {
        return {};
    }

    getCustomEvents() {
        return {
            // 获取图片的信息 url, width, height
            getImgaeInfo: url => {
                if (url.startsWith('data:image')) {
                    const { width, height } = this.props;
                    return { url, width, height };
                }
                return new Promise(reslove => {
                    const img = new Image();
                    img.setAttribute('crossorigin', 'anonymous');
                    img.src = url;
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        const { width, height } = img;
                        canvas.width = width;
                        canvas.height = height;
                        canvas.getContext('2d').drawImage(img, 0, 0, width, height);
                        const dataURL = canvas.toDataURL('image/jpeg');
                        reslove({
                            url: dataURL,
                            width,
                            height
                        });
                    };
                });
            },
            // 初始化图片
            initAlloyFingerImage: () => {
                const element = this.imageRef.current;

                Transform(element);

                let initScale = 1;

                // eslint-disable-next-line no-new
                new AlloyFinger(element, {
                    // 初始化
                    multipointStart: () => {
                        initScale = element.scaleX;
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
                    }
                });
                this.imageInstance = element;
            },
            // 确认
            handleOk: async () => {
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
            // 截图
            getCaptureData: async () => {
                document.scrollingElement.scrollTop = 0;
                const elementContainer = this.containerRef.current;
                const elementCaptureContainer = this.captureContainerRef.current;
                const [rect] = elementCaptureContainer.getClientRects();
                await setAsyncState(this, { isCapturing: true });
                const canvas = await html2canvas(elementContainer, {
                    useCORS: true,
                    logging: false,
                    scale: 1,
                    allowTaint: false,
                    foreignObjectRendering: false,
                    ...pick(rect, ['x', 'y', 'width', 'height'])
                });
                const canvasDataUrl = canvas.toDataURL('image/jpg');
                this.setState({ isCapturing: false });
                return canvasDataUrl;
            }
        };
    }

    render() {
        const { state, customEvents } = this;
        const { isCapturing, imageUrl } = state;
        return (
            <div className="modal-image-editor">
                <div className="mask" />
                <div className={classNames('wrap', { 'is-capturing': isCapturing })} ref={this.containerRef}>
                    <div className="content">
                        <div className="image-handler">
                            <div className="image-handler-wrap">
                                <img ref={this.imageRef} src={imageUrl} alt="" />
                            </div>
                        </div>
                        <div
                            ref={this.captureContainerRef}
                            className="container-cut"
                            style={customEvents.getCutContainerStyle()}
                        >
                            <div className="dashed dashed-h" />
                            <div className="dashed dashed-v" />
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
