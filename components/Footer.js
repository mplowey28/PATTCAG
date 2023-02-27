import { TbWorld } from 'react-icons/tb'
import { MdSmartphone, MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div className="absolute bottom-0 flex bg-darkBlue justify-center  w-full p-4 mt-auto">
      <div className="flex flex-col  w-full max-w-7xl">
        <div className="flex  flex-col md:flex-row justify-evenly items-center p-4">
          <div className="flex justify-center items-center p-4">
            <TbWorld
              size="3rem"
              color="#F5793A"
              className="transform hover:scale-110"
            />
            <a
              href="www.pattonanc.com"
              className="text-white text-xl transform hover:scale-110 pl-2"
              target="_blank"
              rel="noopener"
            >
              www.pattonanc.com
            </a>
          </div>
          <div className="flex justify-center items-center  p-4">
            <MdSmartphone
              size="3rem"
              color="#F5793A"
              className="transform hover:scale-110"
            />
            <a
              href="tel:123.456.7890"
              className="text-white text-xl transform hover:scale-110 pl-2"
            >
              724-651-6953
            </a>
          </div>
          <div className="flex justify-center items-center p-4">
            <MdOutlineEmail
              size="3rem"
              color="#F5793A"
              className="transform hover:scale-110"
            />
            <a
              href="mailto:jpatton@pattonanc.com"
              className="text-white text-xl transform hover:scale-110 pl-2"
            >
              jpatton@pattonanc.com
            </a>
          </div>
        </div>
        <div className="text-center ">
          <p className="text-white">
            ® 2023 Patton Advocacy and Consulting LLC, all rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
