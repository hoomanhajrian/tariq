import Image from "next/image";
import backgroundImage from "@/pics/background.jpg";

export default function Home() {
  return (
    <div className="relative">
      <Image
        src={backgroundImage}
        alt="Louis Tariq"
        style={{ height: "600px" }}
        className="mr-auto ml-auto w-100 md:w-90 filter brightness-50"
        priority
      />
      <p className="absolute bottom-0 rounded-2xl p-8 bg-brown opacity-80 text-justify sm:h-40 text-md md:text-2xl md:h-auto">
        طارق لويس هو نحات ماهر يتجاوز إبداعاته العادية، داعيًا المشاهدين إلى
        عالم حيث تتلاقى الخيال والحرفية. بعين حادة للتفاصيل وفهم عميق للشكل،
        يضفي لويس الحياة على الحجر والمعدن، محولًا المواد الخام إلى أعمال فنية
        رائعة. كل منحوتة تحكي قصة، تلتقط لحظات من العاطفة والحركة والجمال
        المتجمدة في الزمن. من النصب الشامخة إلى التماثيل الهشة، يعرض معرض لويس
        مجموعة متنوعة من المواضيع والأساليب، مع انعكاس لتنوعه وشغفه بحرفته.
        استكشف معرضه وانغمس في عالم الإبداع الساحر لطارق لويس كنحاته الماهر.
      </p>
    </div>
  );
}
