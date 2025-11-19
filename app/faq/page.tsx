// app/faq/page.tsx
import Link from 'next/link';

export default function FAQ() {
  const faqCategories = [
    {
      title: "Booking & Reservations",
      icon: "📅",
      questions: [
        {
          q: "What is your cancellation policy?",
          a: "We offer free cancellation up to 48 hours before check-in. Cancellations within 48 hours will incur a charge of 50% of the first night's stay. No-shows will be charged the full amount for the first night."
        },
        {
          q: "Do you require a deposit?",
          a: "Yes, we require a valid credit card to secure your reservation. For some rate plans or during peak seasons, we may require a deposit equivalent to one night's stay."
        },
        {
          q: "What is the minimum age to book a room?",
          a: "Guests must be at least 21 years old to book a room and must present valid government-issued identification at check-in."
        }
      ]
    },
    {
      title: "Amenities & Services",
      icon: "🏊",
      questions: [
        {
          q: "Do you have a swimming pool?",
          a: "Yes, we have an indoor heated swimming pool and jacuzzi available to all guests from 6:00 AM to 10:00 PM daily."
        },
        {
          q: "Is WiFi available?",
          a: "Complimentary high-speed WiFi is available throughout the hotel for all guests. Premium business-grade WiFi is available for an additional fee."
        },
        {
          q: "Do you have parking facilities?",
          a: "Yes, we offer both valet parking and self-parking options. Valet parking is $45 per night, while self-parking is $35 per night."
        }
      ]
    },
    {
      title: "Check-in & Check-out",
      icon: "🕒",
      questions: [
        {
          q: "What are your check-in and check-out times?",
          a: "Check-in time is 3:00 PM and check-out time is 11:00 AM. Early check-in and late check-out may be available upon request, subject to availability and additional charges."
        },
        {
          q: "Can I store my luggage after check-out?",
          a: "Yes, we offer complimentary luggage storage for our guests on the day of arrival before check-in and on the day of departure after check-out."
        },
        {
          q: "Do you offer early check-in?",
          a: "Early check-in is subject to availability and may incur an additional fee. Please contact us in advance to arrange early check-in."
        }
      ]
    },
    {
      title: "Payment & Fees",
      icon: "💳",
      questions: [
        {
          q: "What forms of payment do you accept?",
          a: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), debit cards, and cash. We also accept Apple Pay and Google Pay for online bookings."
        },
        {
          q: "Is there a resort fee?",
          a: "Yes, we charge a daily resort fee of $35 plus tax, which includes WiFi, pool access, fitness center, local calls, and complimentary morning newspaper."
        },
        {
          q: "Do you charge for additional guests?",
          a: "Additional guests beyond the room's maximum occupancy may incur extra charges. Please check the specific room details when booking or contact us for more information."
        }
      ]
    }
  ];

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
                We&apos;re here to help
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-8 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
                Find answers to common questions about your stay at The-Grand Hotel
              </p>
              <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
            </div>

            <div className="space-y-12">
              {faqCategories.map((category, index) => (
                <section key={index} className="scroll-mt-20">
                  <div className="flex items-start space-x-4 mb-8">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                        {category.title}
                      </h2>
                      <div className="w-16 h-1 bg-amber-500"></div>
                    </div>
                  </div>

                  <div className="space-y-4 ml-16">
                    {category.questions.map((faq, faqIndex) => (
                      <div 
                        key={faqIndex} 
                        className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-amber-300 transition-all duration-300 hover:shadow-md"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mt-1">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                              {faq.q}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-16 p-8 bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl border border-amber-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-amber-800 mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-amber-700 text-lg">
                  Our team is here to help you 24/7. Contact us through any of the following methods:
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: "📞",
                    title: "Phone",
                    detail: "+977 (98) 9898-GRAND",
                    description: "Available 24/7"
                  },
                  {
                    icon: "✉️",
                    title: "Email",
                    detail: "info@the-grand.com",
                    description: "Response within 2 hours"
                  },
                  {
                    icon: "💬",
                    title: "Live Chat",
                    detail: "Available 24/7",
                    description: "On our website"
                  }
                ].map((contact, index) => (
                  <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="text-3xl mb-4">{contact.icon}</div>
                    <h3 className="text-xl font-semibold text-amber-800 mb-2">{contact.title}</h3>
                    <p className="text-gray-800 font-medium mb-1">{contact.detail}</p>
                    <p className="text-gray-600 text-sm">{contact.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}