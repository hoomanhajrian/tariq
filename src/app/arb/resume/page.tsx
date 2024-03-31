import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import tariq from "@/pics/tariq.jpg";

const Resume = () => {
  return (
    <Container
      maxWidth="md"
      className="grid sm:grid-cols-1 md:grid-cols-2 text-right"
    >
      <Box my={4} className="md:col-span-2">
        <Box className="flex flex-wrap justify-around bg-orange rounded-xl p-2 m-1 ml-0 mb-0">
          <Box>
            <Typography variant="h3" component="h1" gutterBottom>
              طارق لويس جزراوی
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              النحات والرسام
            </Typography>
            <Typography variant="h5" component="h3" gutterBottom>
              عضو جمعية الفنانين التشكيليين العراقيين
            </Typography>
          </Box>
          <Image
            src={tariq}
            width={100}
            height={150}
            alt="tariq louis jazwari"
          />
        </Box>
      </Box>
      <Box my={4} className="md:col-span-2">
        <Box>
          <Typography variant="h6" component="p" gutterBottom>
            أحب العمل بيدي، النجارة والبناء، أحب الناس وفني هو رمز حبي للناس.
            ينصب تركيزي على الإنسان وأعطي كل قطعة فنية قطعة من روحي. الفن يعيش
            في قلبي وروحي وأريد أن أظهر للعالم الآثار العراقية. لدي مجموعة كبيرة
            من الآثار العراقية المقلدة وأريد أن يصبح الفن العراقي معروفاً في
            مجتمعنا.
          </Typography>
        </Box>
      </Box>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          تعليم
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              sx={{ textAlign: "right" }}
              primary="دبلومة معهد الفنون الجميلة"
              secondary="جامعة بغداد – قسم النحت (العراقي) 1978"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ textAlign: "right" }}
              primary="عضو تنفيذي"
              secondary="جمعية الفنانين التشكيليين العراقيين 1978"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ textAlign: "right" }}
              primary="دراسات في اللاهوت"
              secondary="جامعة بغداد – قسم النحت (العراقية) 1980"
            />
          </ListItem>
        </List>
      </Box>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          خبرة
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              sx={{ textAlign: "right" }}
              primary="العديد من الإنجازات الفنية في متحف تقاليد الأزياء الشعبية."
              secondary="العراق، 1968-1970"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ textAlign: "right" }}
              primary="عضو تنفيذي في جمعية الفنانين التشكيليين العراقيين."
              secondary="العراق، 1978"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ textAlign: "right" }}
              primary="معرض مشارك للفنانين العراقيين."
              secondary="العراق (معرض تموز – عمان) 1993"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ textAlign: "right" }}
              primary="إنجاز عمل نصب القديس هارديني مصنوع من البرونز طوله ١٧٠"
              secondary="بيروت - لبنان، 2002"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ textAlign: "right" }}
              primary="العديد من الإنجازات الفنية في متحف تقاليد الأزياء الشعبية."
              secondary="العراق، 1968-1970"
            />
          </ListItem>
        </List>
      </Box>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          المعارض
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              sx={{ textAlign: "right" }}
              primary='معرض تموز: عرض عمل فني واحد "المقاومة" بمشاركة 300 فنان'
              secondary="العراق"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ textAlign: "right" }}
              primary="معرض للفنانين اللاجئين"
              secondary="المكتبة المركزية في فانكوفر"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ textAlign: "right" }}
              primary="معرض للفنانين اللاجئين"
              secondary="SFU"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ textAlign: "right" }}
              primary="الاجتماع السنوي AMSSA"
              secondary="فانكوفر"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ textAlign: "right" }}
              primary="معرض للفنانين اللاجئين حسب الخيارات"
              secondary="بلدية"
            />
          </ListItem>
        </List>
      </Box>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          مهارات
        </Typography>
        <List>
          <ListItem>
            <ListItemText sx={{ textAlign: "right" }} primary="نجارة" />
          </ListItem>
          <ListItem>
            <ListItemText sx={{ textAlign: "right" }} primary="النحت" />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ textAlign: "right" }}
              primary="أخلاقيات العمل القوية"
            />
          </ListItem>
          <ListItem>
            <ListItemText sx={{ textAlign: "right" }} primary="إدارة الوقت" />
          </ListItem>
          <ListItem>
            <ListItemText sx={{ textAlign: "right" }} primary="بناء" />
          </ListItem>
          <ListItem>
            <ListItemText sx={{ textAlign: "right" }} primary="إعداد المعرض" />
          </ListItem>
        </List>
      </Box>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          ابقى على تواصل
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              sx={{ textAlign: "right" }}
              primary="البريد الإلكتروني : tariqlouiss@yahoo.com"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ textAlign: "right" }}
              primary="الهاتف : +1(778)-751-1620"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              sx={{ textAlign: "right" }}
              primary="الفيسبوك: طارق لويس"
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default Resume;
