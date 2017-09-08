import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'

import SearchInput from '../SearchInput'

import './style.less'

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="topbarConRobot" className="search-header">
                <div className="search-old">
                    <a href="">
                        <span className="btn-icon search-old-back"></span>
                        <span className="search-old-text">切到旧版首页</span>
                    </a>
                </div>
                <div className="search-item">
                    <div className="search-login-register">
                        <span className="search-login">登录</span>
                        <span className="search-register">注册</span>
                    </div>
                    <div className="more-menu-link">
                        <div className="more-menu-show">
                            <a href="">
                                <span className="btn-icon more-menu-png"></span>
                                <span className="btn-word">更多产品</span>
                            </a>
                        </div>
                        <div className="more-menu-list">
                            <span className="ico-san"></span>
                            <a href="">
                                <div className="index">
                                    <span className="btn-icon znxg-link"></span>
                                    <span className="znxg-text">智能选股</span>
                                </div>
                            </a>
                            <a href="">
                                <div className="index">
                                    <span className="btn-icon znxg-link"></span>
                                    <span className="znxg-text">智能选股</span>
                                </div>
                            </a>
                            <a href="">
                                <div className="index">
                                    <span className="btn-icon znxg-link"></span>
                                    <span className="znxg-text">智能选股</span>
                                </div>
                            </a>
                            <a href="">
                                <div className="index">
                                    <span className="btn-icon znxg-link"></span>
                                    <span className="znxg-text">智能选股</span>
                                </div>
                            </a>
                            <a href="">
                                <div className="index">
                                    <span className="btn-icon znxg-link"></span>
                                    <span className="znxg-text">智能选股</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value))
    }
}

export default HomeHeader