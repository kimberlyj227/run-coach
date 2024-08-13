import { Grid } from '@mui/material';

import { naviagtionBlocks } from '../data/navigationBlocks';
import ContentBox from './Boxes';

const NavBoxes = ({ handleClick }) => {
	return (
		<Grid container>
			{naviagtionBlocks.map(({ text, color, id, cursor }) => (
				<Grid item xs={12} md={6} key={id}>
					<ContentBox
						handleClick={() => handleClick(id)}
						color={color}
						height={'33.33vh'}
						text={text}
						styles={{
							fontWeight: 500,
							color: '#fff',
							justifyContent: 'center',
							alignItems: 'center',
							display: 'flex',
							fontSize: '24px',
							fontFamily: 'Montserrat',
							cursor: cursor
						}}
					/>
				</Grid>
			))}
		</Grid>
	);
};

export default NavBoxes;
