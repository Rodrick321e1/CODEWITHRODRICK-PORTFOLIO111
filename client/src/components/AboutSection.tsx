import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profileImage from "@assets/generated_images/Professional_developer_headshot_portrait_8a2be057.png";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "UI/UX Design",
  "Responsive Design",
  "API Development",
  "Database Design",
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <motion.div
            className="flex justify-center lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Avatar className="h-64 w-64 lg:h-80 lg:w-80" data-testid="img-profile">
              <AvatarImage src={profileImage} alt="Kayla - Web Developer" />
              <AvatarFallback className="text-4xl font-display font-bold">K</AvatarFallback>
            </Avatar>
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
              About Me
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p data-testid="text-about-bio-1">
                Hi, I'm Kayla! I'm a passionate web developer and designer with a love for
                creating beautiful, functional websites that make a real impact. With over 5
                years of experience, I've had the privilege of working with clients from
                startups to established businesses.
              </p>

              <p data-testid="text-about-bio-2">
                My approach combines clean code with stunning design. I believe every website
                should not only look great but also provide an exceptional user experience. From
                concept to launch, I'm dedicated to bringing your vision to life.
              </p>

              <p data-testid="text-about-bio-3">
                When I'm not coding, you'll find me exploring new design trends, contributing to
                open-source projects, or enjoying a good cup of coffee while sketching out my
                next creative idea.
              </p>
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
                    className="text-sm"
                    data-testid={`badge-skill-${skill.toLowerCase().replace(/[.\s]/g, '-')}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
