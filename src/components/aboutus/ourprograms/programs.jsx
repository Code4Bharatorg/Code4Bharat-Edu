import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa';

const Programs = () => {
  return (
    <section className="bg-[#B2D5ED] py-16 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-4 text-left font-publicSans">Our Programs</h2>
        <p className="text-[#6D737A] text-2xl mb-8 font-publicSans text-left ">
          We offer a variety of flexible, career-focused programs tailored to different learning needs and career aspirations:
        </p>
        
        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center">
          {/* Program Card 1 */}
          <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md flex flex-col space-y-4 items-start">
            <div className="flex items-center w-full">
              <Image
                src="https://picsum.photos/seed/pic1/150/150"
                alt="Program 1"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h3 className="ml-4 text-lg font-bold font-publicSans">6-Month Certification Program</h3>
              <FaQuoteRight className="text-yellow-500 text-2xl ml-auto" />
            </div>
            <p className="text-gray-600 font-publicSans">
              For students seeking essential web development skills with immediate employability.
            </p>
          </div>

          {/* Program Card 2 */}
          <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md flex flex-col space-y-4 items-start">
            <div className="flex items-center w-full">
              <Image
                src="https://picsum.photos/seed/pic2/150/150"
                alt="Program 2"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h3 className="ml-4 text-lg font-bold font-publicSans">1-Year Diploma Program</h3>
              <FaQuoteRight className="text-yellow-500 text-2xl ml-auto" />
            </div>
            <p className="text-gray-600 font-publicSans">
              Ideal for building a solid foundation in web development, preparing students for specialized roles.
            </p>
          </div>

          {/* Program Card 3 */}
          <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md flex flex-col space-y-4 items-start">
            <div className="flex items-center w-full">
              <Image
                src="https://picsum.photos/seed/pic3/150/150"
                alt="Program 3"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h3 className="ml-4 text-lg font-bold font-publicSans">3-Year Bachelor’s Degree</h3>
              <FaQuoteRight className="text-yellow-500 text-2xl ml-auto" />
            </div>
            <p className="text-gray-600 font-publicSans">
              A comprehensive program that equips students with end-to-end knowledge and prepares them for leadership roles in web development.
            </p>
          </div>

          {/* Program Card 4 */}
          <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md flex flex-col space-y-4 items-start">
            <div className="flex items-center w-full">
              <Image
                src="https://picsum.photos/seed/pic4/150/150"
                alt="Program 4"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h3 className="ml-4 text-lg font-bold font-publicSans">2-Year Advanced Diploma</h3>
              <FaQuoteRight className="text-yellow-500 text-2xl ml-auto" />
            </div>
            <p className="text-gray-600 font-publicSans">
              For those who want to gain deeper expertise in advanced web development techniques.
            </p>
          </div>
        </div>

        <p className=" mt-8 font-publicSans text-[#6D737A] text-2xl">
          Each program is designed to provide hands-on experience, real-world projects, and the professional skills needed to succeed in the tech industry.
        </p>
      </div>
    </section>
  );
};

export default Programs;
