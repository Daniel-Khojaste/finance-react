import React from "react";
import{
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGit,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () =>{
    return(
        <div>
            <div className="max-w-[1240px] grid lg:grid-cols-3 text-white px-4 py-6 gap-8 mx-auto">
                <div>
                        <h1 className="w-full my-6 text-3xl text-[#00df9a] font-bold ">REACT.</h1>
                        <p className="text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odio, soluta, adipisci consequuntur maiores exercitationem ipsam, ullam ex similique fugiat debitis mollitia deleniti rem. Optio ipsam quos eius nostrum eos!</p>

                        <div className="w-[75%] mt-6 flex justify-between">
                            <FaFacebookSquare size={30} />
                            <FaInstagram size={30} />
                            <FaTwitterSquare size={30} />
                            <FaGithubSquare size={30} />
                            <FaDribbbleSquare size={30} />
                        </div>

                </div>

                <div className="mt-6 lg:col-span-2 flex justify-between">
                    <div>
                        <ul>
                            <li className=" text-gray-500 font-medium">Solution</li>
                            <li className=" py-2 text-sm">Analytics</li>
                            <li className=" py-2 text-sm">Marketing</li>
                            <li className=" py-2 text-sm">Commerce</li>
                            <li className=" py-2 text-sm">Insight</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li className=" text-gray-500 font-medium">Support</li>
                            <li className=" py-2 text-sm">Pricing</li>
                            <li className=" py-2 text-sm">Documention</li>
                            <li className=" py-2 text-sm">Guides</li>
                            <li className=" py-2 text-sm">API Status</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li className=" text-gray-500 font-medium">Company</li>
                            <li className=" py-2 text-sm">About</li>
                            <li className=" py-2 text-sm">Blog</li>
                            <li className=" py-2 text-sm">Jobs</li>
                            <li className=" py-2 text-sm">Press</li>
                            <li className=" py-2 text-sm">Careers</li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <li className=" text-gray-500 font-medium">Lgeal</li>
                            <li className=" py-2 text-sm">Policy</li>
                            <li className=" py-2 text-sm">Terms</li>
                        </ul>
                    </div>

                    
                </div>

                

            </div>

        </div>
    )
}

export default Footer