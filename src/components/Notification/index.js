import { Notification, Button } from "rsuite";

function open() {
  Notification.open({
    title: "Fun Fact of the Day",
    description: "This website was made using React, rsuite, and bootstrap!",
  });
}

function newNotification() {
  return <Button onClick={open}> Click me for a fun fact! </Button>;
}

export default newNotification;
