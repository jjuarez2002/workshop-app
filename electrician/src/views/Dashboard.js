import React from "react";

import { Service } from "../components";

const SERVICES = [
  {
    title: "Repair Quote",
    description: "Get a repair quote",
    rate: 30,
  },
  {
    title: "Inspection",
    description: "Get your wiring inspected",
    rate: 35,
  },
];

const Dashboard = () => {
  const [content, setContent] = React.useState();

  React.useEffect(() => {
    // run on mount
    // get the service data
    const servData = SERVICES;

    const newContent = servData.map((item) => {
      return <Service key={'ex-' + item.title} data={item} />;
    });

    setContent(newContent);
  }, []);

  return <div>{content}</div>;
};

export default Dashboard;
