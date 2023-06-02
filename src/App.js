import './App.css';
import SettingsContext from './Components/SettingContext';
import Settings from './Components/Settings';
import Timer from './Components/Timer';
import { useState } from 'react';

function App() {
	// const [showSettings, setSettings] = useState(true);
	const [showSettings, setShowSettings] = useState(false);
	const [workMinutes, setWorkMinutes] = useState(45);
	const [breakMinutes, setBreakMinutes] = useState(15);

	return (
		<main>
			<SettingsContext.Provider
				value={{
					showSettings: showSettings,
					setShowSettings: setShowSettings,
					workMinutes: workMinutes,
					breakMinutes: breakMinutes,
					setWorkMinutes: setWorkMinutes,
					setBreakMinutes: setBreakMinutes,
				}}
			>
				{showSettings ? <Settings /> : <Timer />}
			</SettingsContext.Provider>
		</main>
	);
}

export default App;
