import { MessageCircle, Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white/60 backdrop-blur-md border-b border-purple-200/50 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 p-2.5 rounded-2xl shadow-lg">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                PAPA COMMUNITY
              </h1>
              <Sparkles className="w-5 h-5 text-pink-300" />
            </div>
            <p className="text-sm text-gray-600">みんなで楽しくおしゃべりしよう ♪</p>
          </div>
        </div>
      </div>
    </header>
  );
}
