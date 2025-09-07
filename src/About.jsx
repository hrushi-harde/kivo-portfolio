import React from "react";
import mainImg1 from "./assets/mission.jpg";
import mainImg2 from "./assets/vision.jpg";
import mainImg3 from "./assets/values.jpg";
import mainImg4 from "./assets/commitment.jpg";

function About() {
  return (
    <div className="bg-black text-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="px-4 py-1 border border-gray-200 text-cyan-500 font-bold rounded-full">
            ABOUT US
          </span>
          <h2 className="text-3xl font-bold mt-4">
            We Are More Than Just a Tech Company
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 grid sm:grid-cols-2 grid-cols-1 gap-4">
            {[mainImg1, mainImg2, mainImg3, mainImg4].map((imgSrc, index) => (
              <div key={index} className="relative">
                <img
                  src={imgSrc}
                  className="w-full h-64 object-cover rounded-lg"
                  alt={`about-img-${index + 1}`}
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/60 p-3 rounded-b-lg">
                  <h3 className="text-lg font-bold border-b border-gray-100 mb-3">
                    {index === 0
                      ? "Our Mission"
                      : index === 1
                      ? "Our Vision"
                      : index === 2
                      ? "Our Values"
                      : "Our Commitment"}
                  </h3>
                  <p className="text-sm">
                    {index === 0 &&
                      "To empower businesses with innovative digital solutions that accelerate growth and create lasting impact."}
                    {index === 1 &&
                      "To be a global leader in technology, driving digital transformation and building a smarter, connected world."}
                    {index === 2 &&
                      "Innovation, integrity, and excellence guide everything we do—from solutions we design to relationships we build."}
                    {index === 3 &&
                      "We are committed to delivering future-ready solutions that adapt to evolving technologies and client needs."}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center">
            <div>
              <h3 className="text-lg font-bold text-cyan-500">Our Philosophy</h3>
              <p className="text-xl text-gray-300 mt-2">
                At <span className="text-cyan-500 font-semibold">Kivo</span>, we believe technology is more than tools—it’s a force for transformation.
                Our philosophy is built on innovation, collaboration, and customer success.
                We partner with businesses to deliver tailored, scalable solutions that not only solve challenges but unlock new opportunities.
                <br /><br />
                By combining creativity with cutting-edge technology, we aim to shape a digital future that empowers people, organizations, and communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
