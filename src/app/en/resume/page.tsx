import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Resume = () => {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          John Doe
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Frontend Developer
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email: johndoe@example.com
        </Typography>

        <Box mt={4}>
          <Typography variant="h4" gutterBottom>
            Education
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="Bachelor of Science in Computer Science"
                secondary="University of Example, 2015-2019"
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
                primary="Frontend Developer"
                secondary="ABC Company, 2019-Present"
              />
              <List>
                <ListItem>
                  <ListItemText primary="Developed responsive web applications using React.js" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Collaborated with design and backend teams to implement UI/UX designs" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Optimized application performance for better user experience" />
                </ListItem>
              </List>
            </ListItem>
          </List>
        </Box>

        <Box mt={4}>
          <Typography variant="h4" gutterBottom>
            Skills
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="HTML5/CSS3" />
            </ListItem>
            <ListItem>
              <ListItemText primary="JavaScript (ES6+)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="React.js" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Responsive Web Design" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Version Control (Git)" />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Container>
  );
};

export default Resume;
