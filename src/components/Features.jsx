import React from 'react';

import { IconStretching, IconPhoneCall, IconCalendarWeek, IconStairs } from '@tabler/icons-react';
import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';

const icons = {
	IconStretching: <IconStretching size={50} />,
	IconPhoneCall: <IconPhoneCall size={50} />,
	IconCalendarWeek: <IconCalendarWeek size={50} />,
	IconStairs: <IconStairs size={50} />
};

const avatarStyles = {
	mb: '20px',
	transition: 'all 0.5s',
	color: '#fff',
	width: '100px',
	height: '100px',
	background: 'linear-gradient(to left, #ffcb5d 0%, #f4ac4e 100%)',
	boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.05)',
	left: '35%'
};

const headerStyles = {
	'::after': {
		position: 'absolute',
		content: '""',
		background: 'linear-gradient(to right, #f4ac4e 0%, #ffcb5d 100%)',
		height: '4px',
		width: '60px',
		marginLeft: '-30px',
		left: ' 50%'
	}
};

export const Features = (props) => {
	return (
		<Box id='Features' sx={{ background: '#f6f6f6', p: 3 }}>
			<Grid container spacing={2} justifyContent='center' alignItems='center'>
				<Grid item xs={12} sx={headerStyles} mb={5}>
					<Typography variant='h3' sx={{ textAlign: 'center' }}>
						Features{' '}
					</Typography>
				</Grid>

				{props.data?.map((d, i) => {
					const icon = icons[d.icon];

					return (
						<Grid item xs={6} md={3} key={`${d.title}-${i}`}>
							<Stack
								direction={'column'}
								justifyContent={'center'}
								sx={{ textAlign: 'center' }}
							>
								<Avatar sx={avatarStyles}>{icon}</Avatar>
								<Typography
									variant='h6'
									sx={{ fontWeight: 700, fontFamily: 'Montserrat' }}
								>
									{d.title}
								</Typography>
								<Typography variant='body1' sx={{ fontFamily: 'Montserrat' }}>
									{d.text}
								</Typography>
							</Stack>
						</Grid>
					);
				})}
			</Grid>
		</Box>
	);
};
