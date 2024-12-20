import React from "react";
import Button from "./reusableComponents/Button";
import Cards from "./reusableComponents/Cards";
import CustomAvatar from "./reusableComponents/CustomAvatar";
import Input from "./reusableComponents/Input";

const Body = () => {
  const images = [
    "/assets/institutions-1.png",
    "/assets/institutions-2.png",
    "/assets/institutions-3.png",
    "/assets/institutions-4.png",
    "/assets/institutions-5.png",
    "/assets/institutions-6.png",
  ];
  const avatarData = [
    { image: "/assets/Avatar7.png", name: "You", add: true },
    { image: "/assets/Avatar6.png", name: "Adam", add: false },
    { image: "/assets/Avatar5.png", name: "William", add: false },
    { image: "/assets/Rectangle3.png", name: "Peter", add: false },
    { image: "/assets/Rectangle4.png", name: "Julia", add: false },
  ];

  const mediaData = [
    {
      icon: "/assets/media.png",
      title: "PPC & Youtube Ads",
      desc: "Targeted, cost-efficient advertising for instant reach.",
    },
    {
      icon: "/assets/share.png",
      title: "Social Media",
      desc: "Strategic and highly engaging content for social audiences.",
    },
    {
      icon: "/assets/filter.png",
      title: "Search Engine Optimization",
      desc: "Organically optimized, long-terms visibility for business.",
    },
    {
      icon: "/assets/email.png",
      title: "E-mail Marketing",
      desc: "Result-driven communication to nurture and drive opportunities.",
    },
  ];
  const informedData = [
    {
      picture: "/assets/image-24.png",
      text: "Do consectetur",
      title: "Aliqua Irure Tempor Lorem Occaecat Volup",
      dateTime: "Dec 24, 2022",
      ago: "5 mins read",
    },
    {
      picture: "/assets/image-25.png",
      text: "Consequat labore",
      title: "Commodo Deserunt Ipsum Occaecat Qui",
      dateTime: "Dec 12, 2022",
      ago: "10 mins read",
    },
    {
      picture: "/assets/image-26.png",
      text: "Laboris nulla",
      title: "Deserunt Cccaecat Qui Amet Tempor Dolore",
      dateTime: "Nov 20, 2022",
      ago: "3 mins read",
    },
  ];
  return (
    <div>
      <div className="w-full h-[785px] bg-[#001242] pt-[171px] relative">
        <div className="max-w-[1047px] mx-auto flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-[#CFD2DA] text-[19px]/[22px] font-bold font-manrope">
            Leading the Charge In EdTech Transformation
          </h2>
          <h1 className="text-center text-white text-5xl/[56px] font-bold font-poppins">
            Empowering Educators, Inspiring Students
          </h1>
          <p className="text-center text-[#CFD2DA] text-base/[22px] font-normal font-manrope px-[67px]">
            We build transformative EdTech solutions to simplify your education
            management needs, so you can focus on what really matters. Whether
            it’s enrollments, tuition, financial or daily operations, Three
            Apples puts control at your fingertips!
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button
              text={"Book a Demo"}
              className="rounded bg-[#E98A14] p-2.5 font-manrope text-[#171A1F] text-base/[21.86px] font-normal flex justify-center items-center gap-2"
              icon={"/assets/Demo.svg"}
            />
            <Button
              text={"Get a Quote"}
              className="rounded text-white px-[27px] py-[9px] text-base/[22px] font-normal"
            />
          </div>
        </div>
        <img
          src="/assets/hero-section-layer-1.png"
          alt="bg layer"
          className="absolute bottom-0 w-full object-cover"
        />
        <img
          src="/assets/hero-section-image.png"
          alt="group of people"
          className="absolute bottom-0 z-[5] left-[50%] right-[50%] translate-x-[-50%]"
        />
      </div>

      <div className="max-w-[1166px] mx-auto flex flex-col gap-4 items-center mt-16">
        <h2 className="font-poppins font-bold text-[34px]/[46px] text-[#171A1F] text-center">
          Endorsed Across Canada
        </h2>
        <p className="font-manrope font-normal text-base/[26px] text-[#171A1F] text-center max-w-[548px]">
          We're a trusted partner for many of Canada's top educational
          institutions, delivering premium services across a range of domains.
        </p>
        <div className="flex items-center gap-8">
          {images.map((item, index) => (
            <img src={item} alt={item} key={index} />
          ))}
        </div>
      </div>

      <div className="mt-14 max-w-[1139px] mx-auto py-6 flex justify-between items-center">
        <img src="/assets/eco.png" alt="education ecosystem" />
        <div className="flex flex-col gap-4 max-w-[581px]">
          <h3 className="font-poppins font-bold text-[28px]/[39px] text-[#323743]">
            We Help You Succeed Through Personalized EdTech Solutions that
            Everyone Loves!{" "}
          </h3>
          <h6 className="font-manrope font-normal text-[19px]/[29px] text-[#060606]">
            An Education Ecosystem Where Everyone Thrives
          </h6>
          <p className="font-manrope font-normal text-base/[26px] text-[#171A1F] text-justify">
            Leading the forefront of EdTech innovation, Three Apples empowers
            educators to navigate productivity challenges, dismantle data silos,
            and enhance management efficiency. Our systems are all
            experience-engineered with a special focus on user-friendliness,
            cross-compatibility, and scalability, so you always stay on top of
            your business without compromising on time or budget.
          </p>
          <Button
            text={"Learn More"}
            className="rounded bg-[#E98A14] p-2.5 font-manrope text-[#171A1F] text-base/[21.86px] font-normal flex justify-center items-center gap-2 w-max"
            icon={"/assets/Right.svg"}
          />
        </div>
      </div>

      <div className="max-w-[1158px] mx-auto mt-14 py-6">
        <div className="flex flex-col items-center gap-2">
          <p className="font-manrope font-normal text-base/[26px] text-[#323743]">
            Partners in Education Success
          </p>
          <h3 className="max-w-[642px] font-poppins font-bold text-[34px]/[50px] text-[#171A1F] text-center">
            Transforming Education Through Digital Transformation
          </h3>
          <p className="font-manrope font-normal text-base/[26px] text-[#171A1F]">
            Our solutions are designed to end your stress, so you focus on
            things that matter.
          </p>
        </div>
        <div className="mt-10">
          <Cards
            subtext={"Streamline and Enhance Management With"}
            heading={"K12 School App"}
            para={
              "Three Apples K-12 Education Software is an all-in-one solution designed for school administrators, students, teachers, and parents that transforms school operations into a single-point access system."
            }
            src={"/assets/Alejandro.png"}
            contentDivStyle="max-w-[484px]"
            className="pl-[52px] pr-[92px]"
          />
          <div className="flex gap-6 mt-6">
            <Cards
              subtext={"Boost Administrative Efficiency With"}
              heading={"Student Information System"}
              para={
                "Three Apples Student Information System (SIS) software is a cloud backed, LMS-integrated platform equipped with a comprehensive toolkit of features."
              }
              src={"/assets/Alejandro-1.png"}
              contentDivStyle="max-w-[480px]"
              className="pl-[46px] pr-10 py-8 flex-col gap-[23px] min-h-[610px]"
            />
            <Cards
              subtext={"Advance Communication and Accessibility With"}
              heading={"Students Online Portal"}
              para={
                "Three Apples Students Portal offers a centralized hub for students to effortlessly access various services and educational information related to your institute."
              }
              src={"/assets/Alejandro-1.png"}
              contentDivStyle="max-w-[480px]"
              className="pl-[46px] pr-10 py-8 flex-col min-h-[610px]"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1139px] mx-auto mt-14 relative">
        <img
          src="/assets/Group1.png"
          alt="social 1"
          className="absolute -left-14 top-8"
        />
        <div className="flex flex-col items-center gap-2">
          <p className="font-manrope font-normal text-base/[26px] text-[#323743]">
            Solve Complex Business Challenges With
          </p>
          <h3 className="font-poppins font-bold text-[34px]/[50px] text-[#171A1F] text-center">
            Bespoke Software and App Solutions
          </h3>
          <p className="font-manrope font-normal text-sm/[22px] text-[#171A1F] text-center max-w-[564px]">
            As an EdTech specialty organization, we offer deep-domain expertise
            in education software development. We understand the unique
            challenges educators face and tailor our software development
            services based on their requirements and evolving needs.
          </p>
          <Button
            text={"Explore More"}
            className="rounded bg-[#006CAA] mt-2 px-[29px] py-[9px] font-manrope text-white text-sm/[22px] font-normal flex justify-center items-center gap-2 w-max"
            icon={"/assets/Arrow-right.png"}
          />
          <div className="flex gap-2 items-center justify-center mt-[72px]">
            {avatarData.map((item, index) => (
              <CustomAvatar name={item.name} icon={item.image} add={item.add} />
            ))}
          </div>
        </div>
        <img
          src="/assets/Group2.png"
          alt="social 2"
          className="absolute -right-14 -bottom-1"
        />
      </div>
      <div className="mt-[72px] max-w-[1139px] mx-auto flex justify-between">
        {mediaData.map((item, index) => (
          <div key={index} className="flex flex-col gap-1.5 justify-between">
            <img
              src={item.icon}
              alt="media"
              className="size-6 -ml-2.5 object-cover"
            />
            <div className="pl-6 pb-6 border-l border-[#BDC1CA]">
              <h3 className="font-manrope font-bold text-base/[26px] text-[#171A1F]">
                {item.title}
              </h3>
              <p className="font-manrope font-normal text-sm/[22px] text-[#171A1F] max-w-[212px] mt-2">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-14 max-w-[1193px] mx-auto rounded-lg bg-[#001242] px-[100px] py-[58px] flex flex-col gap-4 relative">
        <div className="max-w-[452px] font-poppins font-bold text-[34px]/[50px] text-white">
          Take A Bite Into Smarter EdTech{" "}
          <span className="text-[#E98A14]">Solutions.</span>
        </div>
        <p className="font-manrope font-normal text-lg/7 text-[#DEE1E6]">
          Book a Demo Now!
        </p>
        <div className="flex items-center gap-4">
          <Button
            text={"Book a Demo"}
            className="rounded bg-[#E98A14] p-2.5 font-manrope text-[#171A1F] text-base/[21.86px] font-normal flex justify-center items-center gap-2"
            icon={"/assets/Demo.svg"}
          />
          <Button
            text={"Download E-Brochure"}
            className="rounded text-white text-sm/[22px] font-normal underline"
          />
        </div>
        <img
          src="/assets/laptop.png"
          alt="laptop"
          className="absolute -top-[53px] right-[34.7px]"
        />
        <img
          src="/assets/shadow.png"
          alt="shadow"
          className="absolute -right-14 top-0.5"
        />
      </div>

      <div className="mt-14 bg-[#F8F9FA] py-[78px] flex justify-center gap-[126px]">
        <div>
          <div className="flex flex-col gap-4 max-w-[358px]">
            <p className="font-manrope font-normal text-base/[26px] text-[#323743]">
              Interested In Our Products?
            </p>
            <h4 className="font-poppins font-bold text-[34]/[50px] text-[#171A1F]">
              Get A Quote
            </h4>
            <p className="font-manrope font-normal text-base/[26px] text-[#171A1F]">
              Get in touch with our sales team for a detailed breakdown of the
              product.
            </p>
          </div>
          <div className="flex items-center gap-[13px] mt-[25px] px-[11px]">
            <img src="/assets/Phone-1.svg" alt="contact" />
            <p className="font-manrope text-sm/[42px] font-normal text-[#171A1F]">
              (817) 810-3785
            </p>
          </div>
          <div className="flex items-center gap-[13px] border border-[#00529E] px-[11px] py-[3.5px] rounded-lg mt-[11px]">
            <img src="/assets/email.svg" alt="email" />
            <p className="font-manrope text-sm/[42px] font-normal text-[#171A1F]">
              htaylor@hotmail.com
            </p>
          </div>
          <div className="flex items-center gap-[13px] mt-[11px] px-[11px]">
            <img src="/assets/in-person.svg" alt="in-person" />
            <p className="font-manrope text-sm/[42px] font-normal text-[#171A1F]">
              htaylor@hotmail.com
            </p>
          </div>
          <div className="flex gap-2 mt-[47px]">
            <div className="w-11 h-11 flex justify-center items-center">
              <img src="/assets/facebook.svg" alt="facebook" />
            </div>
            <div className="w-11 h-11 flex justify-center items-center">
              <img src="/assets/twitter.svg" alt="twitter" />
            </div>
            <div className="w-11 h-11 flex justify-center items-center">
              <img src="/assets/instagram.svg" alt="instagram" />
            </div>
            <div className="w-11 h-11 flex justify-center items-center">
              <img src="/assets/linkedin.svg" alt="linkedin" />
            </div>
          </div>
        </div>
        <div className="max-w-[709px] w-full rounded-lg border border-white bg-[#001242] py-8 px-10">
          <form>
            <div className="flex items-center gap-[25px] w-full">
              <Input
                label={"Full Name"}
                type={"text"}
                name={"fullName"}
                placeholder={"John Doe"}
              />
              <Input
                label={"Business Name"}
                type={"text"}
                name={"businessName"}
                placeholder={"Business Name"}
              />
            </div>
            <div className="flex items-center gap-[25px] w-full mt-4">
              <Input
                label={"E-mail"}
                type={"email"}
                name={"email"}
                placeholder={"yourmail@emaily.com"}
              />
              <div className="flex flex-col gap-4 w-full">
                <label className="font-manrope font-bold text-base/[26px] text-white">
                  Service
                </label>
                <select
                  className="rounded-[3px] border border-[#BDC1CA] font-manrope font-normal text-base/[26px] text-[#BDC1CA] py-[7px] px-4 w-full focus:outline-none"
                  name={"businessName"}
                >
                   <option value={""} selected>Choose a service</option>
                  <option value={"service-1"}>Service 1</option>
                  <option value={"service-2"}>Service 2</option>
                  <option value={"service-3"}>Service 3</option>
                  <option value={"service-4"}>Service 4</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full mt-4">
              <label className="font-manrope font-bold text-base/[26px] text-white">
                How can we help?
              </label>
              <textarea
                rows={3}
                className="rounded-[3px] border border-[#BDC1CA] font-manrope font-normal text-base/[26px] text-[#BDC1CA] py-[7px] px-4 w-full focus:outline-none min-h-[112px]"
                placeholder="Enter your message here"
              />
            </div>
            <Button
              text={"Send my message"}
              className="rounded bg-[#E98A14] px-2.5 py-[7px] font-manrope text-[#171A1F] text-base/[26px] font-normal flex justify-center items-center gap-2 mt-4 w-full"
            />
          </form>
        </div>
      </div>

      <div className="max-w-[1163px] mx-auto py-6 mt-14">
        <div className="flex flex-col gap-2 justify-center items-center max-w-[590px] mx-auto">
          <h3 className="font-poppins font-bold text-[34px]/[56px] text-center text-[#171A1F]">
            Stay Informed
          </h3>
          <p className="font-manrope font-normal text-lg/7 text-center text-[#9095A1]">
            Stay updated on the latest education industry news, trends, and
            evolving landscape.
          </p>
        </div>
        <div className="flex gap-6 mt-8">
          {informedData.map((item, index) => (
            <div
              key={index}
              className="border bg-shadow rounded-t-[8px] rounded-b-md"
            >
              <img
                src={item.picture}
                alt={item.text}
                className="rounded-t-[8px] w-full h-[256px] object-cover"
              />
              <div className="p-6">
                <p className="font-manrope font-normal text-base/[26px] text-[#E98A14]">
                  {item.text}
                </p>
                <h3 className="font-poppins font-bold text-2xl/9 text-[#171A1F] mt-1">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between mt-3">
                  <span className="font-manrope font-normal text-sm/[22px] text-[#9095A1]">
                    {item.dateTime}
                  </span>
                  <span className="bg-[#F3F4F6] rounded-[14px] px-2 py-1 font-manrope text-xs/5 font-normal text-[#323743]">
                    {item.ago}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button
            text={"Read More Articles"}
            className="rounded bg-[#E98A14] p-2.5 font-manrope text-[#171A1F] text-base/[21.86px] font-normal flex justify-center items-center gap-2 w-max"
            icon={"/assets/Right.svg"}
          />
        </div>
      </div>
      <div className="relative mt-14 min-h-[278px]">
        <img
          src="/assets/Group.png"
          alt="background"
          className="absolute w-full"
        />
        <div className="absolute left-[50%] right-[50%] top-[27px] -translate-x-[50%] w-full max-w-[553px] mx-auto">
          <h3 className="font-poppins font-bold text-[34px]/[50px] text-center text-white">
            Ready to transform your school management?
          </h3>
          <div className="flex items-center justify-center gap-4 mt-4">
            <Button
              text={"Contact Sales"}
              className="rounded bg-[#E98A14] p-2.5 font-manrope text-[#171A1F] text-base/[21.86px] font-normal flex justify-center items-center gap-2"
            />
            <Button
              text={"Learn More"}
              className="rounded text-white px-[21px] py-[7px] text-base/[22px] font-normal underline"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
