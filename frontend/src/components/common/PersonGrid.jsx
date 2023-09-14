import { Grid } from "@mui/material";
import Person from "./Person";

export default function PersonGrid({ people }) {
  return (
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }} colSpacing={{ xs: 0.5, md: 1 }} rowSpacing={2}>
      {people.map((person, index) => (
        <Grid item xs={1} sm={2} md={4} key={index}>
          <Person
            url={person.url}
            alt={person.alt}
            name={person.name}
            company={person.company}
            job={person.job}
            description={person.description}
            shortDescription={person.shortDescription}
          />
        </Grid>              
      ))}
    </Grid>
  )
}