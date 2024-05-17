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
    <div
      className="grid sm:grid-cols-1 md:grid-cols-2 text-right p-5"
    >
      <div className="md:col-span-2">
        <div className="flex flex-wrap justify-around bg-orange rounded-xl p-2 m-1 ml-0 mb-0">
          <div>
            <h1>
              Tariq Louis Jazrawi
            </h1>
            <h2 style={{textAlign:'left'}}>
              Sculptor and Painter
            </h2>
            <h3 style={{textAlign:'left'}}>
              Member Of Iraqi Plastic Artists
            </h3>
          </div>
          <Image
            src={'/pics/tariq.jpg'}
            width={150}
            height={150}
            alt="tariq louis jazwari"
            className="p-2"
          />
        </div>
      </div>
      <div className="md:col-span-2">
        <div>
          <p className="p-3 text-justify">
            I love working with my hands, carpentry and construction, I love
            people and my art is my token of love to people. My focus is on the
            human and I give every piece of art a piece of my soul. Art lives in
            my heart and soul and I want to show the world Iraqi antiquities. I
            have a large collection of imitations of Iraqi Antiquities and want
            Iraqi art to become known in our community.
          </p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-2xl" style={{textAlign:'left'}}>
          Education
        </h3>
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
      </div>
      <div className="mt-4">
        <h3 className="text-2xl" style={{textAlign:'left'}}>
          Experience
        </h3>
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
      </div>
      <div className="mt-4">
        <h3 className="text-2xl" style={{textAlign:'left'}}>
          Exhibitions
        </h3>
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
      </div>
      <div className="mt-4">
        <h3 className="text-2xl" style={{textAlign:'left'}}>
          Skills
        </h3>
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
      </div>
      <div className="mt-4">
        <h3 className="text-2xl" style={{textAlign:'left'}}>
          Get in Touch
        </h3>
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
      </div>
    </div>
  );
};

export default Resume;
