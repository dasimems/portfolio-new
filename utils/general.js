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
        "Aute fugiat sunt ad elit anim et consectetur minim do. Veniam ut sit consequat laborum.",
      Icon: ""
    },
    {
      title: "Mobile App Development",
      description:
        "Aute fugiat sunt ad elit anim et consectetur minim do. Veniam ut sit consequat laborum.",
      Icon: ""
    },
    {
      title: "Blockchain Development",
      description:
        "Aute fugiat sunt ad elit anim et consectetur minim do. Veniam ut sit consequat laborum.",
      Icon: ""
    },
    {
      title: "UI/UX Development",
      description:
        "Aute fugiat sunt ad elit anim et consectetur minim do. Veniam ut sit consequat laborum.",
      Icon: ""
    },
    {
      title: "Graphics Design",
      description:
        "Aute fugiat sunt ad elit anim et consectetur minim do. Veniam ut sit consequat laborum.",
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
  socialList = Object.keys(Socials).map(key => Socials[key]);
