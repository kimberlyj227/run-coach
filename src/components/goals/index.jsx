import { Typography, Grid, Box } from '@mui/material';

import goals from '../../assets/images/goals.png';

const Goals = () => {
	return (
		<Box sx={{ display: 'flex' }}>
			<Grid container p={3} spacing={3} alignItems='center' justifyContent='center'>
				<Grid item mt={2} mb={2}>
					<img height={300} src={goals} alt={'goals image'} loading='lazy' />
				</Grid>
				<Grid item xs={12}>
					<Typography variant='body1' sx={{ fontFamily: 'Montserrat', fontSize: '20px' }}>
						Are you ready to achieve your running goals?
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='body1' sx={{ fontFamily: 'Montserrat', fontSize: '20px' }}>
						Whether you're aiming for your first 5K, a personal best in a marathon, or
						simply looking to enjoy running more, I'm here to help you every step of the
						way. With over 20 years of coaching experience and a passion for helping
						athletes of all levels, I'll provide you with personalized guidance to help
						you reach your potential and have fun doing it.
					</Typography>
				</Grid>
				<Grid item>
					<Typography variant='body1' sx={{ fontFamily: 'Montserrat', fontSize: '20px' }}>
						My personalized coaching plans are designed to fit your unique needs,
						ensuring you stay motivated, injury-free, and on track to reach your full
						potential.
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Goals;
