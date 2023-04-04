import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const config = {
    red: {
      duration: 4000,
      next: "green"
    },
    green: {
      duration: 3000,
      next: "yellow"
    },
    yellow: {
      duration: 500,
      next: "red"
    }
  };

  return <TrafficLight config={config} />;
}

function Light(props) {
  const { color } = props;
  const styles = { backgroundColor: color };
  return <div className="light" style={styles}></div>;
}

function TrafficLight(props) {
  const { config } = props;
  const [currentColor, setCurrentColor] = useState("green");

  useEffect(() => {
    const { next, duration } = config[currentColor];

    const timerId = setTimeout(() => {
      setCurrentColor(next);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor]);

  return (
    <div className="container">
      <Light color={currentColor === "red" ? currentColor : "gray"} />
      <Light color={currentColor === "yellow" ? currentColor : "gray"} />
      <Light color={currentColor === "green" ? currentColor : "gray"} />
    </div>
  );
}
