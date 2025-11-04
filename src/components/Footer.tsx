import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white/40 backdrop-blur-md border-t border-purple-200/50 mt-16">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center text-sm mb-6">
          <a href="#" className="text-purple-500 hover:text-purple-600 transition-colors">
            利用規約
          </a>
          <span className="text-purple-200">•</span>
          <a href="#" className="text-purple-500 hover:text-purple-600 transition-colors">
            プライバシーポリシー
          </a>
          <span className="text-purple-200">•</span>
          <a href="#" className="text-purple-500 hover:text-purple-600 transition-colors">
            お問い合わせ
          </a>
          <span className="text-purple-200">•</span>
          <a href="#" className="text-purple-500 hover:text-purple-600 transition-colors">
            運営会社
          </a>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          <span>© 2025 PAPA COMMUNITY. Made with</span>
          <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
        </div>
      </div>
    </footer>
  );
}
