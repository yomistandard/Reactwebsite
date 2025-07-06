import React from 'react';
import HeroSection from './ccomponents/heroSection.jsx';
import Navbar from './ccomponents/Navbar.jsx';
import FeatureSection from './ccomponents/featureSection.jsx';
import Testimonials from './ccomponents/Testimonial.jsx'
import Footer from './ccomponents/footer.jsx'
import Pricing from './ccomponents/Pricing.jsx';
import Workflow from './ccomponents/workflow.jsx';
const App = () => (
  <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimonials />
      <Footer/>
    </div>
  </>
);

export default App;
