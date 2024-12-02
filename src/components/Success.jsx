import "../styles/success.css";

export default function Success() {
  document.body.className = "success-body";

  return (
    <>
      <img
        className="success-logo"
        src="../../Assets/Iteration-1-assets/logo.svg"
        alt=""
      />
      <div className="success-text">
        <h2>TEBRİKLER!</h2>
        <h2>SİPARİŞİNİZ ALINDI!</h2>
      </div>
    </>
  );
}
