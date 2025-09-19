import React from "react";

// 이 컴포넌트는 Tailwind CSS가 설정된 React 프로젝트에서 바로 작동합니다.
// 대표님께서 보여주신 GitHub 폴더 구조의 src 폴더 내 메인 파일(예: App.jsx)에
// 이 코드 전체를 붙여넣기 하시면 됩니다.

export default function JejuMorningsLandingPage() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight lg:text-5xl text-gray-900">
              For Your Performance, and Your Peace of Mind.
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              In a world of constant noise and pressure, find the clarity to achieve your goals and the calm to protect your well-being. This is your daily tool for a balanced, optimal mind.
            </p>
            <a
              href="#shop" // This should link to your Shopify product purchase section
              className="mt-8 inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-transform duration-300 transform hover:scale-105"
            >
              Discover Your Calm Focus
            </a>
          </div>
          <div>
            {/* 대표님의 새로운 구미 목업 이미지 경로로 변경하세요. */}
            <img
              src="https://storage.googleapis.com/gemini-prod/images/b48a032d-3c22-482f-8703-a4c3dfcf732f" 
              alt="Jeju Mornings Calm Focus Gummies"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Difference Section - COMPLETELY REVISED */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What Makes Jeju Mornings Different?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Point 1: Body State over Brain Issue */}
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="font-semibold text-lg text-gray-900">A Systemic Approach</h3>
              <p className="mt-2 text-gray-600">
                K-wellness teaches that anxiety isn't just a brain issue, but a signal from your entire body's system. We don't offer a temporary fix; we help your body find its long-term balance.
              </p>
            </div>
            {/* Point 2: Optimized for Women */}
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">👩‍🔬</div>
              <h3 className="font-semibold text-lg text-gray-900">Designed for Women</h3>
              <p className="mt-2 text-gray-600">
                Created by a chemist and Korean Medicine Doctor, our formula is optimized to support the unique hormonal and systemic needs of the modern woman's demanding lifestyle.
              </p>
            </div>
            {/* Point 3: Jeju Green Tangerine */}
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">🍊🌿</div>
              <h3 className="font-semibold text-lg text-gray-900">The Jeju Island Secret</h3>
              <p className="mt-2 text-gray-600">
                Our star ingredient, the Jeju Green Tangerine, contains 10x more Hesperidin than ripe ones. This potent antioxidant is key to fighting stress and clearing mental fog.
              </p>
            </div>
            {/* Point 4: Delicious Gummy Format */}
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">🍬</div>
              <h3 className="font-semibold text-lg text-gray-900">A Joyful Daily Ritual</h3>
              <p className="mt-2 text-gray-600">
                No more swallowing pills. Our delicious gummies make your daily wellness routine an effortless and enjoyable moment of self-care you'll actually look forward to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story & Promise Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://placehold.co/500x500/e2e8f0/334155?text=Founder's\nPhoto" // 대표님 프로필 사진 경로로 변경하세요.
            alt="Founder Dr. Dae-hyeon Rho"
            className="rounded-full shadow-lg w-64 h-64 object-cover mx-auto"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Science Meets Wisdom.</h2>
            <p className="text-gray-700 mb-4">
              Our founder, Dr. Dae-hyeon Rho—a UIUC-trained chemist and Doctor of Korean Medicine—created Jeju Mornings for one reason: to offer a smarter solution. He combined the data-driven precision of Western science with the holistic balance of Eastern wisdom.
            </p>
            <blockquote className="border-l-4 border-green-700 pl-4 italic text-gray-800 bg-white p-4 rounded-r-lg">
              "We're offering a 100% Money-Back Guarantee. If Jeju Mornings doesn't become an essential part of your wellness ritual, we will refund your entire purchase. Your trust is everything."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            What Our First Believers are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-xl p-6 shadow-sm bg-white">
              <div className="text-yellow-500 mb-2">★★★★★</div>
              <p className="font-semibold text-gray-900">"My Essential for Leadership Clarity"</p>
              <p className="text-gray-700 mt-4">"As a founder, I was relying on coffee but hated the anxiety. Jeju Mornings gives me a sustained, clear-headed energy that feels natural and balanced."</p>
              <p className="text-sm text-gray-600 mt-4">
                - Olivia C., Founder & CEO, Los Angeles, CA
              </p>
            </div>
            <div className="border rounded-xl p-6 shadow-sm bg-white">
              <div className="text-yellow-500 mb-2">★★★★★</div>
              <p className="font-semibold text-gray-900">"Actually Helps with My Anxiety"</p>
              <p className="text-gray-700 mt-4">"Studying for finals is pure stress. I saw this on TikTok and decided to try. It doesn't make you feel weird, just... quieter inside. It's easier to focus on my notes instead of my anxious thoughts."</p>
              <p className="text-sm text-gray-600 mt-4">
                - Chloe S., University Student, NYC
              </p>
            </div>
            <div className="border rounded-xl p-6 shadow-sm bg-white">
              <div className="text-yellow-500 mb-2">★★★★★</div>
              <p className="font-semibold text-gray-900">"The Ultimate Tool for My Creative Flow"</p>
              <p className="text-gray-700 mt-4">"As a UX Designer, my biggest enemy is the creative block. Jeju Mornings provides a smooth clarity that helps me enter a state of deep work. The 'Flow State' they talk about? This is it."</p>
              <p className="text-sm text-gray-600 mt-4">
                - Emily R., Lead UX Designer, San Francisco, CA
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
