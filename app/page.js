import Image from "next/image";

export default function Home() {
  // 質問のデータリスト（ここにどんどん質問を追加できます！）
  const questionsSection1 = [
    { id: "Q.1", text: "疲れた夜に無心で観てしまう動画のジャンル" },
    { id: "Q.2", text: "なぜか捨てられずに放置している謎のガジェット・小物" },
    { id: "Q.3", text: "コンビニに行くと無意識に買ってしまうお気に入りのお菓子" },
    { id: "Q.4", text: "テンションを上げたい時に聴く勝負曲・プレイリスト" },
    { id: "Q.5", text: "自分だけが知っている最高の休日の過ごし方" },
  ];

  const questionsSection2 = [
    { id: "Q.6", text: "スマホのホーム画面のこだわり・配置ルール" },
    { id: "Q.7", text: "ついつい長居してしまう大好きな場所や空間" },
    { id: "Q.8", text: "人生で一番買ってよかったと心から思えるアイテム" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <main className="max-w-md mx-auto px-4 py-6 pb-20">
        {/* スマホ画面幅に合わせたバナー */}
        <div className="w-full mb-3 overflow-hidden rounded-2xl shadow-sm">
          <Image
            src="/katati.png"
            alt="バナー"
            width={400}
            height={200}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* サブタイトル */}
        <p className="text-[11px] text-slate-400 mb-6 text-center tracking-widest font-medium">
          100の偏愛＆クセつよ質問リスト
        </p>

        {/* セクション１ */}
        <section className="mb-6">
          <div className="flex items-center gap-1.5 mb-3 border-b border-slate-200 pb-1.5">
            <span className="text-xs">🌙</span>
            <h2 className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">
              日常の行い・ひそかな癖
            </h2>
          </div>

          <div className="space-y-2.5">
            {questionsSection1.map((q) => (
              <div
                key={q.id}
                className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm"
              >
                <div className="flex items-center gap-2 text-xs mb-2">
                  <span className="font-bold text-slate-400 shrink-0">{q.id}</span>
                  <p className="font-medium text-slate-700 truncate">{q.text}</p>
                </div>
                <input
                  type="text"
                  className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-400 text-slate-700"
                />
              </div>
            ))}
          </div>
        </section>

        {/* セクション２ */}
        <section className="mb-6">
          <div className="flex items-center gap-1.5 mb-3 border-b border-slate-200 pb-1.5">
            <span className="text-xs">📱</span>
            <h2 className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">
              こだわり・持ち物
            </h2>
          </div>

          <div className="space-y-2.5">
            {questionsSection2.map((q) => (
              <div
                key={q.id}
                className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm"
              >
                <div className="flex items-center gap-2 text-xs mb-2">
                  <span className="font-bold text-slate-400 shrink-0">{q.id}</span>
                  <p className="font-medium text-slate-700 truncate">{q.text}</p>
                </div>
                <input
                  type="text"
                  className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-400 text-slate-700"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}