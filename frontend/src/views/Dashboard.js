import React from "react";
import { Container } from "react-bootstrap";

import { Service } from "../components";

const SERVICES = [
  {
    id: 100,
    title: "Repair Quote",
    description: "Need a repair? Schedule a free quote now.",
    rate: 30, // hourly rate in dollars
  },
  {
    id: 200,
    title: "Inspection",
    description:
      "Just put in new wiring? Schedule an inspection to make sure it's up to code.",
    rate: 35, // hourly rate in dollars
  },
];

const Dashboard = () => {
  // TODO: on page load, make a call to the backend API to get a list of the available services
  const [content, setContent] = React.useState();

  // on page load, load the available services to the display elements
  React.useEffect(() => {
    const newContent = SERVICES.map((s) => <Service info={s} />);
    setContent(newContent);
  }, []);

  // listener so that page refreshes when content changes are detected
  React.useEffect(() => {}, [content]);

  return (
    <Container>
      <h3>Dashboard</h3>
      <h4>Services available</h4>
      {content}
    </Container>
  );
};

export default Dashboard;
