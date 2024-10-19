import React, { useState } from 'react';
import { alpha } from '@mui/material/styles';

import {
	Avatar,
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Divider,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Stack,
	Typography
} from '@mui/material';

import startLine from '../../assets/images/starting-line.png';
import steadyStride from '../../assets/images/steady-stride.png';
import peakPerformance from '../../assets/images/peak-performance.png';
import { IconAwardFilled } from '@tabler/icons-react';
import { CustomButton } from '../CustomButton';

const images = {
	startLine: startLine,
	steadyStride,
	peakPerformance
};

const headerStyles = {
	'::after': {
		position: 'absolute',
		content: '""',
		background: 'rgba(255, 255, 255, 0.3)',
		height: '4px',
		width: '80px',
		marginLeft: '-30px',
		left: ' 50%'
	}
};

export const Plans = (props) => {
	return (
		<Box
			id='#Plans'
			sx={{ background: 'linear-gradient(to left, #ffcb5d 0%, #f4ac4e 100%)', p: 3 }}
		>
			<Grid container>
				<Grid item xs={12} sx={headerStyles} mb={2}>
					<Typography variant='h3' sx={{ textAlign: 'center', color: '#fff' }}>
						Your Path To Success{' '}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='body1' sx={{ textAlign: 'center', color: '#424242' }}>
						Every runner is unique, and so are their goals. That's why I offer three
						different levels of coaching plans designed to meet you where you are and
						take you where you want to go.
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Typography variant='body1' sx={{ textAlign: 'center', color: '#fff' }}>
						** Each plan includes an account with Final Surge to schedule and track
						workouts. **
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Divider sx={{ m: 3 }} />
				</Grid>
				<Grid item xs={12}>
					<Grid container justifyContent={'center'} spacing={2}>
						{props.data
							? props?.data?.map((d, i) => (
									<Grid item key={`${d.name}-${i}`} xs={12} md={3.5}>
										<Card
											sx={{
												background: alpha('#FDFCD9', 0.6),
												minHeight: 750,
												borderRadius: '10px',
												boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.1)',
												p: 2
											}}
										>
											<CardMedia
												sx={{ minHeight: 200 }}
												image={images[d.img]}
											/>
											<CardContent>
												<Typography
													gutterBottom
													variant='h5'
													component='div'
													sx={{ textAlign: 'center' }}
												>
													{d.name}
												</Typography>
												<Typography
													gutterBottom
													variant='subtitle'
													component='div'
													sx={{ textAlign: 'center' }}
												>
													{d.price}
												</Typography>
												<List>
													{d.text.map((item, i) => (
														<ListItem key={`${item.id}`}>
															<ListItemText>
																<Stack
																	direction={'row'}
																	alignItems={'center'}
																	spacing={2}
																>
																	<IconAwardFilled color='#424242' />
																	<Typography variant='h6'>
																		{' '}
																		{item.bullet}
																	</Typography>
																</Stack>

																<Typography variant='body1'>
																	{item.description}
																</Typography>
															</ListItemText>
														</ListItem>
													))}
												</List>
											</CardContent>
										</Card>
									</Grid>
							  ))
							: null}
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Divider sx={{ m: 3 }} />
				</Grid>
				<Grid item xs={12}>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'baseline',
							mb: 1
						}}
					>
						<CustomButton
							label={'Get Started!'}
							theme='black'
							onClick={() => window.open('https://forms.gle/xxzqYMPT7kDopR9H6')}
						/>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};
