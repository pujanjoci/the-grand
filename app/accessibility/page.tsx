// app/accessibility/page.tsx
import Link from 'next/link';

export default function Accessibility() {
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
                Inclusive experience for all
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-8 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
                Accessibility
              </h1>
              <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
                Committed to providing an inclusive experience for all guests at The-Grand Hotel
              </p>
              <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            </div>

            <div className="space-y-12">
              {/* Commitment Section */}
              <section className="scroll-mt-20">
                <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-8">
                  <div className="flex items-start">
                    <svg className="w-8 h-8 text-green-500 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h2 className="text-2xl font-semibold text-green-800 mb-4">Our Commitment</h2>
                      <p className="text-green-700 text-lg leading-relaxed">
                        The-Grand Hotel is dedicated to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Website Accessibility */}
              <section className="scroll-mt-20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-semibold text-sm">1</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                      Website Accessibility Features
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div className="p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                        <h3 className="text-xl font-semibold text-blue-800 mb-4">Visual Accessibility</h3>
                        <ul className="space-y-3">
                          {["High contrast mode support", "Text resizing capabilities", "Screen reader compatible", "Keyboard navigation"].map((item, index) => (
                            <li key={index} className="flex items-center text-blue-700">
                              <svg className="w-4 h-4 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-6 bg-purple-50 rounded-xl border-l-4 border-purple-500">
                        <h3 className="text-xl font-semibold text-purple-800 mb-4">Content Accessibility</h3>
                        <ul className="space-y-3">
                          {["Alternative text for images", "Clear heading structure", "Descriptive link text", "Transcripts for audio content"].map((item, index) => (
                            <li key={index} className="flex items-center text-purple-700">
                              <svg className="w-4 h-4 mr-3 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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

              {/* Hotel Accessibility */}
              <section className="scroll-mt-20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-semibold text-sm">2</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                      Hotel Accessibility Features
                    </h2>
                    <div className="space-y-6">
                      <div className="p-6 bg-amber-50 rounded-xl border-l-4 border-amber-500">
                        <h3 className="text-xl font-semibold text-amber-800 mb-4">Accessible Rooms</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {["Wider doorways and hallways", "Roll-in showers with seats", "Lowered counters and fixtures", "Visual alarm systems", "TTY devices available"].map((item, index) => (
                            <div key={index} className="flex items-center text-amber-700">
                              <svg className="w-4 h-4 mr-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 bg-teal-50 rounded-xl border-l-4 border-teal-500">
                        <h3 className="text-xl font-semibold text-teal-800 mb-4">Public Areas</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {["Wheelchair-accessible entrances", "Accessible parking spaces", "Elevators with audio announcements", "Braille signage throughout the hotel", "Service animal friendly"].map((item, index) => (
                            <div key={index} className="flex items-center text-teal-700">
                              <svg className="w-4 h-4 mr-3 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Assistance Section */}
              <section className="scroll-mt-20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-semibold text-sm">3</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                      Need Assistance?
                    </h2>
                    <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-8 border border-amber-200">
                      <p className="text-amber-800 text-lg mb-6">
                        We&apos;re here to help make your stay comfortable and accessible. Please contact us with any specific requirements:
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-xl font-semibold text-amber-800 mb-4">Contact Information</h3>
                          <div className="space-y-3">
                            <div className="flex items-center">
                              <svg className="w-5 h-5 text-amber-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                              </svg>
                              <div>
                                <p className="font-semibold text-amber-800">Accessibility Coordinator</p>
                                <p className="text-amber-700">Pujan Joshi</p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <svg className="w-5 h-5 text-amber-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                              </svg>
                              <div>
                                <p className="font-semibold text-amber-800">Email</p>
                                <p className="text-amber-700">contact@the-grand.com</p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <svg className="w-5 h-5 text-amber-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                              </svg>
                              <div>
                                <p className="font-semibold text-amber-800">Phone</p>
                                <p className="text-amber-700">+977 (98) 9898-ACCESS</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-amber-800 mb-4">Availability</h3>
                          <div className="flex items-center p-4 bg-white rounded-lg">
                            <svg className="w-8 h-8 text-amber-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            <div>
                              <p className="font-semibold text-amber-800">Monday-Friday</p>
                              <p className="text-amber-700">9:00 AM - 5:00 PM EST</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Feedback Section */}
              <section className="scroll-mt-20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-semibold text-sm">4</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                      Feedback
                    </h2>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <p className="text-gray-700 mb-4 text-lg">
                        We welcome your feedback on the accessibility of The-Grand Hotel. Please let us know if you encounter accessibility barriers:
                      </p>
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <p className="text-amber-800 font-semibold text-center">
                          We respond to feedback within 2 - 5 business days.
                        </p>
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