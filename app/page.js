"use client";
import { useState } from "react";
import { questions } from '@/data/questions';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("存在と自己");
  const [answers, setAnswers] = useState({});

  // カテゴリ一覧を取得
  const categories = Array.from(new Set(questions.map((q) => q.category)));

  // 選択中のカテゴリの質問一覧
  const currentQuestions = questions.filter((q) => q.category === selectedCategory);

  // 回答の入力ハンドラー
  const handleAnswerChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  // 全体回答数のカウント
  const answeredCount = Object.values(answers).filter((a) => a && a.trim() !== "").length;

  return (
    <div className="min-h-screen bg-[#F7F4EF] text-[#1C1917] p-6 md:p-12 font-serif">
      {/* ヘッダー */}
      <header className="max-w-6xl mx-auto mb-10 text-center border-b border-[#D6CEB8] pb-6">
        <h1 className="text-3xl md:text-4xl font-light tracking-widest text-[#1C1917] mb-3">
          高尚ナル偏愛マニアの100の問い
        </h1>
        <p className="text-sm text-[#78716C] tracking-wide">
          自らの美学・存在・思考の深淵と静かに向き合う対話録
        </p>
        <div className="mt-4 inline-block bg-[#E7E2D6] px-4 py-1 rounded-full text-xs text-[#57534E]">
          回答進捗: <span className="font-bold text-[#1C1917]">{answeredCount}</span> / 100
        </div>
      </header>

      {/* 2カラム・メインコンテンツ */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* 左カラム：目次・カテゴリナビゲーション */}
        <aside className="md:col-span-4 bg-[#EFECE6] p-6 rounded-lg border border-[#E2DCCE] h-fit sticky top-6">
          <h2 className="text-xs uppercase tracking-widest text-[#78716C] mb-4 border-b border-[#D6CEB8] pb-2">
            CHAPTERS / 章目次
          </h2>
          <nav className="space-y-2">
            {categories.map((cat, idx) => {
              const catQuestions = questions.filter((q) => q.category === cat);
              const catAnswered = catQuestions.filter((q) => answers[q.id]?.trim()).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-3 py-2.5 rounded text-sm transition-all duration-200 flex justify-between items-center ${
                    selectedCategory === cat
                      ? "bg-[#1C1917] text-[#F7F4EF] shadow-sm font-medium"
                      : "hover:bg-[#E7E2D6] text-[#44403C]"
                  }`}
                >
                  <span>{idx + 1}. {cat}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedCategory === cat ? "bg-[#332E2B] text-[#D6CEB8]" : "bg-[#E2DCCE] text-[#78716C]"
                  }`}>
                    {catAnswered}/{catQuestions.length}
                  </span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* 右カラム：質問＆入力フォーム */}
        <main className="md:col-span-8 space-y-8">
          <div className="border-b border-[#D6CEB8] pb-3 mb-6">
            <h2 className="text-xl font-medium tracking-wider text-[#1C1917]">
              {selectedCategory}
            </h2>
          </div>

          {currentQuestions.map((q) => (
            <article key={q.id} className="bg-[#FFFFFF] p-6 rounded-lg border border-[#E2DCCE] shadow-sm hover:border-[#B45309] transition-all">
              <div className="flex items-baseline space-x-3 mb-2">
                <span className="text-xs font-serif italic text-[#B45309] font-bold">
                  Q.{q.id}
                </span>
                <h3 className="text-base font-medium text-[#1C1917] leading-relaxed">
                  {q.question}
                </h3>
              </div>
              
              {/* ヒントカラム */}
              <p className="text-xs text-[#78716C] mb-4 italic pl-7">
                {q.hint}
              </p>

              {/* 回答入力エリア */}
              <textarea
                value={answers[q.id] || ""}
                onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                placeholder={q.placeholder}
                rows={3}
                className="w-full p-3 bg-[#FAF8F5] border border-[#E2DCCE] rounded text-sm text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:border-[#B45309] focus:bg-[#FFFFFF] transition-all"
              />
            </article>
          ))}
        </main>
      </div>
    </div>
  );
}