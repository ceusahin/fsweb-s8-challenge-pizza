export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <h1 className="header-title">Teknolojik Yemekler</h1>
          <nav className="header-nav">
            <a href="/" className="nav-link">
              Anasayfa
            </a>
            <span className="separator">-</span>
            <a href="/order" className="nav-link">
              Sipariş Oluştur
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
