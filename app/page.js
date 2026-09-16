'use client';

import { useState } from 'react';

export default function Home() {
  const categories = [
    {
      title: "🌱 基本プロフィール",
      color: "bg-emerald-50/70 border-emerald-200 text-emerald-900",
      badge: "bg-emerald-500",
      inputBorder: "focus:ring-emerald-400 border-emerald-200",
      questions: ["名前・ニックネームは？", "生年月日と星座は？", "血液型は？", "出身地は？", "現在の職業・専攻は？", "自分の性格を3つの単語で表すと？", "チャームポイントは？", "座右の銘は？", "よく言われる第一印象は？", "自分の取扱説明書の一言は？"]
    },
    {
      title: "🍕 好きなもの・こだわり",
      color: "bg-amber-50/70 border-amber-200 text-amber-900",
      badge: "bg-amber-500",
      inputBorder: "focus:ring-amber-400 border-amber-200",
      questions: ["一番好きな食べ物は？", "好きな飲み物は？", "嫌いな食べ物は？", "好きな季節は？", "好きな色は？", "好きな動物は？", "お気に入りの映画・ドラマは？", "よく聴く音楽・アーティストは？", "愛用している香水や香りは？", "休日の過ごし方は？"]
    },
    {
      title: "🏠 ライフスタイル",
      color: "bg-sky-50/70 border-sky-200 text-sky-900",
      badge: "bg-sky-500",
      inputBorder: "focus:ring-sky-400 border-sky-200",
      questions: ["朝型？夜型？", "平均睡眠時間は？", "インドア派？アウトドアー派？", "得意な家事は？", "部屋のインテリアのテイストは？", "毎日のルーティンは？", "最近買ってよかったものは？", "お風呂にかける時間は？", "スマホで一番使うアプリは？", "ストレス解消法は？"]
    },
    {
      title: "🎨 趣味・マイブーム",
      color: "bg-rose-50/70 border-rose-200 text-rose-900",
      badge: "bg-rose-500",
      inputBorder: "focus:ring-rose-400 border-rose-200",
      questions: ["長年続けている趣味は？", "最近ハマっていることは？", "これから挑戦したい趣味は？", "おすすめの本・マンガは？", "推しはいる？", "カラオケの十八番は？", "写真や動画はよく撮る？", "ゲームはする？", "コレクションしているものは？", "最近感動した体験は？"]
    },
    {
      title: "✈️ 旅・お出かけ",
      color: "bg-indigo-50/70 border-indigo-200 text-indigo-900",
      badge: "bg-indigo-500",
      inputBorder: "focus:ring-indigo-400 border-indigo-200",
      questions: ["今まで行って最高だった場所は？", "これから行きたい国・地域は？", "一人旅はできる？", "旅行は計画派？ノープラン派？", "旅行に必ず持っていくものは？", "海派？山派？", "カフェ巡りは好き？", "テーマパークに行くならどこ？", "理想の休日のデートスポットは？", "思い出の場所は？"]
    },
    {
      title: "💭 価値観・考え方",
      color: "bg-purple-50/70 border-purple-200 text-purple-900",
      badge: "bg-purple-500",
      inputBorder: "focus:ring-purple-400 border-purple-200",
      questions: ["人生で大切にしていることは？", "褒められると一番嬉しい言葉は？", "自分の強みは？", "克服したい弱点は？", "信じているジンクスはある？", "運命って信じる？", "100万円あったら何に使う？", "タイムマシンがあったら過去？未来？", "生まれ変わるなら何になりたい？", "どんな大人になりたい？"]
    },
    {
      title: "🤝 人間関係・恋愛",
      color: "bg-pink-50/70 border-pink-200 text-pink-900",
      badge: "bg-pink-500",
      inputBorder: "focus:ring-pink-400 border-pink-200",
      questions: ["理想のタイプは？", "キュンとするしぐさは？", "友達といるときの自分の立ち位置は？", "初対面でまずどこを見る？", "連絡頻度は高め？低め？", "サプライズするのは好き？", "感謝の気持ちはどう伝える？", "許せないマナー違反は？", "親友とはどんな存在？", "恋愛で一番重視することは？"]
    },
    {
      title: "💼 仕事・学び",
      color: "bg-blue-50/70 border-blue-200 text-blue-900",
      badge: "bg-blue-500",
      inputBorder: "focus:ring-blue-400 border-blue-200",
      questions: ["仕事・勉強で心がけていることは？", "集中力を高める方法は？", "尊敬する人は？", "今までで一番達成感があったことは？", "壁にぶつかった時の乗り越え方は？", "得意な作業・スキルは？", "理想の働き方は？", "新しく学びたいスキルは？", "チームプレイ派？個人プレイ派？", "将来の夢や目標は？"]
    },
    {
      title: "🔮 If（もしも）の話",
      color: "bg-orange-50/70 border-orange-200 text-orange-900",
      badge: "bg-orange-500",
      inputBorder: "focus:ring-orange-400 border-orange-200",
      questions: ["一つだけ魔法が使えたら何をする？", "無人島に一つ持っていくなら？", "超能力が手に入るなら何がいい？", "1日だけ誰かと入れ替われるなら？", "地球最後の日に食べたいものは？", "宝くじで7億円当たったら？", "透明人間になれたら何をする？", "動物と話せるなら何と話す？", "映画の主人公になれるなら何？", "歴史上の人物と会えるなら誰？"]
    },
    {
      title: "⭐ 100の質問をしめくくる一問一答",
      color: "bg-teal-50/70 border-teal-200 text-teal-900",
      badge: "bg-teal-500",
      inputBorder: "focus:ring-teal-400 border-teal-200",
      questions: ["最近笑った出来事は？", "最近泣いた出来事は？", "自分の好きなところは？", "ここだけの秘密を一つ教えて？", "今一番会いたい人は？", "今一番やりたいことは？", "10年後の自分へ一言！", "あなたにとって幸せとは？", "ここまで読んでくれた人に一言！", "100問答えてみた感想は？"]
    }
  ];

  const [answers, setAnswers] = useState({});

  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* スマホ最適化ヘッダー・バナー */}
      <header className="w-full bg-white/90 backdrop-blur-md shadow-sm mb-6 sticky top-0 z-20">
        <div className="max-w-md mx-auto px-4 py-3 text-center">
          <div className="w-full h-auto max-h-36 overflow-hidden rounded-xl shadow-inner mb-2 bg-slate-100 flex items-center justify-center">
            <img
              src="/katati.png"
              alt="バナー画像"
              className="w-full h-auto max-h-36 object-contain rounded-xl"
            />
          </div>
          <h1 className="text-lg font-bold text-slate-800 tracking-tight">わたしをかたちづくるもの</h1>
          <p className="text-[11px] text-slate-500">直感でパパッと書き込む100の質問</p>
        </div>
      </header>

      {/* 100の質問＋直感入力欄 */}
      <div className="max-w-md mx-auto px-4 space-y-6">
        {categories.map((category, catIdx) => (
          <section key={catIdx} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
            <h2 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2 border-b border-slate-100 pb-2">
              <span className={`w-2.5 h-2.5 rounded-full ${category.badge}`}></span>
              {category.title}
            </h2>
            <div className="space-y-3">
              {category.questions.map((q, qIdx) => {
                const qNum = catIdx * 10 + qIdx + 1;
                const qId = `q_${qNum}`;
                return (
                  <div key={qIdx} className={`p-3 rounded-xl border ${category.color} transition-all`}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`text-[10px] font-extrabold text-white px-2 py-0.5 rounded-md ${category.badge} shrink-0`}>
                        Q.{qNum}
                      </span>
                      <p className="text-xs font-bold leading-tight">{q}</p>
                    </div>
                    <input
                      type="text"
                      placeholder="直感で入力..."
                      value={answers[qId] || ''}
                      onChange={(e) => handleChange(qId, e.target.value)}
                      className={`w-full text-xs px-3 py-2 rounded-lg bg-white/90 border ${category.inputBorder} focus:outline-none focus:ring-2 transition-all placeholder:text-slate-400 text-slate-800`}
                    />
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}