    import React from "react";

    const Placement = () => {
    return (
        <div className="w-full h-[70vh]  flex">
        <div className="w-1/2 h-full ">
            <div className="w-full h-[20%] flex items-center justify-center">
            <h1 className="text-[3.5vw] font-bold text-[#06241B]">
                Pay After <span className="text-[#116EB3]">Placement</span>{" "}
            </h1>
            </div>
            <div className="w-full h-[50%]  flex items-center justify-center">
            <p className="text-[1.1vw] font-medium">
                We understand the financial barriers to education and are <br />{" "}
                committed to making tech careers accessible to everyone. Our <br />
                pay-after-placement model allows students to enroll in our <br />{" "}
                courses without upfront costs. You only start paying once you've{" "}
                <br /> secured a job, letting you focus on learning and building
                your <br /> future without financial stress.
            </p>
            </div>
        </div>
        <div className="w-1/2 h-full  flex  justify-center">
            <div className="w-[70%] h-[70%] ">
            <img src="https://i.pinimg.com/564x/31/04/27/310427dabbea277df5103b24bc84e6a7.jpg" alt="" className="w-full h-full object-cover" />
            </div>
        </div>
        </div>
    );
    };

    export default Placement;
