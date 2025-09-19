import React from "react";

export default function App() {
  // 후기 데이터를 밀레니얼(4개)과 Z세대(6개)에 맞춰 총 10개로 확장하고,
  // Z세대 후기가 먼저 보이도록 순서를 조정했으며, 도시 이름을 더 현실감 있게 수정했습니다.
  const testimonials = [
    // --- Gen Z Explorers (6) ---
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
    // --- Millennial Professionals (4) ---
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

  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight lg:text-5xl text-gray-900">
              For Your Performance, and Your Peace of Mind.
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              In a world of constant noise and pressure, find the clarity to
              achieve your goals and the calm to protect your well-being. This
              is your daily tool for a balanced, optimal mind.
            </p>
            <a
              href="#shop"
              className="mt-8 inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-transform duration-300 transform hover:scale-105"
            >
              Discover Your Calm Focus
            </a>
          </div>
          <div>
            <img
              src="https://storage.googleapis.com/gemini-prod/images/b48a032d-3c22-482f-8703-a4c3dfcf732f"
              alt="Jeju Mornings Calm Focus Gummies"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* --- EMPATHY SECTION --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            Sound Like You? You're Not Alone.
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Modern life demands everything from you. We see you, and we created
            this for you.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">🤯</div>
              <h3 className="font-semibold text-lg text-gray-900">
                The "Too Many Tabs" Brain
              </h3>
              <p className="mt-2 text-gray-600">
                Your mind feels like a browser with endless tabs open. You're
                constantly busy, but never truly focused, leaving you feeling
                scattered and unproductive.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">☕️📉</div>
              <h3 className="font-semibold text-lg text-gray-900">
                The Caffeine Rollercoaster
              </h3>
              <p className="mt-2 text-gray-600">
                You rely on coffee to start, but the afternoon brings jitters and
                the inevitable crash. You're trapped in a cycle of artificial
                highs and draining lows.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">⚖️😩</div>
              <h3 className="font-semibold text-lg text-gray-900">
                The Invisible Mental Load
              </h3>
              <p className="mt-2 text-gray-600">
                Beyond work, you're managing the endless to-do list of life. Your
                brain never truly rests, and 'me-time' feels like a distant
                luxury.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">🌿🆚💊</div>
              <h3 className="font-semibold text-lg text-gray-900">
                The Medication Dilemma
              </h3>
              <p className="mt-2 text-gray-600">
                You've considered prescriptions, but fear the side effects and
                the thought of feeling numb or dependent. You're searching for
                a natural, sustainable way to feel like yourself again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- DIFFERENCE SECTION --- */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What Makes Jeju Mornings Different?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="font-semibold text-lg text-gray-900">
                A Systemic Approach
              </h3>
              <p className="mt-2 text-gray-600">
                K-wellness teaches that anxiety isn't just a brain issue, but a
                signal from your entire body's system. We help your body
                find its long-term balance.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl mb-4">👩‍🔬</div>
              <h3 className="font-semibold text-lg text-gray-900">
                A Formula Designed for Women
              </h3>
              <p className="mt-2 text-gray-600">
                Created by a chemist and Korean Medicine Doctor, our formula is
                optimized to support the unique needs of the modern woman's
                demanding lifestyle.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🍊🌿</div>
              <h3 className="font-semibold text-lg text-gray-900">
                The Jeju Island Secret
              </h3>
              <p className="mt-2 text-gray-600">
                Our star ingredient, the Jeju Green Tangerine, contains 10x
                more Hesperidin than ripe ones, a key to fighting stress and
                clearing mental fog.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-4xl mb-4">🍬</div>
              <h3 className="font-semibold text-lg text-gray-900">
                A Joyful Daily Ritual
              </h3>
              <p className="mt-2 text-gray-600">
                No more swallowing pills. Our delicious gummies make your daily
                wellness routine an effortless and enjoyable moment of
                self-care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOUNDER STORY SECTION --- */}
      <section className="py-20 bg-green-50">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://placehold.co/500x500/e2e8f0/334155?text=Founder's\nPhoto"
            alt="Founder Dr. Daehyun Rho"
            className="rounded-full shadow-lg w-64 h-64 object-cover mx-auto"
          />
          <div>
            <p className="text-sm font-semibold text-green-800 mb-2">
              AS FEATURED IN: MAD IN AMERICA
            </p>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Science Meets Wisdom.
            </h2>
            <p className="text-gray-700 mb-4">
              Our founder, Dr. Daehyun Rho—a UIUC-trained chemist and Doctor of
              Korean Medicine—created Jeju Mornings not just as a product, but
              as a response to a broken system. His work is dedicated to
              helping people find true healing beyond temporary fixes.
            </p>
            <blockquote className="border-l-4 border-green-700 pl-4 italic text-gray-800 bg-white p-4 rounded-r-lg mb-6">
              "As a society, we need to be able to clearly distinguish between
              symptom control and true healing."
            </blockquote>
            <a
              href="https://www.madinamerica.com/2025/04/behind-the-smiles-mental-health-in-south-koreas-high-pressure-society/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-green-800 hover:text-green-900"
            >
              Read Dr. Rho's full article on Mad in America →
            </a>
          </div>
        </div>
      </section>

      {/* --- UPDATED TESTIMONIALS SECTION (HORIZONTAL SCROLL) --- */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What Our First Believers are Saying
          </h2>
          <div className="flex overflow-x-auto space-x-8 pb-4 scroll-snap-x-mandatory scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-[45%] lg:w-[30%] scroll-snap-center"
              >
                <div className="border rounded-xl p-8 shadow-sm bg-white h-full flex flex-col justify-between">
                  <div>
                    <div className="text-yellow-500 mb-4">★★★★★</div>
                    <p className="font-semibold text-xl text-gray-900">
                      "{testimonial.quote}"
                    </p>
                    <p className="text-gray-700 mt-4 text-lg">
                      {testimonial.fullText}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 mt-6 font-medium">
                    - {testimonial.name}, {testimonial.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
