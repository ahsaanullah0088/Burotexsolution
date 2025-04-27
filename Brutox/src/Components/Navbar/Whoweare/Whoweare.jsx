import React from "react";

const WhoWeAre = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Who We Are</h2>
        <p className="text-gray-600 mb-10">
          Making connections that matter since 2013
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-4xl font-bold text-indigo-700">100+</h3>
            <p className="text-gray-800 mt-2">Clients</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-700">1,000+</h3>
            <p className="text-gray-800 mt-2">Positions filled</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-indigo-700">$100M+</h3>
            <p className="text-gray-800 mt-2">Salaries Negotiated</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
