import "../styles/header.css";

export default function Header() {
  document.body.className = "header-body";

  return (
    <>
      <div className="header-container">
        <h1 className="header-title">
          <img src="/Assets/Iteration-1-assets/logo.svg" alt="" />
        </h1>
      </div>
    </>
  );
}
