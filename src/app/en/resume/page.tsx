import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Image from "next/image";

const Resume = () => {
  return (
    <Container maxWidth="md" className="grid sm:grid-cols-1 md:grid-cols-2">
      <Box my={4} className="md:col-span-2">
        <Box className="flex flex-wrap justify-around bg-orange rounded-xl p-2 m-1 ml-0 mb-0">
          <Box>
            <Typography
              className="sm:text-md"
              variant="h3"
              component="h1"
              gutterBottom
            >
              Tariq Louis Jazrawi
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              Sculptor and Painter
            </Typography>
            <Typography variant="h5" component="h3" gutterBottom>
              Member Of Iraqi Plastic Artists
            </Typography>
          </Box>
          <Image
            src={'/pics/tariq.jpg'}
            width={150}
            height={150}
            alt="tariq louis jazwari"
          />
        </Box>
      </Box>
      <Box my={4} className="md:col-span-2">
        <Box>
          <Typography variant="h6" component="p" gutterBottom>
            I love working with my hands, carpentry and construction, I love
            people and my art is my token of love to people. My focus is on the
            human and I give every piece of art a piece of my soul. Art lives in
            my heart and soul and I want to show the world Iraqi antiquities. I
            have a large collection of imitations of Iraqi Antiquities and want
            Iraqi art to become known in our community.
          </Typography>
        </Box>
      </Box>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Education
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Diploma Frim The Fine Arts Institute"
              secondary="Baghdad University ,Sculpture Dept (Iraqi), 1978"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Performing Member"
              secondary="Iraqi Plastic Artists Society, 1978"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Studies in Theology"
              secondary="Baghdad University ,Sculpture Dept (Iraqi), 1980"
            />
          </ListItem>
        </List>
      </Box>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Experience
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Many Artistic Achivements in Popular Fashion Tradition Museum."
              secondary="Iraq, 1968-1970"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Performing Member of The Iraqi Plastic Artists Society."
              secondary="Iraq, 1978"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Participated Exhibition for Iraqi Artists."
              secondary="Iraq (Tammouz fair - Amman), 1993"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Fulfill The Work Monument of Saint Hardini Made of Bronze 170 Long"
              secondary="Beirut, Lebanon, 2002"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Many Artistic Achivements in Popular Fashion Tradition Museum."
              secondary="Iraq, 1968-1970"
            />
          </ListItem>
        </List>
      </Box>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Exhibitions
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary='Tammouz Exhibition: Displayed One Artwork "Resistance" in a 300 artist'
              secondary="Iraq, Baghdad"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Exhibition for Refugee Artists"
              secondary="Central Library Vancouver"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Exhibition for Refugee Artists"
              secondary="SFU"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="AMSSA Annual Meeting"
              secondary="Vancouver"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Exhibition for Refugee Artists by Options"
              secondary="City Hall"
            />
          </ListItem>
        </List>
      </Box>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Skills
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Carpentry" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Sculpture" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Strong Work Ethic" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Time Management" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Construction" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Exhibition Setup" />
          </ListItem>
        </List>
      </Box>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Get in Touch
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Email : tariqlouiss@yahoo.com" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Phone : +1(778)-751-1620" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Facebook : Tariq Louis" />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Resume;
