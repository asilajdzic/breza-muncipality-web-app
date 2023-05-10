import ShortcutCard from '../shortcut-card/shortcut-card.component';

import './shortcuts.styles.scss';

const SHORTCUTS_DATA = [
	{
		id: 0,
		name: 'Ask the Mayor',
		path: '/ask-the-mayor',
	},
	{
		id: 1,
		name: 'Ask the Council',
		path: '/ask-the-council',
	},
	{ id: 2, name: 'E-forms', path: '/e-forms' },
	{
		id: 3,
		name: 'Report Corruption',
		path: '/report-corruption',
	},
];

const Shortcuts = () => {
	return (
		<div className='shortcuts-container'>
			{SHORTCUTS_DATA.map((shortcut) => (
				<ShortcutCard
					key={shortcut.id}
					name={shortcut.name}
					path={shortcut.path}
				/>
			))}
		</div>
	);
};

export default Shortcuts;
