const SanityCheck = () => {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <main className="container mx-auto px-4 pt-20">
        <h1 className="text-2xl font-semibold">Sanity Check</h1>
        <p className="mt-2 opacity-80">
          Wenn Sie das sehen, rendert die App korrekt. Der Fehler liegt dann in einer der Startseiten-Komponenten oder der Navigation.
        </p>
      </main>
    </div>
  );
};

export default SanityCheck;
