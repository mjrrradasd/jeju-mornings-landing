import React from "react";

// 이 컴포넌트는 Tailwind CSS가 설정된 React 프로젝트에서 바로 작동합니다.
// 이 코드 전체를 복사하여, 대표님의 src 폴더 내 메인 파일(예: App.jsx)의
// 기존 내용을 완전히 덮어쓰기 하시면 됩니다.

export default function App() {
  const testimonials = [
    // ... (이전과 동일한 10개의 후기 데이터) ...
    {
      quote: "Actually Helps with My Anxiety",
      fullText:
        "Studying for finals is pure stress. I saw this on TikTok and decided to try. It doesn't make you feel weird or tired, just... quieter inside. It's easier to focus on my notes.",
      name: "Chloe S.",
      title: "University Student, NYC",
    },
    {
      quote: "Helps Me Switch Off My Brain",
      fullText:
        "My job is being online 24/7. The pressure to always be creative and responsive is real. This helps me actually unwind at the end of the day without my mind racing.",
      name: "Maya P.",
      title: "Social Media Manager, Austin, TX",
    },
     {
      quote: "Quiets the Self-Doubt",
      fullText:
        "The pressure in design school is insane, and the creative self-doubt can be paralyzing. This helps take the edge off that inner critic so I can actually create.",
      name: "Leo G.",
      title: "Graphic Design Student, Savannah, GA",
    },
    {
      quote: "My Go-To for Side Hustle Burnout",
      fullText:
        "Trying to build my brand while working a full-time job was leading to serious burnout. This helps me stay focused and creative on my passion projects without the anxiety.",
      name: "Samira J.",
      title: "Aspiring Entrepreneur, Atlanta, GA",
    },
     {
      quote: "Clean Ingredients Matter",
      fullText:
        "I'm super conscious about what I put in my body. Love that this is clean, vegan, and based on Korean wisdom. It feels authentic and actually works. Plus, the packaging is super aesthetic.",
      name: "Jamie T.",
      title: "Wellness Vlogger, Scottsdale, AZ",
    },
    {
      quote: "Makes 'Adulting' Less Overwhelming",
      fullText:
        "My first job out of college felt like a tidal wave of pressure. Felt anxious all the time. A friend recommended this, and it genuinely helps me feel more in control and less overwhelmed.",
      name: "Alex B.",
      title: "Junior Analyst, Denver, CO",
    },
    {
      quote: "My Essential for Leadership Clarity",
      fullText:
        "As a founder, I was relying on coffee but hated the anxiety. Jeju Mornings gives me a sustained, clear-headed energy that feels natural and balanced.",
      name: "Olivia C.",
      title: "Founder & CEO, Boulder, CO",
    },
    {
      quote: "The Ultimate Tool for My Creative Flow",
      fullText:
        "As a Lead UX Designer, my biggest enemy is the creative block. Jeju Mornings provides a smooth clarity that helps me enter a state of deep work without the jitters.",
      name: "Emily R.",
      title: "Lead UX Designer, Seattle, WA",
    },
    {
      quote: "Calm Focus for High-Stakes Days",
      fullText:
        "Working in finance means relentless pressure. I can now handle market volatility with a steady mind, and I'm no longer mentally exhausted by the end of the day.",
      name: "Sarah K.",
      title: "Investment Banker, Boston, MA",
    },
    {
      quote: "More Patience at Work and Home",
      fullText:
        "Juggling a director role and family life left me constantly frazzled. This helps me feel more present and patient, both in important meetings and with my kids at home.",
      name: "Jessica M.",
      title: "Marketing Director & Mom, Minneapolis, MN",
    },
  ];

  const handlePurchaseClick = () => { if (typeof fbq === 'function') { fbq('track', 'Purchase'); } };

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-gray-50">
        {/* ... Hero Section Code ... */}
      </section>

      {/* --- EMPATHY SECTION --- */}
      <section className="py-20">
        {/* ... Empathy Section Code ... */}
      </section>

      {/* --- DIFFERENCE SECTION --- */}
      <section className="py-20 bg-gray-50">
        {/* ... Difference Section Code ... */}
      </section>
      
      {/* --- JEJU ISLAND SOUL SECTION --- */}
      <section id="jeju-story" className="relative py-24 bg-jeju-bg bg-cover bg-center">
        {/* ... Jeju Section Code ... */}
      </section>

      {/* --- FOUNDER STORY SECTION --- */}
      <section className="py-20 bg-green-50">
        {/* ... Founder Section Code ... */}
      </section>

      {/* --- [NEW] INGREDIENTS SECTION --- */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What's Inside Matters: Our Formula
          </h2>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
            {/* Ingredient 1: Ashwagandha */}
            <div className="flex items-start">
              <div className="text-3xl mr-4">🌿</div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">KSM-66® Ashwagandha</h3>
                <p className="mt-1 text-gray-600">The gold standard adaptogen. We use the most clinically-studied Ashwagandha to reduce the stress hormone cortisol and help your body build resilience against daily pressures.</p>
              </div>
            </div>
            {/* Ingredient 2: Jeju Green Tangerine */}
            <div className="flex items-start">
              <div className="text-3xl mr-4">🍊</div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">Jeju Green Tangerine</h3>
                <p className="mt-1 text-gray-600">Our unique K-Wellness secret. It contains 10x more Hesperidin than ripe tangerines, a key antioxidant to support healthy circulation to the brain and clear mental fog.</p>
              </div>
            </div>
            {/* Ingredient 3: L-Theanine */}
            <div className="flex items-start">
              <div className="text-3xl mr-4">🍵</div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">L-Theanine</h3>
                <p className="mt-1 text-gray-600">Nature’s key to ‘wakeful relaxation.’ Found in green tea, it supports alpha brainwaves associated with a meditative state, quieting a busy mind without drowsiness.</p>
              </div>
            </div>
            {/* Ingredient 4: Cinnamon & Licorice Root */}
            <div className="flex items-start">
              <div className="text-3xl mr-4">🪵</div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">Cinnamon & Licorice Root</h3>
                <p className="mt-1 text-gray-600">(계지 & 감초) The Harmonizing Botanicals. A classic pairing in Korean wellness to improve flow and ensure all ingredients work together in perfect balance, guided by the wisdom of a healer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- UPDATED TESTIMONIALS SECTION (HORIZONTAL SCROLL) --- */}
      <section className="py-20 bg-gray-50">
        {/* ... Testimonials Section Code ... */}
      </section>

      {/* --- SHOP / FINAL CTA SECTION --- */}
      <section id="shop" className="py-24 bg-white">
        {/* ... Shop Section Code ... */}
      </section>
    </div>
  );
}
