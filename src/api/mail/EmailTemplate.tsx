import {
  Body,
  Head,
  Heading,
  Img,
  Link,
  Text,
  Html,
  Hr,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  request: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  request,
}) => (
  <Html>
    <Head>
      <title>Website Request</title>
    </Head>
    <Body>
      <Img
        src="https://www.pacivil.com/pacivil-letter-head.jpg"
        width="50px"
        height="50px"
      />
      <Heading as="h2" mr="auto" ml="auto" mt="24px" mb="48px">
        Tariq Louis: Sculptor
      </Heading>
      <Hr />
      <Text>Hello Tariq,</Text>
      <Text>I would like to if you can make below requests for me:</Text>
      <Text>{request}.</Text>
      <Text>
        Reply to this message using this
        <Link href={`mailto:${email}`}>Link</Link>
      </Text>

      <Text>Cheers,</Text>
      <Text>{name}</Text>
      <Text>{phone}</Text>
      <Text>{email}</Text>
    </Body>
  </Html>
);
