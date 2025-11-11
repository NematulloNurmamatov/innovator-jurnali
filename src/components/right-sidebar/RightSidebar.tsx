import { FaFile, FaFileAlt, FaNewspaper, FaUser, FaUsers } from "react-icons/fa"
import google from "../../assets/google.png"
import slib from "../../assets/slibuz.png"
import elibrary from "../../assets/Elibrary_logo.jpg"
import cyberleninka from "../../assets/cyberleninka-new.png"
import crossref from "../../assets/crossref.png"
import orcid from "../../assets/orcid.png"
import openAccess from "../../assets/open-access.png"

const RightSidebar = () => {
    return (
        <div>
            <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-5">
                        Foydali havolalar
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <a 
                                href="#" 
                                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all cursor-pointer"
                            >
                                <FaFileAlt className="text-blue-600 dark:text-blue-400 text-lg flex-shrink-0" />
                                <span className="text-sm">Maqola yuborish</span>
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#" 
                                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all cursor-pointer"
                            >
                                <FaUser className="text-blue-600 dark:text-blue-400 text-lg flex-shrink-0" />
                                <span className="text-sm">Mualliflar uchun qoidalar</span>
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#" 
                                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all cursor-pointer"
                            >
                                <FaUsers className="text-blue-600 dark:text-blue-400 text-lg flex-shrink-0" />
                                <span className="text-sm">Tahririyat hay'ati</span>
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#" 
                                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all cursor-pointer"
                            >
                                <FaFile className="text-blue-600 dark:text-blue-400 text-lg flex-shrink-0" />
                                <span className="text-sm">Taqriz yozish</span>
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#" 
                                className="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all cursor-pointer"
                            >
                                <FaNewspaper className="text-blue-600 dark:text-blue-400 text-lg flex-shrink-0" />
                                <span className="text-sm">Nashr etikasi</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Bog'langan tizimlar
                    </h3>

                    <div className="overflow-hidden relative">
                        <div className="flex gap-4 animate-scroll">
                            {[
                                { name: "Google Scholar", img: google },
                                { name: "SLIB.UZ", img: slib },
                                { name: "eLIBRARY.RU", img: elibrary },
                                { name: "CyberLeninka", img: cyberleninka },
                                { name: "Crossref", img: crossref },
                                { name: "ORCID", img: orcid },
                                { name: "Open Access", img: openAccess },
                            ].map((item, index) => (
                                <div
                                    key={`${item.name}-${index}`}
                                    className="flex cursor-pointer items-center justify-center bg-gray-100 dark:bg-gray-700 rounded py-3 px-4 hover:scale-105 transition-transform flex-shrink-0"
                                    style={{ width: '200px' }}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-full h-auto object-cover max-h-16"
                                    />
                                </div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {[
                                { name: "Google Scholar", img: google },
                                { name: "SLIB.UZ", img: slib },
                                { name: "eLIBRARY.RU", img: elibrary },
                                { name: "CyberLeninka", img: cyberleninka },
                                { name: "Crossref", img: crossref },
                                { name: "ORCID", img: orcid },
                                { name: "Open Access", img: openAccess },
                            ].map((item, index) => (
                                <div
                                    key={`${item.name}-dup-${index}`}
                                    className="flex cursor-pointer items-center justify-center bg-gray-100 dark:bg-gray-700 rounded py-3 px-4 hover:scale-105 transition-transform flex-shrink-0"
                                    style={{ width: '200px' }}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-full h-auto object-contain max-h-12"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RightSidebar