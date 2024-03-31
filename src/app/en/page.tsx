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
      <p className="absolute bottom-0 rounded-2xl p-8 bg-brown opacity-70 text-justify h-60 text-xs md:h-auto md:text-lg">
        Tariq Louis is a master sculptor whose creations transcend the ordinary,
        inviting viewers into a world where imagination meets craftsmanship.
        With a keen eye for detail and a deep understanding of form, Louis
        breathes life into stone and metal, transforming raw materials into
        exquisite works of art. Each sculpture tells a story, capturing moments
        of emotion, movement, and beauty frozen in time. From towering monuments
        to delicate figurines, Louis&apos;s portfolio showcases a diverse range
        of subjects and styles, reflecting his versatility and passion for his
        craft. Explore his gallery and immerse yourself in the captivating world
        of Tariq Louis&apos;s sculptural mastery.
      </p>
    </div>
  );
}
