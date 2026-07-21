import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/motion"

const projects = [
  {
    title: "Kathmandu Metropolitan City Website",
    description:
      "Developed and maintained the official Kathmandu Metropolitan City website using Next.js, delivering a responsive, accessible, and high-performance platform for public services and citizen engagement. Implemented modern UI components and collaborated with backend developers to build scalable government digital services.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "React"],
    liveUrl: "https://new.kathmandu.gov.np",
    featured: true,
  },
  {
    title: "Employee Record Management System",
    description:
      "Built a secure employee record management system with role-based access control (RBAC) for centralized personnel management. Developed administrative modules to streamline employee record maintenance and organizational workflows across Kathmandu Metropolitan City.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "RBAC"],
    liveUrl: "https://record.kathmandu.gov.np",
    featured: true,
  },
  {
    title: "Jinsi Maag Online Portal",
    description:
      "Built an online portal for managing jinsi maag (material requisition) requests, streamlining the procurement and asset management process. Features include request submission, approval workflows, inventory tracking, and status dashboards for efficient organizational resource management.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    liveUrl: "#",
    featured: true,
  },
  {
    title: "Bid Management System",
    description:
      "A comprehensive platform for managing bids, tenders, and procurement workflows. Features include bid submission tracking, automated notifications, vendor management, and real-time status dashboards for procurement officers. Built with a focus on accessibility and clean UI.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "React"],
    liveUrl: "#",
    featured: true,
  },
]

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <FadeIn>
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          A collection of projects I&apos;ve worked on. Each one taught me
          something new and pushed my skills further.
        </p>
      </FadeIn>

      <StaggerChildren className="mt-12 flex flex-col gap-6">
        {projects.map((project) => (
          <StaggerItem key={project.title}>
            <Card className="group overflow-hidden transition-all duration-300 hover:ring-foreground/20 hover:shadow-lg">
              {project.featured && (
                <div className="border-b bg-muted/50 px-4 py-2">
                  <Badge variant="secondary" className="text-[10px]">
                    Featured
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="mt-2 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {project.liveUrl !== "#" && (
                  <div className="mt-5">
                    <Button size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Site
                        <ArrowUpRight
                          data-icon="inline-end"
                          className="size-3"
                        />
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  )
}
