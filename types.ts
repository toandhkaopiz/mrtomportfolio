
export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  teamSize?: number;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}


export interface Language {
  name: string;
  proficiency: string;
}

