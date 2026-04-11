export type QuizQuestion = {
  q: string;
  options: string[];
  answer: number;
  explain?: string;
};

export type ModuleSection = {
  kind: "prose" | "pullquote" | "list" | "callout" | "do-dont" | "script";
  title?: string;
  body?: string;
  items?: string[];
  dos?: string[];
  donts?: string[];
  role?: string;
};

export type Module = {
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  eyebrow: string;
  readingTime: number;
  sections: ModuleSection[];
  quiz: QuizQuestion[];
};

export type Property = {
  code: string;
  name: string;
  location: string;
  brand: string;
  cohort: string;
  startDate: string;
};

export type Trainee = {
  id: string;
  name: string;
  email: string;
  role: string;
  propertyCode: string;
  enrolledAt: string;
  progress: Record<string, ModuleProgress>;
  finalScore?: number;
  certificateIssuedAt?: string;
};

export type ModuleProgress = {
  started: boolean;
  completed: boolean;
  readAt?: string;
  quizScore?: number;
  quizAttempts: number;
};
