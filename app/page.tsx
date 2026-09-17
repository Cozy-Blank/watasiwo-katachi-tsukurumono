'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [questionsList, setQuestionsList] = useState<any[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [selectedCategory, setSelectedCategory] = useState<string>('すべて');

  useEffect(() => {
    try {
      // @ts-ignore
      const data = require('../data/questions');
      const list = Array.isArray(data) ? data : data?.default || data?.questions || [];
      setQuestionsList(list);
    } catch (e) {
      console.error('質問データの読み込みに失敗しました', e);
    }

    const saved = localStorage.getItem('dialogue_answers');
    if (saved) {
      try {
        setAnswers(JSON.parse(saved));
      } catch (e) {
        console.error('保存データの読み込みに失敗しました', e);
      }
    }
  }, []);

  const handleAnswerChange = (id: number, value: string) => {
    const newAnswers = { ...answers, [id]: value };
    setAnswers(newAnswers);
    localStorage.setItem('dialogue_answers', JSON.stringify(newAnswers));
  };

  const exportToCSV = () => {
    let csvContent = "\uFEFFID,カテゴリ,質問,回答\n";

    questionsList.forEach((q: any) => {
      const userAnswer = answers[q.id] || "";
      const category = `"${(q.category || '').replace(/"/g, '""')}"`;
      const question = `"${(q.question || '').replace(/"/g, '""')}"`;
      const answer = `"${userAnswer.replace(/"/g, '""')}"`;

      csvContent += `${q.id},${category},${question},${answer}\n`;
    });

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `対話録_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const categories = ['すべて', ...Array.from(new Set(questionsList.map((q: any) => q.category)))];

  const filteredQuestions = selectedCategory === 'すべて'
    ? questionsList
    : questionsList.filter((q: any) => q.category === selectedCategory);

  const answeredCount = Object.keys(answers).filter((key) => (answers[Number(key)] || '').trim() !== '').length;

  const chunkSize = 10;
  const questionGroups = [];
  for (let i = 0; i < filteredQuestions.length; i += chunkSize) {
    questionGroups.push(filteredQuestions.slice(i, i + chunkSize));
  }

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#1E293B] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* トップのイラストバナー */}
        <div className="mb-8 overflow-hidden rounded-2xl shadow-sm border border-[#E2E8F0]">
          <img
            src="/katati.webp"
            alt="対話録バナー"
            className="w-full h-auto object-cover max-h-72"
          />
        </div>

        <header className="text-center mb-10">
          {/* タイトル：くすみグレー＆控えめサイズに確実指定 */}
          <h1 
            style={{ color: '#64748B', fontSize: '15px', fontWeight: '500' }} 
            className="mb-2 tracking-wide"
          >
            自らの美学・存在・思考の深淵と静かに向き合う対話録
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '12px' }}>
            回答状況: <span style={{ color: '#64748B', fontWeight: '600' }}>{answeredCount}</span> / {questionsList.length} 問
          </p>
        </header>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 bg-white p-4 rounded-xl shadow-sm border border-[#E2E8F0]">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <label htmlFor="category" className="text-xs font-semibold text-[#64748B] shrink-0">
              カテゴリ:
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full sm:w-auto text-sm border border-[#CBD5E1] rounded-lg px-3 py-1.5 bg-white text-[#1E293B] focus:outline-none focus:ring-1 focus:ring-black cursor-pointer"
            >
              {categories.map((cat: any) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={exportToCSV}
            className="w-full sm:w-auto px-5 py-2 rounded-lg text-sm font-medium border border-black text-black hover:bg-black hover:text-white transition-all duration-200 shadow-sm"
          >
            対話録をCSVでダウンロード
          </button>
        </div>

        <div className="space-y-12">
          {questionGroups.map((group, groupIdx) => {
            const firstQ = group[0];
            const lastQ = group[group.length - 1];
            const groupCategory = firstQ?.category || `ジャンル ${groupIdx + 1}`;

            return (
              <section key={groupIdx} className="space-y-6">
                <div className="border-b-2 border-black pb-2 pt-2 flex items-center gap-3">
                  <span className="bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                    Q{firstQ?.id} - Q{lastQ?.id}
                  </span>
                  <h2 className="text-lg font-bold text-[#000000]">
                    {groupCategory}
                  </h2>
                </div>

                <div className="space-y-6">
                  {group.map((q: any) => (
                    <div
                      key={q.id}
                      className="bg-white p-6 rounded-xl shadow-sm border border-[#E2E8F0] transition-all hover:border-[#CBD5E1]"
                    >
                      <h3 style={{ fontSize: '15px', color: '#000000', fontWeight: '600' }} className="mb-2 leading-relaxed">
                        Q{q.id}. {q.question}
                      </h3>
                      
                      {/* 思考のヒント：極小フォント（10px）＆ペールグレー */}
                      {q.hint && (
                        <p style={{ fontSize: '10px', color: '#94A3B8' }} className="mb-3 bg-[#F8F9FA] px-2.5 py-1 rounded border-l-2 border-[#CBD5E1] inline-block leading-tight">
                          💡 <span>思考のヒント: {q.hint}</span>
                        </p>
                      )}

                      <textarea
                        value={answers[q.id] || ''}
                        onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                        rows={4}
                        className="w-full p-3.5 text-sm border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all resize-y text-[#1E293B]"
                      />
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="text-center mt-12 mb-8">
          <button
            onClick={exportToCSV}
            className="px-8 py-3 rounded-lg text-sm font-medium border border-black text-black hover:bg-black hover:text-white transition-all duration-200 shadow-sm"
          >
            対話録をCSVでダウンロード
          </button>
        </div>

      </div>
    </main>
  );
}