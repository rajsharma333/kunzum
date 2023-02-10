import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './config';

function RouteComponent() {
	return (
		<Routes>
			{routes.map((item) => (
				<Route path={item.path} key={item.path} element={item.element}>
					{item.children &&
						item.children.map((child) => (
							<Route
								path={child.path}
								key={item.path}
								element={child.element}
							/>
						))}
				</Route>
			))}
		</Routes>
	);
}
export default RouteComponent;
