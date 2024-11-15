import React from "react";

import Header from "./Header";
import VariableSizeCard from "./Card";

export default function Landing() {
  const [author, set_author] = React.useState("");
  const nodeBackendURL = sessionStorage.getItem("nodeBackendURL");

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(nodeBackendURL, {
        mode: "cors",
      });
      const jsons = await response.json();

      if (response.ok) {
        set_author(jsons);
        console.log("connected");
      }
    };
    fetchData();
  }, [nodeBackendURL]);
  return (
    <>
      {<Header />}
      <div
        style={{
          height: "85%",
          width: "100%",
          padding: "1vw",
        }}
      >
        <div
          style={{
            width: "20%",
            height: "40%",
          }}
        >
          <a href="#">
            {
              <VariableSizeCard
                imageSrc="https://imagizer.imageshack.com/v2/280x200q70/924/u27Jug.jpg"
                title="Can JS handle millions of users"
                tag1="14 Nov 2024"
                tag2={author}
              />
            }
          </a>
        </div>
      </div>
    </>
  );
}
