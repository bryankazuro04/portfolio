const SkillItem = (props) => {
  const { title, percentage } = props.skill;
  return (
    <>
      <div className="w-full md:w-1/2">
        <div className="mb-4 md:mx-4">
          <div className="flex justify-between items-center mb-1">
            <h5 className="text-md font-light">{title}</h5>
            <span className="text-md font-bold" style={{ color: "rgba(var(--main-color), .7)" }}>
              {percentage}
            </span>
          </div>
          <div className="w-full bg-purple-200 relative h-2 rounded">
            <div
              className="absolute h-full left-0 top-0 rounded"
              style={{ width: `${percentage}`, backgroundColor: "rgb(var(--main-color))" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillItem;
