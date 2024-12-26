import React, { useRef } from "react";

const DoctorCard = ({ doctors }) => {
    const focusRef = useRef();

    const handleFocus = () => {
        focusRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="m-auto px-6 py-12 bg-white">
            <h2 className="text-4xl font-bold text-center text-blue-500 py-2">Our Specialists</h2>
            <div className="text-center my-4">
                <button
                    onClick={handleFocus}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Focus on Top Doctor
                </button>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {doctors.map((doctor, index) => (
                    <div
                        key={doctor.id}
                        ref={index === 0 ? focusRef : null} // Asigna la referencia al primer doctor
                        className="flex flex-col items-center bg-blue-100 text-blue-500 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
                    >
                        <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="object-cover w-64 h-64 rounded-full mb-4"
                        />
                        <h3 className="text-3xl font-bold text-blue-500 mt-4">{doctor.name}</h3>
                        <p className="text-xl text-blue-400 mt-2">Specialty: {doctor.specialty}</p>
                        <p className="text-xl text-blue-400">Experience: {doctor.experience}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorCard;

