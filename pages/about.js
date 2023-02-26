import { MdArrowBack } from 'react-icons/Md'
import Link from 'next/link'
import Image from 'next/image'
import profile from '../public/images/fullProfile.jpg'

const about = () => {
  return (
    <div className="flex w-full h-full justify-center p-8 pb-40">
      <div className="max-w-4xl">
        <div className="flex w-full justify-start pt-4 pb-2">
          <Link href="/">
            <MdArrowBack
              size="3rem"
              color="#A95AA1"
              className="transform hover:scale-110 cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex flex-col w-full justify-center text-center p-4">
          <h1 className="text-darkBlue text-4xl">About</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <Image src={profile} alt="profile picture" objectFit="cover" />
          <p className="text-darkBlue text-justify text-xl">
            Dr. Jess Patton experiences the world of special needs as a parent,
            professional, and philanthropist. In 2003, Dr. Patton graduated from
            Penn State University with a Bachelors of Science in Special
            Education and landed her first job as an Autistic Support Teacher
            with an intermediate unit (IU). During her time with the IU, she
            served children diagnosed with Autism ranging in age from five to
            twelve. She taught in three school districts across different
            counties of Western Pennsylvania. During her career with the IU, Dr.
            Patton earned her Master’s of Education in Teaching and Curriculum
            from Penn State University. Shortly after graduation, Dr. Patton
            started her career as an adjunct professor at a local community
            college, where she instructed courses such as Introduction to
            Special Education and Educating Exceptional Learners. In 2017, Dr.
            Patton transferred to an urban school district where she continues
            to serve as an autistic support teacher for learners with complex
            neurodevelopmental disabilities.
          </p>
        </div>
        <div className="flex w-full justify-center">
          <div className=" bg-accent p-0.5 w-10/12 my-4" />
        </div>
        <p className="text-darkBlue text-justify text-xl">
          As a mother of two teenage sons diagnosed with Autism Spectrum
          Disorder and other medical diagnoses, she understands parenting
          children with special needs provides the most rewarding moments
          intertwined with some extremely difficult moments. She knows all too
          well the stress felt when a child demonstrates maladaptive behavior,
          scheduling therapy sessions, finding childcare, addressing sensory
          needs, medical emergencies, and the list goes on and on. This feeling
          of overwhelming stress and knowing that one day she would like to
          share her experiences with future teachers, drove the passion and
          dedication to earn her terminal degree.
        </p>
        <div className="flex w-full justify-center">
          <div className=" bg-accent p-0.5 w-10/12 my-4" />
        </div>
        <p className="text-darkBlue text-justify text-xl">
          In 2019, Dr. Patton earned her Doctorate in Education from Slippery
          Rock University. In conjunction with the doctoral program, she
          completed the Pennsylvania Department of Education Autism Endorsement
          and Special Education Supervision certificate. Her dissertation
          entitled, Parental Perceptions of Raising a Child with Autism in a
          Rural Community, examined the factors that influence stress on parents
          just like her. While in the doctoral program, she authored a chapter
          in a textbook entitled, “Sensory Processing Disorders and Sensory
          Friendly Classrooms: Can They Become the Norm?” She was recognized as
          a role model for young women during the same year for excellence in
          her profession, and her service to her community by receiving the 2019
          Lawrence Mercer ATHENA Young Professional Leadership Award.
        </p>
        <div className="flex w-full justify-center">
          <div className=" bg-accent p-0.5 w-10/12 my-4" />
        </div>
        <p className="text-darkBlue text-justify text-xl">
          As a result of her dissertation, Dr. Patton founded Sense of
          Connection Inc., a nonprofit developed to serve Autism communities by
          providing education, inclusion, and sensory equipment. As president,
          she works closely with families, donors, community organizations and
          agencies, sensory equipment vendors, and first responders to promote
          awareness, provide education, and encourage acceptance.
        </p>
        <div className="flex w-full justify-center">
          <div className=" bg-accent p-0.5 w-10/12 my-4" />
        </div>
        <p className="text-darkBlue text-justify text-xl">
          Dr. Patton continues to pursue her passion by preparing to launch her
          advocacy and consulting business to help families navigate the world
          of special needs by breaking down barriers and increasing access to
          services that are appropriate, effective, and individualized. She
          hopes to work within the family court system during custody
          determination and parenting plan development to ensure the best
          interests of children with special needs.
        </p>
      </div>
    </div>
  )
}

export default about
