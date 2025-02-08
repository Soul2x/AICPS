export interface UserProfile {
  name: string;
  currentRole: string;
  yearsOfExperience: number;
  skills: string[];
  education: string;
  location: string;
  desiredRole: string;
}

export interface CareerPath {
  role: string;
  timeframe: string;
  salary: number;
  requiredSkills: string[];
  certifications: string[];
}

export interface SkillGap {
  skill: string;
  proficiency: number;
  importance: number;
}

export type CareerStage = 'entry' | 'mid' | 'senior' | 'lead' | 'executive';