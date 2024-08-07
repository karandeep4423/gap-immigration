"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import { Player } from "@lottiefiles/react-lottie-player";
import { toast } from "react-toastify";
const Home = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [test, setTest] = useState("");
  const [mode, setMode] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && name && phone && message && test && mode && duration) {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: name,
          phone: phone,
          message: message,
          test: test,
          mode: mode,
          duration: duration,
        }),
      });
      const result = await res.json();
      if (result.success == false) {
        toast.error("Server error, Try again");
        return;
      }
      setEmail("");
      setName("");
      setPhone("");
      setMessage("");
      setTest("");
      setMode("");
      setDuration("");
      toast.success("Your message has been sent successfully");
    }
  };

  return (
    <div>
      <div className="relative max-w-screen-xl m-auto   w-full h-fit  flex flex-col md:flex-row px-10 items-center  ">
        <div className="absolute sm:left-10 mix-blend-multiply w-11/12 h-96  top-28 bg-gradient-to-r from-blue-300 via-purple-300  to-yellow-200 filter blur-3xl transform translate-y-2 scale-y-75 skew-y-12 ">
          {" "}
        </div>
        <div>
          <h1 className="text-5xl mt-10 xl:mt-0 text-gray-700 text-center font-bold">
            Learn <span className="text-sky-600">Punjabi language </span>and get
            <span className="text-pink-400"> Gurbani Classes of </span>
            with experienced tutors of{" "}
            <span className="text-cyan-500">Punjabi Lesson.</span>
          </h1>
          <p className="text-xl mt-8">
            We are a team of qualified teachers with industry-proven years of
            experience. Book a class according to your availability to open new
            door of language.
          </p>
        </div>
        <div>
          <Image
            src="/hero.png"
            className="w-[2000px] h-[500px]"
            width={1000}
            height={1000}
            alt="learn punjabi language"
          ></Image>
        </div>
      </div>
      <div className="max-w-screen-xl m-auto">
        <div className="md:m-10 m-6  rounded-3xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] relative   ">
          <div className="flex  items-center justify-center">
            <div id="about-us">
              <h2 className=" relative text-gray-700 mt-8 text-center text-5xl font-bold">
                About us
              </h2>
            </div>
            <div className="bg-sky-400 mt-8 absolute   mix-blend-multiply filter blur-2xl h-16 w-56 "></div>
          </div>
          <div className="absolute mix-blend-multiply w-11/12 h-44 left-10 top-28 bg-gradient-to-r from-blue-300 via-purple-300  to-yellow-200 filter blur-3xl transform translate-y-2 scale-y-75 skew-y-12 ">
            {" "}
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg xl:text-xl md:px-10 p-4 md:p-0 md:pt-5 md:pb-8">
              Our mission is to promote Punjabi language and culture and provide
              high-quality spiritual education to students around the world. Our
              team of expert tutors is dedicated to helping students achieve
              their learning objectives in a supportive and encouraging
              environment. We started this school with the aim of widening the
              reach of Punjabi language and culture worldwide and making it
              accessible to the upcoming generations. Our purpose is not to earn
              money but to make our classes affordable so that we can teach as
              many students as possible and fulfil our goals. We are committed
              to providing high-quality education and personalized guidance to
              our students. We believe that learning is a lifelong journey, and
              we are dedicated to supporting our students in their learning
              objectives at every stage of their journey.
            </p>
          </div>
        </div>
      </div>
      <div className="relative max-w-screen-xl m-auto">
        <div className="flex  items-center justify-center">
          <div id="why-choose-us">
            <h2 className="text-gray-700 relative mt-12 text-center mx-3 text-5xl font-bold">
              Why Gap Immigration
            </h2>
          </div>
          <div className="bg-sky-400 mt-12 absolute   mix-blend-multiply filter blur-2xl h-16 w-56 "></div>
        </div>
        <div className="text-lg xl:text-xl grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-10 p-6 md:p-10">
          <div
            className="w-fit max-h-fit p-5 border-2 rounded-2xl bg-indigo-100 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
            <Image
              className="m-auto"
              src="/target.png"
              height={110}
              width={110}
              alt=""
            ></Image>
            <h3 className="text-center mb-2 text-3xl font-medium">Our aim</h3>
            <p>
              At Punjabi Lesson, our aim is to make Punjabi language and culture
              accessible worldwide. Our qualified teachers offer personalized
              and flexible classes to preserve our heritage and open new
              opportunities for students. Join us in our mission to keep Punjabi
              alive for generations to come.
            </p>
          </div>
          <div
            className="w-fit max-h-fit p-5 border-2 rounded-2xl bg-indigo-100 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
            <Image
              className="m-auto"
              src="/dollar.png"
              height={110}
              width={110}
              alt=""
            ></Image>
            <h3 className="text-center mb-2 text-3xl font-medium">
              Budget friendly
            </h3>
            <p>
              We understand that learning a new language can be expensive, which
              is why we strive to keep our classes affordable and accessible to
              everyone. We believe that learning Punjabi should not be a
              financial burden, and we are committed to making it accessible to
              everyone.
            </p>
          </div>
          <div
            className="w-fit max-h-fit p-5 border-2 rounded-2xl bg-indigo-100 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
            <Image
              className="m-auto"
              src="/calendar.png"
              height={110}
              width={110}
              alt=""
            ></Image>
            <h3 className="text-center mb-2 text-3xl font-medium">
              24/7 availability
            </h3>
            <p>
              Punjabi Lesson offers 24/7 availability for our classes, allowing
              students and working professional to schedule and attend classes
              at their convenience from anywhere in the world. Our online
              platform is flexible and easy to use, accommodating busy schedules
              and different time zones.
            </p>
          </div>
          <div
            className="w-fit max-h-fit p-5 border-2 rounded-2xl bg-indigo-100 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
            <Image
              className="m-auto"
              src="/material.png"
              height={110}
              width={110}
              alt=""
            ></Image>
            <h3 className="text-center mb-2 text-3xl font-medium">
              Quality material
            </h3>
            <p>
              Our Punjabi Lesson provides high-quality, comprehensive and
              engaging learning materials including multimedia resources, study
              guides, and supplementary exercises. Our experienced teachers
              offer personalized support to help students achieve their full
              potential.
            </p>
          </div>
          <div
            className="w-fit max-h-fit p-5 border-2 rounded-2xl bg-indigo-100 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
            <Image
              className="m-auto"
              src="/replacement.png"
              height={110}
              width={110}
              alt=""
            ></Image>
            <h3 className="text-center mb-2 text-3xl font-medium">
              Replacement{" "}
            </h3>
            <p>
              At Punjabi Lesson, we offer a tutor replacement policy at no extra
              cost, allowing students to switch to a different tutor if they
              feel their current tutor is not the right fit. We understand the
              importance of finding the right tutor to achieve your learning
              goals.
            </p>
          </div>
          <div
            className="w-fit max-h-fit p-5 border-2 rounded-2xl bg-indigo-100 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
            <Image
              className="m-auto"
              src="/team.png"
              height={140}
              width={140}
              alt=""
            ></Image>
            <h3 className="text-center mb-2 text-3xl font-medium">
              Expert team
            </h3>
            <p>
              We are proud to have a team of expert tutors who are native
              Punjabi speakers and passionate about teaching Punjabi language
              and spirituality. Our tutors have years of experience in their
              respective fields and are dedicated to providing our students with
              the highest quality of instruction.{" "}
            </p>
          </div>
          <div
            className="w-fit max-h-fit p-5 border-2 rounded-2xl bg-indigo-100 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
            <Image
              className="m-auto"
              src="/track.png"
              height={140}
              width={140}
              alt=""
            ></Image>
            <h3 className="text-center mb-2 text-3xl font-medium">
              Track progress{" "}
            </h3>
            <p>
              Tracking student progress is essential to ensuring that our
              students make progress in their language and spiritual learning
              journeys. Our expert tutors use various assessment methods to
              track student progress, providing regular feedback and progress
              reports to help students achieve their learning goals.{" "}
            </p>
            <p />
          </div>
          <div
            className="w-fit max-h-fit p-5 border-2 rounded-2xl bg-indigo-100 
             shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]"
          >
            <Image
              className="m-auto"
              src="/doubt2.png"
              height={200}
              width={220}
              alt=""
            ></Image>
            <h3 className="text-center mb-2 text-3xl font-medium">
              Doubt clear session{" "}
            </h3>
            <p>
              At Punjabi Lesson, we understand that learning a new language or
              exploring spirituality can be challenging, and that is why we
              offer doubt-clearing sessions to our students. Our expert tutors
              provide personalised support, answering questions and clarifying
              doubts after class or anytime students need help.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl m-auto">
        <div className="flex items-center justify-center">
          <div id="Our-success-stories">
            <h2 className=" relative text-gray-700 text-center mx-3 mt-16 text-5xl font-bold">
              What our students say
            </h2>
          </div>
          <div className="bg-sky-400 mt-16 absolute   mix-blend-multiply filter blur-2xl h-16 w-56 "></div>
        </div>
        <div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-10 m-10 ">
          <div>
            <h1>Hello</h1>
          </div>
          <div>
            <h1>Hello</h1>
          </div>
          <div>
            <h1>Hello</h1>
          </div>
        </div>
        <div>
          <Swiper
            grabCursor={true}
            pagination={true}
            navigation={true}
            centeredSlides={true}
            modules={[Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide className="">
              <div className="sm:p-8 rounded-2xl  lg:p-14 py-14  border-y-2 sm:border-2 relative mx-0 sm:mx-14 lg:mx-20 my-16 border-sky-600  ">
                <span className="absolute pt-4 pl-4 sm:pl-0 sm:pt-6 -top-1 sm:-left-4 -left-0.5  w-14 text-left text-4xl md:text-7xl text-sky-600 bg-indigo-100 ">
                  ❝
                </span>
                <div className="max-w-screen-xl flex p-6  md:flex-row flex-col  gap-6 w-11/12 m-auto  max-h-fit rounded-2xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]">
                  <div className="w-32 h-32  md:m-6 m-auto">
                    <Image
                      className="w-full h-full rounded-full shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] "
                      width={300}
                      height={300}
                      alt="punjabi language class"
                      src="/DefaultImg.png"
                    ></Image>
                  </div>
                  <div className=" md:w-8/12  flex flex-col justify-center items-center md:items-start text-lg">
                    <p>Zaryab</p>
                    <p className="text-gray-600">Birmingham,UK</p>
                    <p>
                      Punjabi Lesson teachers are cooperative and helpful with
                      myself when it comes to learning Punjabi; currently, we
                      are focusing on writing, and I am enjoying it.
                    </p>
                  </div>
                </div>
                <span className=" absolute -bottom-1 sm:-right-4 pr-4 sm:pr-0 -right-0.5 w-14 pt-4 sm:pt-6 text-right text-4xl md:text-7xl text-sky-600 bg-indigo-100 ">
                  ❞
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="sm:p-8 rounded-2xl  lg:p-14 py-14  border-y-2 sm:border-2 relative mx-0 sm:mx-14 lg:mx-20 my-16 border-sky-600  ">
                <span className="absolute pt-4 pl-4 sm:pl-0 sm:pt-6 -top-1 sm:-left-4 -left-0.5  w-14 text-left text-4xl md:text-7xl text-sky-600 bg-indigo-100 ">
                  ❝
                </span>
                <div className="max-w-screen-xl flex p-6  md:flex-row flex-col  gap-6 w-11/12 m-auto  max-h-fit rounded-2xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]">
                  <div className="w-32 h-32  md:m-6 m-auto">
                    <Image
                      className="w-full h-full rounded-full shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] "
                      width={300}
                      height={300}
                      alt="punjabi language lesson"
                      src="/DefaultImg.png"
                    ></Image>
                  </div>
                  <div className=" md:w-8/12  flex flex-col justify-center items-center md:items-start text-lg">
                    <p>Gaganpreet</p>
                    <p className="text-gray-600">Sydney, Australia</p>
                    <p>
                      Punjabi Lesson have good teachers. They are teaching
                      Punjabi to my son. My son likes to learn Punjabi from
                      them.
                    </p>
                  </div>
                </div>
                <span className=" absolute -bottom-1 sm:-right-4 pr-4 sm:pr-0 -right-0.5 w-14 pt-4 sm:pt-6 text-right text-4xl md:text-7xl text-sky-600 bg-indigo-100 ">
                  ❞
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="sm:p-8 rounded-2xl  lg:p-14 py-14  border-y-2 sm:border-2 relative mx-0 sm:mx-14 lg:mx-20 my-16 border-sky-600  ">
                <span className="absolute pt-4 pl-4 sm:pl-0 sm:pt-6 -top-1 sm:-left-4 -left-0.5  w-14 text-left text-4xl md:text-7xl text-sky-600 bg-indigo-100 ">
                  ❝
                </span>
                <div className="max-w-screen-xl flex p-6  md:flex-row flex-col  gap-6 w-11/12 m-auto  max-h-fit rounded-2xl shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)]">
                  <div className="w-32 h-32  md:m-6 m-auto">
                    <Image
                      className="w-full h-full rounded-full shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] "
                      width={300}
                      height={300}
                      alt="punjabi language course"
                      src="/DefaultImg.png"
                    ></Image>
                  </div>
                  <div className=" md:w-8/12  flex flex-col justify-center items-center md:items-start text-lg">
                    <p>Sunil</p>
                    <p className="text-gray-600">Vancouver, Canada</p>
                    <p>
                      Karandeep&apos;s material and approach to teaching was
                      very good. He&apos;s very patient and supportive; and was
                      available to answer any questions I had between lessons.{" "}
                    </p>
                  </div>
                </div>
                <span className=" absolute -bottom-1 sm:-right-4 pr-4 sm:pr-0 -right-0.5 w-14 pt-4 sm:pt-6 text-right text-4xl md:text-7xl text-sky-600 bg-indigo-100 ">
                  ❞
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div id="choose-your-class" className="m-auto max-w-screen-xl">
        <div className="flex items-center justify-center">
          <h2
            id="contact-us"
            className="text-gray-700 relative text-center mt-14 text-5xl font-bold"
          >
            Send enquiry
          </h2>
          <div className="bg-sky-400 mt-14 absolute   mix-blend-multiply filter blur-2xl h-8 w-56 "></div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="h-fit   shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] min-w-fit mt-8 rounded-3xl mx-4  sm:mx-32 md:40 lg:mx-56 p-3  md:p-10 mb-16 border-2 border-gray-200"
        >
          <div className="flex pt-3  gap-2">
            <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_u25cckyh.json"
              style={{
                height: "70px",
                width: "70px",
                borderRadius: "50%",
                marginTop: "-12px",
              }}
            ></Player>
            <div className="relative  z-0 w-full mb-6 group">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="floating_email"
                className="block background-transparent overflow-hidden py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-800 dark:border-gray-600 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-sky-600 peer"
                placeholder=" "
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
              <label
                for="floating_email"
                className=" peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-600 peer-focus:dark:text-sky-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
          </div>
          <div className="flex gap-2">
            <Player
              autoplay
              loop
              src="https://assets2.lottiefiles.com/packages/lf20_Fuxw3k.json"
              style={{
                height: "70px",
                width: "70px",
                marginTop: "-12px",
                borderRadius: "50%",
              }}
            ></Player>
            <div class="relative z-0 w-full mb-6 group">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="floating_first_name"
                class="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-800 dark:border-gray-600 dark:focus:border-sky-500 focus:outline-none focus:ring-0 focus:border-sky-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_first_name"
                class="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-600 peer-focus:dark:text-sky-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
          </div>
          <div className="flex gap-2">
            <Player
              autoplay
              loop
              src="https://assets3.lottiefiles.com/private_files/lf30_1ezswqfp.json"
              style={{
                height: "70px",
                marginTop: "-12px",
                width: "70px",
                borderRadius: "50%",
              }}
            ></Player>
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                name="telephone"
                className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-800 dark:border-gray-600 dark:focus:border-sky-600 focus:outline-none focus:ring-0 focus:border-sky-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_phone"
                className="peer-focus:font-medium absolute text-xl text-gray-500 dark:text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-sky-600 peer-focus:dark:text-sky-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>
          </div>

          <div className="pl-5 flex flex-col gap-2">
            <p className="text-xl text-gray-700  font-bold">Select a test:</p>
            <div className=" font-semibold pl-5 flex flex-row gap-10">
              <div>
                <input
                  className="accent-sky-600"
                  type="radio"
                  id="Ielts"
                  name="drone"
                  value="Ielts"
                  onChange={(e)=> setTest(e.target.value)}
                />
                <label className="pl-3" for="Ielts">
                  IELTS
                </label>
              </div>
              <div>
                <input
                  className="accent-sky-600"
                  type="radio"
                  id="PTE"
                  name="drone"
                  value="PTE"
                  onChange={(e)=> setTest(e.target.value)}
                />
                <label className="pl-3" for="PTE">
                  PTE
                </label>
              </div>
              <div>
                <input
                  className="accent-sky-600"
                  type="radio"
                  id="ESPD"
                  name="drone"
                  value="ESPD"
                  onChange={(e)=> setTest(e.target.value)}
                />
                <label className="pl-3" for="ESPD">
                  ESPD
                </label>
              </div>
            </div>
          </div>
          <div className="pt-5 flex pl-5 flex-col gap-2">
            <p className="font-bold text-gray-700 text-xl">
              Kindly select your mode:
            </p>
            <div className="flex-row font-semibold flex gap-10 pl-5">
              <div>
                <input
                  className="accent-sky-600"
                  type="radio"
                  id="Online"
                  name="mode"
                  value="Online"
                  onChange={(e)=> setMode(e.target.value)}
                />
                <label className="pl-3" for="Online">
                  Online
                </label>
                <br></br>
              </div>
              <div>
                <input
                  className="accent-sky-600"
                  type="radio"
                  id="Offline"
                  name="mode"
                  value="Offline"
                  onChange={(e)=> setMode(e.target.value)}
                />
                <label className="pl-3" for="Offline">
                  Offline
                </label>
              </div>
            </div>
          </div>
          <div className="pt-5 pl-5 flex flex-col gap-2">
            <p className="text-gray-700 font-bold text-xl">
              Kindly select the duration of the classes:
            </p>
            <div className="pl-5 gap-10 font-semibold flex-row flex ">
              <div>
                <input
                  className="accent-sky-600"
                  type="radio"
                  id="15 days"
                  name="duration"
                  value="15 days"
                  onChange={(e)=> setDuration(e.target.value)}
                />
                <label className="pl-3" for="15 days">
                  15 days
                </label>
              </div>
              <div>
                <input
                  className="accent-sky-600"
                  type="radio"
                  id="30 days"
                  name="duration"
                  value="30 days"
                  onChange={(e)=> setDuration(e.target.value)}
                />
                <label className="pl-3" for="30 days">
                  30 days
                </label>
              </div>
            </div>
          </div>
          <div className="w-full pt-5 pl-0 sm:pl-[80px] ">
            <textarea
              required
              placeholder="Write us message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className=" shadow-[5px_5px_0px_4px_rgba(2,139,199,0.5),_-5px_-5px_0px_rgba(255,255,255,1)] rounded-xl w-full outline-sky-600 hover:outline-offset-2 h-32 p-2  text-xl border-2 "
            ></textarea>
          </div>
          <div className="flex  pt-10 justify-center">
            <button className="text-lg font-medium w-3/4  py-2 rounded-xl text-center overflow-hidden group bg-sky-500 relative hover:bg-gradient-to-r hover:from-sky-500 hover:to-sky-500 text-white hover:ring-2 hover:ring-offset-2 hover:ring-sky-400 transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-28 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
