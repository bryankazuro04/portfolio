import { useEffect, useState } from "react";

export default function useScrollSpy() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const scrollHandler = () => {
      const sections = document.querySelectorAll("section[id");
      const scrollY = window.pageYOffset;

      for (let section of sections) {
        const sectionId = section.getAttribute("id"),
          sectionHeight = section.offsetHeight,
          sectionTop = section.offsetTop - ((window.innerHeight / 4) * 3 - 200);

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveId(sectionId);
          return;
        }
      }

      setActiveId("");
    };

    window.addEventListener("scroll", scrollHandler);
    scrollHandler();

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return activeId;
}
