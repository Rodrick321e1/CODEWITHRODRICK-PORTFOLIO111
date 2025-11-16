import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import DeviceFrame from "./DeviceFrame";
import ProjectDetailModal from "./ProjectDetailModal";
import type { Project } from "@shared/schema";

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  return (
    <section id="portfolio" className="w-full bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="mb-4 inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Portfolio
            </div>
          </motion.div>
          <h2
            className="mb-4 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl"
            data-testid="text-portfolio-heading"
          >
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-portfolio-description">
            A showcase of my recent work and client collaborations
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse">
                <Card className="overflow-hidden border-2 border-border">
                  <div className="aspect-[4/3] bg-muted" />
                  <div className="p-6 space-y-3">
                    <div className="h-6 bg-muted rounded" />
                    <div className="h-4 bg-muted rounded w-3/4" />
                  </div>
                </Card>
              </div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <Card className="p-12 text-center border-2">
            <p className="text-muted-foreground text-lg">
              No projects yet. Check back soon!
            </p>
          </Card>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="group relative overflow-hidden hover-elevate active-elevate-2 cursor-pointer border-2 border-border transition-all duration-300 hover:border-primary/50"
                  onClick={() => handleProjectClick(project)}
                  data-testid={`card-project-${project.id}`}
                >
                  <div className="relative overflow-hidden">
                    <div className="bg-muted p-8">
                      <DeviceFrame
                        imageUrl={project.imageUrl}
                        deviceType={project.deviceType as "monitor" | "phone"}
                        alt={project.title}
                      />
                    </div>
                    <div className="absolute top-4 right-4 rounded-full bg-background/90 backdrop-blur-sm p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <ExternalLink className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3
                      className="mb-2 font-display text-2xl font-semibold text-foreground transition-colors group-hover:text-primary"
                      data-testid={`text-project-title-${project.id}`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="mb-4 text-base text-muted-foreground line-clamp-2"
                      data-testid={`text-project-description-${project.id}`}
                    >
                      {project.description}
                    </p>
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs"
                            data-testid={`badge-tag-${tag.toLowerCase()}`}
                          >
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <ProjectDetailModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  );
}
