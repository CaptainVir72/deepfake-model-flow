import React from 'react';
import Flowchart from './components/Flowchart';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="bg-blue-600 text-white py-6 mb-8">
        <h1 className="text-4xl font-bold text-center">Deepfake Model Flow Explanation</h1>
      </header>
      <main className="container mx-auto px-4">
        <Flowchart />
      </main>
    </div>
  );
}

export default App;

