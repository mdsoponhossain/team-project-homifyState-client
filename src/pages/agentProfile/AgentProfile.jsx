import { useContext, useEffect, useState } from "react";
import { FaEdit, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
// import { FaEdit } from "react-icons/fa";
import { AuthContext } from './../../utils/provider/AuthProvider';
import useAxiosPrivate from './../../hooks/axiosPrivate/useAxiosPrivate';
import toast from "react-hot-toast";
import useAxiosPublic from './../../hooks/axiosPublic/useAxiosPublic';
import { UsePhoto } from "../../hooks/imageHosting/ImageHosting";



const AgentProfile = () => {
  const [agent, setagent] = useState([]);
  const [toggle, setToggle] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  // console.log(user);

  useEffect(() => {
    const fetchData = async () => {
      if (user?.email) {
        await axiosPrivate.get(`/users/${user?.email}`)
          .then(res => {
            setagent(res.data);
            // console.log(res.data)
          });
      }
    };

    fetchData();
  }, [axiosPrivate, user, toggle]);
  const handelsubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const imgloc = from.photo.files[0];
    console.log(imgloc);
    let photo;
    if (imgloc) {
      photo = await UsePhoto(imgloc);
      console.log(photo);
    }
    const name = from.name.value || user?.displayName;
    const phone = from.phone.value;
    const description = from.description.value || "";
    // const photo = from.photo.value || user?.photoURL;

    const allInfo = {
      name,
      phone,
      photoURL: photo,
      description
    };

    const res = await axiosPublic.patch(`/users/user/${user?.email}`, allInfo)
    const data = res.data;
    if (data.modifiedCount > 0) {

      setToggle(!toggle);
    }
    console.log(data);
    toast.success("success full update")
  };

  return (
    <>
      {/* stactic card section  */}

      <div className="flex justify-between items-center">
        <h1 className=" lg:text-3xl text-xl my-5 lg:ml-8 ml-4 md:ml-7 font-semibold"> Personal Information: </h1>
        <button className="btn bg-[#f3f03fdc] border-none  md:[12rem] lg:mr-8 mr-[2rem]  ml-[6rem] " onClick={() => document.getElementById('my_modal_5').showModal()}><span><FaEdit className="text-xl" /></span>Info</button>
      </div>
      {/* start */}
      <div className="lg:flex xl:flex md:flex flex-row cursor-pointer gap-5  mb-5 px-7  justify-center ">

        <div className=" w-[350px]  lg:W-[150px] h-[380px] md:w-[450px] xl:w-[500px] relative ">
          <img src={agent?.photoURL} alt="" className="w-full  h-full  " />

          <div className="xl:bottom-[150px] lg:bottom-[170px] absolute md:bottom-[150px] bottom-[170px]  ml-8 text-xl  ">
            <a href="https://www.facebook.com"><p className="mt-4 mb-3  bg-yellow-300 hover:bg-yellow-600 p-1 py-2 "> <FaFacebook className="rounded-full  "></FaFacebook> </p></a>
            <a href="https://www.linkedin.com/"><p className="mt-4 mb-3 bg-yellow-300 hover:bg-yellow-600  p-1 py-2 "><FaLinkedinIn></FaLinkedinIn></p></a>
            <a href="https://twitter.com/"><p className="mt-4 mb-3 bg-yellow-300 hover:bg-yellow-600  p-1 py-2 ">
              <FaTwitter></FaTwitter>
            </p></a>
          </div>
        </div>


        <div className=" w-full lg:w-[400px] xl:w-full px-6 bg-gray-200 lg:mt-0 md:mt-0 mt-5">
          <div className="">
            <h1 className="text-2xl font-bold "> {agent?.name} </h1>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <div className=" px-4 py-3 rounded-md ">
                  <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold"> Update Information </h1>
                    <div className="modal-action">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="text-2xl "><IoCloseSharp /></button>
                      </form>
                    </div>
                  </div>
                  <form onSubmit={handelsubmit}>
                    <div className="mt-4 xl:grid-cols-2 lg:grid-cols-2 grid-cols-2  grid text-center items-center justify-center gap-10 ">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Name</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          defaultValue={agent?.name}
                          className="input input-bordered"
                          required
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Photo</span>
                        </label>
                        <input
                          name="photo"
                          type="file"
                          placeholder="Photo"
                          className="file-input file-input-bordered file-input-primary w-full"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Number</span>
                        </label>
                        <input
                          name="phone"
                          type="text"
                          defaultChecked={agent?.phone}
                          className="input items-center py-2 input-bordered"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered" name="description" placeholder="Bio"></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className=" mt-4 font-semibold px-2 hover:bg-yellow-500   rounded-lg bg-yellow-400 w-[180px] h-12 mb-6 "
                    >
                      Update Information
                    </button>
                  </form>
                </div>

              </div>
            </dialog>
          </div>

          <p className=" mt-3 uppercase font-medium"> {agent?.role} </p>

          <p className="text-[20px] font-semibold mt-5"> {agent?.description}</p>

          <h1 className=" text-2xl  font-bold my-5 "> Contact Information</h1>

          <div className="xl:flex lg:flex flex-row gap-7 md:flex-row mt-2">
            <div className=" flex xl:flex-row flex-col  gap-4">
              <p className=" flex items-center gap-3"> < MdOutlineMailOutline></MdOutlineMailOutline> {agent?.email} </p>
              <p className=" flex gap-1 items-center"> <MdOutlineLocalPhone></MdOutlineLocalPhone>{agent?.phone}</p>
            </div>

          </div>

        </div>
      </div>


      {/* end */}
    </>
  );

};

export default AgentProfile;

// end

