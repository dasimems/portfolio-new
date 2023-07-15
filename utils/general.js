import { Document, Folder, Home, Star, User, Work } from "react-iconly";
import {
  FaDiscord,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedinIn,
  FaTwitterSquare,
  FaWhatsappSquare
} from "react-icons/fa";

export const siteName = "Dasimems",
  navLink = "navLink",
  Routes = {
    Home: {
      path: "/",
      label: "Home",
      showIn: [],
      Icon: Home,
      type: "link"
    },
    Services: {
      path: "/services",
      label: "Services",
      showIn: [navLink],
      Icon: Work,
      type: "link"
    },
    About: {
      path: "/about",
      label: "About Me",
      showIn: [navLink],
      Icon: User,
      type: "link"
    },
    Works: {
      path: "/works",
      label: "Works",
      showIn: [navLink],
      Icon: Folder,
      type: "link"
    },
    Contact: {
      path: "/contact",
      label: "Contact Me",
      showIn: [],
      Icon: "",
      type: "link"
    },
    Blog: {
      path: "/blog",
      label: "Blog",
      showIn: [navLink],
      Icon: Document,
      type: "link"
    },
    Products: {
      path: "/products",
      label: "Products",
      showIn: [navLink],
      Icon: Star,
      type: "link"
    }
  },
  allRoutes = Object.keys(Routes).map(key => Routes[key]),
  navRoutes = allRoutes.filter(route => route.showIn.includes(navLink)),
  services = [
    {
      title: "Web Development",
      description:
        "Creation and launching of web apps. This process involves the client side (Frontend) to the server side (Backend)",
      Icon: ""
    },
    {
      title: "Mobile App Development",
      description:
        "Developing applications specifically for mobile platforms, such as iOS (Apple) or Android (Google), such as smartphones and tablets",
      Icon: ""
    },
    {
      title: "Blockchain Development",
      description:
        "Developing decentralized applications (DApps) and smart contracts using blockchain technology, such as Ethereum, BEP20 or Hyperledger, to enable secure and transparent transactions and data management.",
      Icon: ""
    },
    {
      title: "UI/UX Development",
      description:
        "Improving the usability, accessibility, and general user satisfaction of websites, mobile apps, and softwares by designing elegant, modern interfaces and user experiences.",
      Icon: ""
    },
    {
      title: "Graphics Design",
      description:
        "Improve branding and communication efforts by creating aesthetically appealing and engaging visuals, including logos, banners, illustrations, and other visual elements.",
      Icon: ""
    }
  ],
  whatMakesMeExceptionalList = [
    {
      stat: "100+",
      title: "Projects Completed"
    },
    {
      stat: "100+",
      title: "Projects Completed"
    },
    {
      stat: "100+",
      title: "Projects Completed"
    }
  ],
  Socials = {
    Facebook: {
      link: "https://facebook.com/dasimems",
      name: "Facebook",
      Icon: FaFacebookSquare
    },
    Twitter: {
      link: "https://twitter.com/dasimems",
      name: "Twitter",
      Icon: FaTwitterSquare
    },
    Instagram: {
      link: "https://instagram.com/dasimems",
      name: "Instagram",
      Icon: FaInstagramSquare
    },
    LinkedIn: {
      link: "https://linkedin.com/in/dasimems",
      name: "Linkedin",
      Icon: FaLinkedinIn
    },
    Discord: {
      link: "https://discordapp.com/users/dasimems",
      name: "Discord",
      Icon: FaDiscord
    },
    Whatsapp: {
      link: "https://wa.me/+2349036634645",
      name: "Whatsapp",
      Icon: FaWhatsappSquare
    }
  },
  aboutMe = <>I am Omonimewa Isaac. however goes by Duyil Ayomid. I am from Ekiti, Nigeria, and I attended Federal Polytechnic Ado Ekiti to study electrical and electronic engineering. I first got interested in technology when I was young because I was curious about how things worked. I soon discovered programming and have been honing my skills ever since. I&apos;ve taken and passed a number of skills assessments on <a
      href={Socials.LinkedIn.link}
      className="text-primary underline font-medium"
      target="_blank"
      rel="noreferrer"
    >
      LinkedIn
    </a> and I&apos;ve demonstrated my ability to develop more useful apps in the real world. I&apos;m always interested in picking up new skills.</>,
  socialList = Object.keys(Socials).map(key => Socials[key]);
