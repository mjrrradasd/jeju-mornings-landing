import React from "react";

// This component works in a React project with Tailwind CSS configured.
// Paste this entire code into your main component file in the src folder (e.g., App.jsx).

export default function JejuMorningsLandingPage() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* (Hero Section, Empathy Section, Difference Section remain the same) */}
      {/* ... existing code from V6 ... */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Sound Like You? You're Not Alone.</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Modern life demands everything from you. We see you, and we created this for you.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Pain Point 1: Too Many Tabs Brain */}
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">🤯</div>
              <h3 className="font-semibold text-lg text-gray-900">The "Too Many Tabs" Brain</h3>
              <p className="mt-2 text-gray-600">
                Your mind feels like a browser with endless tabs open. You're constantly busy, but never truly focused, leaving you feeling scattered and unproductive.
              </p>
            </div>
            {/* Pain Point 2: Caffeine Rollercoaster */}
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">☕️📉</div>
              <h3 className="font-semibold text-lg text-gray-900">The Caffeine Rollercoaster</h3>
              <p className="mt-2 text-gray-600">
                You rely on coffee to start, but the afternoon brings jitters and the inevitable crash. You're trapped in a cycle of artificial highs and draining lows.
              </p>
            </div>
            {/* Pain Point 3: Invisible Mental Load */}
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">⚖️😩</div>
              <h3 className="font-semibold text-lg text-gray-900">The Invisible Mental Load</h3>
              <p className="mt-2 text-gray-600">
                Beyond work, you're managing the endless to-do list of life. Your brain never truly rests, and 'me-time' feels like a distant luxury.
              </p>
            </div>
            {/* Pain Point 4: Medication Dilemma */}
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">🌿🆚💊</div>
              <h3 className="font-semibold text-lg text-gray-900">The Medication Dilemma</h3>
              <p className="mt-2 text-gray-600">
                You've considered prescriptions, but fear the side effects and the thought of feeling numb or dependent. You're searching for a natural, sustainable way to feel like yourself again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- UPDATED FOUNDER STORY SECTION --- */}
      <section className="py-20 bg-green-50">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://placehold.co/500x500/e2e8f0/334155?text=Founder's\nPhoto" // 대표님 프로필 사진 경로로 변경하세요.
            alt="Founder Dr. Daehyun Rho"
            className="rounded-full shadow-lg w-64 h-64 object-cover mx-auto"
          />
          <div>
            <p className="text-sm font-semibold text-green-800 mb-2">AS FEATURED IN: MAD IN AMERICA</p>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Science Meets Wisdom.</h2>
            <p className="text-gray-700 mb-4">
              Our founder, Dr. Daehyun Rho—a UIUC-trained chemist and Doctor of Korean Medicine—created Jeju Mornings not just as a product, but as a response to a broken system. His work is dedicated to helping people find true healing beyond temporary fixes.
            </p>
            <blockquote className="border-l-4 border-green-700 pl-4 italic text-gray-800 bg-white p-4 rounded-r-lg mb-6">
              "As a society, we need to be able to clearly distinguish between symptom control and true healing—and only then can we make truly informed decisions."
            </blockquote>
            <a 
              href="[여기에_블로그_게시물_URL을_입력하세요]" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-green-800 hover:text-green-900"
            >
              Read Dr. Rho's full article on Mad in America →
            </a>
          </div>
        </div>
      </section>
      
      {/* (Testimonials section and other sections remain the same) */}
       {/* ... existing code from V6 ... */}
    </div>
  );
}
