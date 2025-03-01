"use client"

import { Gamepad2, Github, Linkedin } from "lucide-react";
import { ThemeToggle } from "./components/theme-toggle";
import react from "../../public/react.svg";
import tailwindcss from "../../public/tailwind.svg";
import typescript from "../../public/typescript.svg";
import javascript from "../../public/javascript.svg";
import golang from "../../public/golang.svg";
import nodejs from "../../public/nodejs.svg";
import Image from "next/image";
import nextjs from "../../public/image.png";
import { Button } from "@/components/ui/button";
import { FaSquareXTwitter } from "react-icons/fa6";


export default function Home() {

  const technologies = [
    {
      name: "React",
      icon: react
    },
    {
      name: "Tailwind CSS",
      icon: tailwindcss
    },
    {
      name: "TypeScript",
      icon: typescript
    },
    {
      name: "JavaScript",
      icon: javascript
    },
    {
      name: "Golang",
      icon: golang
    },
    {
      name: "Node.js",
      icon: nodejs
    },
    {
      name: "Next.js",
      icon: nextjs
    }
  ]

  const socials = [
    {
      name: "Github",
      url: "https://github.com/emircvdr",
      icon: <Github size={25} />
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/emircavdar/",
      icon: <Linkedin size={25} />
    },
    {
      name: "Twitter",
      url: "https://x.com/TheRightGet",
      icon: <FaSquareXTwitter size={25} />

    },
  ]

  const work = [
    {
      title: "Frontend Developer",
      company: "AKSAN Teknoloj",
      time: "2020 - 2021"
    },
    {
      title: "Frontend Developer",
      company: "Pedasoft",
      time: "2020 - 2021"
    },
  ]

  return (
    <div className="min-h-screen w-screen flex flex-col items-center p-4">
      <div className="w-1/3 h-screen">
        {/* Header Section */}
        <div className="w-full p-4 flex items-center justify-between">
          <div className="flex flex-col">
            <h1>
              <span>e</span>mir cavdar
            </h1>
            <p className="text-xs text-muted-foreground">Frontend Developer</p>
          </div>

          <ThemeToggle />
        </div>

        {/* Content Section */}
        <div className="w-full mt-4 p-4">
          <div className="flex flex-row gap-4 w-full">
            <h3 className="text-muted-foreground text-sm">/about</h3>
            <div className="flex flex-col gap-2">
              <p className="text-muted-foreground text-[14px]">
                Hey,I&apos;m a frontend developer based in Turkey. I&apos; m currently working at <span className="text-[#e54e1e] dark:text-[#7ca434]">AKSAN Teknoloj</span>.
              </p>
              <p className="text-muted-foreground text-[14px]">
                I have been building web applications for over <span className="text-[#e54e1e] dark:text-[#7ca434]">4 years</span> now. I love to learn new things and share my knowledge with others.
              </p>
              <p className="text-muted-foreground text-[14px] flex flex-row">
                When I&apos;m not coding, you can find me playing video games <Gamepad2 size={19} className="ml-0.5" />
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-muted-foreground text-[10.5px]">
                  Here are a few technologies I&apos;ve been working with recently:
                </p>
                <div className="flex flex-row gap-7 mt-1">
                  {technologies.map((technology, index) => (
                    <div key={index} className="flex flex-row items-center">
                      <Image src={technology.icon} alt={technology.name} width={40} height={40} />
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-[10.5px]">and more...</p>
              </div>


            </div>

          </div>

          <div className="flex flex-row  gap-4 w-full mt-6">
            <h3 className="text-muted-foreground text-sm">/socials</h3>
            <div className="flex flex-row gap-4 ">
              {
                socials.map((social, index) => (
                  <Button key={index} size="icon" variant="outline" color="primary" className="cursor-pointer" onClick={() => window.open(social.url)}>
                    {social.icon}
                  </Button>
                ))
              }
            </div>



          </div>

          <div className="flex flex-col  gap-4 w-full mt-6">
            <h3 className="text-muted-foreground text-sm">/work</h3>



          </div>

          <div className="flex flex-col  gap-4 w-full mt-6">
            <h3 className="text-muted-foreground text-sm">/projects</h3>
            <div className="flex flex-col gap-2">
              {[
                { title: "SaaS Project", name: "Beem APP", url: "https://github.com/emircvdr/Beem-App" },
                { title: "UI Template", name: "Japanese Food", url: "https://github.com/emircvdr/JapaneseStreetFood" }
              ].map((project, index) => (
                <div
                  key={index}
                  className="flex flex-col pt-4 pb-4 border-b-2 border-black dark:border-white group cursor-pointer"
                  onClick={() => window.open(project.url)}
                >
                  <p className="text-[10px] transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                    {project.title}
                  </p>
                  <h1 className="text-[40px] transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                    {project.name}
                  </h1>
                </div>
              ))}
            </div>


          </div>



        </div>

      </div>

    </div>
  )
}