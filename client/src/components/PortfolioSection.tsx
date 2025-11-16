import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import ecommerceImage from "@assets/generated_images/E-commerce_website_project_mockup_7b5d0fc1.png";
import taskAppImage from "@assets/generated_images/Task_management_app_interface_ee11664b.png";
import restaurantImage from "@assets/generated_images/Restaurant_website_landing_page_87f26ea3.png";
import fitnessImage from "@assets/generated_images/Fitness_tracking_mobile_app_c0363f74.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern shopping experience with seamless checkout and inventory management",
    image: ecommerceImage,
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Intuitive productivity tool with drag-and-drop kanban boards",
    image: taskAppImage,
    tags: ["TypeScript", "Express", "MongoDB"],
  },
  {
    id: 3,
    title: "Restaurant Website",
    description: "Elegant dining experience with online reservations and menu showcase",
    image: restaurantImage,
    tags: ["React", "Tailwind", "Firebase"],
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description: "Mobile app for tracking workouts, nutrition, and health goals",
    image: fitnessImage,
    tags: ["React Native", "REST API", "Chart.js"],
  },
];

export default function PortfolioSection() {
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
                data-testid={`card-project-${project.id}`}
              >
                <div className="relative overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      data-testid={`img-project-${project.id}`}
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
                    className="mb-4 text-base text-muted-foreground"
                    data-testid={`text-project-description-${project.id}`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs"
                        data-testid={`badge-tag-${tag.toLowerCase()}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
