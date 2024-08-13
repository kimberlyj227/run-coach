import {
	Box,
	Dialog,
	DialogTitle,
	Divider,
	Grid,
	IconButton,
	Paper,
	Stack,
	Typography
} from '@mui/material';
import { IconCircleX } from '@tabler/icons-react';
import Goals from './goals';
import Plans from './plans';
const colors = {
	goals: { color: '#00c4cc', title: 'Reach Your Goals!' },
	plans: { color: '#ffa53b', title: 'Pick Your Plan' },
	work: { color: '#6422b8', title: 'Work With Me' },
	default: { color: '', title: '' }
};

const InformationDialog = ({ open, handleClick, type }) => {
	const getEditContent = () => {
		const components = {
			goals: <Goals />,
			plans: <Plans />,
			work: <div>work</div>
		};
		return components[type];
	};
	const { color, title } = colors[type || 'default'];

	return (
		<Box
			sx={{
				height: '100vh'
			}}
		>
			<Grid container>
				<Grid item xs={12}>
					<Paper square elevation={5} sx={{ p: 3, color: '#fff', background: color }}>
						<Stack direction='row' justifyContent='space-between'>
							<Typography variant='h4'>{title.toUpperCase()}</Typography>

							<IconButton sx={{ p: 0 }} size='medium' onClick={() => handleClick('')}>
								<IconCircleX />
							</IconButton>
						</Stack>
					</Paper>
				</Grid>
				<Grid item xs={12} m={4}>
					<Divider />
				</Grid>
				<Grid item>{getEditContent()}</Grid>
			</Grid>
		</Box>
	);
};

export default InformationDialog;
