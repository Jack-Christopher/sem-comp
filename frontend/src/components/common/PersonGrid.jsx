import { Box, Grid } from "@mui/material";
import Person from "./Person";

export default function PersonGrid({ people }) {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={3} >
        {people.map((person, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Person
              url={person.photoUrl}
              alt={"Foto de " + person.fullname}
              name={person.fullname}
              company={person.company}
              job={person.job}
              description={person.description}
              shortDescription={person.shortDescription}
            />
          </Grid>              
        ))}
      </Grid>
    </Box>
  )
}