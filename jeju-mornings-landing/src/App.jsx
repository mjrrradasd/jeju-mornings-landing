import React from 'react'

export default function App() {
  return (
    <div className="text-jeju-dark bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              You Weren't Made to Just 'Get Through' the Day.
            </h1>
            <p className="mt-5 text-lg text-gray-700 max-w-xl">
              Your ambition deserves a smarter fuel. This is your daily tool to find calm, clear focus and unlock your Flow State.
            </p>
            <a href="#shop" className="mt-8 inline-block bg-jeju-dark text-white px-8 py-3 rounded-xl font-semibold hover:bg-black">
              SHOP NOW
            </a>
          </div>
          <div className="relative">
            <img src="/product-hero.png" alt="Jeju Mornings Gummies" className="rounded-2xl shadow-xl w-full" />
          </div>
        </div>
      </section>

      {/* Difference */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">The Jeju Mornings Difference</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Feature icon="🌿" title="Calm the Noise, Not Your Drive">
              Experience a state of calm focus that manages stress without diminishing your ambition or energy.
            </Feature>
            <Feature icon="🎯" title="Sharpen Focus & Mental Clarity">
              Cut through daily brain fog. Execute your most important tasks with precision and clarity.
            </Feature>
            <Feature icon="🛡️" title="Build Resilience to Stress">
              Adapt to daily pressures more effectively. Feel less reactive and more in control, day after day.
            </Feature>
          </div>
        </div>
      </section>

      {/* Clean Formula */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Clean, Effective, and Nothing Else.</h2>
          <p className="text-gray-700 mb-8">
            Your mind deserves the best. That's why our formula is engineered for performance and peace of mind, without the unwanted side effects.
          </p>
          <ul className="space-y-3 text-left max-w-md mx-auto text-gray-800">
            <li>✅ No Jitters. No Crash. Unlike caffeine and energy drinks.</li>
            <li>✅ Non-Drowsy Formula. For clear focus throughout your day.</li>
            <li>✅ Non-GMO. Vegan. Gluten-Free.</li>
          </ul>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <img src="/founder.png" alt="Founder Dr. Dae-hyeon Rho" className="rounded-2xl shadow-md w-full" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Founder's Promise & Story</h2>
            <p className="text-gray-700 mb-4">
              Our founder, Dr. Dae-hyeon Rho—a UIUC-trained chemist and Doctor of Korean Medicine—saw high-achievers turning to harsh stimulants or ineffective remedies.
              He created a third way: a formula that combines the holistic wisdom of Eastern botanicals with the precision of modern science.
            </p>
            <blockquote className="border-l-4 border-jeju-green pl-4 italic text-gray-900">
              "Your trust is everything to us. We are so confident you'll feel the difference that we're offering a 100% Money-Back Guarantee.
              If Jeju Mornings doesn't become an essential part of your wellness ritual, we will refund your entire purchase. No questions asked."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Community is Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Testimonial title="My Essential for Leadership Clarity" name="Olivia Chen" role="Founder & CEO, Los Angeles, CA" />
            <Testimonial title="Finally, Calm Without the Crash" name="Sarah K." role="Investment Banker, New York, NY" />
            <Testimonial title="The Ultimate Tool for My Creative Flow" name="Emily R." role="Lead UX Designer, San Francisco, CA" />
          </div>
        </div>
      </section>

      {/* Science */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">The Science Behind the Wisdom</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-semibold text-lg mb-2">KSM-66® Ashwagandha</h3>
              <p className="text-gray-700">
                We use the most clinically studied Ashwagandha on the market. This powerful adaptogen is the gold standard for reducing the stress hormone cortisol,
                helping your body build resilience against daily pressures.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Jeju Green Tangerine</h3>
              <p className="text-gray-700">
                Our unique K-Wellness ingredient. Sourced from the pristine volcanic soil of Jeju Island, it contains up to 10x more Hesperidin than ripe tangerines.
                This potent antioxidant supports healthy circulation to the brain, fighting the effects of stress and clearing mental fog.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" id="shop">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <img src="/product-hero.png" alt="Jeju Mornings Gummies" className="mx-auto mb-8 w-64 rounded-xl shadow" />
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Flow State?</h2>
          <a href="#" className="inline-block bg-jeju-dark text-white px-10 py-4 rounded-xl font-semibold hover:bg-black">
            SHOP NOW
          </a>
        </div>
      </section>

      {/* Footer simple */}
      <footer className="py-10 border-t">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Jeju Mornings. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-jeju-dark">Terms</a>
            <a href="#" className="hover:text-jeju-dark">Privacy</a>
            <a href="#" className="hover:text-jeju-dark">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Feature({ icon, title, children }) {
  return (
    <div className="text-center bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-gray-600">{children}</p>
    </div>
  )
}

function Testimonial({ title, name, role }) {
  return (
    <div className="border rounded-xl p-6 shadow-sm bg-white">
      <div className="text-yellow-500 mb-2" aria-label="5 out of 5 stars">★★★★★</div>
      <p className="font-semibold">"{title}"</p>
      <p className="text-sm text-gray-600 mt-2">- {name}, {role}</p>
    </div>
  )
}
