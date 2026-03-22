import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { ArrowUpRight, Github } from "lucide-react"
import { Button } from "@workspace/ui/components/button"
import {
  FadeIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/motion"

const projects = [
  {
    title: "Bid Management System",
    description:
      "A comprehensive platform for managing bids, tenders, and procurement workflows. Features include bid submission tracking, automated notifications, vendor management, and real-time status dashboards for procurement officers. Built with a focus on accessibility and clean UI.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "React"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    title: "TaskFlow",
    description:
      "A collaborative project management tool with kanban boards, real-time updates, and team workspaces. Supports drag-and-drop task management, deadline tracking, role-based access control, and activity logs for team collaboration.",
    tags: ["React", "TypeScript", "React DnD", "Tailwind CSS", "Node.js"],
    liveUrl: "#",
    repoUrl: "#",
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

                <div className="mt-5 flex items-center gap-2">
                  <Button size="sm" asChild>
                    <a href={project.liveUrl}>
                      Live Demo
                      <ArrowUpRight
                        data-icon="inline-end"
                        className="size-3"
                      />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.repoUrl}>
                      <Github data-icon="inline-start" className="size-3" />
                      Source
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  )
}
