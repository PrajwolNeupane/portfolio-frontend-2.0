import Image from "next/image";
import Link from "next/link";

export default function SkillsSection() {
  const skills = [
    {
      name: "React JS",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-backend-64b7e.appspot.com/o/1670606917820-Skill-5.png?alt=media&token=138919d1-24b3-45da-9ee7-b20a284971d9",
    },
    {
      name: "Next JS",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-backend-64b7e.appspot.com/o/1690811595806-Skill-1.png?alt=media&token=2c050a93-e792-43dd-b85f-a62e3071ddd2",
    },
    {
      name: "Java Script",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-backend-64b7e.appspot.com/o/1670607341669-Skill-3.png?alt=media&token=d354fdb8-a3d0-43e0-aab2-43f158e7cb50",
    },
    {
      name: "Typescript",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-backend-64b7e.appspot.com/o/1670607108089-Skill-6.png?alt=media&token=8c4cbc57-3551-44d7-9b68-fb0f2828c178",
    },
    {
      name: "Tailwind CSS",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-backend-64b7e.appspot.com/o/1687582312029-Skill-3.png?alt=media&token=c3af5c6d-23da-40d7-bdd4-261bf832c040",
    },
    {
      name: "Chakra UI",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-backend-64b7e.appspot.com/o/1687582157569-Skill-6.png?alt=media&token=21393a98-626d-4cfc-98b5-4ab5d4f71e15",
    },
    {
      name: "Material UI",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-backend-64b7e.appspot.com/o/1670607159118-Skill-4.png?alt=media&token=d9db5d59-96cc-4394-8c70-c8dcdeb42e085",
    },
    {
      name: "Redux",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-backend-64b7e.appspot.com/o/1670607068837-Skill-3.png?alt=media&token=3da84ce4-3b1b-4789-aa09-eb2ddccbef82",
    },
    {
      name: "Zustland",
      image:
        "https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b315605",
    },
    {
      name: "Node JS",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-backend-64b7e.appspot.com/o/1670606972299-Skill-0.png?alt=media&token=dd25222c-dba4-4ac9-9b15-09472ec8807c",
    },
    {
      name: "Express",
      image:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-backend-64b7e.appspot.com/o/1670606999877-Skill-2.png?alt=media&token=20ad4a73-2c68-4d9c-8583-9902465778fc",
    },
  ];

  return (
    <div
      className="flex flex-col gap-4 w-full items-center justify-center px-[10%] py-[100px] z-[4]"
      id="skills-section"
    >
      <h2 className="text-4xl font-medium text-gray-300">SKILLS</h2>
      <div className="grid grid-cols-4 gap-20">
        {skills?.map((curr, indx) => (
          <div
            className="flex flex-col items-center py-4 px-10 bg-black gap-4"
            key={indx}
          >
            <Image
              src={curr.image}
              width={500}
              height={500}
              alt="Skill Image"
              className="w-[100px] aspect-square object-contain"
            />
            <h2 className="text-main-lighter text-sm">{curr.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
