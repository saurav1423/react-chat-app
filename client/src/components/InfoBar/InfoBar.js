import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
	<>
		<div className="infoBar">
			<div className="leftInnerContainer">
				<img className="onlineIcon" src={onlineIcon} alt="online icon" />
				<h3>{room}</h3>
			</div>
			<div className="rightInnerContainer">
				<a href="/">
					<img src={closeIcon} alt="close icon" />
				</a>
			</div>
		</div>
		<div className="developer">
			<p>
				Developed with{' '}
				<span role="img" aria-label="emoji">
					❤️
				</span>{' '}
				by Saurav
			</p>
		</div>
	</>
);

export default InfoBar;
