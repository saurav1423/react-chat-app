import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
	<div className="textContainer">
		<div>
			<h2>
				Realtime Chat Application{' '}
				<span role="img" aria-label="emoji">
					💬
				</span>
			</h2>
			<h3>
				Use Enter to send message{' '}
				<span role="img" aria-label="emoji">
					❤️
				</span>
			</h3>
			<h3>
				U can also send emoji here! <br />
				For
				<span role="img" aria-label="emoji">
					😉
				</span>
				use ;)
			</h3>
			<br />
			<a
				href="https://www.webfx.com/tools/emoji-cheat-sheet/"
				target="_blank"
				style={{
					color: '	#FFFF00',
					textDecoration: 'none',
				}}
			>
				More Emoji here
			</a>
		</div>
		{users ? (
			<div>
				<h2>People currently chatting:</h2>
				<div className="activeContainer">
					<h3>
						{users.map(({ name }) => (
							<div key={name} className="activeItem">
								{name}
								<img alt="Online Icon" src={onlineIcon} />
							</div>
						))}
					</h3>
				</div>
			</div>
		) : null}
	</div>
);

export default TextContainer;
