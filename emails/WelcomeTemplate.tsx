import {
  Body,
  Container,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import React from "react";
const WelcomeTemplate = ({ name }: { name: String }) => {
  return (
    <Html>
      <Preview>Welcome abroad!</Preview>
      <Body>
        <Container>
          <Text>Hello {name}</Text>
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Goodies
          </Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;
