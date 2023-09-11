import { 
  Divider, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Paper, 
  Stack,
} from "@mui/material";
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';

import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import RecordVoiceOverTwoToneIcon from '@mui/icons-material/RecordVoiceOverTwoTone';
import CelebrationTwoToneIcon from '@mui/icons-material/CelebrationTwoTone';

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import Diversity2Icon from '@mui/icons-material/Diversity2';

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
        <CustomItem icon={<PeopleAltTwoToneIcon />}> 250+ Asistentes </CustomItem>
        <CustomItem icon={<CalendarMonthTwoToneIcon/>}> 4 Días </CustomItem>
        <CustomItem icon={<RecordVoiceOverTwoToneIcon/>}> 20+ Charlas </CustomItem>
        <CustomItem icon={<CelebrationTwoToneIcon/>}> 1+ Actividades Sociales </CustomItem>
      </Stack>
    </div>
  )
}

function AboutEvent(props) {
  const numberOfSpeechs = 20;
  const contestBases = "https://drive.google.com/file/d/1Oub3ltxsDXNI9FI5dG5hSX6_QBbYm2Su/view?usp=sharing";

  return (
    <div className="bg-[#F0F6FA] py-5 flex flex-col justify-center px-48">
      <h3 className="text-lg md:text-4xl font-bold text-center mb-6">
        Sobre la Semana
      </h3>
      <p className="text-sm md:text-2xl font-bold text-center mb-6">
        ¡Bienvenidos a una nueva edición de la Semana de la Computación!
      </p>
      <p className="text-sm md:text-lg text-center mb-6">
        Evento, gratuito y abierto, llega el {new Date().getFullYear()} a su {new Date().getFullYear() - 2017}° edición, 
        esta vez de forma presencial y online. Tendremos conferencistas nacionales e internacionales con más de {numberOfSpeechs} ponencias 
        en Computación. Las charlas se transmitirán por las plataformas de 
        <a href="https://www.youtube.com/channel/UCIREVPQo9SrJvhgWOTfVgDA" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"> Youtube </a>
         y 
        <a href="https://www.facebook.com/epcc.unsa" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700"> Facebook </a>
        de la Escuela Profesional de Ciencia de la Computación de la Universidad Nacional de San Agustín de Arequipa. También tendremos
        actividades dirigidas a estudiantes y egresados de computación, como son:
      </p>

      <div className="flex justify-center">
        <List>
          <ListItem>
            <ListItemIcon> <EmojiEventsIcon /> </ListItemIcon>
            <ListItemText 
              primary="Concurso de programación competitiva" 
              secondary={<a href={contestBases} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Bases del concurso</a>}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon> <CastForEducationIcon /> </ListItemIcon>
            <ListItemText primary="Tutoriales (Presencial)" />
          </ListItem>
          <ListItem>
            <ListItemIcon> <Diversity2Icon /> </ListItemIcon>
            <ListItemText primary="Confraternización de la familia EPCC UNSA" />
          </ListItem>
        </List>
      </div>

    </div>
  )
}
      
export { EventData, AboutEvent };