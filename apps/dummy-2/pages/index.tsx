import { Button, Header } from "@zoomable/ui";

export default function DummyOne() {
  return (
    <div>
      <Header
        user={{ name: "dummy 1" }}
        onLogin={() => console.log("log in")}
        onLogout={() => console.log("log out")}
        onCreateAccount={() => console.log("create account")}
      />
      <Button label="Button" />
    </div>
  );
}
