import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Code2, Palette, Rocket } from "lucide-react";
import type { Profile } from "@shared/schema";
import profilePlaceholder from "@assets/generated_images/Professional_developer_headshot_portrait_8a2be057.png";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices",
  },
  {
    icon: Palette,
    title: "Beautiful Design",
    description: "Creating stunning interfaces that users love",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Delivering projects on time with exceptional quality",
  },
];

export default function AboutSection() {
  const { data: profile, isLoading } = useQuery<Profile>({
    queryKey: ["/api/profile"],
  });

  const profileImage = profile?.profileImageUrl || profilePlaceholder;
  const bio1 = profile?.bio1 || "Hi, I'm Kayla! I'm a passionate web developer and designer with a love for creating beautiful, functional websites that make a real impact. With over 5 years of experience, I've had the privilege of working with clients from startups to established businesses.";
  const bio2 = profile?.bio2 || "My approach combines clean code with stunning design. I believe every website should not only look great but also provide an exceptional user experience. From concept to launch, I'm dedicated to bringing your vision to life.";
  const bio3 = profile?.bio3 || "When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or enjoying a good cup of coffee while sketching out my next creative idea.";
  const skills = profile?.skills || ["React", "TypeScript", "Node.js", "Tailwind CSS", "UI/UX Design", "Responsive Design", "API Development", "Database Design"];

  return (
    <section id="about" className="w-full bg-gradient-to-b from-background to-primary/5 py-24 lg:py-32">
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
              About Me
            </div>
          </motion.div>
        </motion.div>

        {isLoading ? (
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="flex justify-center lg:col-span-2">
              <div className="h-64 w-64 lg:h-80 lg:w-80 rounded-full bg-muted animate-pulse" />
            </div>
            <div className="lg:col-span-3 space-y-4">
              <div className="h-12 bg-muted rounded animate-pulse" />
              <div className="h-4 bg-muted rounded animate-pulse" />
              <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
            </div>
          </div>
        ) : (
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <motion.div
              className="flex justify-center lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-blue-600 opacity-20 blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <Avatar className="relative h-64 w-64 lg:h-80 lg:w-80 border-4 border-primary/20" data-testid="img-profile">
                  <AvatarImage src={profileImage} alt="Kayla - Web Developer" />
                  <AvatarFallback className="text-4xl font-display font-bold bg-gradient-to-br from-primary to-blue-600 text-white">K</AvatarFallback>
                </Avatar>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground lg:text-5xl"
                data-testid="text-about-heading"
              >
                Hi, I'm Kayla! 👋
              </h2>

              <div className="space-y-4 text-lg text-muted-foreground">
                <p data-testid="text-about-bio-1">{bio1}</p>
                <p data-testid="text-about-bio-2">{bio2}</p>
                <p data-testid="text-about-bio-3">{bio3}</p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="rounded-lg bg-card p-4 border border-border"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <item.icon className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8">
                <h3
                  className="mb-4 font-display text-xl font-semibold text-foreground"
                  data-testid="text-skills-heading"
                >
                  Skills & Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/[.\s]/g, '-')}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
