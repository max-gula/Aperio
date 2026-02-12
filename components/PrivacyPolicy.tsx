import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Editorial Header */}
      <div className="bg-gray-50 pt-40 pb-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-brand uppercase tracking-[0.4em] font-bold text-sm mb-4 text-center">Legal</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-center tracking-tight">
            Privacy & <span className="text-brand italic">Spam Policy.</span>
          </h2>
          <div className="w-16 h-1 bg-brand mx-auto mb-8"></div>
          <p className="text-center text-gray-500 uppercase tracking-widest text-[10px] font-black">
            Last Updated: {new Date().toLocaleDateString('en-AU', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>

      {/* Policy Content */}
      <div className="py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-red max-w-none space-y-12">
          
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-px bg-brand mr-4"></span>
              Our Commitment
            </h3>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Aperio Financial Services is committed to providing you with the highest levels of client service. We recognise that your privacy is very important to you. The Privacy Amendment (Private Sector) Act, 2000 sets out a number of National Privacy Principles (NPPs). Our aim is to both support and ensure that we comply with these principles.
              </p>
              <p>
                Aperio Financial Services believes that this Privacy Policy discloses the purpose, and how the personal information you provide to us and our representatives, is collected, used, held, disclosed and disseminated.
              </p>
              <p>
                Aperio Financial Services is required to meet particular legislative and regulatory requirements. In order to provide advice to you, we are required to collect certain personal information from you.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-px bg-brand mr-4"></span>
              Your Personal Information
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              As an organisation we are subject to certain legislative and regulatory requirements which necessitate us to obtain personal information about you, including s945A of the Corporations Act eg.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
              {[
                "Name and contact details",
                "Tax file number",
                "Dependents and family commitments",
                "Occupation and employment history",
                "Financial needs and objectives",
                "Assets, liabilities, income, expenses",
                "Insurance & Social Security",
                "Health status"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-600 bg-gray-50 p-4 rounded-sm border-l-2 border-brand">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-px bg-brand mr-4"></span>
              How We Use & Disclose Information
            </h3>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Primarily, your personal information is used in order to provide advice to you. We may also use the information that is related to the primary purpose and it is reasonable for you to expect the information to be disclosed.
              </p>
              <p className="font-bold text-gray-900">Disclosure may be made to:</p>
              <ul className="space-y-3 list-disc pl-5">
                <li>Superannuation fund trustees and insurance providers</li>
                <li>Compliance consultants and IT service providers</li>
                <li>Your authorised professional advisers (Solicitors, Accountants)</li>
                <li>Government and regulatory authorities as authorised by law</li>
                <li>Entities involved in the proposed sale or re-organisation of our business</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-px bg-brand mr-4"></span>
              Security & Storage
            </h3>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                We keep your personal information in your client files or electronically. These files are accessible to authorised personnel only and are appropriately secured and subject to confidentiality requirements.
              </p>
              <p className="bg-red-50 p-6 border-l-4 border-brand italic">
                It is a legislative requirement that we keep all personal information and records for a period of 7 years. Should you cease to be a client of ours, we will maintain your personal information on or off site in a secure manner for 7 years.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-px bg-brand mr-4"></span>
              Government Identifiers & TFN
            </h3>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                By law we are required to ask for your TFN. You do not have to provide your TFN if you do not want to; however, the ramifications may include taxation at the highest marginal rate or loss of imputation credits.
              </p>
            </div>
          </section>

          <section className="bg-gray-900 text-white p-12 rounded-[2rem] shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-brand">
              <span className="w-8 h-px bg-brand mr-4"></span>
              Spam Policy
            </h3>
            <div className="text-gray-400 leading-relaxed space-y-6">
              <p>
                Aperio Financial Services complies with the provisions of the Spam Act when sending commercial electronic messages.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-3">Consent</h4>
                  <p className="text-xs">Messages are only sent with express or inferred consent.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-3">Identify</h4>
                  <p className="text-xs">Clear information about the sender is always provided.</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-3">Unsubscribe</h4>
                  <p className="text-xs">Functional unsubscribe facilities are included in all communications.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-px bg-brand mr-4"></span>
              Complaints & Access
            </h3>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                You have a right to access your personal information, subject to certain exceptions allowed by law. Please contact our Privacy Officer if you wish to complain about any breach or potential breach of your privacy rights. Your complaint will be responded to within 7 days.
              </p>
            </div>
          </section>

        </div>
      </div>
      
      {/* Contact Footer */}
      <div className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-xl mx-auto text-center px-4">
          <p className="text-gray-500 mb-8 leading-relaxed">
            Need more information or wish to discuss our services?
          </p>
          <div className="flex justify-center">
            <Link 
              to="/#contact" 
              className="bg-brand text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-red-800 shimmer-btn inline-block text-sm"
            >
              General Enquiry
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;