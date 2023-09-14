import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Modal } from '@mui/material';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

export default function Person(props) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <Card sx={{ maxWidth: 240 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height={32}
            width={32}
            image={props.url}
            alt={props.alt}
          />
          <CardContent className="bg-[#F0F6FA]">
            <Typography gutterBottom variant="h6" component="div">
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.shortDescription}
            </Typography>
            {/* add icon */}
            <Typography variant="body2" color="#A0E200">
              <button className="bg-[#A0E200] hover:bg-[#7CBF00] text-white font-bold mt-2 py-2 px-4 rounded-full"
                onClick={() => setIsModalOpen(true)}
              >
                Ver más <ReadMoreIcon />
              </button>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* centered */}
        <Box sx={{ 
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
        >
          <div className='bg-[#F0F6FA]'>
            <div className='flex flex-row items-center'>
              <img src={props.url} alt={props.alt} className='w-32 h-32' />
              <div className='flex flex-col justify-between p-4'>
                <Typography id="modal-modal-title" variant="h5" component="h2">
                  {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <p>{props.company}</p>
                  <p>{props.job}</p>
                </Typography>
              </div>
            </div>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.description}
          </Typography>
          <div className='flex flex-row justify-end'>
            <button className='bg-[#A0E200] hover:bg-[#7CBF00] text-white font-bold mt-2 py-2 px-4 rounded-full'
              onClick={() => setIsModalOpen(false)}
            >
              Cerrar
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
