// app/terms-of-service/page.tsx
import Link from 'next/link';

export default function TermsOfService() {
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
                Effective Date: December 2024
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-8 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
                Terms of Service
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
                      Acceptance of Terms
                    </h2>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        By accessing and using The-Grand Hotel&apos;s website and services, you agree to be bound by these Terms of Service and our Privacy Policy. If you disagree with any part of these terms, you may not access our services.
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
                      Booking and Reservations
                    </h2>
                    <div className="space-y-6">
                      {/* Reservation Requirements */}
                      <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                        <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Reservation Requirements
                        </h3>
                        <ul className="space-y-2">
                          {[
                            "Valid credit card required for all reservations",
                            "Government-issued ID must match booking information",
                            "Minimum age requirement: 21 years",
                            "All bookings subject to availability"
                          ].map((item, index) => (
                            <li key={index} className="flex items-center text-blue-700">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Cancellation Policy */}
                      <div className="p-6 bg-amber-50 rounded-xl border border-amber-200">
                        <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          Cancellation Policy
                        </h3>
                        <ul className="space-y-2">
                          {[
                            "Free cancellation up to 48 hours before check-in",
                            "Late cancellation: 50% of first night's stay",
                            "No-show: Full charge for first night",
                            "Special events and peak seasons may have different policies"
                          ].map((item, index) => (
                            <li key={index} className="flex items-center text-amber-700">
                              <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
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
                      Payment Terms
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                          We accept the following payment methods:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                          {["Visa", "MasterCard", "American Express", "Apple Pay", "Google Pay", "Bank Transfer"].map((method, index) => (
                            <div key={index} className="bg-gray-50 px-4 py-3 rounded-lg text-center border border-gray-200">
                              <span className="text-gray-700 font-medium">{method}</span>
                            </div>
                          ))}
                        </div>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <p className="text-green-700 text-center">
                            All rates are quoted in USD and include applicable taxes unless otherwise stated.
                          </p>
                        </div>
                      </div>
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
                      Hotel Policies
                    </h2>
                    <div className="space-y-6">
                      {/* Check-in/Check-out */}
                      <div className="p-6 bg-purple-50 rounded-xl border border-purple-200">
                        <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          Check-in/Check-out
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-purple-700 mb-2">Standard Times</h4>
                            <ul className="space-y-1 text-purple-600">
                              <li>• Check-in: 3:00 PM</li>
                              <li>• Check-out: 11:00 AM</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-purple-700 mb-2">Flexible Options</h4>
                            <ul className="space-y-1 text-purple-600">
                              <li>• Early check-in: Subject to availability</li>
                              <li>• Late check-out: Additional fee may apply</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Guest Conduct */}
                      <div className="p-6 bg-red-50 rounded-xl border border-red-200">
                        <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          Guest Conduct
                        </h3>
                        <p className="text-red-700 leading-relaxed">
                          We reserve the right to refuse service to anyone for inappropriate behavior, disturbance to other guests, or violation of hotel policies. Any damages to hotel property will be charged to the guest&apos;s account.
                        </p>
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
                      Liability
                    </h2>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                      <div className="flex items-start">
                        <svg className="w-6 h-6 text-yellow-600 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h3>
                          <p className="text-yellow-700 leading-relaxed">
                            The-Grand Hotel is not liable for loss or damage to guest property, personal injury, or any other claims except where proven to be caused by our negligence. Guests are responsible for securing their valuables in provided safes.
                          </p>
                        </div>
                      </div>
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
                      Modifications to Terms
                    </h2>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of the modified terms. Significant changes will be communicated to registered users via email or through prominent notices on our website.
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