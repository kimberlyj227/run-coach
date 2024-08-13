import { Button } from '@mui/material';

export const CustomButton = ({ onClick, label, theme = 'yellow' }) => {
	return (
		<Button
			sx={{
				margin: '30px 0',
				background: 'transparent',
				border: '1px solid #fff',
				textTransform: 'uppercase',
				color: '#fff',
				backgroundColor: '#ffcb5d',
				backgroundImage:
					theme === 'yellow'
						? 'linear-gradient(to left, #ffcb5d 0%, #f4ac4e 100%)'
						: 'linear-gradient(to right, #0097a7 0%, #4dd0e1 100%)',
				padding: '14px 34px',
				letterSpacing: '1px',
				margin: 0,
				fontSize: '15px',
				fontWeight: 500,
				borderRadius: '25px',
				transition: 'all 0.5s linear',
				border: 0,
				'&:hover': {
					background: theme === 'yellow' ? '#f4ac4e' : '#0097a7',
					color: '#fff'
				}
			}}
			onClick={onClick}
		>
			{label}
		</Button>
	);
};
