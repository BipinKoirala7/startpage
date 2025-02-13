import "../../App.css";

import BigButton from "../UI/Buttons/BigButton";

function LinkOptions() {
  const options = [
    {
      name: "Youtube",
      link: "https://www.youtube.com/s/desktop/26a583e4/img/logos/favicon.ico",
    },
    {
      name: "Gmail",
      link: "https://www.facebook.com/favicon.ico",
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/s/desktop/26a583e4/img/logos/favicon.ico",
    },
    {
      name: "Gmail",
      link: "https://www.facebook.com/favicon.ico",
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/s/desktop/26a583e4/img/logos/favicon.ico",
    },
    {
      name: "Gmail",
      link: "https://www.facebook.com/favicon.ico",
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/s/desktop/26a583e4/img/logos/favicon.ico",
    },
    {
      name: "Gmail",
      link: "https://www.facebook.com/favicon.ico",
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/s/desktop/26a583e4/img/logos/favicon.ico",
    },
    {
      name: "Gmail",
      link: "https://www.facebook.com/favicon.ico",
    },
    {
      name: "Dribble",
      link: "https://www.canva.com/favicon.ico",
    },
    {
      name: "Clerk",
      link: "https://www.canva.com/favicon.ico",
    },
    {
      name: "Namaste",
      link: "https://www.canva.com/favicon.ico",
    },
    {
      name: "Ncell",
      link: "https://www.canva.com/favicon.ico",
    },
    {
      name: "Esewa",
      link: "https://www.canva.com/favicon.ico",
    },
    {
      name: "Mount Everest",
      link: "https://www.canva.com/favicon.ico",
    },
    {
      name: "Ncell",
      link: "https://www.canva.com/favicon.ico",
    },
    {
      name: "Github",
      link: "https://www.canva.com/favicon.ico",
    },
  ];
  return (
    <div
      // id="link-container"
      className="max-w-full max-h-full h-fit  w-full gap-4 overflow-y-auto grid grid-cols-[repeat(auto-fill,minmax(30%,1fr))] p-2
      sm:grid-cols-[repeat(auto-fill,minmax(22.5%,1fr))]
      md:grid-cols-[repeat(auto-fill,minmax(22.5%,1fr))]
      lg:grid-cols-[repeat(auto-fill,minmax(17.5%,1fr))]
      xl:grid-cols-[repeat(auto-fill,minmax(10.5%,1fr))]
    "
    >
      {options.map((option, index) => {
        return (
          <BigButton
            name={option.name}
            link={option.link}
            key={index}
          ></BigButton>
        );
      })}
    </div>
  );
}

export default LinkOptions;
