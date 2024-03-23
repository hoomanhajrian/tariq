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
  company: string;
  email: string;
  phone: string;
  request: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  company,
  email,
  phone,
  request,
  message,
}) => (
  <Html>
    <Head>
      <title>{company}</title>
    </Head>
    <Body>
      <Img
        src="https://www.pacivil.com/pacivil-letter-head.jpg"
        width="50px"
        height="50px"
      />
      <Heading as="h2" mr="auto" ml="auto" mt="24px" mb="48px">
        PACIVIL
      </Heading>
      <Hr />
      <Text>Hello,</Text>
      <Text>I would need help with {request}.</Text>
      <Text>{message}</Text>
      <Text>
        Reply to this message using this{" "}
        <Link href={`mailto:${email}`}>Link</Link>
      </Text>

      <Text>Cheers,</Text>
      <Text>{name}</Text>
      <Text>{company}</Text>
      <Text>{phone}</Text>
      <Text>{email}</Text>
    </Body>
  </Html>
);
