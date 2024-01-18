
import { BiDotsVerticalRounded } from "react-icons/bi";
const Banner = () => {

    return (
        <section className="bg-gray-100 h-[700px] border-4 grid items-end" style={{backgroundRepeat:'no-repeat',backgroundSize:'100% 700px',backgroundPosition:'center',backgroundImage: 'url(https://i.ibb.co/8PmVZMt/banner-bg.jpg)'}}>
            <div className=" w-[90%] md:w-[80%] lg:w-[890px] mx-auto">
                <h1 className="md:text-5xl text-4xl lg:text-6xl  font-bold">Building houses that feel
                    like home - with us.</h1>
                <p className="my-10 font-medium lg:text-3xl text-2xl">Through a combination of lectures, readings, and discussions, students will gain a solid
                    foundation  in educational psychology.</p>
            </div>
            <div>

                <div className=" hidden  h-[220px] w-[930px] mx-auto lg:grid items-end mb-10 ">
                    <div className="flex w-[95%] mx-auto">
                        <span className="text-black hover:bg-slate-200  bg-white border py-2 px-5">Buy</span>
                        <span className="text-black hover:bg-slate-200 bg-white border py-2  px-5">Sell</span>
                        <span className="text-black hover:bg-slate-200 bg-white border py-2  px-5">Rent</span>
                    </div>
                    <div className=" h-[150px] w-[95%] mx-auto mb-7 bg-white">
                        <div className=" w-[90%] mx-auto grid text-3xl pt-2  justify-end">
                            <BiDotsVerticalRounded></BiDotsVerticalRounded>
                        </div>
                        <div className="  h-[140px] w-[98%]  mb-4 bg-white grid items-end">

                            <form className="card-body ">
                                <div className=" grid md:grid-cols-5 gap-2 justify-between items-center ">
                                    <div className="">
                                        <label className="label">
                                            <span className="label-text">Location</span>
                                        </label>
                                        <div className="border">
                                            <select className="select select-ghost w-full max-w-xs border">
                                                <option disabled selected>Pick the best JS framework</option>
                                                <option>Svelte</option>
                                                <option>Vue</option>
                                                <option>React</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="">
                                        <label className="label">
                                            <span className="label-text">Type</span>
                                        </label>
                                        <div className="border">
                                            <select className="select select-ghost w-full max-w-xs border">
                                                <option disabled selected>Pick the best JS framework</option>
                                                <option>Svelte</option>
                                                <option>Vue</option>
                                                <option>React</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="">
                                        <label className="label">
                                            <span className="label-text">price</span>
                                        </label>
                                        <div className="border">
                                            <select className="select select-ghost w-full max-w-xs border">
                                                <option disabled selected>value</option>
                                                <option>Svelte</option>
                                                <option>Vue</option>
                                                <option>React</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="">
                                        <label className="label">
                                            <span className="label-text">KeyWord</span>
                                        </label>
                                        <input type="text" placeholder="Your Keyword" className="input input-bordered rounded-none" required />
                                    </div>
                                    <div className="mt-10 w-[165px] grid justify-end" >
                                        
                                        <button className="btn  text-xl bg-yellow-300 hover:bg-yellow-400">Search</button>
                                    </div>
                                </div>


                            </form>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default Banner;
