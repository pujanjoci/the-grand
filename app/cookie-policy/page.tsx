// app/cookie-policy/page.tsx
import Link from 'next/link';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-amber-800 to-amber-600 px-8 py-6">
            <div className="flex items-center justify-between">
              <Link 
                href="/" 
                className="inline-flex items-center text-amber-100 hover:text-white transition-colors duration-300 group"
              >
                <svg className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Home
              </Link>
              <div className="text-amber-100 text-sm font-medium">
                Last updated: December 2024
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-8 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
                Cookie Policy
              </h1>
              <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            </div>

            <div className="space-y-12">
              {/* Section 1 */}
              <section className="scroll-mt-20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-semibold text-sm">1</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                      What Are Cookies?
                    </h2>
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section className="scroll-mt-20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-semibold text-sm">2</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                      How We Use Cookies
                    </h2>
                    <div className="space-y-6">
                      {/* Essential Cookies */}
                      <div className="p-6 bg-amber-50 rounded-xl border-l-4 border-amber-500 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center mb-3">
                          <div className="w-3 h-3 bg-amber-500 rounded-full mr-3"></div>
                          <h3 className="text-xl font-semibold text-amber-800">Essential Cookies</h3>
                        </div>
                        <p className="text-amber-700 mb-3">Required for the website to function properly. These include:</p>
                        <ul className="space-y-2">
                          {["Session management", "Security features", "Booking process functionality"].map((item, index) => (
                            <li key={index} className="flex items-center text-amber-600">
                              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Analytics Cookies */}
                      <div className="p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center mb-3">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                          <h3 className="text-xl font-semibold text-blue-800">Analytics Cookies</h3>
                        </div>
                        <p className="text-blue-700 mb-3">Help us understand how visitors interact with our website:</p>
                        <ul className="space-y-2">
                          {["Visitor counts and behavior", "Popular pages and features", "Website performance metrics"].map((item, index) => (
                            <li key={index} className="flex items-center text-blue-600">
                              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Preference Cookies */}
                      <div className="p-6 bg-green-50 rounded-xl border-l-4 border-green-500 hover:shadow-md transition-all duration-300">
                        <div className="flex items-center mb-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                          <h3 className="text-xl font-semibold text-green-800">Preference Cookies</h3>
                        </div>
                        <p className="text-green-700 mb-3">Remember your settings and preferences:</p>
                        <ul className="space-y-2">
                          {["Language preferences", "Currency settings", "Room preferences"].map((item, index) => (
                            <li key={index} className="flex items-center text-green-600">
                              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="scroll-mt-20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-semibold text-sm">3</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                      Third-Party Cookies
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      We may use third-party services that set cookies, including:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { service: "Google Analytics", purpose: "Website analytics" },
                        { service: "Social Media Platforms", purpose: "Sharing functionality" },
                        { service: "Payment Processors", purpose: "Secure transactions" },
                        { service: "Advertising Partners", purpose: "Targeted ads (with consent)" }
                      ].map((item, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-amber-300 transition-colors duration-200">
                          <h4 className="font-semibold text-gray-800 mb-1">{item.service}</h4>
                          <p className="text-gray-600 text-sm">{item.purpose}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section className="scroll-mt-20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-semibold text-sm">4</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                      Managing Cookies
                    </h2>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-yellow-600 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Cookie Controls</h3>
                          <p className="text-yellow-700 mb-3 leading-relaxed">
                            You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
                          </p>
                          <p className="text-yellow-700 leading-relaxed">
                            However, if you do this, you may have to manually adjust some preferences every time you visit our site and some services and functionalities may not work.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section className="scroll-mt-20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-semibold text-sm">5</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                      Updates to This Policy
                    </h2>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}