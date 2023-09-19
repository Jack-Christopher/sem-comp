import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
}from '@mui/lab/TimelineOppositeContent';

export default function CustomTimeline({data}) {
  const getTime = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  return (
    <Timeline position="right" className="w-full"
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {data.map((item) => (
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">

          {/* {item.startTime}-{item.endTime}  */}
          {getTime(item.startTime)}-{getTime(item.endTime)}
          <div className="flex flex-row justify-center items-center">
            {item.photoUrl && (
              <img src={item.photoUrl} alt="logo" className="w-20 h-20 rounded-full" />
            )}
          </div>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p>{item.description}</p>
            {item.descriptionList && (
              <ul className="list-disc list-inside">
                {item.descriptionList.map(({name, author}, idx) => (
                  <li key={idx}>
                    <span className="font-bold text-gray-500">{name}</span> 
                    <p className="text-sm"> <span className='italic'> por </span> {author}</p>
                  </li>
                ))}
              </ul>
            )}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
