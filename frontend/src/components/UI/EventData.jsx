import { 
  Divider, 
  Paper, 
  Stack,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import RecordVoiceOverTwoToneIcon from '@mui/icons-material/RecordVoiceOverTwoTone';
import CelebrationTwoToneIcon from '@mui/icons-material/CelebrationTwoTone';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  paddingLeft: '2rem',
  paddingRight: '2rem',
  fontWeight: 'bold',
  fontSize: '1.1rem',
}));

const CustomItem = (props) => {
  return (
    <>
      <Item elevation={24}>
        <span className="mr-2">
          {props.icon}
        </span>
        {props.children}
      </Item>
    </>
  )
}

function EventData(props) {

  return (
    <div className="bg-[#003C84] py-5 flex justify-center">
      <Stack 
        direction={{ xs: 'column', md: 'row' }}
        spacing={3}
        divider={
          <Divider 
            orientation={{ xs: 'vertical', md: 'horizontal' }} 
            className="bg-white" 
            flexItem 
          />}
      >
        {/* add icon */}
        <CustomItem icon={<PeopleAltTwoToneIcon />}> 250+ Asistentes </CustomItem>
        <CustomItem icon={<CalendarMonthTwoToneIcon/>}> 4 Días </CustomItem>
        <CustomItem icon={<RecordVoiceOverTwoToneIcon/>}> 20+ Charlas </CustomItem>
        <CustomItem icon={<CelebrationTwoToneIcon/>}> 1+ Actividades Sociales </CustomItem>
      </Stack>
    </div>
  )
}
      
export { EventData };