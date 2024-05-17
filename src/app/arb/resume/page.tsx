import {
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
              طارق لويس جزراوی
            </h1>
            <h2>
              النحات والرسام
            </h2>
            <h3>
              عضو جمعية الفنانين التشكيليين العراقيين
            </h3>
          </div>
          <Image
            src={'/pics/tariq.jpg'}
            width={150}
            height={150}
            alt="طارق لويس جزراوی"
            className="p-2"
          />
        </div>
      </div>
      <div className="md:col-span-2">
        <div>
          <p className="p-3 text-justify">
            أحب العمل بيدي، النجارة والبناء، أحب الناس وفني هو رمز حبي للناس.
            ينصب تركيزي على الإنسان وأعطي كل قطعة فنية قطعة من روحي. الفن يعيش
            في قلبي وروحي وأريد أن أظهر للعالم الآثار العراقية. لدي مجموعة كبيرة
            من الآثار العراقية المقلدة وأريد أن يصبح الفن العراقي معروفاً في
            مجتمعنا.
          </p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-2xl">
          تعليم
        </h3>
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
      </div>
      <div>
        <h3 className="text-2xl">
          خبرة
        </h3>
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
      </div>
      <div className="mt-4">
        <h3 className="text-2xl">
          المعارض
        </h3>
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
      </div>
      <div className="mt-4">
        <h3 className="text-2xl">
          مهارات
        </h3>
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
      </div>
      <div className="mt-4">
        <h3 className="text-2xl">
          ابقى على تواصل
        </h3>
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
      </div>
    </div>
  );
};

export default Resume;
