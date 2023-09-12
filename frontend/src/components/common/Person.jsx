import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

export default function Person(props) {
  return (
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
            <a href="#">Ver más <ReadMoreIcon /></a>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
