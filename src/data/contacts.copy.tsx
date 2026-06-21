import GithubSvg from "../components/svgs/GithubSvg";
import LinkedInSvg from "../components/svgs/LinkedInSvg";
import YoutubeSvg from "../components/svgs/YoutubeSvg";

export const contactsCopy = [
  {
    id: 1,
    title: "Email",
    desription: "Enviar um e-mail",
    href: "mailto:allangdasilva.contact@gmail.com",
  },
  {
    id: 2,
    title: "Whatsapp",
    desription: "Enviar uma mensagem",
    href: "https://wa.me/5511976447685",
  },
];

export const contactsSocialCopy = [
  {
    id: 1,
    svg: <GithubSvg />,
    href: "https://github.com/allangdasilva",
  },
  {
    id: 2,
    svg: <YoutubeSvg />,
    href: "https://www.youtube.com/channel/UCzcRdgkUetDZpXMMsVGZA3Q",
  },
  {
    id: 3,
    svg: <LinkedInSvg />,
    href: "https://www.linkedin.com/in/allangdasilva/",
  },
];
