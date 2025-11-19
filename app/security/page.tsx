// app/security/page.tsx
import Link from 'next/link';

export default function Security() {
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
                Your safety is our priority
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-8 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
                Security
              </h1>
              <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
                Protecting your safety and privacy is our top priority at The-Grand Hotel
              </p>
              <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            </div>

            <div className="space-y-12">
              {/* Commitment Section */}
              <section className="scroll-mt-20">
                <div className="bg-red-50 border-l-4 border-red-500 rounded-r-xl p-8">
                  <div className="flex items-start">
                    <svg className="w-8 h-8 text-red-500 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h2 className="text-2xl font-semibold text-red-800 mb-4">Our Security Commitment</h2>
                      <p className="text-red-700 text-lg leading-relaxed">
                        At The-Grand Hotel, we implement comprehensive security measures to protect our guests&apos; personal information and ensure a safe environment throughout your stay.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Digital Security */}
              <section className="scroll-mt-20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-semibold text-sm">1</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                      Digital Security
                    </h2>
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div className="p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                        <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Online Protection
                        </h3>
                        <ul className="space-y-2">
                          {["SSL encryption for all data transmission", "PCI DSS compliant payment processing", "Regular security audits and penetration testing", "Secure socket layer (SSL) certification"].map((item, index) => (
                            <li key={index} className="flex items-center text-blue-700">
                              <svg className="w-4 h-4 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-6 bg-green-50 rounded-xl border-l-4 border-green-500">
                        <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Data Protection
                        </h3>
                        <ul className="space-y-2">
                          {["Encrypted database storage", "Regular data backups", "Access control and authentication", "GDPR compliance"].map((item, index) => (
                            <li key={index} className="flex items-center text-green-700">
                              <svg className="w-4 h-4 mr-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
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

              {/* Physical Security */}
              <section className="scroll-mt-20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-semibold text-sm">2</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                      Physical Security
                    </h2>
                    <div className="space-y-6">
                      <div className="p-6 bg-amber-50 rounded-xl border-l-4 border-amber-500">
                        <h3 className="text-xl font-semibold text-amber-800 mb-4">Hotel Security Measures</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {["24/7 security personnel and surveillance", "Electronic key card access to rooms and facilities", "Secure parking with CCTV monitoring", "Emergency response protocols", "Regular safety drills and staff training"].map((item, index) => (
                            <div key={index} className="flex items-center text-amber-700">
                              <svg className="w-4 h-4 mr-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 bg-purple-50 rounded-xl border-l-4 border-purple-500">
                        <h3 className="text-xl font-semibold text-purple-800 mb-4">Guest Room Security</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {["Digital safes in every room", "Peepholes and deadbolt locks", "Smoke detectors and sprinkler systems", "Emergency evacuation plans"].map((item, index) => (
                            <div key={index} className="flex items-center text-purple-700">
                              <svg className="w-4 h-4 mr-3 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
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

              {/* Payment Security */}
              <section className="scroll-mt-20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-semibold text-sm">3</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                      Payment Security
                    </h2>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <p className="text-gray-700 mb-4 text-lg">We ensure your payment information is protected through:</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {["Tokenization of credit card data", "PCI DSS Level 1 compliance", "Secure payment gateway integration", "Regular vulnerability assessments"].map((item, index) => (
                          <div key={index} className="flex items-center text-gray-700">
                            <svg className="w-4 h-4 mr-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Guest Responsibilities */}
              <section className="scroll-mt-20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-semibold text-sm">4</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                      Guest Responsibilities
                    </h2>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                      <p className="font-semibold text-yellow-800 mb-4">To help us maintain a secure environment:</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {["Keep your room key card secure", "Use the in-room safe for valuables", "Report any suspicious activity immediately", "Don't share personal information with unauthorized persons"].map((item, index) => (
                          <div key={index} className="flex items-center text-yellow-700">
                            <svg className="w-4 h-4 mr-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Emergency Contacts */}
              <section className="scroll-mt-20">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-semibold text-sm">5</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                      Emergency Contacts
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 bg-red-50 rounded-xl text-center">
                        <div className="text-3xl mb-4">🚨</div>
                        <h3 className="text-xl font-semibold text-red-800 mb-2">Hotel Security</h3>
                        <p className="text-2xl font-bold text-red-600 mb-2">Extension 911</p>
                        <p className="text-red-700">Available 24/7 from any house phone</p>
                      </div>
                      <div className="p-6 bg-blue-50 rounded-xl text-center">
                        <div className="text-3xl mb-4">👮</div>
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">Security Director</h3>
                        <p className="text-blue-700 font-medium mb-1">Michael Chen</p>
                        <p className="text-blue-600">security@the-grand.com</p>
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