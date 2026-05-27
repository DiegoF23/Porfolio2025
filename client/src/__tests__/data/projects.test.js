import { describe, it, expect } from 'vitest';
import { PROJECTS } from '../../data/projects';

describe('PROJECTS', () => {
  it('should be a non-empty array', () => {
    expect(Array.isArray(PROJECTS)).toBe(true);
    expect(PROJECTS.length).toBeGreaterThan(0);
  });

  it('each project should have required fields', () => {
    for (const project of PROJECTS) {
      expect(project).toHaveProperty('id');
      expect(typeof project.id).toBe('number');
      expect(project).toHaveProperty('title');
      expect(project.title).toHaveProperty('es');
      expect(project.title).toHaveProperty('en');
      expect(project).toHaveProperty('description');
      expect(project.description).toHaveProperty('es');
      expect(project.description).toHaveProperty('en');
    }
  });

  it('each project id should be unique', () => {
    const ids = PROJECTS.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
});
