import React from "react";

const VariableSizeCard = ({ imageSrc, title, tag1, tag2 }) => {
  const [on_hover, set_on_hover] = React.useState(false);
  return (
    <div
      style={styles.card}
      onMouseEnter={() => set_on_hover(true)}
      onMouseLeave={() => set_on_hover(false)}
    >
      <img src={imageSrc} alt="Variable content" style={styles.image} />
      <div style={styles.textContainer}>
        <h2 style={styles.title}>{title}</h2>
        <span style={styles.tag}>{tag1}</span>
        <span style={styles.tag}>{tag2}</span>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
    textAlign: "center",
    margin: "16px",
  },
  image: {
    width: "100%",
    height: "auto",
    display: "block",
  },
  textContainer: {
    padding: "8px",
  },
  title: {
    margin: "8px 0",
    fontSize: "1.5em",
  },
  tag: {
    marginRight: "8px",
    color: "#555",
    fontSize: "0.9em",
  },
};

export default VariableSizeCard;
