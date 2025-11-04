import { Header } from "./components/Header";
import { ThreadList } from "./components/ThreadList";
import { ThreadView } from "./components/ThreadView";
import { Footer } from "./components/Footer";
import { useState } from "react";

export default function App() {
  const [selectedThread, setSelectedThread] = useState<number | null>(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100/40 via-purple-100/40 via-blue-100/40 to-cyan-100/40">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        {selectedThread ? (
          <ThreadView threadId={selectedThread} onBack={() => setSelectedThread(null)} />
        ) : (
          <ThreadList onSelectThread={setSelectedThread} />
        )}
      </main>
      <Footer />
    </div>
  );
}
