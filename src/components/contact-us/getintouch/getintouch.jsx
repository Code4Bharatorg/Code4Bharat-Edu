import ContactForm from "../ContactForm"; // Make sure the path is correct
import { LocationOn, Phone, Email } from "@mui/icons-material";

const Getintouch = () => {
  return (
    <section className="container mx-auto p-8 flex flex-col md:flex-row justify-between items-start mt-12 mb-8">
      {/* Contact Info Section */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="font-syne text-3xl font-bold">Get in Touch</h2>
        <p className="font-montserrat text-gray-700 leading-relaxed font-bold mb-8">
          We&apos;d love to hear from you! Whether you have <br /> questions about our
          services or want to discuss <br /> your digital marketing needs, feel free to
          reach <br /> out. You can contact us via email, phone, or by <br /> filling out the
          form below. Our team is ready to <br /> assist you on your journey to
          success!
        </p>
        <div className="space-y-4">
          <div className="flex items-start mt-12">
            <LocationOn className="text-blue-600 mr-2" />
            <p className="font-roboto text-gray-700 font-bold">
              Cluster_mumbai Suburban, 381 White <br />House-2, SG Barve Marg, Netaji
              Nagar,<br /> Kurla West, Kurla, Mumbai, Maharashtra <br /> 400070, India
            </p>
          </div>
          <div className="flex items-center">
            <Phone className="text-blue-600 mr-2" />
            <p className="font-montserrat text-gray-700 font-bold">
              Call us on: +91 959 440 2916
            </p>
          </div>
          <div className="flex items-center">
            <Email className="text-blue-600 mr-2" />
            <p className="font-montserrat text-gray-700 font-bold">
              Email us on: code4bharat@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Drop A Line Form */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <ContactForm />
      </div>
    </section>
  );
};

export default Getintouch;
