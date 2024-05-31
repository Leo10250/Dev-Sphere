import { useState } from "react";
import Alert from "../components/Alert";
import Button from "../components/Button";
import ListGroup from "../components/ListGroup";
import HeroContainer from "../components/HeroContainer";

const Home = () => {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleButtonClick = () => {
    setAlertVisibility(!alertVisible);
  };

  const handleAlertOnClose = () => {
    setAlertVisibility(false);
  };

  return (
    <>
      <HeroContainer />
      {alertVisible && (
        <Alert onClose={handleAlertOnClose}>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
        </Alert>
      )}
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button color="primary" onClick={handleButtonClick}>
        My Button
      </Button>
    </>
  );
};

export default Home;
