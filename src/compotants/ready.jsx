import React from 'react';

const Ready = () => {
    return (
        <div className='text-white bg-gradient-to-r from-blue-500 to-purple-500'>
            
            <div className='max-w-[1200px] mx-auto mt-[80px] md:mt-[120px] py-[80px] md:py-[120px] text-center px-4'>
                
                <h1 className='text-2xl sm:text-3xl md:text-[40px] font-extrabold leading-tight'>
                    Ready to Transform Your Workflow?
                </h1>

                <p className='mt-4 text-sm sm:text-base md:text-lg'>
                    Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
                </p>

                <div className='mt-6 flex flex-col sm:flex-row justify-center gap-3'>
                    <button className='px-6 py-2 bg-amber-50 text-purple-700 rounded-3xl transition duration-300 hover:bg-yellow-200 hover:scale-105 active:scale-95'>
                        Explore Products
                    </button>

                    <button className='px-6 py-2 border border-white text-white rounded-3xl transition duration-300 hover:bg-white hover:text-purple-700 hover:scale-105 active:scale-95'>
                        View Pricing
                    </button>
                </div>

                <p className='mt-6 text-xs sm:text-sm opacity-90'>
                    14-day free trial • No credit card required • Cancel anytime
                </p>

            </div>
        </div>
    );
};

export default Ready;