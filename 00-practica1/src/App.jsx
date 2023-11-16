export function App() {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src="https://unavatar.io/midudev"
          alt="El avatar del usuario"
        />
        <div className="tw-followCard-info">
          <strong>Fernando Ramos</strong>
          <span className="tw-followCard-infoUserName">@Fernando</span>
        </div>
      </header>
      
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
