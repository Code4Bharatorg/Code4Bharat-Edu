import { LocationOn, Phone, Email } from "@mui/icons-material";

const Getintouch = () => {
  return (
    <section className="container mx-auto p-8 flex flex-col md:flex-row justify-between items-start mt-12 mb-8">
      {/* Contact Info Section */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="font-syne text-3xl font-bold">Get in Touch</h2>
        <p className="font-montserrat text-gray-700 leading-relaxed font-bold mb-8">
          We&apos;d love to hear from you! Whether you have <br /> questions
          about our services or want to discuss <br /> your digital marketing
          needs, feel free to reach <br /> out. You can contact us via email,
          phone, or by <br /> filling out the form below. Our team is ready to
          <br /> assist you on your journey to success!
        </p>
        <div className="space-y-4">
          {/* Address Link */}
          <div className="flex items-start mt-12">
            <LocationOn className="text-blue-600 mr-2" />
            <a
              href="https://www.google.com/maps/place/Code4Bharat/@19.0726493,72.8758,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9598ad468b5:0xa355e25756e9a44f!8m2!3d19.0726494!4d72.8804081!16s%2Fg%2F11vyp7wnp7?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="font-roboto text-gray-700 font-bold hover:text-blue-600"
            >
              Off BKC Kurla, Mumbai, India 400070
            </a>
          </div>

          {/* Phone Link */}
          <div className="flex items-center">
            <Phone className="text-blue-600 mr-2" />
            <a
              href="tel:+919594430295"
              className="font-montserrat text-gray-700 font-bold hover:text-blue-600"
            >
              Call us on: +91 9594430295
            </a>
          </div>

          {/* Email Link */}
          <div className="flex items-center">
            <Email className="text-blue-600 mr-2" />
            <a
              href="mailto:code4bharat@gmail.com"
              className="font-montserrat text-gray-700 font-bold hover:text-blue-600"
            >
              Email us on: code4bharat@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Company Achievements Section */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <h3 className="font-syne text-2xl font-bold mb-6">Our Achievements</h3>
        <ul className="list-disc pl-6 space-y-4">
          <li className="font-montserrat text-gray-700">
            <span className="font-bold">500+ Students Placed </span>
            Successfully launched careers with top-tier IT firms.
          </li>
          <li className="font-montserrat text-gray-700">
            <span className="font-bold">Industry-Leading Placement Rate</span>
            100% job guarantee delivered through dedicated in-house placement
            experts.
          </li>
          <li className="font-montserrat text-gray-700">
            <span className="font-bold">
              Awarded "Best IT Education Platform" 2023:
            </span>
            Recognized for excellence in bridging education and employment.
          </li>
          <li className="font-montserrat text-gray-700">
            <span className="font-bold">
              Certified Partner with Top Tech Giants:
            </span>
            Collaborations ensuring industry-relevant curriculum and skills.
          </li>
          <li className="font-montserrat text-gray-700">
            <span className="font-bold">Empowered Over 10,000 Learners</span>
            Transforming students into industry-ready professionals in
            emerging technologies.
          </li>
        </ul>
      </div>
    </section>
  );
};  

export default Getintouch;
