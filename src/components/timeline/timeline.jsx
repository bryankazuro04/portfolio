import React from "react";

export default function VerticalTimeline() {
  const data = [
    {
      date: "2016 - 2019",
      title: "SMK Bina Mandiri Bekasi",
      description: "Jurusan Teknik Komputer dan Jaringan",
    },
    {
      date: "2019 - Sekarang",
      title: "Universitas Malikussaleh",
      description: "Jurusan Teknik Informatika",
    },
    {
      date: "Februari 2022 - Agustus 2022",
      title: "MSIB Kampus Merdeka X Dicoding Batch 2",
      description: "Front-End Web and Back-End Developer",
    },
    {
      date: "Mei 2022 - Sekarang",
      title: "Freelance Web Making",
      description: "Jasa Pembuatan Web",
    },
  ];

  return (
    <>
      <h1 className="text-[rgb(var(--main-color))] text-3xl text-center mt-4">Education & Experience</h1>
      <div className="px-5">
        <div className="relative max-w-xl mx-auto my-16 lg:max-w-3xl before:absolute before:top-0 before:w-1 before:h-full before:left-2 before:bg-[rgb(var(--main-color))] lg:before:left-1/2">
          {data.map((item, index) => (
            <div key={index} className="relative pl-8 mb-12 lg:flex even:flex-row-reverse">
              <div
                className="absolute top-0 left-0 w-5 h-5 bg-white border-4 rounded-full dark:bg-slate-900 lg:left-1/2 lg:-translate-x-2"
                style={{ borderColor: "rgb(var(--main-color))" }}
              ></div>

              <p
                className={`text-sm tracking-wide uppercase ml-4 lg:w-1/2 lg:mt-px lg:pr-9 ${
                  index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                }`}
                style={{ color: "rgba(var(--main-color), .7)" }}
              >
                {item.date}
              </p>

              <div
                className={`lg:w-1/2 lg:-mt-1  ${index % 2 === 0 ? "lg:text-left lg:ml-4 " : "lg:text-right lg:pr-10"}`}
              >
                <h4 className="mt-4 text-xl lg:mt-0" style={{ color: "rgba(var(--main-color), .8)" }}>
                  {item.title}
                </h4>
                {item.description && <p className="mt-2 leading-7 text-primary-light">{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
