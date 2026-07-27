function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="14" y="16" width="42" height="54" rx="8" className="fill-green" opacity="0.55" />
      <rect x="24" y="10" width="42" height="54" rx="8" className="fill-green-dark" />
      <rect x="32" y="20" width="16" height="20" rx="2" className="fill-white" />
      <circle cx="32" cy="48" r="2.5" className="fill-white" />
      <circle cx="32" cy="56" r="2.5" className="fill-white" />
      <circle cx="58" cy="20" r="2.5" className="fill-white" />
      <circle cx="58" cy="28" r="2.5" className="fill-white" />
      <circle cx="58" cy="36" r="2.5" className="fill-white" />
      <circle cx="58" cy="44" r="2.5" className="fill-white" />
      <circle cx="58" cy="52" r="2.5" className="fill-white" />
    </svg>
  );
}

const purchaseSteps = [
  {
    n: "01",
    title: "作品を選ぶ",
    body: "タッチパネルにて厳選された作品から見たい映画を選ぶ。",
  },
  {
    n: "02",
    title: "支払う",
    body: "サブ画面で詳細やカードのデザインを確認し、支払いを行う。",
  },
  {
    n: "03",
    title: "アプリを準備",
    body: "カードが印刷されている間に専用アプリをダウンロード。",
  },
  {
    n: "04",
    title: "受け取る",
    body: "マシンからカードを受け取る。",
  },
];

const watchSteps = [
  {
    n: "05",
    title: "かざす",
    body: "カードをスマホにかざし、データを読み込ませる。",
  },
  {
    n: "06",
    title: "確かめる",
    body: "アプリ内では3D化されたパッケージを操作し、詳細や付属コンテンツも見れる。",
  },
  {
    n: "07",
    title: "鑑賞する",
    body: "再生したい時はディスクをタップし、スマホやテレビにて鑑賞できる。",
  },
  {
    n: "08",
    title: "集める",
    body: "カードはデジタルで複製され、フィジカルでもデジタルでもコレクションができる。",
  },
];

const highlights = [
  {
    title: "ちょうどいい制約",
    body: "映画選びと映画鑑賞にワンクッション置いて、選び疲れない“ちょうどいい”制約を作る。",
  },
  {
    title: "キュレーション",
    body: "週替わり、月替わりに季節・時期・地域に合わせてキュレートされた作品を提供。",
  },
  {
    title: "フィジカル×デジタル",
    body: "フィジカルとデジタルをシームレスに連携させ、レトロ感を作りながら便利さも重視。",
  },
  {
    title: "コレクション",
    body: "カードシステムにて鑑賞履歴の保存や限定デザインを集めることも出来る。",
  },
];

const comparisons = [
  {
    aspect: "作品選び",
    streaming: "無限のラインナップから毎回選び直す必要があり、選択疲れが起きる。",
    filmkeep: "自販機に並ぶ厳選された作品から選ぶだけ。選択肢は少数だからこそ選びやすい。",
  },
  {
    aspect: "所有感",
    streaming: "アカウントを解約すれば、鑑賞履歴もお気に入りも手元に残らない。",
    filmkeep: "カードはフィジカルにもデジタルにも残り、鑑賞の記録がコレクションになる。",
  },
  {
    aspect: "視聴体験",
    streaming: "見終えてもただ消費させられた気持ちになったり、集中が切れて他の作業のBGMになりがち。",
    filmkeep: "一本のカードと向き合う体験だからこそ、一本の作品にじっくり集中できる。",
  },
  {
    aspect: "出会い方",
    streaming: "アルゴリズムのレコメンドに沿った、似たような作品との出会いが多い。",
    filmkeep: "自販機というフィジカルな場での、思いがけない一本との出会いを届ける。",
  },
];

export default function Home() {
  return (
    <article className="flex flex-col gap-24 md:gap-32">
      <nav className="flex items-center justify-between pt-4">
        <div className="flex items-center gap-2">
          <LogoMark className="w-8 h-8" />
          <span className="font-brand text-lg tracking-wide text-green-dark">
            FILM KEEP
          </span>
        </div>
        <div className="hidden sm:flex gap-6 text-sm text-slate">
          <a href="#how" className="hover:text-green-dark">使い方</a>
          <a href="#why" className="hover:text-green-dark">魅力</a>
          <a href="#diff" className="hover:text-green-dark">違い</a>
        </div>
      </nav>

      <section className="flex flex-col items-center text-center gap-6 pt-8">
        <LogoMark className="w-20 h-20" />
        <div>
          <h1 className="font-brand text-5xl md:text-6xl tracking-wide">
            FILM KEEP
          </h1>
          <p className="font-catch text-4xl md:text-5xl text-green mt-2">
            your encounter with film
          </p>
        </div>
        <p className="max-w-xl">
          自販機でカードを買い、スマホにかざして映画を読み込む。
          ストリーミングの無限の選択肢に疲れた人へ、厳選された一本との出会いを届ける新しい映画体験。
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <a
            href="#how"
            className="px-6 py-3 rounded-md bg-green-dark text-white hover:bg-green-hover transition-colors"
          >
            使い方を見る
          </a>
          <a
            href="#why"
            className="px-6 py-3 rounded-md border border-green-dark text-green-dark hover:bg-green-light transition-colors"
          >
            サービスの魅力
          </a>
        </div>
      </section>

      <section id="how" className="flex flex-col gap-12">
        <div className="text-center">
          <h2>使い方</h2>
          <p className="max-w-xl mx-auto">
            自販機でカードを手に入れてから、映画を楽しむまでの8つのステップ。
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-green-dark">STEP 1–4. カードを手に入れる</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {purchaseSteps.map((step) => (
              <div
                key={step.n}
                className="flex flex-col gap-2 p-5 bg-white rounded-lg border border-green-dark-light"
              >
                <span className="font-brand text-2xl text-green">{step.n}</span>
                <h3 className="text-base">{step.title}</h3>
                <p className="text-sm">{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-green-dark">STEP 5–8. 映画を楽しむ</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {watchSteps.map((step) => (
              <div
                key={step.n}
                className="flex flex-col gap-2 p-5 bg-white rounded-lg border border-green-dark-light"
              >
                <span className="font-brand text-2xl text-green">{step.n}</span>
                <h3 className="text-base">{step.title}</h3>
                <p className="text-sm">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="flex flex-col gap-10">
        <div className="text-center">
          <h2>魅力</h2>
          <p className="max-w-xl mx-auto">
            FILM KEEPが大切にしている、4つのこと。
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="p-6 bg-green-dark rounded-lg text-white"
            >
              <h3 className="text-white mb-2">{item.title}</h3>
              <p className="text-white/85">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="diff" className="flex flex-col gap-10">
        <div className="text-center">
          <h2>他のサービスとの違い</h2>
          <p className="max-w-xl mx-auto">
            こんな経験、ありませんか？ オプションが多すぎて選ぶのに疲れる。最後まで見ても消費させられた気持ちになる。
            集中力が途中で切れて、映画が別作業のBGMになる。FILM KEEPは、その悩みに向き合うためのサービスです。
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="hidden md:grid grid-cols-[1fr_2fr_2fr] gap-4 px-6 text-sm text-slate">
            <span />
            <span className="font-semibold">一般的なストリーミングサービス</span>
            <span className="font-semibold text-green-dark">FILM KEEP</span>
          </div>
          {comparisons.map((row) => (
            <div
              key={row.aspect}
              className="grid md:grid-cols-[1fr_2fr_2fr] gap-4 p-6 bg-white rounded-lg border border-green-dark-light"
            >
              <h3 className="text-base text-slate-dark">{row.aspect}</h3>
              <p className="text-sm">{row.streaming}</p>
              <p className="text-sm text-green-dark">{row.filmkeep}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="flex flex-col items-center gap-3 pb-8 text-center border-t border-green-dark-light pt-10">
        <div className="flex items-center gap-2">
          <LogoMark className="w-6 h-6" />
          <span className="font-brand text-base tracking-wide text-green-dark">
            FILM KEEP
          </span>
        </div>
        <p className="font-catch text-xl text-green">your encounter with film</p>
        <p className="text-xs text-slate">
          © 2026 FILM KEEP — インタラクションデザインII プロトタイプ
        </p>
      </footer>
    </article>
  );
}
