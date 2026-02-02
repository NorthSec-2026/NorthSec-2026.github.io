export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export enum SectionId {
  HERO = 'hero',
  EXPLORATION = 'exploration',
  NARRATIVE = 'narrative',
  VISUALS = 'visuals',
  ORACLE = 'oracle',
}

export type ColorMode = 'blue' | 'gold';