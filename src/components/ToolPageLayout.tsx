import React from 'react';

interface ToolPageLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function ToolPageLayout({ title, description, children }: ToolPageLayoutProps) {
  return (
    <div className="container mt-5 mb-5">
      <header className="text-center mb-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{title}</h1>
        <p className="text-muted mt-2 text-lg">{description}</p>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}
