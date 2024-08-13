import { Box } from '@mui/material';
const ContentBox = ({ color, text, handleClick, height, styles }) => {
	return (
		<Box sx={{ background: color, height, ...styles }} onClick={handleClick}>
			{text}
		</Box>
	);
};

export default ContentBox;
