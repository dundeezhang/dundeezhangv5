export interface Work {
  title: string;
  tech: string;
  description: string;
  image: string;
  repo: string;
  repoLabel: string;
  buttonClass: string;
  link: string;
}

export interface Photo {
  src: string;
  name: string;
  date: string;
  filename: string;
}

export interface Article {
  title: string;
  subject: string;
  date: string;
  wordCount: number;
  filename: string;
}
