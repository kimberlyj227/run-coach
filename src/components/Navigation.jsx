import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { IconMenu2 } from '@tabler/icons-react';
import { Divider, Link } from '@mui/material';

const pages = ['Features', 'About', 'Plans', 'Contact'];

export const Navigation = (props) => {
	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar
			component='nav'
			position='static'
			sx={{ background: 'linear-gradient(#ffcb5d, #f4ac4e)' }}
		>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography
						className='page-scroll'
						variant='h5'
						noWrap
						flexGrow={1}
						component='a'
						href='#page-top'
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'Montserrat',
							fontWeight: 500,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none'
						}}
					>
						KIMBERLY OWENS || RUN COACH
					</Typography>

					<Box sx={{ display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='menu'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<IconMenu2 />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left'
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left'
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' }
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page}>
									<Link
										className='page-scroll'
										textAlign='center'
										component='a'
										href={`#${page}`}
										underline='none'
										onClick={handleCloseNavMenu}
									>
										{page}
									</Link>
								</MenuItem>
							))}
						</Menu>
					</Box>

					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<>
								<Link
									key={page}
									onClick={handleCloseNavMenu}
									sx={{ my: 2, color: 'white', display: 'block' }}
									className='page-scroll'
									textAlign='center'
									component='a'
									href={`#${page}`}
									underline='none'
								>
									{page}
								</Link>
								<Divider variant='middle' flexItem sx={{ ml: 2 }} />
							</>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
