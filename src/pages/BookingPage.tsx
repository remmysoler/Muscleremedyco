import React from 'react';
import { ExternalLink, MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react';

const BookingPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-32">
        <div className="container mx-auto px-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl lg:text-7xl font-light mb-6 tracking-tight">
              Book Appointment
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 font-normal max-w-2xl mx-auto">
              Schedule your appointment with our expert therapeutic team for personalized remedial massage care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-4xl lg:text-5xl font-light mb-6 tracking-tight">
                Book Your Appointment
              </h2>
              <p className="text-lg leading-relaxed text-gray-600 mb-8">
                Ready to start your journey to better health? Book your appointment online through our secure booking system.
              </p>
              
              <div className="mb-12 text-center">
                <a
                  href="https://www.halaxy.com/book/appointment/muscle-remedy-co/location/1324413"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-5 px-12 bg-sky-400 text-white font-semibold text-sm uppercase tracking-widest transition-all hover:bg-sky-500 hover:-translate-y-1 shadow-lg hover:shadow-xl rounded-md"
                >
                  Book Your Appointment
                </a>
              </div>
              
              <div className="text-center">
                <h3 className="font-serif text-3xl font-normal mb-6 tracking-tight">Find Us</h3>
                <div className="relative w-full max-w-2xl mx-auto">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.1197078628657!2d145.02917647687352!3d-37.740335771994154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad645ca450d7309%3A0x785526c444eb7988!2sGoodlife%20Health%20Clubs%20Preston!5e0!3m2!1sen!2sau!4v1758159657592!5m2!1sen!2sau"
                    width="100%"
                    height="450"
                    style={{ border: 0, borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Muscle Remedy Co. Location"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-15 rounded-xl">
              <h3 className="font-serif text-3xl font-normal mb-8 tracking-tight text-gray-900">
                Contact Information
              </h3>
              
              <div className="space-y-8">
                <div className="pb-6 border-b border-gray-200">
                  <div className="flex items-center mb-2">
                    <MapPin className="text-sky-400 mr-3" size={18} />
                    <strong className="block font-semibold text-xs uppercase tracking-wider text-sky-400">
                      Address
                    </strong>
                  </div>
                  <p className="text-gray-600 leading-relaxed ml-9">
                    Inside Goodlife Gym, Northland Shopping Centre<br />
                    2-50 Murray Road, Preston 3072
                  </p>
                </div>
                
                <div className="pb-6 border-b border-gray-200">
                  <div className="flex items-center mb-2">
                    <Phone className="text-sky-400 mr-3" size={18} />
                    <strong className="block font-semibold text-xs uppercase tracking-wider text-sky-400">
                      Phone
                    </strong>
                  </div>
                  <p className="text-gray-600 ml-9">0413 587 410</p>
                </div>
                
                <div className="pb-6 border-b border-gray-200">
                  <div className="flex items-center mb-2">
                    <Mail className="text-sky-400 mr-3" size={18} />
                    <strong className="block font-semibold text-xs uppercase tracking-wider text-sky-400">
                      Email
                    </strong>
                  </div>
                  <p className="text-gray-600 ml-9">info.muscleremedyco@gmail.com</p>
                </div>
                
                <div className="pb-6 border-b border-gray-200">
                  <div className="flex items-center mb-2">
                    <Instagram className="text-sky-400 mr-3" size={18} />
                    <strong className="block font-semibold text-xs uppercase tracking-wider text-sky-400">
                      Instagram
                    </strong>
                  </div>
                  <div className="ml-9">
                    <a
                      href="https://www.instagram.com/muscleremedyco?utm_source=ig_web_button_share_sheet&igsh=ZzlnbnNzY3Jtb2s2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 hover:text-pink-500 transition-colors font-medium"
                    >
                      @muscleremedyco
                    </a>
                  </div>
                </div>
                
                <div className="pb-6 border-b border-gray-200">
                  <div className="flex items-center mb-2">
                    <Clock className="text-sky-400 mr-3" size={18} />
                    <strong className="block font-semibold text-xs uppercase tracking-wider text-sky-400">
                      Hours
                    </strong>
                  </div>
                  <div className="text-gray-600 leading-relaxed ml-9">
                    <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p>Saturday: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
                
                <div>
                  <strong className="block font-semibold text-xs uppercase tracking-wider text-sky-400 mb-2">
                    What to Expect
                  </strong>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive consultation, personalized treatment plan, and professional therapeutic care in a comfortable, private setting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookingPage;