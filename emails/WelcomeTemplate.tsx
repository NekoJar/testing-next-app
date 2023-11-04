import {
  Body,
  Container,
  Html,
  Link,
  Tailwind,
  Preview,
  Text,
} from "@react-email/components";
import React from "react";

const WelcomeTemplate = ({ name }: { name: String }) => {
  return (
    <Html>
      <Preview>Welcome abroad!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              Goodies
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
