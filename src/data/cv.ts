export interface CVEntry {
  title: string;
  org: string;
  location?: string;
  start: string;
  end?: string;
  description?: string;
  placeholder: boolean;
}

export const cv = {
  education: [
    {
      title: 'PhD in Computer Science (Computer Vision)',
      org: 'Heidelberg University, CVL',
      location: 'Heidelberg, Germany',
      start: '2023',
      end: 'Present',
      description: 'Researching robust feature representations for sparse and multi-modal sensor data.',
      placeholder: true,
    },
    {
      title: 'MSc in Computer Science',
      org: 'Example University',
      location: 'Example City, Country',
      start: '2021',
      end: '2023',
      description: 'Thesis on self-supervised representation learning for 3D perception.',
      placeholder: true,
    },
    {
      title: 'BSc in Computer Science',
      org: 'Example University',
      location: 'Example City, Country',
      start: '2017',
      end: '2021',
      placeholder: true,
    },
  ] satisfies CVEntry[],

  positions: [
    {
      title: 'Research Assistant',
      org: 'Computer Vision Lab, Heidelberg University',
      location: 'Heidelberg, Germany',
      start: '2023',
      end: 'Present',
      description: 'Full-time PhD researcher and teaching assistant.',
      placeholder: true,
    },
    {
      title: 'Software Engineering Intern',
      org: 'Example Tech Company',
      location: 'Remote',
      start: '2022',
      end: '2022',
      description: 'Worked on internal computer vision tooling for data annotation pipelines.',
      placeholder: true,
    },
  ] satisfies CVEntry[],

  skills: [
    'PyTorch',
    'Computer Vision',
    '3D Perception',
    'Python',
    'C++',
    'CUDA',
    'Experiment Design',
  ],
};
