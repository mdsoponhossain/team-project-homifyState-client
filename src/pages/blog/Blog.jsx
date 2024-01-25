import { BsCalendarDate } from "react-icons/bs";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";

const Blog = () => {
  return (
    <>
      <section
        className="bg-gray-100 mb-12 h-[320px] md:h-[400px] relative border-4 grid items-end"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 700px",
          backgroundPosition: "center",
          backgroundImage: "url(https://i.ibb.co/z5QV2NY/breadcrumbs-bg.jpg)",
        }}
      >
        <div className=" opacity-80 text-black  z-10    w-full items-center text-center mb-[15%] absolute">
          <h1 className=" text-5xl "> Blog Details </h1>
          <span className=" items-center flex  justify-center gap-1 text-xl mt-7">
          
            <IoHome></IoHome> Home . Blog details
          </span>
        </div>
      </section>

      <div className="  mt-5   ">
        {/* right site picethure */}
        <div className="px-8 w-full mx-auto flex flex-col md:flex-row lg:flex-row gap-6  justify-between  ">
          <div className=" xl:w-[800px] lg:w-[500px]  md:w-[590px] xl:h-[600px]  h-full ">
            <img
              src="https://i.ibb.co/8PmVZMt/banner-bg.jpg"
              alt=""
              className=" w-full h-full "
            />
            {/* comment and date imge */}
            <div className="flex text-sm gap-3 mt-2 ml-2 font-semibold">
              <p className="flex items-center gap-1">
              
                <BsCalendarDate></BsCalendarDate> march 25,2024
              </p>
              <p className=" flex items-center gap-1 ">
              
                <FaUser></FaUser> By Douglas
              </p>
              <p className="flex items-center gap-1">
              
                <FaRegCommentDots></FaRegCommentDots> 3 Comment
              </p>
            </div>
            {/* discription image text */}
            <div className=" mt-5">
              <h1 className=" xl:text-3xl text-2xl font-bold ">
              
                Maximize Room in Petite Bedroom spage
              </h1>
              <p className=" mt-3 xl:text-2xl lg:text-xl font-semibold ">
              
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repellat nostrum cupiditate dicta deserunt cum odio quas
                asperiores, ex sit iusto mollitia exercitationem in illo
                accusantium molestiae? Illum similique alias impedit. ex sit
                iusto mollitia exercitationem .
              </p>
            </div>
            {/*  "" cotetion text imag disc... */}
            <div className=" xl:mt-10 mt-7 xl:px-20">
              <p className="xl:text-xl text-xl font-medium py-1">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
                eligendi, dicta, similique ipsum dolorem delectus dignissimos
                officiis id facere maxime inventore! Exercitationem,
                Consequuntur esse sapiente totam magni rem. equuntur esse 
              </p>
            </div>
          </div>

          {/* left sitre populat bloge */}
          <div className="xl:w-[450px] lg:w-[520px] ">
            <input
              type="text"
              placeholder="Secarch"
              className=" border xl:p-4 p-2 xl:py-4 mt-2 w-[80%]  mb-5"
            />
            <hr className=" xl:mt-14 mb-3" />
            {/* card 1 number */}
            <div className="xl:mt-10">
              <h1 className=" xl:text-3xl lg:text-2xl text-xl  xl:mb-10 mb-3 font-bold ">
              
                Popular Blog
              </h1>
              {/* card section  */}
              <div className=" flex gap-5">
                <div>
                  <img
                    src="https://i.ibb.co/z5QV2NY/breadcrumbs-bg.jpg"
                    className=" xl:w-[200px] w-[150px] h-[90px] xl:h-full   "
                    alt=""
                  />
                </div>
                <div>
                  <p className="  xl:text-xl text-sm   font-semibold flex items-center gap-2 mb-3">
                  
                    <BsCalendarDate></BsCalendarDate> march 23, 2024
                  </p>
                  <h1 className=" xl:text-2xl lg:text-xl md:text-xl font-bold">
                  
                    The best Delicious Coffee Shop In bangkok china
                  </h1>
                </div>
              </div>
              {/* card tow setion */}
              <div className=" mt-7 flex gap-5">
                <div>
                  <img
                    src="../../../public/whatty-value.png"
                    className=" xl:w-[200px] w-[150px] h-[90px] xl:h-full   "
                    alt=""
                  />
                </div>
                <div>
                  <p className=" xl:text-xl text-sm font-semibold flex items-center gap-2 mb-3">
                  
                    <BsCalendarDate></BsCalendarDate> march 23, 2024
                  </p>
                  <h1 className=" xl:text-2xl  lg:md:text-xl  font-bold">
                  
                    The best Delicious Coffee Shop In bangkok china
                  </h1>
                </div>
              </div>
            </div>
            {/* poperty Catagories */}
            <div className=" mt-10">
              <h1 className="xl:text-3xl lg:text-2xl  text-xl font-bold">
                Property Categories
              </h1>

              <h1 className=" border p-2 px-7 xl:text-2xl lg:text-xl font-semibold mt-5 flex justify-between ">
              
                Real Estate <span> (6properties) </span>
              </h1>
              <h1 className=" border p-2 px-7 xl:text-2xl lg:text-xl  font-semibold mt-5 flex justify-between ">
              
                House <span> (4properties) </span>
              </h1>
              <h1 className=" border p-2 px-7  xl:text-2xl lg:text-xl font-semibold mt-5 flex justify-between ">
              
                Home Land <span> (16properties) </span>
              </h1>
              <h1 className=" border p-2 px-7 xl:text-2xl lg:text-xl font-semibold mt-5 flex justify-between ">
              
                Bath Beds <span> (76properties) </span>
              </h1>
            </div>
            {/* popular Tags */}

            <div className=" md:mb-4">
              <h1 className=" xl:text-3xl lg:text-2xl text-xl font-bold mb-4 mt-10 ">
              
                Popular Tags
              </h1>
              <div className=" grid gap-3 justify-between items-center xl:grid-cols-4 lg:grid-cols-3 grid-cols-3 ">
                <p className=" text-sm  border px-2 font-bold py-2 border-b-fuchsia-500 hover:bg-orange-400 ">
                
                  House build
                </p>
                <p className=" text-sm  border px-2 font-bold py-2 border-b-fuchsia-500 hover:bg-orange-400 ">
                
                  Apartment
                </p>
                <p className=" text-sm  border px-1 font-bold py-2 border-b-fuchsia-500 hover:bg-orange-400 ">
                
                  House Design
                </p>
                <p className=" text-sm  border px-2 font-bold py-2 border-b-fuchsia-500 hover:bg-orange-400 ">
                
                  Real
                </p>
                <p className=" text-sm  border px-2 font-bold py-2 border-b-fuchsia-500 hover:bg-orange-400 ">
                
                  Luxury
                </p>
                <p className=" text-sm  border px-1 font-bold py-2 border-b-fuchsia-500 hover:bg-orange-400 ">
                
                  House Rental
                </p>
                <p className=" text-sm  border px-2 font-bold py-2 border-b-fuchsia-500 hover:bg-orange-400 ">
                
                  Estate
                </p>
                <p className=" text-sm  border  font-bold py-2 border-b-fuchsia-500 hover:bg-orange-400 ">
                
                  Modern House
                </p>
                <p className=" text-sm  border px-2 font-bold py-2 border-b-fuchsia-500 hover:bg-orange-400 ">
                
                  Modern Tree
                </p>
                <p className=" text-sm  border px-2 font-bold py-2 border-b-fuchsia-500 hover:bg-orange-400 ">
                
                  House Sell
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* secound image state section  */}
      <div className="  mb-6  xl:w-[800px] px-4 lg:w-[500px]  md:w-[590px] h-full">
        <img
          src="https://i.ibb.co/8PmVZMt/banner-bg.jpg "
          className=" w-full h-full"
          alt=""
        />

        <h1 className=" xl:text-3xl lg:text-2xl text-xl font-bold mt-4  mb-5 ">
        
          Embracing a sophisticated yet minimalist aesthetic.
        </h1>
        <p className="xl:text-xl lg:text-xl  font-semibold">
        
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          molestias placeat perspiciatis repellendus, quia ab reiciendis,
          similique nemo est culpa voluptate porro odio consequatur adipisci
          officia dolorum sit molestiae deserunt quibusdam vitae. Consectetur
          architecto quia porro distinctio, in autem nisi?
        </p>

        {/* start section  */}

        <div className=" mt-20">
          <p className="flex items-center gap-3 text-xl font-bold">
          
            <MdOutlineStarPurple500></MdOutlineStarPurple500>
            <span>
            
              Real estate devlopment involves the process of purching imporoving
            </span>
          </p>
          <p className="flex items-center gap-3 mt-2 mb-2 text-xl font-bold">
          
            <MdOutlineStarPurple500></MdOutlineStarPurple500>
            <span>
            
              Real estate marrkets can expreience fluctuations in poperty values
              & demand
            </span>
          </p>
          <p className="flex items-center gap-3 text-xl font-bold">
          
            <MdOutlineStarPurple500></MdOutlineStarPurple500>
            <span>
              This can include constructing buildings roads , and other
              infrastructure
            </span>
          </p>
        </div>

        {/* post tages */}
        <div className="mt-11 cursor-pointer  xl:flex justify-between items-center ">
          <div className="flex gap-3 items-center font-semibold text-xl  ">
            <h1 className="xl:text-xl font-bold"> Post Tags : </h1>
            <p className=" text-sm  border px-1 font-bold py-2  hover:bg-orange-300  ">
            
              House Build
            </p>
            <p className=" text-sm  border px-1 font-bold py-2  hover:bg-orange-300  ">
            
              Estate
            </p>
            <p className=" text-sm  border px-1 font-bold py-2  hover:bg-orange-300  ">
            
              Aparment
            </p>
          </div>
          <div className=" flex gap-6 cursor-pointer xl:mt-0 lg:mt-5 md:mt-6 mt-6  text-xl items-center">
            <h1 className="xl:text-xl  font-bold"> Share: </h1>
            <FaFacebookF className=" bg-gray-400 hover:bg-orange-500  rounded-full text-3xl p-1 "></FaFacebookF>
            <FaGoogle className=" bg-gray-400 hover:bg-orange-500  rounded-full text-3xl p-1 "></FaGoogle>
            <FaLinkedin className=" bg-gray-400 hover:bg-orange-500  rounded-full text-3xl p-1 "></FaLinkedin>
            <FaTwitter className=" bg-gray-400 hover:bg-orange-500  rounded-full text-3xl p-1 "></FaTwitter>
          </div>
        </div>
        {/* comment section */}

        <div className="mt-10  px-4">
          <h1 className="xl:text-3xl lg:text-2xl text-xl font-bold">
          
            2 Commnets
          </h1>

          <div className=" flex mt-5 items-center gap-4 px-4">
            <div className="xl:w-24 lg:w-20 w-16 ">
              <img
                src="../../../public/Screenshot 2024-01-23 232016.png"
                className="rounded-full"
              />
            </div>
            <h1 className="xl:text-2xl lg:text-xl font-bold">
            
              Douglas Lyphe <br />
              <span className="uppercase font-semibold  text-sm">
              
                march 26,2024 At 10.25pm
              </span>
            </h1>
          </div>
          <p className="px-8 ml-24 mt-2 font-semibold">
          
            Lorem ipsum dolr sit amet consectetur adipisicing elit. Voluptas ad
            nobis officiis iusto reiciendis quaerat, assumenda nisi quam optio
            tenetur voluptates vitae voluptate numquam minus repellendus
            dignissimos veritatis repellat cupiditate.
          </p>

          <h1
            className=" border w-[70px] px-2 mb-4 py-1 border-b-green-500 font-bold  mt-4  ml-[130px] hover:bg-amber-300
 "
          >
          
            replay
          </h1>
        </div>

        {/* secound comment */}
        <div className="mt-10   xl:ml-32 lg:ml-20 md:ml-14 ">
          {/* <h1 className="text-3xl font-bold"> 2 Commnets  </h1> */}

          <div className=" flex mt-5 items-center gap-4 px-4">
            <div className="xl:w-24 lg:w-20 w-16 ">
              <img
                src="../../../public/416134857_361762533286846_594773232925n.jpg"
                alt="logo"
                className="rounded-full"
              />
            </div>
            <h1 className="xl:text-2xl lg:text-xl font-bold">
            
              Diye roy <br />
              <span className="uppercase font-semibold  text-sm">
              
                march 26,2024 At 10.25pm
              </span>
            </h1>
          </div>
          <p className="px-8 mt-2  ml-24 font-semibold">
          
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ad
            nobis officiis iusto reiciendis quaerat, assumenda nisi quam optio
            tenetur voluptates vitae voluptate numquam minus repellendus
            dignissimos veritatis repellat cupiditate.
          </p>

          <h1
            className=" border w-[70px] px-2 mb-4 py-1 border-b-green-500 font-bold  mt-4 ml-[130px] hover:bg-amber-300
 "
          >
          
            replay
          </h1>
        </div>

        {/* thard comment */}
        <div className="mt-10  px-4">
          <div className=" flex mt-5 items-center gap-4 px-4">
            <div className="xl:w-24 lg:w-20 w-16 ">
              <img src="../../../public/Screen95133.png" className="rounded-full" />
            </div>
            <h1 className="xl:text-2xl lg:text-xl font-bold">
            
              Repon Chandra <br />
              <span className="uppercase font-semibold  text-sm">
              
                march 26,2024 At 10.25pm
              </span>
            </h1>
          </div>
          <p className="px-8 mt-2  ml-24 font-semibold">
          
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ad
            nobis officiis iusto reiciendis quaerat, assumenda nisi quam optio
            tenetur voluptates vitae voluptate numquam minus repellendus
            dignissimos veritatis repellat cupiditate.
          </p>

          <h1
            className=" border w-[70px] px-2 mb-4 py-1 border-b-green-500 font-bold  mt-4 ml-[130px] hover:bg-amber-300
 "
          >
          
            replay
          </h1>
        </div>

        <hr className="mb-10 mt-8 px-8" />
        {/* leave comment section  */}
        <div className="">
          <h1 className="xl:text-3xl lg:text-2xl text-xl xl:ml-0 lg:ml-0 md:ml-3 ml-24 font-bold">
          
            Leave a Comment
          </h1>

          <div className="">
            <div className="mt-4 xl:flex lg:flex flex  gap-8 ml-6">
              <input
                type="text"
                placeholder="Name*"
                className=" border w-[50%] border-black py-2 px-2  "
              />
              <input
                type="email"
                placeholder="Email*"
                className=" w-[50%] border border-black py-2 px-2  "
              />
            </div>
            <div className="mt-4 xl:flex lg:flex flex  gap-8 ml-6">
              <input
                type="text"
                placeholder="Phone*"
                className=" border w-[50%] border-black py-2 px-2  "
              />
              <input
                type="text"
                placeholder="subjcet*"
                className=" w-[50%] border border-black py-2 px-2  "
              />
            </div>
            <div className=" mt-5 ml-6 flex gap-9 justify-between ">
              <textarea
                placeholder="comment"
                className="textarea textarea-bordered textarea-lg w-full max-w-xs"
              ></textarea>
            </div>
            <div className="flex gap-3 items-center mt-2 ml-7">
              <label className="label cursor-pointer">
                <input type="checkbox" defaultChecked className="checkbox" />
              </label>
              <p className=" font-semibold">
              
                save my name ,email and website inthis browser for the next time
                i comment
              </p>
            </div>
            <button className=" btn-primary btn  mt-4 ml-10  ">
            
              submit comment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
