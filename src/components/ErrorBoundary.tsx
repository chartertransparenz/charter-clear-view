import React from "react";

type ErrorBoundaryState = { hasError: boolean; error?: Error; info?: React.ErrorInfo };

export class ErrorBoundary extends React.Component<React.PropsWithChildren, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Log to console so we can capture details in the preview env
    console.error("ErrorBoundary", { error, info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 text-center">
          <div>
            <h1 className="text-2xl font-semibold mb-2">Es ist ein Fehler aufgetreten</h1>
            <p className="text-muted-foreground mb-4">Bitte laden Sie die Seite neu. Details siehe Konsole.</p>
            {this.state.error?.message ? (
              <pre className="text-left text-sm bg-muted/30 p-3 rounded-md overflow-auto max-w-[90vw] max-h-[40vh]">
                {this.state.error.message}
              </pre>
            ) : null}
          </div>
        </div>
      );
    }
    return this.props.children as React.ReactElement;
  }
}
