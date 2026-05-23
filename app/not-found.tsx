export const dynamic = "force-static";

export default function NotFound() {
  return (
    <main className="not-found-wrap">
      <div className="not-found-card">
        <h1 className="not-found-title">Page not found · Страница не найдена</h1>
        <div className="not-found-code">404</div>
        <p className="not-found-text">
          The page you requested doesn&apos;t exist or has been moved.
        </p>
        <p className="not-found-text">
          Запрошенная страница не существует или была перемещена.
        </p>
        <p className="not-found-text">
          <a className="not-found-link" href="/">
            ← Back to home · Вернуться на главную
          </a>
        </p>
      </div>
    </main>
  );
}
