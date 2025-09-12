import React from "react";

interface GlobalErrorBoundaryState {
  hasError: boolean;
  error?: Error | null;
  info?: React.ErrorInfo | null;
}

class GlobalErrorBoundary extends React.Component<React.PropsWithChildren<{}>, GlobalErrorBoundaryState> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error: Error): GlobalErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({ info });
    // Log detailed error info so we can capture it in the preview console
    // and avoid the generic "Script error." message
    console.error("[GlobalErrorBoundary]", {
      message: error?.message,
      name: error?.name,
      stack: error?.stack,
      componentStack: info?.componentStack,
    });
  }

  handleReload = () => {
    // Try a soft reload first
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen grid place-items-center p-6">
          <section className="max-w-xl w-full rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] p-6 shadow-elegant">
            <h1 className="text-2xl font-semibold mb-2">Leider ist ein Fehler aufgetreten</h1>
            <p className="text-sm opacity-80 mb-4">Bitte laden Sie die Seite neu. Der Fehler wurde in der Konsole protokolliert.</p>
            {this.state.error?.message && (
              <pre className="text-xs bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] p-3 rounded mb-4 overflow-auto">
                {this.state.error.message}
              </pre>
            )}
            <button onClick={this.handleReload} className="px-4 py-2 rounded bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
              Neu laden
            </button>
          </section>
        </main>
      );
    }

    return this.props.children as React.ReactElement;
  }
}

export default GlobalErrorBoundary;
