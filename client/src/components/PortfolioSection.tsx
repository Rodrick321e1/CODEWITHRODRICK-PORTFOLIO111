import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
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
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern shopping experience with seamless checkout and inventory management",
    image: ecommerceImage,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Intuitive productivity tool with drag-and-drop kanban boards",
    image: taskAppImage,
  },
  {
    id: 3,
    title: "Restaurant Website",
    description: "Elegant dining experience with online reservations and menu showcase",
    image: restaurantImage,
  },
  {
    id: 4,
    title: "Fitness Tracker",
    description: "Mobile app for tracking workouts, nutrition, and health goals",
    image: fitnessImage,
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="w-full bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
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

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className="group relative overflow-hidden hover-elevate active-elevate-2 cursor-pointer"
                data-testid={`card-project-${project.id}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    data-testid={`img-project-${project.id}`}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3
                      className="mb-2 font-display text-2xl font-semibold text-foreground"
                      data-testid={`text-project-title-${project.id}`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="mb-4 line-clamp-2 text-base text-muted-foreground"
                      data-testid={`text-project-description-${project.id}`}
                    >
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      <span>View Project</span>
                      <ExternalLink className="h-4 w-4" />
                    </div>
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
