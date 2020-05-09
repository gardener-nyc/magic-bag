import React from 'react';
import {Link} from 'gatsby';
import {version} from '../../../package.json';

export default () => (
	<header className="header p1 bg--white bb--black">
		<div className="row">
			<div className="col c4 show--md">
				<Link
					to="http://gardener.nyc"
					className="mono o50">
					← gardener.nyc
				</Link>
			</div>
			<div className="col c4--md">
				<p className="tc">
					<Link
						to="/"
						className="mono">
						magic tricks
						<span className="o50"> {version}</span>
					</Link>
				</p>
			</div>
		</div>
	</header>
);