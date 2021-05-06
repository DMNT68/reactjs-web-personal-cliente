import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import './LayoutBasic.scss';

export default function LayoutBasic(props) {
	const { routes } = props;
	const { Header, Content, Footer } = Layout;
	return (
		<Layout>
			<h2>Menu Sidebar</h2>
			<Layout>
				<Header>Header</Header>
				<Content>
					<LoadRoutes routes={routes} />
				</Content>
				<Footer>Andrés Salgado 2020</Footer>
			</Layout>
		</Layout>
	);
}

function LoadRoutes(props) {
	const { routes } = props;

	return (
		<Switch>
			{routes.map((route, index) => (
				<Route
					key={index}
					path={route.path}
					exact={route.exact}
					component={route.component}
				/>
			))}
		</Switch>
	);
}
