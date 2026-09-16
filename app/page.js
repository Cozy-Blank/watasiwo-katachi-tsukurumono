import Image from "next/image";

export default function Home() {
  const questions = [
    { id: "Q.1", text: "疲れた夜に無心で観てしまう動画のジャンル" },
    { id: "Q.2", text: "なぜか捨てられずに放置している謎のガジェット・小物" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 max-w-md mx-auto">
      {/* スマホ画面幅に合わせたバナー */}
      <div className="w-full mb-4 overflow-hidden rounded-2xl shadow-sm">
        <Image
          src="/katati.png"
          alt="バナー"
          width={400}
          height={200}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      <p className="text-[11px] text-slate-400 mb-6 text-center tracking-widest">
        100の偏愛＆クセつよ質問リスト
      </p>

      {/* 小さく洗練されたジャンル見出し */}
      <section className="mb-6">
        <div className="flex items-center gap-1.5 mb-3 border-b border-slate-200 pb-2">
          <span className="text-sm">🌙</span>
          <h2 className="text-xs font-bold text-slate-500 tracking-wider">
            日常の行い・ひそかな癖
          </h2>
        </div>

        {/* 質問リスト（Q1横並び・1行サイズ・入力欄プレースホルダーなし） */}
        <div className="space-y-3">
          {questions.map((q) => (
            <div key={q.id} className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 text-xs text-slate-700 mb-2">
                <span className="font-semibold text-slate-400 shrink-0">{q.id}</span>
                <p className="truncate font-medium">{q.text}</p>
              </div>
              <input
                type="text"
                className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-400"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}