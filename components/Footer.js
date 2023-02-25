const Footer = () => {
  return (
    <div className=" md:absolute flex justify-center bg-darkBlue bottom-0 left-0 w-full p-4">
      <div className="flex flex-col w-full max-w-7xl">
        <div className="flex  justify-evenly">
          <a className="text-white">Privacy</a>
          <a className="text-white">Terms and Conditions</a>
          <a className="text-white">Contact</a>
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
