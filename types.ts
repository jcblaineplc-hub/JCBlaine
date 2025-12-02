import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
  isThinking?: boolean;
}