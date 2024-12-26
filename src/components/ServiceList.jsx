import React, {useEffect} from "react";

const ServiceList = ({ services }) => {
    useEffect(() => {
        console.log("ServiceList component mounted");
    }, []);
    return (
        <div className="bg-blue-950 text-white py-12 px-6">
            <h2 className="text-4xl font-bold text-center text-blue-300 mb-10">Our Services</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 p-4 py-2 mb-4">
                <ul className="grid md:grid-cols-2 mb-4 gap-6 list-disc list-inside">
                    {services.map((service) => (
                        <li key={service.id} className="grid md:grid-cols-1 bg-white text-blue-900 font-bold p-6 mb-2 rounded-lg shadow-lg hover:scale-105 transition duration-300">
                            <span className='text-lg'>{service.name}</span>
                            <span>{service.prev}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ServiceList;
