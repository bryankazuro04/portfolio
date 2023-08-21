import SkillItem from "./SkillItem";

const skillData = [
  {
    id: 1,
    title: "HTML, CSS",
    percentage: "95%",
  },
  {
    id: 2,
    title: "Bootstrap 5",
    percentage: "91%",
  },
  {
    id: 3,
    title: "TailwindCSS",
    percentage: "20%",
  },
  {
    id: 4,
    title: "Javascript",
    percentage: "67%",
  },
  {
    id: 5,
    title: "ReactJS",
    percentage: "5%",
  },
  {
    id: 6,
    title: "Laravel",
    percentage: "20%",
  },
  {
    id: 7,
    title: "Git, Github",
    percentage: "40%",
  },
];

const Skills = () => {
  return (
    <>
      <div className="py-10">
        <div className="flex flex-wrap">
          <div className="w-full">
            <div className="md:mx-4">
              <h3 className="text-3xl text-center text-[#0ff] font-bold mb-8">Skills</h3>
            </div>
          </div>
          {skillData.map((skill, id) => (
            <SkillItem skill={skill} key={id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
