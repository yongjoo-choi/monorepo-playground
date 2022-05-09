import { Box } from "@chakra-ui/react";
import { Button, Header } from "@zoomable/ui";

export default function DummyTwo() {
  return (
    <Box>
      <Header
        user={{ name: "dummy 2" }}
        onLogin={() => console.log("log in")}
        onLogout={() => console.log("log out")}
        onCreateAccount={() => console.log("create account")}
      />
      <Button label="Remote Cache" />
    </Box>
  );
}
