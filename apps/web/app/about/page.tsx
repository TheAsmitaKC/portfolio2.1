import { Badge } from "@workspace/ui/components/badge"
import { Separator } from "@workspace/ui/components/separator"
import {
  Briefcase,
  Calendar,
  Code2,
  Layers,
  Palette,
  Smartphone,
  MapPin,
  GraduationCap,
} from "lucide-react"
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/motion"

const experiences = [
  {
    role: "Frontend Developer",
    company: "Kathmandu Metropolitan City",
    location: "Kathmandu, Nepal",
    period: "Jan 2026 – Present",
    description:
      "Building and maintaining web applications for municipal digital services. Developing responsive interfaces with Next.js and React, collaborating with cross-functional teams to deliver citizen-facing platforms.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    current: true,
  },
  {
    role: "Junior Frontend Developer",
    company: "Gap Information Technology",
    location: "Lalitpur, Nepal",
    period: "Jan 2025 – Dec 2025",
    description:
      "Developed and shipped production-ready UI components and web applications. Worked closely with designers and backend engineers to implement pixel-perfect, accessible interfaces. Contributed to internal component libraries and improved development workflows.",
    tags: ["React", "JavaScript", "HTML/CSS", "Docker", "Git"],
    current: false,
  },
]

const skillCategories = [
  {
    icon: Code2,
    title: "Languages & Frameworks",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: Palette,
    title: "Styling & UI",
    items: ["Tailwind CSS", "shadcn/ui", "CSS Modules", "Responsive Design"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    icon: Layers,
    title: "Tools & DevOps",
    items: ["Docker", "Git", "GitHub", "VS Code", "Figma"],
  },
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      {/* Intro */}
      <FadeIn>
        <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I&apos;m a frontend developer based in Chyasal, Lalitpur, passionate
          about creating intuitive and performant web experiences. I specialize
          in modern React ecosystem tools — Next.js, TypeScript, and Tailwind CSS
          — and love turning complex problems into simple, beautiful interfaces.
        </p>
      </FadeIn>

      <Separator className="my-16" />

      {/* Experience */}
      <section>
        <FadeIn>
          <div className="flex items-center gap-2">
            <Briefcase className="size-4 text-muted-foreground" />
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Work Experience
            </h2>
          </div>
        </FadeIn>

        <div className="mt-10 ml-3 border-l-2 border-border">
          <StaggerChildren className="flex flex-col gap-12">
            {experiences.map((exp) => (
              <StaggerItem key={exp.company}>
                <div className="relative pl-8">
                  {/* Timeline dot */}
                  <div
                    className={`absolute -left-[9px] top-1.5 size-4 rounded-full border-2 border-background ${
                      exp.current
                        ? "bg-foreground"
                        : "bg-muted-foreground/30"
                    }`}
                  />

                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3" />
                        {exp.period}
                      </span>
                      {exp.current && (
                        <Badge variant="outline" className="text-[10px]">
                          Current
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="size-3" />
                    {exp.location}
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Skills */}
      <section>
        <FadeIn>
          <div className="flex items-center gap-2">
            <GraduationCap className="size-4 text-muted-foreground" />
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Skills & Technologies
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren className="mt-10 grid gap-8 sm:grid-cols-2">
          {skillCategories.map((cat) => (
            <StaggerItem key={cat.title}>
              <div className="rounded-xl border border-border p-5 transition-colors hover:border-foreground/20">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-8 items-center justify-center rounded-md bg-muted">
                    <cat.icon className="size-4 text-muted-foreground" />
                  </div>
                  <h3 className="text-sm font-semibold">{cat.title}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="font-normal"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>
    </div>
  )
}
