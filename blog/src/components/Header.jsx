function Header() {
  return (
    <div
      style={{
        height: "15%",
        width: "25%",
        fontSize: "xxx-large",
        fontWeight: "bold",
        background: "linear-gradient(to right, white, maroon, red, white)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        border: "1px solid grey",
      }}
      className="flexjustifycenter"
    >
      <h1>
        <b>BlogSpot</b>
      </h1>
    </div>
  );
}

export default Header;
