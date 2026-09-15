'use client';

import React, { useState } from 'react';

export default function Home() {
  // 初期質問リスト
  const [items, setItems] = useState([
    { id: 1, title: '最近よく検索する動画', content: '' },
    { id: 2, title: '読みたくて買ったけど読んでいない本', content: '' },
    { id: 3, title: '5分の待ち時間にやりたいこと', content: '' },
    { id: 4, title: '深酒したときにやってはいけないこと', content: '' },
    { id: 5, title: '最近ハマっていること', content: '' },
  ]);

  // 新しい質問を追加するためのステート
  const [newTitle, setNewTitle] = useState('');

  // 既存の回答を書き換える処理
  const handleUpdate = (id, newContent) => {
    setItems(items.map(item => item.id === id ? { ...item, content: newContent } : item));
  };

  // 新しい質問カードを自由に追加する処理
  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    setItems([
      ...items,
      { id: Date.now(), title: newTitle, content: '' }
    ]);
    setNewTitle('');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#4A3E3D] px-4 py-6 font-sans">
      {/* スマホ幅に納めるコンテナ（max-w-md） */}
      <div className="max-w-md mx-auto space-y-5">
        
        {/* スマホ最適化トップバナー */}
        <header className="w-full bg-white rounded-2xl p-2 shadow-sm border border-[#A3C9A8]/30 overflow-hidden">
          <img
            src="/katati.png"
            alt="watasiwo かたちづくるもの 偏愛Tool"
            className="w-full h-auto object-contain rounded-xl"
          />
        </header>

        {/* 新しい「癖つよ質問」を自分で追加できる入力エリア */}
        <section className="bg-white border-2 border-[#F4A69A]/60 rounded-2xl p-4 shadow-sm">
          <h2 className="text-xs font-bold text-[#F4A69A] mb-2 flex items-center gap-1.5">
            <span>✦</span> 新しい偏愛タイトルを追加する
          </h2>
          <form onSubmit={handleAddItem} className="flex gap-2">
            <input
              type="text"
              placeholder="例：夜中に突然食べたくなるもの"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="flex-1 bg-[#FAF8F5] text-[#4A3E3D] p-2.5 rounded-xl border border-[#A3C9A8]/40 focus:border-[#F4A69A] focus:outline-none text-sm placeholder-[#4A3E3D]/40"
            />
            <button
              type="submit"
              className="bg-[#F4A69A] hover:bg-[#e28e82] text-white font-bold px-4 py-2.5 rounded-xl transition text-sm shrink-0 shadow-xs"
            >
              追加
            </button>
          </form>
        </section>

        {/* 質問＆回答入力カード一覧 */}
        <main className="space-y-4">
          <p className="text-xs font-bold text-[#4A3E3D]/60 px-1">
            ▼ 偏愛カード（枠内をタップして入力できます）
          </p>
          {items.map((item) => (
            <div key={item.id} className="bg-white border border-[#A3C9A8]/40 rounded-2xl p-4 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F4A69A] shrink-0"></span>
                <h3 className="text-sm font-bold text-[#4A3E3D]">{item.title}</h3>
              </div>
              <textarea
                value={item.content}
                onChange={(e) => handleUpdate(item.id, e.target.value)}
                placeholder="思い立ったらここに自由に書き込んでね..."
                className="w-full bg-[#FAF8F5] text-[#4A3E3D] p-3 rounded-xl border border-[#A3C9A8]/30 focus:border-[#F4A69A] focus:outline-none resize-none h-24 text-sm leading-relaxed placeholder-[#4A3E3D]/30"
              />
            </div>
          ))}
        </main>

      </div>
    </div>
  );
}