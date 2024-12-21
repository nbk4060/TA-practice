import React from "react";
import Button from "./reusableComponents/Button";

const Footer = () => {
  const companyData = ["About Us", "Portfolio", "Blogs", "Contact Us"];
  const edTechData = [
    "Students Information System",
    "K12 School App",
    "Day Care Montessori Software",
    "Students Online Portal",
  ];
  const websiteData = [
    "Website Development",
    "Website Revamp",
    "UI/UX Design",
    "E-Commerce Solutions",
    "Content Writing",
  ];
  const bespokeData = [
    "CRM",
    "Inventory Software",
    "Mobile Application",
    "Web Application",
    "Custom Solutions",
  ];
  const digitalData = [
    "Students Enrolment Leads",
    "Graphic Designing",
    "Content Creation",
    "Social Media Management",
    "SEO",
  ];
  const marketingData = [
    "YouTube Ads",
    "PPC Ads",
    "Meta Ads",
    "E-mail Marketing",
  ];
  return (
    <div>
      <div className="max-w-[1176px] mx-auto mt-14">
        <h3 className="font-poppins font-bold text-[25px]/[38px] text-center text-[#323743]">
          Subscribe to our newsletter
        </h3>
        <form className="mt-4 flex justify-center">
          <div className="relative flex items-center">
            <img
              src="/assets/Mail.svg"
              alt="mail"
              className="absolute left-3 top-3"
            />
            <input
              type="email"
              placeholder="Input your email"
              className="pl-[34px] py-[8px] bg-[#EAECF0] rounded-l focus:outline-none w-[263px]"
            />
            <Button
              text={"Subscribe"}
              className="rounded-r bg-[#E98A14] p-[9.2px] font-manrope text-[#171A1F] text-base/[21.86px] font-normal flex justify-center items-center gap-2"
            />
          </div>
        </form>

        <div className="flex gap-8">
          <div className="flex flex-col gap-4 mt-9">
            <h4 className="font-poppins font-bold text-[20px]/[30px] text-[#323743]">
              Company
            </h4>
            {companyData.map((item, index) => (
              <a
                href="#"
                key={index}
                className="font-manrope font-normal text-sm/[22px] text-[#323743] cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4 mt-9">
            <h4 className="font-poppins font-bold text-[20px]/[30px] text-[#323743]">
              Ed Tech
            </h4>
            {edTechData.map((item, index) => (
              <a
                href="#"
                key={index}
                className="font-manrope font-normal text-sm/[22px] text-[#323743] cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4 mt-9">
            <h4 className="font-poppins font-bold text-[20px]/[30px] text-[#323743]">
              Website
            </h4>
            {websiteData.map((item, index) => (
              <a
                href="#"
                key={index}
                className="font-manrope font-normal text-sm/[22px] text-[#323743] cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4 mt-9">
            <h4 className="font-poppins font-bold text-[20px]/[30px] text-[#323743]">
              Bespoke Solutions
            </h4>
            {bespokeData.map((item, index) => (
              <a
                href="#"
                key={index}
                className="font-manrope font-normal text-sm/[22px] text-[#323743] cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4 mt-9">
            <h4 className="font-poppins font-bold text-[20px]/[30px] text-[#323743]">
              Digital Services
            </h4>
            {digitalData.map((item, index) => (
              <a
                href="#"
                key={index}
                className="font-manrope font-normal text-sm/[22px] text-[#323743] cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4 mt-9">
            <h4 className="font-poppins font-bold text-[20px]/[30px] text-[#323743]">
              Marketing Services
            </h4>
            {marketingData.map((item, index) => (
              <p
                key={index}
                className="font-manrope font-normal text-sm/[22px] text-[#323743] cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[1176px] mx-auto flex justify-between items-center mt-9 mb-[35px]">
        <div className="relative">
            <img src="/assets/Chevron.svg" alt="arrow" className="absolute right-[11px] top-3"/>
        <select className="appearance-none w-[127px] py-[9px] px-3 rounded bg-[#EAECF0] focus:outline-none text-sm/[22px] font-manrope text-[#171A1F]">
          <option value={"english"}>English</option>
          <option value={"urdu"}>Urdu</option>
          <option value={"german"}>German</option>
        </select>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-sm/[22px] font-manrope font-normal text-[#424856]">© 2024 Brand, Inc.</span>
          <ul className="flex items-center text-sm/[22px] font-manrope font-normal text-[#424856]">
            <li>•</li>
            <li className="ml-2">
              <a
                href="#"
                className="hover:underline focus:outline focus:outline-blue-500"
              >
                Privacy
              </a>
            </li>
            <li className="ml-1.5">•</li>
            <li className="ml-2">
              <a
                href="#"
                className="hover:underline focus:outline focus:outline-blue-500"
              >
                Terms
              </a>
            </li>
            <li className="ml-1.5">•</li>
            <li className="ml-2">
              <a
                href="#"
                className="hover:underline focus:outline focus:outline-blue-500"
              >
                Sitemap
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <a href="#">
            <img src="/assets/twitter-footer.svg" alt="twitter" />
          </a>
          <a href="#">
            <img src="/assets/facebook-footer.svg" alt="facebook" />
          </a>
          <a href="#">
            <img src="/assets/linkedin-footer.svg" alt="linkedin" />
          </a>
          <a href="#">
            <img src="/assets/youtube-footer.svg" alt="youtube" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
