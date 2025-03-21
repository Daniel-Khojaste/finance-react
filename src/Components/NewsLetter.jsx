import React from "react";

const NewsLetter = () =>{

    return(
        <div className="w-full my-6 text-white">
            <div className=" max-w-[1240px] grid lg:grid-cols-3 mx-auto">
                <div className="lg:col-span-2 p-3">
                    <h2 className="font-bold text-2xl lg:text-3xl mb-2">Want tips & tricks to optimize your flow? </h2>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>

                <div>
                <div className=" my-3 p-3 flex flex-col lg:flex-row justify-between items-center w-full">
                    <input type="email" placeholder="Enter your Email" className="rounded-md px-3 py-2 w-full text-black"/>
                    <button className="m-2 bg-[#00df9a] text-black w-[180px] h-[40px] rounded-md font-medium">Notify me</button>
                </div>
                <p className="px-3 text-center">we care about the protection of your date. Read our <a className="text-[#00df9a]" href="#">Privacy Policy</a></p>
                </div>
                

            </div>

        </div>
    )
}

export default NewsLetter