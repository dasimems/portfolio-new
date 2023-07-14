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
      Icon: "",
      type: "link"
    },
    Services: {
      path: "/services",
      label: "Services",
      showIn: [navLink],
      Icon: "",
      type: "link"
    },
    About: {
      path: "/about",
      label: "About Me",
      showIn: [navLink],
      Icon: "",
      type: "link"
    },
    Works: {
      path: "/works",
      label: "Works",
      showIn: [navLink],
      Icon: "",
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
      Icon: "",
      type: "link"
    },
    Products: {
      path: "/products",
      label: "Products",
      showIn: [navLink],
      Icon: "",
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
      link: "",
      name: "Facebook",
      Icon: FaFacebookSquare
    },
    Twitter: {
      link: "",
      name: "Twitter",
      Icon: FaTwitterSquare
    },
    Instagram: {
      link: "",
      name: "Instagram",
      Icon: FaInstagramSquare
    },
    LinkedIn: {
      link: "",
      name: "Linkedin",
      Icon: FaLinkedinIn
    },
    Discord: {
      link: "",
      name: "Discord",
      Icon: FaDiscord
    },
    Whatsapp: {
      link: "",
      name: "Whatsapp",
      Icon: FaWhatsappSquare
    }
  },
  socialList = Object.keys(Socials).map(key => Socials[key]);
