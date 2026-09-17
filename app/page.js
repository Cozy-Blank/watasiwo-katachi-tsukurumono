"use client";

import { useState } from "react";
import { questions } from "../data/questions";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const [answers, setAnswers] = useState({});

  // カテゴリ（章）一覧の取得
  const categories = ["すべて", ...Array.from(new Set(questions.map((q) => q.category)))];

  // 選択中のカテゴリで質問を絞り込み
  const filteredQuestions = selectedCategory === "すべて"
    ? questions
    : questions.filter((q) => q.category === selectedCategory);

  // 回答テキストの入力更新
  const handleAnswerChange = (id, text) => {
    setAnswers((prev) => ({ ...prev, [id]: text }));
  };

  // 回答済みの総数をカウント
  const answeredCount = Object.values(answers).filter((a) => a.trim() !== "").length;

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px", fontFamily: "sans-serif", color: "#0f172a" }}>
      {/* スマホ対応バナー画像 */}
      <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto 24px auto" }}>
  <img src="/new-banner.png" alt="新しいトップバナー" style={{ width: "100%", height: "auto" }} />
</div>

      <h1 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "8px" }}>高尚ナル偏愛マニアの100の問い</h1>
      <p style={{ color: "#64748b", marginBottom: "20px" }}>自らの美学・存在・思考の深淵と静かに向き合う対話録</p>
      
      {/* 進捗バー */}
      <div style={{ padding: "12px 16px", backgroundColor: "#f1f5f9", borderRadius: "8px", marginBottom: "32px", fontSize: "14px", fontWeight: "bold" }}>
        回答進捗: {answeredCount} / {questions.length}
      </div>

      {/* CHAPTERS / 章目次 */}
      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>CHAPTERS / 章目次</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {categories.map((cat) => {
            const countInCategory = cat === "すべて"
              ? questions.length
              : questions.filter(q => q.category === cat).length;
            const answeredInCategory = cat === "すべて"
              ? answeredCount
              : questions.filter(q => q.category === cat && answers[q.id]?.trim()).length;

            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "8px 12px",
                  borderRadius: "6px",
                  border: isActive ? "1px solid #0f172a" : "1px solid #cbd5e1",
                  backgroundColor: isActive ? "#0f172a" : "#ffffff",
                  color: isActive ? "#ffffff" : "#334155",
                  cursor: "pointer",
                  fontSize: "13px",
                  transition: "all 0.2s ease",
                }}
              >
                {cat} {answeredInCategory}/{countInCategory}
              </button>
            );
          })}
        </div>
      </section>

      {/* 質問カードリスト */}
      <section style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {filteredQuestions.map((q) => (
          <div
            key={q.id}
            style={{
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid #e2e8f0",
              backgroundColor: "#ffffff",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
            }}
          >
            <div style={{ fontSize: "12px", color: "#64748b", marginBottom: "4px" }}>
              {q.category}
            </div>
            <div style={{ fontSize: "14px", fontWeight: "bold", color: "#475569", marginBottom: "6px" }}>
              Q.{q.id}
            </div>
            <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px", lineHeight: "1.4" }}>
              {q.question}
            </h3>
            {q.description && (
              <p style={{ fontSize: "14px", color: "#475569", marginBottom: "14px", lineHeight: "1.5" }}>
                {q.description}
              </p>
            )}
            <textarea
              value={answers[q.id] || ""}
              onChange={(e) => handleAnswerChange(q.id, e.target.value)}
              placeholder={q.placeholder || "思考を書き留める..."}
              rows={3}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #cbd5e1",
                fontSize: "14px",
                fontFamily: "inherit",
                resize: "vertical",
                boxSizing: "border-box"
              }}
            />
          </div>
        ))}
      </section>
    </main>
  );
}