import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import type { Project } from "@shared/schema";

interface ProjectDetailModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectDetailModal({
  project,
  open,
  onOpenChange,
}: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-start justify-between">
            <span className="font-display text-2xl font-bold">
              {project.title}
            </span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="rounded-lg overflow-hidden border-2 border-border">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full object-cover"
              data-testid={`img-modal-project-${project.id}`}
            />
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">Description</h3>
            <p className="text-muted-foreground">{project.description}</p>
          </div>

          {project.tags && project.tags.length > 0 && (
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
