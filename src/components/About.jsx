import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import kowens from '../assets/images/kowens2.png';
import { IconCheck } from '@tabler/icons-react';

const headerStyles = {
	'::after': {
		position: 'absolute',
		content: '""',
		background: 'linear-gradient(to left, #f4ac4e 0%, #ffcb5d 100%)',
		height: '4px',
		width: '60px',
		marginLeft: '0px',
		left: ' 50%'
	}
};

export const About = (props) => {
	return (
		<Box id='About' sx={{ p: 3 }}>
			<Grid container>
				<Grid
					item
					xs={12}
					md={6}
					display={'flex'}
					justifyContent={'center'}
					alignItems={'center'}
				>
					{/* <Box display={'flex'} justifyContent={'center'} alignItems={'center'}> */}
					<img src={kowens} height={500} />
					{/* </Box> */}
				</Grid>
				<Grid item xs={12} md={6}>
					<Grid container spacing={3}>
						<Grid item xs={12} sx={headerStyles}>
							<Typography variant='h4'>About</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant='body1'>
								{props.data ? props.data.paragraph : 'loading...'}
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant='body1'>
								{props.data ? props.data.paragraph2 : 'loading...'}
							</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography variant='h6'>Why Work With Me?</Typography>
						</Grid>
						<Grid item xs={12} md={6}>
							<List>
								{props.data
									? props.data.Why.map((d, i) => (
											<ListItem key={`${d}-${i}`}>
												<ListItemIcon>
													<IconCheck color='#00c4cc' />
												</ListItemIcon>
												<ListItemText>{d}</ListItemText>
											</ListItem>
									  ))
									: 'loading'}
							</List>
						</Grid>
						<Grid item xs={12} md={6}>
							<List>
								{props.data
									? props.data.Why2.map((d, i) => (
											<ListItem key={`${d}-${i}`}>
												<ListItemIcon>
													<IconCheck color='#00c4cc' />
												</ListItemIcon>
												<ListItemText>{d}</ListItemText>
											</ListItem>
									  ))
									: 'loading'}
							</List>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};
