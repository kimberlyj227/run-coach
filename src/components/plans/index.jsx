import { DialogContent, Grid, Typography } from '@mui/material';
import SubCard from '../SubCard';

const Plans = ({}) => {
	return (
		<DialogContent>
			<Grid container spacing={3} justifyContent={'space-between'}>
				<Grid item xs={12} md={4}>
					<SubCard
						sx={{ borderRadius: '12px', backgroundColor: '#ffd93b', height: '75vh' }}
						contentSX={{ backgroundColor: '#ff738e' }}
						title={
							<Typography variant='h3' sx={{ fontFamily: 'Montserrat' }}>
								Starting Line
							</Typography>
						}
					>
						hi
					</SubCard>
				</Grid>
				<Grid item xs={12} md={4}>
					<SubCard
						sx={{ borderRadius: '12px', backgroundColor: '#00c4cc', height: '75vh' }}
						title='Steady Stride'
					>
						hi
					</SubCard>
				</Grid>
				<Grid item xs={12} md={4}>
					<SubCard
						sx={{ borderRadius: '12px', backgroundColor: '#a54aff', height: '75vh' }}
						title='Peak Performance'
					>
						hi
					</SubCard>
				</Grid>
			</Grid>
		</DialogContent>
	);
};

export default Plans;
