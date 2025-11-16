import {
  type AdminUser,
  type InsertAdminUser,
  type Project,
  type InsertProject,
  type Profile,
  type InsertProfile,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Admin Users
  getAdminUser(id: string): Promise<AdminUser | undefined>;
  getAdminUserByUsername(username: string): Promise<AdminUser | undefined>;
  createAdminUser(user: InsertAdminUser): Promise<AdminUser>;

  // Projects
  getAllProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: string, project: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: string): Promise<boolean>;

  // Profile
  getProfile(): Promise<Profile | undefined>;
  updateProfile(profile: Partial<InsertProfile>): Promise<Profile>;
}

export class MemStorage implements IStorage {
  private adminUsers: Map<string, AdminUser>;
  private projects: Map<string, Project>;
  private profile: Profile | undefined;

  constructor() {
    this.adminUsers = new Map();
    this.projects = new Map();
    this.profile = {
      id: randomUUID(),
      profileImageUrl: null,
      bio1: "Hi, I'm Kayla! I'm a passionate web developer and designer with a love for creating beautiful, functional websites that make a real impact. With over 5 years of experience, I've had the privilege of working with clients from startups to established businesses.",
      bio2: "My approach combines clean code with stunning design. I believe every website should not only look great but also provide an exceptional user experience. From concept to launch, I'm dedicated to bringing your vision to life.",
      bio3: "When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or enjoying a good cup of coffee while sketching out my next creative idea.",
      skills: ["React", "TypeScript", "Node.js", "Tailwind CSS", "UI/UX Design", "Responsive Design", "API Development", "Database Design"],
      contactEmail: "hello@codewithkayla.com",
      updatedAt: new Date(),
    };
  }

  // Admin Users
  async getAdminUser(id: string): Promise<AdminUser | undefined> {
    return this.adminUsers.get(id);
  }

  async getAdminUserByUsername(username: string): Promise<AdminUser | undefined> {
    return Array.from(this.adminUsers.values()).find(
      (user) => user.username === username,
    );
  }

  async createAdminUser(insertUser: InsertAdminUser): Promise<AdminUser> {
    const id = randomUUID();
    const user: AdminUser = {
      ...insertUser,
      id,
      createdAt: new Date(),
    };
    this.adminUsers.set(id, user);
    return user;
  }

  // Projects
  async getAllProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).sort(
      (a, b) => parseInt(a.orderIndex) - parseInt(b.orderIndex)
    );
  }

  async getProject(id: string): Promise<Project | undefined> {
    return this.projects.get(id);
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = {
      id,
      title: insertProject.title,
      description: insertProject.description,
      imageUrl: insertProject.imageUrl,
      deviceType: insertProject.deviceType || "monitor",
      tags: insertProject.tags || [],
      orderIndex: insertProject.orderIndex || "0",
      createdAt: new Date(),
    };
    this.projects.set(id, project);
    return project;
  }

  async updateProject(
    id: string,
    updates: Partial<InsertProject>,
  ): Promise<Project | undefined> {
    const project = this.projects.get(id);
    if (!project) return undefined;

    const updated: Project = {
      ...project,
      ...updates,
    };
    this.projects.set(id, updated);
    return updated;
  }

  async deleteProject(id: string): Promise<boolean> {
    return this.projects.delete(id);
  }

  // Profile
  async getProfile(): Promise<Profile | undefined> {
    return this.profile;
  }

  async updateProfile(updates: Partial<InsertProfile>): Promise<Profile> {
    if (!this.profile) {
      this.profile = {
        id: randomUUID(),
        profileImageUrl: null,
        bio1: "",
        bio2: "",
        bio3: "",
        skills: [],
        contactEmail: "hello@codewithkayla.com",
        updatedAt: new Date(),
      };
    }

    this.profile = {
      ...this.profile,
      ...updates,
      updatedAt: new Date(),
    };

    return this.profile;
  }
}

export const storage = new MemStorage();
