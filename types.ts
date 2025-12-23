
// Fix: Added React import to resolve the 'Cannot find namespace React' error when using React.ReactNode
import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: 'Nhà Vườn' | 'Nhà Phố';
  image: string;
  location: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}