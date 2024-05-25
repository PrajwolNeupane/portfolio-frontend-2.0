import { Button } from "@/components/shared";

export default function NavBar() {
  const links = [
    {
      name: "About",
    },
    {
      name: "Skills",
    },
    {
      name: "Projects",
    },
    {
      name: "Certification",
    },
    {
      name: "Blogs",
    },
    {
      name: "Activites",
    },
    {
      name: "Testimonials",
    },
  ];

  return (
    <div className="flex w-full items-center px-20 py-5 justify-between z-[5] sticky top-0">
      <h2 className="text-white text-lg font-medium">PN</h2>
      <div className="flex items-center text-gray-100 text-xs gap-10 ml-20 relative">
        {links?.map((curr, indx) => (
          <h4 className="cursor-pointer hover:text-main-lighter" key={indx}>
            {curr.name}
          </h4>
        ))}
        <div className="aspect-square bg-main h-[6px] rounded-full absolute"></div>
      </div>
      <Button title="View My CV" className="w-[180px]" variant="filled" />
    </div>
  );
}
