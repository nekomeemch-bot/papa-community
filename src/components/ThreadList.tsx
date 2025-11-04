import { MessageCircle, TrendingUp, Users, HelpCircle, Coffee, PartyPopper, Star, BookOpen } from "lucide-react";

interface Thread {
  id: number;
  title: string;
  posts: number;
  lastUpdate: string;
  icon: any;
  color: string;
}

const threads: Thread[] = [
  { id: 1, title: "【公式】PAPA COMMUNITY へようこそ！", posts: 234, lastUpdate: "2025/11/02 15:30", icon: Star, color: "from-yellow-300 to-orange-300" },
  { id: 2, title: "自己紹介スレッド", posts: 156, lastUpdate: "2025/11/02 14:15", icon: Users, color: "from-pink-300 to-rose-300" },
  { id: 3, title: "イベント情報・告知スレ", posts: 89, lastUpdate: "2025/11/01 18:45", icon: PartyPopper, color: "from-purple-300 to-pink-300" },
  { id: 4, title: "質問・相談スレッド", posts: 312, lastUpdate: "2025/11/01 12:20", icon: HelpCircle, color: "from-blue-300 to-cyan-300" },
  { id: 5, title: "雑談スレ", posts: 567, lastUpdate: "2025/10/31 16:00", icon: Coffee, color: "from-amber-300 to-yellow-300" },
  { id: 6, title: "オフ会企画スレ", posts: 78, lastUpdate: "2025/10/30 14:30", icon: TrendingUp, color: "from-green-300 to-emerald-300" },
  { id: 7, title: "おすすめ情報共有スレ", posts: 201, lastUpdate: "2025/10/29 11:45", icon: MessageCircle, color: "from-indigo-300 to-purple-300" },
  { id: 8, title: "初心者向けガイドスレ", posts: 145, lastUpdate: "2025/10/28 09:20", icon: BookOpen, color: "from-teal-300 to-blue-300" },
];

interface ThreadListProps {
  onSelectThread: (id: number) => void;
}

export function ThreadList({ onSelectThread }: ThreadListProps) {
  return (
    <div className="space-y-4">
      <div className="bg-white/50 backdrop-blur-md rounded-3xl p-6 shadow-lg border border-purple-200/50">
        <h2 className="mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          スレッド一覧 ✨
        </h2>
        <div className="space-y-3">
          {threads.map((thread) => {
            const Icon = thread.icon;
            return (
              <button
                key={thread.id}
                onClick={() => onSelectThread(thread.id)}
                className="w-full text-left bg-gradient-to-br from-white/70 to-purple-100/30 rounded-2xl p-4 hover:shadow-lg hover:scale-[1.02] transition-all duration-200 border border-purple-200/50 group"
              >
                <div className="flex items-start gap-3">
                  <div className={`bg-gradient-to-br ${thread.color} p-2 rounded-xl shadow-sm group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-purple-300 text-sm">#{thread.id}</span>
                      <h3 className="text-gray-800 group-hover:text-purple-500 transition-colors truncate">
                        {thread.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {thread.posts}
                      </span>
                      <span className="text-gray-300">•</span>
                      <span>{thread.lastUpdate}</span>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
