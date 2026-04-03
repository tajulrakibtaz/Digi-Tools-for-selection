import React from 'react';

const Pricing = () => {
    return (
         <div className="flex flex-col  md:flex-row gap-6 justify-center py-10 bg-gray-100 mb-0">

  
      <div className="card w-80 bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="text-2xl font-bold">Starter</h2>
          <p className="text-gray-500">Perfect for getting started</p>

          <h1 className="text-4xl font-bold">$0<span className="text-lg font-normal">/Month</span></h1>

          <ul className="mt-4 space-y-2 text-sm">
            <li>✔ Access to 10 free tools</li>
            <li>✔ Basic templates</li>
            <li>✔ Community support</li>
            <li>✔ 1 project per month</li>
          </ul>

          <button className="btn mt-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            Get Started Free
          </button>
        </div>
      </div>

   
      <div className="card w-80 text-white shadow-xl rounded-xl 
        bg-gradient-to-b from-indigo-600 to-purple-600 relative scale-105">

        <span className="absolute -top-3 left-1/2 -translate-x-1/2 
          badge badge-warning px-4 py-2">
          Most Popular
        </span>

        <div className="card-body">
          <h2 className="text-2xl font-bold">Pro</h2>
          <p className="text-gray-200">Best for professionals</p>

          <h1 className="text-4xl font-bold">$29<span className="text-lg font-normal">/Month</span></h1>

          <ul className="mt-4 space-y-2 text-sm">
            <li>✔ Access to all premium tools</li>
            <li>✔ Unlimited templates</li>
            <li>✔ Priority support</li>
            <li>✔ Unlimited projects</li>
            <li>✔ Cloud sync</li>
            <li>✔ Advanced analytics</li>
          </ul>

          <button className="btn mt-6 rounded-full bg-white text-purple-600 border-none">
            Start Pro Trial
          </button>
        </div>
      </div>

  
      <div className="card w-80 bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="text-2xl font-bold">Enterprise</h2>
          <p className="text-gray-500">For teams and businesses</p>

          <h1 className="text-4xl font-bold">$99<span className="text-lg font-normal">/Month</span></h1>

          <ul className="mt-4 space-y-2 text-sm">
            <li>✔ Everything in Pro</li>
            <li>✔ Team collaboration</li>
            <li>✔ Custom integrations</li>
            <li>✔ Dedicated support</li>
            <li>✔ SLA guarantee</li>
            <li>✔ Custom branding</li>
          </ul>

          <button className="btn mt-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            Contact Sales
          </button>
        </div>
      </div>

    </div>
    );
};

export default Pricing;