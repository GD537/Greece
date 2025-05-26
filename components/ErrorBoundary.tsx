import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="p-6 m-4 border border-red-400 bg-red-50 rounded-md shadow-lg text-gray-800">
          <h1 className="text-2xl font-bold text-red-700 mb-3">Oops! Something went wrong.</h1>
          <p className="mb-2">We're sorry for the inconvenience. Please try refreshing the page, or check the console for more details.</p>
          {/* Basic error details for development, consider hiding in production */}
          {this.state.error && (
            <details className="mt-4 text-sm">
              <summary className="cursor-pointer text-red-600 hover:underline">Error Details (for development)</summary>
              <pre className="mt-2 p-3 bg-red-100 text-red-700 text-left text-xs whitespace-pre-wrap break-all overflow-auto rounded">
                {this.state.error.toString()}
                {this.state.errorInfo && this.state.errorInfo.componentStack && (
                  <>
                    <br /><br />
                    <strong>Component Stack:</strong>
                    {this.state.errorInfo.componentStack}
                  </>
                )}
                 {this.state.error.stack && (
                  <>
                    <br /><br />
                    <strong>Stack Trace:</strong>
                    {this.state.error.stack}
                  </>
                 )}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;