import styles from "./style.module.scss";

export default function VerticalTimeline() {
  const data = [
    {
      date: "2016 - 2019",
      title: "SMK Bina Mandiri Bekasi",
      description: "Computer and Network Engineering",
    },
    {
      date: "2019 - present",
      title: "Malikussaleh University",
      description: "Informatics Engineering",
    },
    {
      date: "February 2022 - August 2022",
      title: "<abbr title='Magang dan Studi Independen Bersertifikat'>MSIB</abbr> Kampus Merdeka X Dicoding Batch 2",
      description: "Front-End Web and Back-End Developer",
    },
    {
      date: "Mei 2022 - present",
      title: "Freelance Web Development",
      description: "Website Development Service",
    },
  ];

  return (
    <>
      <div className={`timeline max-lg:mt-30 mt-20 pb-4`}>
        <h3 className={`${styles.timeline__title} text-xl lg:text-3xl text-center mt-4`}>Education & Experience</h3>
        <div
          className={`${styles.timeline__body} px-5 relative max-w-xl mx-auto my-10 lg:my-16 lg:max-w-3xl before:absolute before:top-0 before:w-1 before:h-full before:left-2 lg:before:left-1/2`}
        >
          {data.map((item, index) => (
            <div key={index} className="relative pl-8 mb-12 lg:flex even:flex-row-reverse">
              <div
                className={`${styles["timeline__body--point"]} absolute top-0 left-0 w-5 h-5 border-4 rounded-full dark:bg-slate-900 lg:left-1/2 lg:-translate-x-2`}
              ></div>

              <p
                className={`${styles["timeline__body--time"]} text-xs lg:text-sm tracking-wide uppercase lg:ml-4 lg:w-1/2 lg:mt-px lg:pr-9 ${
                  index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                }`}
              >
                {item.date}
              </p>

              <div className={`lg:w-1/2 lg:-mt-1  ${index % 2 === 0 ? "lg:text-left lg:ml-4 " : "lg:text-right lg:pr-10"}`}>
                <h4
                  className={`${styles["timeline__body--title"]} mt-4 text-lg lg:text-xl lg:mt-0`}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h4>
                {item.description && <p className="mt-2 leading-7 max-lg:text-sm text-primary-light">{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
