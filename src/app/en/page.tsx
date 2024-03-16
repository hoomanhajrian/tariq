import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src="/header-image.jpg"
        alt="Louis Tariq"
        width={1024}
        height={500}
        style={{ width: "100%", height: "100%" }}
      />
      <p>
        Tariq Louis is a master sculptor whose creations transcend the ordinary,
        inviting viewers into a world where imagination meets craftsmanship.
        With a keen eye for detail and a deep understanding of form, Louis
        breathes life into stone and metal, transforming raw materials into
        exquisite works of art. Each sculpture tells a story, capturing moments
        of emotion, movement, and beauty frozen in time. From towering monuments
        to delicate figurines, Louis's portfolio showcases a diverse range of
        subjects and styles, reflecting his versatility and passion for his
        craft. Explore his gallery and immerse yourself in the captivating world
        of Tariq Louis's sculptural mastery.
      </p>
    </>
  );
}
