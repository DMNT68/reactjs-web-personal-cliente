import React from 'react';
// import Logo from '../../assets/img/png/logo.png';
import Logo from '../../../assets/img/svg/logo.svg';

import { Link } from 'react-router-dom';

// antd
import { Button } from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	PoweroffOutlined
} from '@ant-design/icons';

import './MenuTop.scss';

export default function MenuTop(props) {
	const { menuCollapsed, setMenuCollapsed } = props;

	return (
		<div className="menu-top">
			<div className="menu-top__left">
				<Link to={'/admin'}>
					<img className="menu-top__left-logo" src={Logo} alt="Logo" />
				</Link>
				<Button
					type="link"
					onClick={() => setMenuCollapsed(!menuCollapsed)}
					icon={menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				></Button>
			</div>
			<div className="menu-top__right">
				<Button type="link" icon={<PoweroffOutlined />}></Button>
			</div>
		</div>
	);
}
