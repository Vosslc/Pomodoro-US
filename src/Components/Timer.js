import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from '../Components/PlayButton';
import PauseButton from '../Components/PauseButton';
import SettingsButton from '../Components/SettingsButton';
import { useContext } from 'react';
import SettingContext from './SettingContext';

const red = '#ef54e4e';
const green = '#4aec8c';

function Timer() {
	const settingsInfo = useContext(SettingContext);
	return (
		<div>
			<CircularProgressbar
				value={60}
				text={'60%'}
				styles={buildStyles({
					// Rotation of path and trail, in number of turns (0-1)
					rotation: 0.25,

					// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
					strokeLinecap: 'butt',

					// Text size
					textSize: '20px',

					// How long animation takes to go from one percentage to another, in seconds!
					pathTransitionDuration: 0.5,

					// Can specify path transition in more detail, or remove it entirely
					// pathTransition: 'none',

					// Colors
					// pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
					textColor: '#fff',
					trailColor: '#d6d6d6',
					pathColor: red,
					backgroundColor: '#3ered98c7',
				})}
			/>
			<div style={{ marginTop: '20px' }}>
				{' '}
				<PlayButton />
				<PauseButton />
			</div>
			<div style={{ marginTop: '20px' }}>
				<SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
			</div>
		</div>
	);
}

export default Timer;
