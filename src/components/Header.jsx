import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import cover from '../assets/images/jumbo.png';

export const Header = (props) => {
	return (
		<Box
			id='#header'
			sx={{
				backgroundImage: `url(${cover})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				height: '500px',
				display: 'flex',
				justifyItems: 'center',
				alignItems: 'center'
			}}
		>
			<Grid container justifyContent={'center'} alignItems={'center'} sx={{ ml: 3 }}>
				<Grid item xs={12}>
					<Typography
						variant='h1'
						sx={{ fontFamily: 'Comforter Brush', color: '#fff', textAlign: 'center' }}
					>
						{props.data ? props.data.title : 'Loading'}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography
						variant='body1'
						sx={{
							fontFamily: 'Montserrat',
							color: '#fff',
							fontWeight: 600,
							textAlign: 'center'
						}}
					>
						{props.data ? props.data.paragraph : 'Loading'}
					</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};
