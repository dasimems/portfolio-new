const USERNAME = "dasimems"

export const SOCIALS = {
  github: {
    label: "GitHub",
    href: `https://github.com/${USERNAME}`,
  },
  linkedin: {
    label: "LinkedIn",
    href: `https://linkedin.com/in/${USERNAME}`,
  },
  // readcv: {
  //   label: "Read.cv",
  //   href: `https://read.cv/${USERNAME}`,
  // },
  // layers: {
  //   label: "Layers",
  //   href: `https://layers.to/${USERNAME}`,
  // },
} as const

export type SocialKey = keyof typeof SOCIALS
export type Social = (typeof SOCIALS)[SocialKey]

export const SOCIAL_LIST: ReadonlyArray<Social> = Object.values(SOCIALS)
