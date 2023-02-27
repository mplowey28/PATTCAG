import Image from 'next/image'
import profile from '../public/images/profile.jpg'
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from 'react-icons/ai'
import {
  MdOutlineDesignServices,
  MdOutlineContactSupport,
  MdOutlineInfo,
  MdSmartphone,
} from 'react-icons/md'
import { RiScales3Fill, RiCommunityFill } from 'react-icons/ri'
import { GiTeacher } from 'react-icons/gi'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col w-full pt-2 pb-[400px] md:pb-40 h-full items-center">
      <div className=" grid grid-cols-2  md:grid-cols-4 max-w-7xl md:shadow-md ">
        <div className="flex col-span-2  md:col-span-4 p-4 justify-between">
          <div className="flex flex-col">
            <h1 className="text-darkBlue text-4xl uppercase">Patton</h1>
            <h1 className="text-darkBlue text-2xl uppercase mr-2">
              Advocacy & Consulting, LLC
            </h1>
          </div>
          <div className="flex flex-row items-center gap-2">
            <AiFillFacebook
              size="3rem"
              color="#F5793A"
              className="transform hover:scale-110"
            />
            <AiFillInstagram
              size="3rem"
              color="#F5793A"
              className="transform hover:scale-110"
            />
            <AiFillTwitterSquare
              size="3rem"
              color="#F5793A"
              className="transform hover:scale-110"
            />
          </div>
        </div>
        <div className="col-span-2 row-span-2 row-start-2 h-80 relative">
          <div className="w-1/3 text-left text-lg p-4 absolute top-0 right-0 z-10 ">
            <h1 className="text-darkBlue text-right italic ">
              Empowering individuals with special needs and their families.
            </h1>
          </div>
          <Image
            alt="profile pic"
            src={profile}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col justify-around items-around h-40 bg-primaryDark p-4 hover:cursor-pointer hover:shadow-[inset_-5px_-5px_9px_rgba(255,255,255,0.45),inset_5px_5px_9px_rgba(94,104,121,0.3)] hover:transorm hover:scale-95">
          <h1 className="text-4xl text-white">Our Services</h1>
          <div className="flex w-full h-full justify-center items-center">
            <MdOutlineDesignServices size="4rem" color="#FFF" />
          </div>
        </div>
        <div className=" flex flex-col justify-around items-around h-40 bg-darkBlue p-4 hover:cursor-pointer hover:shadow-[inset_-5px_-5px_9px_rgba(255,255,255,0.45),inset_5px_5px_9px_rgba(94,104,121,0.3)] hover:transorm hover:scale-95">
          <h1 className="text-4xl text-white">FAQ</h1>
          <div className="flex w-full h-full justify-center items-center">
            <MdOutlineContactSupport size="4rem" />
          </div>
        </div>
        <Link href="./about">
          <div className="flex flex-col justify-around items-around h-40 bg-darkBlue  p-4 hover:cursor-pointer hover:shadow-[inset_-5px_-5px_9px_rgba(255,255,255,0.45),inset_5px_5px_9px_rgba(94,104,121,0.3)] hover:transorm hover:scale-95">
            <h1 className="text-4xl text-white">About</h1>
            <div className="flex w-full h-full justify-center  items-center">
              <MdOutlineInfo size="4rem" />
            </div>
          </div>
        </Link>
        <div className="flex flex-col justify-around items-around h-40 bg-primaryDark p-4 hover:cursor-pointer hover:shadow-[inset_-5px_-5px_9px_rgba(255,255,255,0.45),inset_5px_5px_9px_rgba(94,104,121,0.3)] hover:transorm hover:scale-95">
          <h1 className="text-4xl text-white">Contact Us</h1>
          <div className="flex w-full h-full justify-center items-center ">
            <MdSmartphone size="4rem" />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col md:flex-row justify-between max-w-5xl pt-16 gap-10">
        <div className="flex flex-col md:w-1/3 w-full text-left items-center md:shadow-md ">
          <div className="h-40">
            <h1 className="text-darkBlue text-3xl text-center p-4 uppercase">
              Advocacy in the court room
            </h1>
          </div>
          <RiScales3Fill size="3rem" color="#A95AA1" />
          <div className="bg-accent p-0.5 w-full my-4" />
          <ul className="text-darkBlue p-4 list-none list-inside w-full">
            <li className="text-2xl ml-[16px] before:content-['•\00A0'] before:ml-[-16px]">
              Document review
            </li>
            <li className="text-2xl ml-[16px] before:content-['•\00A0'] before:ml-[-16px]">
              Testimony
            </li>
            <li className="text-2xl ml-[16px] before:content-['•\00A0'] before:ml-[-16px]">
              Observation
            </li>
            <li className="text-2xl ml-[16px] before:content-['•\00A0'] before:ml-[-16px]">
              Data analysis
            </li>
            <li className="text-2xl ml-[16px] before:content-['•\00A0'] before:ml-[-16px]">
              Interviews
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:w-1/3 w-full text-left items-center md:shadow-md ">
          <div className="h-40">
            <h1 className="text-darkBlue text-3xl text-center p-4 uppercase">
              Special educational advocate
            </h1>
          </div>
          <GiTeacher size="3rem" color="#A95AA1" />
          <div className="bg-accent p-0.5 w-full my-4" />
          <ul className="text-darkBlue p-4 list-none list-inside w-full">
            <li className="text-2xl ml-[16px] before:content-['•\00A0'] before:ml-[-16px]">
              Document review
            </li>
            <li className="text-2xl ml-[16px] before:content-['•\00A0'] before:ml-[-16px]">
              Meeting participation
            </li>
            <li className="text-2xl ml-[16px] before:content-['•\00A0'] before:ml-[-16px]">
              Consltation
            </li>
            <li className="text-2xl ml-[16px] before:content-['•\00A0'] before:ml-[-16px]">
              Phone calls
            </li>
            <li className="text-2xl ml-[16px] before:content-['•\00A0'] before:ml-[-16px]">
              Letter writing
            </li>
            <li className="text-2xl ml-[16px] before:content-['•\00A0'] before:ml-[-16px]">
              Plan development
            </li>
          </ul>
        </div>
        <div className="flex flex-col md:w-1/3 w-full text-left items-center md:shadow-md ">
          <div className="h-40">
            <h1 className="text-darkBlue text-3xl text-center p-4 uppercase">
              Community education & awareness
            </h1>
          </div>
          <RiCommunityFill size="3rem" color="#A95AA1" />
          <div className="bg-accent p-0.5 w-full my-4" />
          <ul className="text-darkBlue p-4 list-none list-inside w-full">
            <li className="text-2xl ml-[16px] before:content-['•\00A0'] before:ml-[-16px]">
              Podcasts
            </li>
            <li className="text-2xl ml-[16px] before:content-['•\00A0'] before:ml-[-16px]">
              Social media
            </li>
            <li className="text-2xl ml-[16px] before:content-['•\00A0'] before:ml-[-16px]">
              Live lectures & workshops
            </li>
            <li className="text-2xl ml-[16px] before:content-['•\00A0'] before:ml-[-16px]">
              Collaboration
            </li>
            <li className="text-2xl ml-[16px] before:content-['•\00A0'] before:ml-[-16px]">
              Plan development
            </li>
            <li className="text-2xl ml-[16px] before:content-['•\00A0'] before:ml-[-16px]">
              Accessibility consulting
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
