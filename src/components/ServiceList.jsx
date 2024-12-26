import React from "react";

const ServiceList = ({ services }) => {
    return (
        <div className="bg-blue-950 text-white py-12 px-6">
            <h2 className="text-4xl font-bold text-center text-blue-300 mb-10">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ul className="list-disc list-inside">
                    {services.map((service) => (
                        <li key={service.id} className="grid md:grid-cols-2 bg-white text-blue-900 font-bold p-6 mb-2 rounded-lg shadow-lg hover:scale-105 transition duration-300">
                            {service.name}
                            {service.prev}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ServiceList;
