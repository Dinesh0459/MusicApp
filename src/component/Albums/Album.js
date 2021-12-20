import './Album.css'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Album(props) {
  return (
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 8">
          <Item className='img1'>
            <div onClick = {()=> props.setsong("../../music/1.mp3")}>
              <PlayCircleIcon className = 'play1'/>
            </div>
          </Item>
        </Box>
        <Box gridColumn="span 4">
          <Item className='img2'>
          <div onClick = {()=> props.setsong("../../music/2.mp3")}>
              <PlayCircleIcon className = 'play2'/>
            </div>
          </Item>
        </Box>
        <Box gridColumn="span 4">
          <Item className='img3'>
          <div onClick = {()=> props.setsong("../../music/3.mp3")}>
              <PlayCircleIcon className = 'play2'/>
            </div>
          </Item>
        </Box>
        <Box gridColumn="span 8">
          <Item className='img4'>
          <div onClick = {()=> props.setsong("../../music/4.mp3")}>
              <PlayCircleIcon className = 'play4'/>
            </div>
          </Item>
        </Box>
      </Box>
    </Box>
  );
  
}
  