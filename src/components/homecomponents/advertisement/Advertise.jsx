


const Advertise = () => {
    return (
        <div className=" lg:w-[1200px] p-2 mx-auto bg-white ">
            <h1 className=" mb-7 items-start text-center text-2xl font-bold ">Advertisement section</h1>
        <marquee  direction="left">
        
        <div className="flex lg:p-2   lg:w-[400px]  mt-3 gap-4">
        <img src="https://i.ibb.co/NZkjQxT/download-1.jpg" alt="" className=" w-[25%] h-[30%]" />
        <img src="https://i.ibb.co/SNGQdGq/nexus.png" alt="" className=" w-[25%] h-[30%] "/>
        <img src="https://i.ibb.co/19TZfJf/2-1.png" alt="" className=" w-[25%] h-[30%] " />
        <img src="https://i.ibb.co/YyY7v8w/1-1.png" alt="" className=" w-[25%] h-[30%] "/>
        <img src="https://i.ibb.co/jWMyFDQ/3-1.png" alt="" className=" w-[25%] h-[30%] "/>
        <img src="https://i.ibb.co/3dQY8M7/rocket.png" alt="" className=" w-[25%] h-[30%] "/>
        
        <img src="https://i.ibb.co/cxRNBC2/4.png" alt="" className=" w-[25%] h-[30%] "/>
        <img src="https://i.ibb.co/hFsQfdf/5.png" alt="" className=" w-[25%] h-[30%] "/>
        </div>
        </marquee>
           </div>
    );
};

export default Advertise;
