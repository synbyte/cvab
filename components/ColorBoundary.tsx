'use client';

import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ColorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ColorBoundary caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg shadow-md border-2 border-blue-200 p-4 w-5/6 mx-auto">
          <div className="text-red-100 bg-red-500/60 p-3 rounded-md border-red-500 border-2 font-bold">
            Error fetching colors. Please try again later.
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}