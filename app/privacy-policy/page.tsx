// app/privacy-policy/page.tsx
import Link from 'next/link';

export default function PrivacyPolicy() {
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
                Privacy Policy
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
                      Information We Collect
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      At The-Grand Hotel, we collect information that you provide directly to us, including:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Personal identification information (Name, email address, phone number)",
                        "Booking and reservation details",
                        "Payment information",
                        "Preferences and special requests",
                        "Communication history with our staff"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
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
                      How We Use Your Information
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      We use the information we collect to:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Process your bookings and reservations",
                        "Provide personalized service and accommodations",
                        "Communicate with you about your stay",
                        "Send promotional offers and updates (with your consent)",
                        "Improve our services and guest experience",
                        "Comply with legal obligations"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                          <svg className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
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
                      Information Sharing
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      We do not sell or rent your personal information to third parties. We may share your information with:
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                      <ul className="space-y-3">
                        {[
                          "Service providers who assist in our operations",
                          "Legal authorities when required by law",
                          "Third parties with your explicit consent"
                        ].map((item, index) => (
                          <li key={index} className="flex items-start text-blue-800">
                            <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
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
                      Data Security
                    </h2>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-green-600 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <h3 className="text-lg font-semibold text-green-800 mb-2">Secure Data Protection</h3>
                          <p className="text-green-700 leading-relaxed">
                            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security protocols include encryption, access controls, and regular security assessments.
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
                      Your Rights
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      You have the right to:
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { icon: "👁️", text: "Access your personal information" },
                        { icon: "✏️", text: "Correct inaccurate data" },
                        { icon: "🗑️", text: "Request deletion of your data" },
                        { icon: "⚖️", text: "Object to processing of your data" },
                        { icon: "🔄", text: "Withdraw consent at any time" },
                        { icon: "📋", text: "Data portability" }
                      ].map((right, index) => (
                        <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300">
                          <div className="text-2xl mb-3">{right.icon}</div>
                          <p className="text-gray-700 font-medium">{right.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 6 */}
              <section className="scroll-mt-20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-semibold text-sm">6</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                      Contact Us
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <div className="bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-xl p-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-gray-700">privacy@the-grand.com</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="text-gray-700">+977 (98) 9898-GRAND</span>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <svg className="w-5 h-5 text-amber-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-gray-700">Katunje, Bhaktapur<br />Nepal</span>
                        </div>
                      </div>
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