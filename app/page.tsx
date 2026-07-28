import Image from "next/image";

function BrandMark({
  iconSize,
  wordmarkWidth,
}: {
  iconSize: number;
  wordmarkWidth: number;
}) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/logo/logo-symbol.svg"
        alt=""
        width={iconSize}
        height={iconSize}
      />
      <Image
        src="/logo/logotype.svg"
        alt="FILM KEEP"
        width={wordmarkWidth}
        height={Math.round((wordmarkWidth * 71.61) / 257.74)}
      />
    </div>
  );
}

const purchaseSteps = [
  {
    n: "01",
    image: "/steps/step-1.png",
    title: "作品を選ぶ",
    body: "タッチパネルにて厳選された作品から見たい映画を選ぶ。",
  },
  {
    n: "02",
    image: "/steps/step-2.png",
    title: "支払う",
    body: "サブ画面で詳細やカードのデザインを確認し、支払いを行う。",
  },
  {
    n: "03",
    image: "/steps/step-3.png",
    title: "アプリを準備",
    body: "カードが印刷されている間に専用アプリをダウンロード。",
  },
  {
    n: "04",
    image: "/steps/step-4.png",
    title: "受け取る",
    body: "マシンからカードを受け取る。",
  },
];

const watchSteps = [
  {
    n: "05",
    image: "/steps/step-5.png",
    title: "かざす",
    body: "カードをスマホにかざし、データを読み込ませる。",
  },
  {
    n: "06",
    image: "/steps/step-6.png",
    title: "確かめる",
    body: "アプリ内では3D化されたパッケージを操作し、詳細や付属コンテンツも見られる。",
  },
  {
    n: "07",
    image: "/steps/step-7.png",
    title: "鑑賞する",
    body: "再生したい時はディスクをタップし、スマホやテレビにて鑑賞できる。",
  },
  {
    n: "08",
    image: "/steps/step-8.png",
    title: "集める",
    body: "カードはデジタルで複製され、フィジカルでもデジタルでもコレクションができる。",
  },
];

const highlights = [
  {
    image: "/highlights/highlight-1.png",
    title: "ちょうどいい制約",
    body: "映画選びと映画鑑賞にワンクッション置いて、選び疲れない“ちょうどいい”制約を作る。",
  },
  {
    image: "/highlights/highlight-2.png",
    title: "キュレーション",
    body: "週替わり、月替わりに季節・時期・地域に合わせてキュレートされた作品を提供。",
  },
  {
    image: "/highlights/highlight-3.png",
    title: "フィジカル×デジタル",
    body: "フィジカルとデジタルをシームレスに連携させ、レトロ感を作りながら便利さも重視。",
  },
  {
    image: "/highlights/highlight-4.png",
    title: "コレクション",
    body: "カードシステムにて鑑賞履歴の保存や限定デザインを集めることも出来る。",
  },
];

const painPoints = [
  { image: "/highlights/painpoint-1.png", label: "選択肢が多すぎて疲れる" },
  { image: "/highlights/painpoint-2.png", label: "消費させられた気持ちになる" },
  { image: "/highlights/painpoint-3.png", label: "別作業のBGMになってしまう" },
];

const comparisons = [
  {
    aspect: "作品選び",
    streaming: "幾多のラインナップから毎回選び直す必要があり、選択疲れが起きる。",
    filmkeep: "映画販売機に並ぶ厳選された作品から選ぶだけ。選択肢は少数だからこそ選びやすい。",
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
    filmkeep: "自販機というフィジカルな場での、思いがけない一本、自分が選んだ一本との出会いを届ける。",
  },
];

export default function Home() {
  return (
    <article className="flex flex-col gap-24 md:gap-32">
      <nav className="flex items-center justify-between pt-4">
        <BrandMark iconSize={32} wordmarkWidth={112} />
        <div className="hidden sm:flex gap-6 text-sm text-slate">
          <a href="#prototype" className="hover:text-green-dark">プロトタイプ</a>
          <a href="#how" className="hover:text-green-dark">使い方</a>
          <a href="#why" className="hover:text-green-dark">魅力</a>
          <a href="#diff" className="hover:text-green-dark">違い</a>
        </div>
      </nav>

      <section className="flex flex-col items-center text-center gap-6 pt-8">
        <div className="flex flex-col items-center gap-4">
          <Image src="/logo/logo-symbol.svg" alt="" width={112} height={112} />
          <Image src="/logo/logotype.svg" alt="FILM KEEP" width={280} height={78} />
        </div>
        <p className="font-catch text-4xl md:text-5xl text-green">
          your encounter with film
        </p>
        <p className="max-w-xl">
          映画販売機でカードを買い、スマホにかざして映画を読み込む。
          ストリーミングの幾多の選択肢に疲れた人へ、厳選された一本との出会いを届ける新しい映画体験。
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

      <section id="prototype" className="flex flex-col gap-10">
        <div className="text-center">
          <h2>プロトタイプ</h2>
          <p className="max-w-xl mx-auto">
            実際に制作した自販機・カード・アプリのプロトタイプ。
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg border border-green-dark-light">
            <Image
              src="/prototype/machine.png"
              alt="自販機の実機プロトタイプ"
              width={238}
              height={791}
              className="h-72 w-auto rounded-md"
            />
            <h3 className="text-base">実機</h3>
            <p className="text-sm text-center">
              タッチパネルと決済端末を備えた映画販売機の試作機。
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg border border-green-dark-light">
            <Image
              src="/prototype/card.png"
              alt="カードのデザイン案"
              width={252}
              height={356}
              className="h-72 w-auto rounded-md"
            />
            <h3 className="text-base">カード</h3>
            <p className="text-sm text-center">
              作品ごとに異なるデザインになる予定のカード（現在デザイン中のため、ポスターで代替）。
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-lg border border-green-dark-light">
            <div className="flex flex-wrap justify-center gap-2">
              <Image
                src="/prototype/app-1.png"
                alt="アプリ：タップで開く"
                width={362}
                height={608}
                className="h-40 w-auto rounded-md"
              />
              <Image
                src="/prototype/app-2.png"
                alt="アプリ：スワイプで再生"
                width={362}
                height={608}
                className="h-40 w-auto rounded-md"
              />
              <Image
                src="/prototype/app-3.png"
                alt="アプリ：再生画面"
                width={362}
                height={608}
                className="h-40 w-auto rounded-md"
              />
            </div>
            <h3 className="text-base">アプリ</h3>
            <p className="text-sm text-center">
              カードをかざすと開く、専用アプリのプロトタイプ。
            </p>
            {/* Figmaの操作可能プロトタイプへのリンク（準備中のため非表示）
            <a
              href="https://www.figma.com/proto/rrkuEjh4NOpbI9KaItbWtY/%E7%84%A1%E9%A1%8C?node-id=1-4&viewport=-20%2C258%2C0.44&t=R7eA86iCQTom4OxI-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A4&page-id=0%3A1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-green-dark underline hover:text-green-hover"
            >
              プロトタイプを操作する
            </a> */}
           
          </div>
        </div>
      </section>

      <section id="how" className="flex flex-col gap-12">
        <div className="text-center">
          <h2>使い方</h2>
          <p className="max-w-xl mx-auto">
            映画販売機でカードを手に入れてから、映画を楽しむまでの8つのステップ。
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-green-dark">STEP 1-4. カードを手に入れる</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {purchaseSteps.map((step) => (
              <div
                key={step.n}
                className="flex flex-col gap-2 p-5 bg-white rounded-lg border border-green-dark-light"
              >
                <Image
                  src={step.image}
                  alt=""
                  width={400}
                  height={400}
                  className="w-40 h-40 self-center"
                />
                <span className="font-brand text-2xl text-green">{step.n}</span>
                <h3 className="text-base">{step.title}</h3>
                <p className="text-sm">{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-green-dark">STEP 5-8. 映画を楽しむ</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {watchSteps.map((step) => (
              <div
                key={step.n}
                className="flex flex-col gap-2 p-5 bg-white rounded-lg border border-green-dark-light"
              >
                <Image
                  src={step.image}
                  alt=""
                  width={400}
                  height={400}
                  className="w-40 h-40 self-center"
                />
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
              className="flex flex-col gap-2 p-5 bg-green-dark rounded-lg text-white"
            >
              <Image
                src={item.image}
                alt=""
                width={200}
                height={200}
                className="w-40 h-40  self-center shrink-0 rounded-full bg-white/95 p-1"
              />
              <div>
                <h3 className="text-white mb-2">{item.title}</h3>
                <p className="text-white/85">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="diff" className="flex flex-col gap-10">
        <div className="text-center">
          <h2>他のサービスとの違い</h2>
          <p className="max-w-xl mx-auto">
            こんな経験、ありませんか？ FILM KEEPは、その悩みに向き合うためのサービスです。
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {painPoints.map((point) => (
            <div key={point.label} className="flex flex-col items-center gap-2 max-w-32">
              <Image
                src={point.image}
                alt=""
                width={200}
                height={200}
                className="w-25 h-25 rounded-full"
              />
              <p className="text-xs text-center">{point.label}</p>
            </div>
          ))}
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
              <p className="text-sm text-center text-slate md:hidden">↓</p>
              <p className="text-sm text-green-dark">{row.filmkeep}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="flex flex-col items-center gap-3 pb-8 text-center border-t border-green-dark-light pt-10">
        <BrandMark iconSize={28} wordmarkWidth={100} />
        <p className="font-catch text-xl text-green">your encounter with film</p>
        <p className="text-xs text-slate">
          © 2026 FILM KEEP — インタラクションデザインII プロトタイプ
        </p>
      </footer>
    </article>
  );
}
