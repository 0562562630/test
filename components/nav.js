import Image from "next/image";

const Nav = () => {
    return (
        <div className="p-3 border-b border-gray-400  flex flex-col md:flex-row md:justify-between text-center md:text-left">
            <h2 className="font-bold text-gray-700 text-sm md:text-base">
                Email: <span className="font-normal text-gray-600">Alraha@gmail.com</span>
            </h2>
            <h2 className="font-bold text-gray-700 text-sm md:text-base">
                Contact Us: <span className="font-normal text-gray-600">+966 578309446</span>
            </h2>
            <h2 className="font-bold text-gray-700 text-sm md:text-base">
                Address: <span className="font-normal text-gray-600">42242 Riyadh</span>
            </h2>
        </div>
    );
};

export default Nav;

