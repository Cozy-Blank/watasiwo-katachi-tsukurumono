'use client';

import { useState } from 'react';

export default function Home() {
  const categories = [
    {
      title: "🌙 日常の行い・ひそかな癖",
      color: "bg-amber-50/80 border-amber-200 text-amber-950",
      badge: "bg-amber-500",
      inputBorder: "focus:ring-amber-400 border-amber-200",
      questions: [
        "疲れた夜に無心で観てしまう動画のジャンル",
        "なぜか捨てられずに放置している謎のガジェット・小物",
        "家に一人でいるときだけやっている無意味な動作",
        "コンビニに入ると用もないのに必ずチェックしてしまうコーナー",
        "集中したい時に無意識に聴いているマニアックなBGM",
        "風呂場でつい考えてしまうくだらない議論",
        "人には理解されない自分だけの快感・マニアックな瞬間",
        "爪を伸ばす・切るタイミングの自分ルール",
        "スマホの検索履歴の最新3つ（恥ずかしいやつ）",
        "洗濯物をたたむときに譲れないマイルール"
      ]
    },
    {
      title: "💭 思考・妄想・脳内再生",
      color: "bg-purple-50/80 border-purple-200 text-purple-950",
      badge: "bg-purple-500",
      inputBorder: "focus:ring-purple-400 border-purple-200",
      questions: [
        "もし明日地球が終わるなら最後に食べる「B級グルメ」",
        "脳内で100万回再生された過去の恥ずかしいフラッシュバック",
        "宝くじで10億円当たったら最初に買う「誰も得しないもの」",
        "妄想の中で自分が無双しているシチュエーション",
        "死ぬまでに一度は言ってみたい格好つけたセリフ",
        "実は密かに憧れている「フィクションの職業」",
        "自分だけの世界観に浸れる最高の「妄想BGM」",
        "自分が映画の主人公だったら流れてほしいエンディング曲",
        "理由はないけれど、昔からなぜか惹かれる言葉・単語",
        "生まれ変わったらなってみたい「人間以外のもの」"
      ]
    },
    {
      title: "🍕 食・味覚の偏愛",
      color: "bg-rose-50/80 border-rose-200 text-rose-950",
      badge: "bg-rose-500",
      inputBorder: "focus:ring-rose-400 border-rose-200",
      questions: [
        "他人には見せられない「ズボラ飯・奇妙な食べ合わせ」",
        "結局一番うまいと思っている「安価な市販のお菓子」",
        "ラーメン屋でスープを一口飲んだ瞬間の心の中のリアクション",
        "どんなにお腹がいっぱいでも入る「別腹」なもの",
        "ファミレスに入ったら絶対に頼んでしまうメニュー",
        "テンションがブチ上がる自作の超ピンポイントレシピ",
        "実は苦手だけど大人ぶって食べられるフリをしている食べ物",
        "カレーに絶対に入れたい自分だけの隠し味",
        "「これさえあれば白米が無限にいける」と思う最高のお供",
        "深夜2時に食べると最高に背徳感があるもの"
      ]
    },
    {
      title: "⏱️ 時間・隙間・行動パターン",
      color: "bg-sky-50/80 border-sky-200 text-sky-950",
      badge: "bg-sky-500",
      inputBorder: "focus:ring-sky-400 border-sky-200",
      questions: [
        "5分の待ち時間が発生したときに真っ先にやること",
        "休日を完璧に無駄にした日の言い訳",
        "予定が突然キャンセルされた瞬間の本心",
        "布団に入ってから寝落ちするまでの平均思考ルーティン",
        "待ち合わせ場所に30分早く着いたときの時間の潰し方",
        "休日の午前中を最高にするために必要な1つの行動",
        "急に思い立って深夜に始めてしまう部屋の模様替え・作業",
        "雨の日に家から一歩も出ないでやること",
        "電車の乗り換えで絶対に座りたいときの視線と立ち位置",
        "朝起きてから最初に発する言葉または声"
      ]
    },
    {
      title: "⚠️ 失敗・反省・やってはいけない禁忌",
      color: "bg-orange-50/80 border-orange-200 text-orange-950",
      badge: "bg-orange-500",
      inputBorder: "focus:ring-orange-400 border-orange-200",
      questions: [
        "深酒したときに「絶対にやってはいけない」マイルール",
        "テンションが上がっている時にやりがちな痛い行動",
        "ネットショッピングで酔った勢いで買って後悔したもの",
        "人に言われて地味にショックだった「自分の癖」",
        "怒られた時に脳内で流れている現実逃避の映像",
        "緊張すると出てしまう体調や行動の変異",
        "アラームを止めた後の「あと5分」で見る夢",
        "人の前でやらかした人生最大の「言い間違い」",
        "SNSで投稿ボタンを押す直前に怖くなって消した文章の傾向",
        "後から振り返ると黒歴史な昔のマイブーム"
      ]
    },
    {
      title: "📦 買い物・モノ・積み偏愛",
      color: "bg-emerald-50/80 border-emerald-200 text-emerald-950",
      badge: "bg-emerald-500",
      inputBorder: "focus:ring-emerald-400 border-emerald-200",
      questions: [
        "読みたくて買ったのに本棚で寝かしている本",
        "インストールしたものの1回も開いていないアプリ",
        "衝動買いしたけれど一度も外に着ていっていない服",
        "カバンの中に常に入っていないと不安になるもの",
        "なぜか定期的に買ってしまう同じようなデザインのアイテム",
        "部屋の中で一番愛着がある「一見ゴミに見えるもの」",
        "パッケージ買い（パケ買い）して大成功したアイテム",
        "値段の割にQOL（生活の質）が爆上がりした最高の買い物",
        "いつか絶対に使いたいと思って大切に保管している箱や紙袋",
        "「これは自分しか買ってないだろ」と思うニッチな愛用品"
      ]
    },
    {
      title: "🤝 人間関係・距離感",
      color: "bg-indigo-50/80 border-indigo-200 text-indigo-950",
      badge: "bg-indigo-500",
      inputBorder: "focus:ring-indigo-400 border-indigo-200",
      questions: [
        "人と接するときに密かに観察しているフェチポイント",
        "「この人とは気が合うな」と確信する瞬間",
        "逆に「あ、ちょっと苦手かも」と察する相手の小さな行動",
        "LINEの返信をあえて数時間遅らせるときの理由",
        "大人数での飲み会で真っ先に座るポジション",
        "人から褒められたときに一番嬉しい言葉",
        "初対面の人に自己紹介するとき、あえて言わないでおくこと",
        "「自分って実は性格悪いな」と自覚する瞬間",
        "友達に「これ知ってる？」と教えたくなるマニアックな雑学",
        "人にされて一番テンションが下がること"
      ]
    },
    {
      title: "👁️ 五感・フェチズム",
      color: "bg-pink-50/80 border-pink-200 text-pink-950",
      badge: "bg-pink-500",
      inputBorder: "focus:ring-pink-400 border-pink-200",
      questions: [
        "理由は言えないけれど「大好きな匂い・香り」",
        "聴くと鳥肌が立つ「大好物な音（ASMR的なもの）」",
        "触っているだけで心が落ち着く素材・触感",
        "街中で見かけるとつい視線で追ってしまうもの",
        "季節の変わり目に感じる「あの独特な空気」の正体",
        "なぜか心が落ち着く「特定の場所・空間」",
        "自分の部屋の中で最も視界に入ると落ち着くアングル",
        "色の中で無意識に選んでしまう「偏愛カラー」",
        "見ているだけでテンションが上がる幾何学模様や建築",
        "理由もなく好きな「特定の文字の形・フォント」"
      ]
    },
    {
      title: "🔥 マニアックなこだわり・マイブーム",
      color: "bg-teal-50/80 border-teal-200 text-teal-950",
      badge: "bg-teal-500",
      inputBorder: "focus:ring-teal-400 border-teal-200",
      questions: [
        "今、一番時間を忘れて没頭できるマイブーム",
        "周りには一切共感されない「自分だけのフェチ」",
        "どんなに疲れていてもこれだけは欠かさない日課",
        "ゲームでキャラメイクするときに絶対入れるこだわり",
        "スマホのホーム画面の並び順に関する譲れないルール",
        "自分だけが知っている地元の「秘密のスポット」",
        "「これの専門家になれるかも」と思うくらい詳しい分野",
        "映画やドラマで一番感情移入してしまうキャラクターのタイプ",
        "今一番会って語り合いたい歴史上の人物または架空のキャラ",
        "死ぬまでに一度は挑戦してみたい奇抜な体験"
      ]
    },
    {
      title: "🧩 偏愛・ワタシの構成要素",
      color: "bg-violet-50/80 border-violet-200 text-violet-950",
      badge: "bg-violet-500",
      inputBorder: "focus:ring-violet-400 border-violet-200",
      questions: [
        "自分の人生に一番影響を与えた「一冊の作品」",
        "聴くだけで特定の時代にタイムスリップできる思い出の曲",
        "自分の精神年齢は何歳だと思っているか",
        "自分の「説明書」の一ページ目に書くべき注意事項",
        "自分の性格を動物に例えるなら",
        "自分の「取扱説明書」に載っている「長持ちさせるコツ」",
        "自分の弱点を克服するために試した珍しい方法",
        "自分の長所をひとつだけ自慢するなら",
        "これから新しく「偏愛」したい探求中のテーマ",
        "一言で表すなら「ワタシをかたちづくるもの」とは？"
      ]
    }
  ];

  const [answers, setAnswers] = useState({});

  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <main className="min-h-screen bg-slate-100 pb-20 font-sans">
      {/* スマホ最適化ヘッダー・バナー */}
      <header className="w-full bg-white/95 backdrop-blur-md shadow-sm mb-6 sticky top-0 z-20 border-b border-slate-200/60">
        <div className="max-w-md mx-auto px-4 py-3 text-center">
          <div className="w-full h-auto max-h-36 overflow-hidden rounded-xl shadow-inner mb-2 bg-slate-50 flex items-center justify-center border border-slate-100">
            <img
              src="/katati.png"
              alt="バナー画像"
              className="w-full h-auto max-h-36 object-contain rounded-xl"
            />
          </div>
          <h1 className="text-lg font-bold text-slate-800 tracking-tight">わたしをかたちづくるもの</h1>
          <p className="text-[11px] font-medium text-slate-500 mt-0.5">100の偏愛＆クセつよ質問リスト</p>
        </div>
      </header>

      {/* 100の質問＋直感入力欄 */}
      <div className="max-w-md mx-auto px-3.5 space-y-6">
        {categories.map((category, catIdx) => (
          <section key={catIdx} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/70">
            <h2 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2 border-b border-slate-100 pb-2.5">
              <span className={`w-2.5 h-2.5 rounded-full ${category.badge}`}></span>
              {category.title}
            </h2>
            <div className="space-y-3">
              {category.questions.map((q, qIdx) => {
                const qNum = catIdx * 10 + qIdx + 1;
                const qId = `q_${qNum}`;
                return (
                  <div key={qIdx} className={`p-3 rounded-xl border ${category.color} transition-all`}>
                    <div className="flex items-start gap-2 mb-2">
                      <span className={`text-[10px] font-extrabold text-white px-2 py-0.5 rounded-md ${category.badge} shrink-0 mt-0.5`}>
                        Q.{qNum}
                      </span>
                      <p className="text-xs font-bold leading-relaxed">{q}</p>
                    </div>
                    <input
                      type="text"
                      placeholder="直感で回答を入力..."
                      value={answers[qId] || ''}
                      onChange={(e) => handleChange(qId, e.target.value)}
                      className={`w-full text-xs px-3 py-2 rounded-lg bg-white/90 border ${category.inputBorder} focus:outline-none focus:ring-2 transition-all placeholder:text-slate-400 text-slate-800 shadow-sm`}
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