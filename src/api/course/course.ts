/**
 * TODO: Implement API calls when backend is setup
 */

import { CourseDetails, CourseInfo } from './course.types';
import { slugify } from '@/lib/utils';

const courses: CourseInfo[] = [
  {
    courseId: '1',
    title: 'GIS Certification',
    header: 'Certificate Course in Geographical Information System (GIS)',
    // description: 'Emerging technologies such as GIS (Geographic Information System) and RS (Remote Sensing) are instrumental in addressing intricate global challenges and impacting various aspects of life. In this context, the role of a Geospatial expert is gaining significance in the decision-making process. Acquiring practical knowledge is essential to comprehensively grasp the underlying concepts and unlock the potential for innovative applications of these technologies across diverse domains.',
    image: '/assets/gis.png',
    tags: ['React', 'JavaScript', 'Frontend'],
    prevPrice: '₹7,000',
    currentPrice: '₹3,540',
  },
  {
    courseId: '2',
    title: 'SPSS Certification',
    header:
      'Certificate Course in Statistical Package for the Social Sciences (SPSS)',
    // description: 'Master the fundamentals of Node.js for backend development.',
    image: '/assets/spss.png',
    tags: ['Node.js', 'JavaScript', 'Backend'],
    prevPrice: '₹7,375',
    currentPrice: '₹2,950',
  },
  {
    courseId: '3',
    title: 'Python Data Analysis Certification',
    header: 'Certificate Course in Python - Data Analysis and Visualisation',
    // description: 'Get started with Python programming language.',
    image: '/assets/python.png',
    tags: ['Python', 'Programming', 'Beginner'],
    prevPrice: '₹7,375',
    currentPrice: '₹2,950',
  },
  {
    courseId: '4',
    title: 'Remote Sensing Certification',
    header: 'Certificate Course in Remote Sensing',
    // description: 'Learn essential data structures and algorithms concepts.',
    image: '/assets/rm.png',
    tags: ['Data Structures', 'Algorithms', 'Programming'],
    // tags: ['DSA', 'Algorithms', 'Programming'],
    prevPrice: '₹10,700',
    currentPrice: '₹2,990',
  },
  {
    courseId: '5',
    title: 'Research Methodology - Research Design and Writing',
    header:
      'Certificate Course in Research Methodology - Research Design and Writing',
    // description: 'Comprehensive course covering HTML, CSS, and JavaScript.',
    image: '/assets/rdp.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Frontend'],
    prevPrice: '₹8,200',
    currentPrice: '₹2,950',
  },
  {
    courseId: '6',
    title: 'Research Methodology Data Collection and Analysis',
    header:
      'Certificate Course in Research Methodology - Data Collection and Analysis',
    // description: 'Comprehensive course covering HTML, CSS, and JavaScript.',
    image: '/assets/cloud-data.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Frontend'],
    prevPrice: '₹8,200',
    currentPrice: '₹2,950',
  },
  {
    courseId: '7',
    title: 'Remote Sensing and GIS Project',
    header: 'Research Project in Remote Sensing and GIS',
    // description: 'Comprehensive course covering HTML, CSS, and JavaScript.',
    image: '/assets/report.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Frontend'],
    prevPrice: '₹9,600',
    currentPrice: '₹2,596',
  },
];

const detailedCourses: CourseDetails[] = [
  {
    courseId: '1',
    title: 'Certificate Course in Geographical Information System (GIS)',
    description:
      'Emerging technologies such as GIS (Geographic Information System) and RS (Remote Sensing) are instrumental in addressing intricate global challenges and impacting various aspects of life. In this context, the role of a Geospatial expert is gaining significance in the decision-making process. Acquiring practical knowledge is essential to comprehensively grasp the underlying concepts and unlock the potential for innovative applications of these technologies across diverse domains.',

    image: '/assets/gis.png',
    tags: ['React', 'JavaScript', 'Frontend'],
    prevPrice: '₹7,000',
    currentPrice: '₹3,540',
    whatsapp: 'https://chat.whatsapp.com/FRmZTHwsDLACdxUAQOg3GE',
    contact: '9450906849',
    formLink: 'https://forms.gle/EMas47VcUmrUctK78',
    lessons: [
      {
        title: 'Introduction to GIS',
        description:
          'Overview, A Brief History of GIS, Essential Components of GIS, Software Installation',
        day: 'Day 1',
      },
      {
        title: 'GIS Basics I',
        description: 'GIS System, Projection System, Hands on Practice',
        day: 'Day 2',
      },
      {
        title: 'GIS Basics II',
        description:
          'Geodatabase Preparation, Type of GIS Layers, Hands on Practice',
        day: 'Day 3',
      },
      {
        title: 'GIS Basics III',
        description:
          'Georeferencing of Vector, Georeferencing of Raster, Projection Transformation, Hands on Practice',
        day: 'Day 4',
      },
      {
        title: 'GIS Layer Editing',
        description:
          'Digitisation of Point, Line and Polygon, Filling Attributes, Attribute Joining, Area and Perimeter Calculation, Calculations in Attributes, Hands on Practice',
        day: 'Day 5',
      },
      {
        title: 'Data Management Tools',
        description:
          'Vector Operations in GIS Platform, ArcGIS-Clip Management and Mosaic, Raster and Vector Data Clipping, Making Sample Location with GPS Location, Hands on Practice',
        day: 'Day 6',
      },
      {
        title: 'Spatial Analyst I',
        description:
          'Extraction by points, Extraction by mask, Maths tools, Reclassify, Hands on Practice',
        day: 'Day 7',
      },
      {
        title: 'Spatial Analyst II',
        description: 'Condition, Interpolation, Hands on Practice',
        day: 'Day 8',
      },
      {
        title: 'Spatial Analyst III',
        description: 'Hydrology Tool, Raster Calculator, Hands on Practice',
        day: 'Day 9',
      },
      {
        title: 'Spatial Analyst IV',
        description:
          'Zonal Stats, Table Calculation, Rater & Vector Analysis, Hands on Practice',
        day: 'Day 10',
      },
      {
        title: 'Use cases of tools',
        description:
          'Watershed analysis, Contour preparation, Slope, Aspect and Hill Shade analysis, Hands on Practice',
        day: 'Day 11',
      },
      {
        title: 'Query Builder',
        description: 'Query Algorithm, Writing an equation, Hands on Practice',
        day: 'Day 12',
      },
      {
        title: 'Hands on Practise of Vector Analysis',
        description: 'Case Study for LULC Change',
        day: 'Day 13',
      },
      {
        title: 'Hands on Practise of Raster Analysis',
        description: 'Case study for Change Detection',
        day: 'Day 14',
      },
      {
        title: 'Map Preparation and Data Export',
        description:
          'Scale Fixing, North Direction, Annotation, Exporting Map, Hands on Practice',
        day: 'Day 15',
      },
      {
        title: 'GIS Open-Source Platform',
        description:
          'Q GIS, Vector Operation, Raster Operation, GIS analysis, Map Preparation, Hands on Practice',
        day: 'Day 16',
      },
    ],
    relatedCourses: ['2', '5'],
    startDate: '2024-05-01',
    whatYouWillLearn: [
      'Mastering React.js fundamentals',
      'Building reusable components',
      'Managing state and props efficiently',
      'Implementing routing and navigation',
      'Exploring advanced React features like Hooks and Context API',
    ],
    courseMeta: [
      {
        title: 'Duration',
        description: '6 weeks',
        image: '/assets/react-duration.png',
      },
      {
        title: 'Level',
        description: 'Beginner',
        image: '/assets/intermediate-level.png',
      },
      {
        title: 'Certification',
        description: 'Upon successful completion',
        image: '/assets/certification.png',
      },
      {
        title: 'Language',
        description: 'English and Hindi',
        image: '/assets/instructor.png',
      },
      // {
      //   title: 'Instructor',
      //   description: 'John Doe',
      //   image: '/assets/instructor.png',
      // },
      {
        title: 'Prerequisites',
        description: 'No prerequisites required',
        image: '/assets/prerequisites.png',
      },
      {
        title: 'Projects',
        description: 'Hands-on projects to reinforce learning concepts',
        image: '/assets/projects.png',
      },
      {
        title: 'Community',
        description:
          'Access to an exclusive online community for discussions and support',
        image: '/assets/community.png',
      },
    ],
  },
  {
    courseId: '2',
    title:
      'Certificate Course in Statistical Package for the Social Sciences (SPSS)',
    description:
      'Data analysis is one of the most flourishing fields right now as businesses around the world are trying to make sense of their data. However, there are several data analysis tools available in the market, but SPSS is a suite of software programs that analyses scientific data related to the social sciences. It offers a fast-visual modelling environment that ranges from the smallest to the most complex models. SPSS is designed to accommodate a wide variety of variable data formats, including Excel, CSV, SAS, and Stata data files. The data obtained from SPSS is used for surveys, data mining, market research, etc. SPSS training enables you to master all the essential concepts of SPSS for performing data analysis and statistics through hands-on exposure to industry use cases.',
    image: '/assets/spss.png',
    tags: ['Node.js', 'JavaScript', 'Backend'],
    prevPrice: '₹7,375',
    currentPrice: '₹2,950',
    whatsapp: 'https://chat.whatsapp.com/FdbSxmUWe4yJTVNQvV1zZ2',
    contact: '9450906849',
    formLink: 'https://forms.gle/EMas47VcUmrUctK78',
    lessons: [
      {
        title:
          'Introductory Statistics: Data types, Measures of Central tendency, SPSS Environment: Data View & Variable View',
        day: 'Day 1',
        description: '',
      },
      {
        title:
          'Measures of Variability and Shape, Exploratory Data Analysis: Descriptive Statistics',
        day: 'Day 2',
        description: '',
      },
      {
        title: 'Normality tests with plots',
        day: 'Day 3',
        description: '',
      },
      {
        title: 'Data Management: Preparation, Computation & Transformation',
        day: 'Day 4',
        description: '',
      },
      {
        title:
          'Bivariate analysis - cross tabulation - chi square, Kappa, correlation',
        day: 'Day 5',
        description: '',
      },
      {
        title:
          'Graphical Representation of Data: Histogram, Bar plot, Pie chart, Frequency polygon and Bi-variate analysis',
        day: 'Day 6',
        description: '',
      },
      {
        title:
          'Parametric tests: t-test (one sample, paired sample & two independent sample)',
        day: 'Day 7',
        description: '',
      },
      {
        title: 'One-way ANOVA, Post hoc tests, Two-way ANOVA, ANCOVA',
        day: 'Day 8',
        description: '',
      },
      {
        title:
          'Non-parametric tests: Mann Whitney U test, Wilcoxon sign rank test, one sample run test, Kruskal-Wallis test',
        day: 'Day 9',
        description: '',
      },
      {
        title:
          'Linear Regression (Simple & Multiple) and its diagnostics, Logistic Regression-Binary & Ordinal and its diagnostics',
        day: 'Day 10',
        description: '',
      },
      {
        title: 'Factor Analysis',
        day: 'Day 11',
        description: '',
      },
      {
        title: 'Cluster Analysis-Hierarchical & k-means clustering',
        day: 'Day 12',
        description: '',
      },
      {
        title: 'Discriminant Analysis',
        day: 'Day 15',
        description: '',
      },
      {
        title: 'Survival Analysis',
        day: 'Day 16',
        description: '',
      },
      {
        title: 'Nearest Neighbour Analysis',
        day: 'Day 17',
        description: '',
      },
      {
        title: 'Practice & Case Studies',
        day: 'Day 18',
        description: '',
      },
    ],
    startDate: '2024-06-01',
    whatYouWillLearn: [
      'Descriptive Statistics - It includes methodologies such as cross-tabulation, frequencies, and descriptive ratio statistics.',
      'Bivariate Statistics - It includes methodologies such as means, nonparametric tests, correlation, and Analysis of Variance (ANOVA).',
      'Predicting numeral outcomes such as linear regression.',
      'Methodologies such as cluster analysis and factor analysis which is great for predicting for identifying groups.',
      'Numerous chart and graph options for visualizing data patterns, such as histograms, bar charts, and scatter plots.',
      'Government entities, educational institutions, survey companies, market researchers, marketing organizations, health researchers, data miners, and many others use it for analysing survey data. It is popular in academic, scientific, and applied research environments.',
    ],
    courseMeta: [
      {
        title: 'Duration',
        description: '6 weeks',
        image: '/assets/node-duration.png',
      },
      {
        title: 'Level',
        description: 'Beginner',
        image: '/assets/intermediate-level.png',
      },
      {
        title: 'Certification',
        description: 'Upon successful completion',
        image: '/assets/certification.png',
      },
      {
        title: 'Language',
        description: 'English',
        image: '/assets/instructor.png',
      },
      {
        title: 'Instructor',
        description: 'Jane Smith',
        image: '/assets/instructor.png',
      },
      {
        title: 'Prerequisites',
        description:
          'No prequisites required. Basic understanding of statistics is recommended',
        image: '/assets/prerequisites.png',
      },
      {
        title: 'Projects',
        description:
          'Building real-world projects to reinforce learning concepts',
        image: '/assets/projects.png',
      },
      {
        title: 'Community',
        description:
          'Access to a dedicated online community for discussions and support',
        image: '/assets/community.png',
      },
    ],
  },
  {
    courseId: '3',
    title: 'Certificate Course in Python - Data Analysis and Visualisation',
    description:
      "Unlock the power of Python for data analysis and visualization in this comprehensive course. From mastering fundamental Python concepts to handling datasets and conducting exploratory data analysis, you'll gain the skills to visualize data effectively. Explore a variety of plots, charts, and statistical techniques, and even delve into geospatial data visualization. Elevate your proficiency in Python and transform raw data into meaningful insights. Join us on this engaging journey of learning and acquire the expertise needed for impactful data-driven decision-making.",
    image: '/assets/python.png',
    tags: ['React', 'JavaScript', 'Frontend'],
    prevPrice: '₹7,375',
    currentPrice: '₹2,950',
    whatsapp: 'https://chat.whatsapp.com/HkrLN4L6LdaGuhj1TqkYWT',
    contact: '9450906849',
    formLink: 'https://forms.gle/GnXUAxDczULkvQQF6',
    lessons: [
      {
        title:
          'Python - Introduction, variables, constants, strings, lists and maps.',
        day: 'Day 1',
        description: '',
      },
      {
        title: 'Python - conditionals, loops and functions.',
        day: 'Day 2',
        description: '',
      },
      {
        title: 'Python - classes and packages. How to read documentation?',
        day: 'Day 3',
        description: '',
      },
      {
        title:
          'Importing/loading datasets. Data wrangling, preprocessing and cleanup. Handling excel, csv and dataframes.',
        day: 'Day 4',
        description: '',
      },
      {
        title:
          'Exploratory data analysis with pandas and numpy. Basic statistical analysis like mean, median, mode, standard deviation, percentiles etc.',
        day: 'Day 5',
        description: '',
      },
      {
        title:
          'Plotting with matplotlib. Visually appealing visualizations for papers and presentations.',
        day: 'Day 6',
        description: '',
      },
      {
        title:
          'Area plots, histograms, bar charts, pie charts, box plots, and scatter plots.',
        day: 'Day 7',
        description: '',
      },
      {
        title:
          'Classification and regression decision trees. Linear regression, logistic regression.',
        day: 'Day 8',
        description: '',
      },
      {
        title: 'Handling 3D data. Bubble plots, heatmaps and 3D bar charts.',
        day: 'Day 9',
        description: '',
      },
      {
        title:
          'Normality, Statistical tests, confidence interval estimates etc.',
        day: 'Day 10',
        description: '',
      },
      {
        title: 'Visualizing geospatial data with folium.',
        day: 'Day 11',
        description: '',
      },
      {
        title: 'Model evaluation and refinement. Testing.',
        day: 'Day 12',
        description: '',
      },
    ],
    relatedCourses: ['2', '5'],
    startDate: '2024-05-01',
    whatYouWillLearn: [
      'Mastering React.js fundamentals',
      'Building reusable components',
      'Managing state and props efficiently',
      'Implementing routing and navigation',
      'Exploring advanced React features like Hooks and Context API',
    ],
    courseMeta: [
      {
        title: 'Duration',
        description: '6 weeks',
        image: '/assets/react-duration.png',
      },
      {
        title: 'Level',
        description: 'Beginner',
        image: '/assets/intermediate-level.png',
      },
      {
        title: 'Certification',
        description: 'Upon successful completion',
        image: '/assets/certification.png',
      },
      {
        title: 'Language',
        description: 'English and Hindi',
        image: '/assets/instructor.png',
      },
      {
        title: 'Instructor',
        description: 'John Doe',
        image: '/assets/instructor.png',
      },
      {
        title: 'Prerequisites',
        description: 'No prerequisites required',
        image: '/assets/prerequisites.png',
      },
      {
        title: 'Projects',
        description: 'Hands-on projects to reinforce learning concepts',
        image: '/assets/projects.png',
      },
      {
        title: 'Community',
        description:
          'Access to an exclusive online community for discussions and support',
        image: '/assets/community.png',
      },
    ],
  },
  {
    courseId: '4',
    title: 'Certificate Course in Remote Sensing',
    description:
      'The Certificate Course in Remote Sensing offers a comprehensive training program, covering essential principles of remote sensing and hands-on experience with relevant software. This course provides practical skills in image processing, classification, and spatial modeling, enabling participants to harness the power of remote sensing data for environmental monitoring, resource management, and GIS applications. ',
    image: '/assets/rm.png',
    tags: ['React', 'JavaScript', 'Frontend'],
    prevPrice: '₹10,700',
    currentPrice: '₹2,990',
    whatsapp: 'https://chat.whatsapp.com/C1JrWWEMrbwBp785QnFNVj',
    contact: '9450906849',
    formLink: 'https://forms.gle/4XCdgsjLha6iwnga8',
    lessons: [
      {
        title:
          'Introduction to Remote Sensing: A Short History of Remote Sensing; Introduction to Digital Data; Important Basic Concepts of Remote Sensing; Geographic Concepts',
        day: 'Day 1',
        description: '',
      },
      {
        title:
          'Satellite Image Technology and Basics: The Electromagnetic Spectrum; Passive/Active Sensors; Remote Sensing Sensor Platforms; Analogue Aerial Photography; Digital Imagery; Imagery Types',
        day: 'Day 2',
        description: '',
      },
      {
        title: 'Image Processing Software Installation Demo',
        day: 'Day 3',
        description: '',
      },
      {
        title:
          'Satellite Image Pre Processing-I: Satellite Data Downloading; FCC Preparation; Colour Matching; Hands on Practice',
        day: 'Day 4',
        description: '',
      },
      {
        title:
          'Satellite Image Pre Processing-II: Image Pre-Processing; Hands on Practice',
        day: 'Day 5',
        description: '',
      },
      {
        title:
          'Satellite Image Pre Processing-III: Image Referencing and Transformation; Image Mosaics; Hands on Practice',
        day: 'Day 6',
        description: '',
      },
      {
        title: 'Hands on Practice for Satellite Image Pre Processing',
        day: 'Day 7',
        description: '',
      },
      {
        title: 'Image Processing-I: Image Enhancement; Hands on Practice',
        day: 'Day 8',
        description: '',
      },
      {
        title: 'Image Processing-II: Image Fusion; Hands on Practice',
        day: 'Day 9',
        description: '',
      },
      {
        title: 'Image Processing-III: Image Classification; Hands on Practice',
        day: 'Day 10',
        description: '',
      },
      {
        title: 'Image Processing-IV: Image Analysis; Hands on Practice',
        day: 'Day 11',
        description: '',
      },
      {
        title: 'Image Processing-V: Image Interpretation; Hands on Practice',
        day: 'Day 12',
        description: '',
      },
      {
        title: 'Image Processing-VI: Image Enhancement; Hands on Practice',
        day: 'Day 13',
        description: '',
      },
      {
        title: 'Image Processing-VII: Image Fusion; Hands on Practice',
        day: 'Day 14',
        description: '',
      },
      {
        title: 'Image Processing-VIII: Image Classification; Hands on Practice',
        day: 'Day 15',
        description: '',
      },
      {
        title: 'Image Processing-IX: Image Analysis; Hands on Practice',
        day: 'Day 16',
        description: '',
      },
    ],
    relatedCourses: ['2', '5'],
    startDate: '2024-05-01',
    whatYouWillLearn: [
      'Mastering React.js fundamentals',
      'Building reusable components',
      'Managing state and props efficiently',
      'Implementing routing and navigation',
      'Exploring advanced React features like Hooks and Context API',
    ],
    courseMeta: [
      {
        title: 'Duration',
        description: '8 weeks',
        image: '/assets/react-duration.png',
      },
      {
        title: 'Level',
        description: 'Beginner',
        image: '/assets/intermediate-level.png',
      },
      {
        title: 'Certification',
        description: 'Upon successful completion',
        image: '/assets/certification.png',
      },
      {
        title: 'Language',
        description: 'English and Hindi',
        image: '/assets/instructor.png',
      },
      {
        title: 'Instructor',
        description: 'John Doe',
        image: '/assets/instructor.png',
      },
      {
        title: 'Prerequisites',
        description: 'No prerequisites required',
        image: '/assets/prerequisites.png',
      },
      {
        title: 'Projects',
        description: 'Hands-on projects to reinforce learning concepts',
        image: '/assets/projects.png',
      },
      {
        title: 'Community',
        description:
          'Access to an exclusive online community for discussions and support',
        image: '/assets/community.png',
      },
    ],
  },
  {
    courseId: '5',
    title:
      'Certificate Course in Research Methodology - Research Design and Writing',
    description:
      'Embark on a transformative journey into the realm of research methodology. From laying the groundwork with fundamentals and diverse methodologies to navigating the intricacies of formulating hypotheses and writing impactful papers, each class unfolds a new chapter. Delve into practical insights, enhance your writing skills, and master the art of effective presentations. Join us to foster your passion for research and equip yourself with the tools needed for scholarly success.',
    image: '/assets/rdp.png',
    tags: ['React', 'JavaScript', 'Frontend'],
    prevPrice: '₹8,200',
    currentPrice: '₹2,950',
    whatsapp: 'https://chat.whatsapp.com/HLFjC7Usbs12NDdY0pR1fV',
    contact: '9450906849',
    formLink: 'https://forms.gle/EcBkBU18eM3o96S38',
    lessons: [
      {
        title:
          'Fundamentals of Research: Importance & Scope; Research: Meaning, Types, Objectives, Characteristics; Positivism and Post Positivism to Research; Introducing the Idea of Research in Social Sciences; Limitation of Research',
        day: 'Day 1',
        description: '',
      },
      {
        title:
          'Research Process; Research Designs and Variables; Vectoring and Examples',
        day: 'Day 2',
        description: '',
      },
      {
        title: 'Various Methods and Techniques of Research',
        day: 'Day 3',
        description: '',
      },
      {
        title:
          'Formulation of Research Problem; Articulating your Synopsis; How to map the thesis to a claim?',
        day: 'Day 4',
        description: '',
      },
      {
        title:
          'Formulation of Hypothesis: Concepts, Types, Sources; Characteristics of a Good Hypothesis; Hypothesis testing and Evaluation Design',
        day: 'Day 5',
        description: '',
      },
      {
        title:
          'How to read a research paper?; Review of Literature; Referencing System',
        day: 'Day 6',
        description: '',
      },
      {
        title:
          'Precaution in Preparing the Research Report; The Mechanics of Writing: Report, Dissertation, Thesis; Index/Content, Appendix, Footnotes, Endnotes, Use of Diacritical Marks',
        day: 'Day 7',
        description: '',
      },
      {
        title:
          'Quotation, Citation, Bibliographical References; Drawing Conclusion, Giving Suggestions and Recommendations; Claims and Implied Evaluation',
        day: 'Day 8',
        description: '',
      },
      {
        title:
          'Writing Abstract, Book Review, Content Writing; Writing and Editing Research Papers; How to Avoid Plagiarism',
        day: 'Day 9',
        description: '',
      },
      {
        title:
          'Formulation of Research Proposal; How to Ask for Funding/Collaboration?; How to Give a Presentation',
        day: 'Day 10',
        description: '',
      },
      {
        title: 'Writing Well-Formatted Papers: LATEX and Overleaf',
        day: 'Day 11',
        description: '',
      },
      {
        title:
          'Use of Internet in Research: Email, Google Scholar, Interaction through Social Networking and Other Channels; How to Showcase your Work on the Web?; Understanding Impact Factor, Citations, H-index etc.',
        day: 'Day 12',
        description: '',
      },
    ],
    relatedCourses: ['2', '5'],
    startDate: '2024-05-01',
    whatYouWillLearn: [
      'Mastering React.js fundamentals',
      'Building reusable components',
      'Managing state and props efficiently',
      'Implementing routing and navigation',
      'Exploring advanced React features like Hooks and Context API',
    ],
    courseMeta: [
      {
        title: 'Duration',
        description: '6 weeks',
        image: '/assets/react-duration.png',
      },
      {
        title: 'Level',
        description: 'Beginner',
        image: '/assets/intermediate-level.png',
      },
      {
        title: 'Certification',
        description: 'Upon successful completion',
        image: '/assets/certification.png',
      },
      {
        title: 'Language',
        description: 'English and Hindi',
        image: '/assets/instructor.png',
      },
      {
        title: 'Instructor',
        description: 'John Doe',
        image: '/assets/instructor.png',
      },
      {
        title: 'Prerequisites',
        description: 'No prerequisites required',
        image: '/assets/prerequisites.png',
      },
      {
        title: 'Projects',
        description: 'Hands-on projects to reinforce learning concepts',
        image: '/assets/projects.png',
      },
      {
        title: 'Community',
        description:
          'Access to an exclusive online community for discussions and support',
        image: '/assets/community.png',
      },
    ],
  },
  {
    courseId: '6',
    title:
      'Certificate Course in Research Methodology - Data Collection and Analysis',
    description:
      'Join us to master the intricacies of data collection and analysis in research. Explore the qualities of a researcher, delve into sampling techniques, and design effective questionnaires. Get hands-on with data preprocessing, Python-based exploratory data analysis, and visualization. This course is tailored for students eager to enhance their skills in collecting, processing, and analyzing data for impactful research.',
    image: '/assets/cloud-data.png',
    tags: ['React', 'JavaScript', 'Frontend'],
    prevPrice: '₹8,200',
    currentPrice: '₹2,950',
    whatsapp: 'https://chat.whatsapp.com/HLFjC7Usbs12NDdY0pR1fV',
    contact: '9450906849',
    formLink: 'https://forms.gle/waNVN81LwwTR5Mwh8',
    lessons: [
      {
        title: 'Application of Remote Sensing in Research',
        day: 'Day 1',
        description: '',
      },
      {
        title: 'Application of GIS in Research',
        day: 'Day 2',
        description: '',
      },
      {
        title: 'Use of Statistical Techniques in Research',
        day: 'Day 3',
        description: '',
      },
      {
        title: 'Data Analysis and Visualisation with SPSS',
        day: 'Day 4',
        description: '',
      },
      {
        title:
          'Scale Techniques: Concepts, Types, Rating and Ranking Scale; Scale Construction Techniques, Multidimensional Scaling',
        day: 'Day 5',
        description: '',
      },
      {
        title:
          'Qualities of Researcher; Attitude Measuring and Observation; Importance of Velocity; Preparing your Elevator Pitch',
        day: 'Day 6',
        description: '',
      },
      {
        title:
          'Sampling Design Techniques: Concepts and Types; Selection of Suitable Sampling Techniques; Sampling Size Decision; Sampling Error',
        day: 'Day 7',
        description: '',
      },
      {
        title:
          'Data Types and Sources: Primary and Secondary; Application of Sampling in various types; User Study',
        day: 'Day 8',
        description: '',
      },
      {
        title: 'Designing Questionnaire/Interview Schedule',
        day: 'Day 9',
        description: '',
      },
      {
        title:
          'Data Preprocessing: Data Preparation, Tabulation, Coding and Editing; Graphical Representation and Mapping',
        day: 'Day 10',
        description: '',
      },
      {
        title:
          'Introduction to Python; Exploratory Data Analysis with Python; Handling Large Excel and CSV files Using Open Street Maps',
        day: 'Day 11',
        description: '',
      },
      {
        title:
          'More Python concepts; Data Analysis and Visualisation with Python',
        day: 'Day 12',
        description: '',
      },
    ],
    relatedCourses: ['2', '5'],
    startDate: '2024-05-01',
    whatYouWillLearn: [
      'Mastering React.js fundamentals',
      'Building reusable components',
      'Managing state and props efficiently',
      'Implementing routing and navigation',
      'Exploring advanced React features like Hooks and Context API',
    ],
    courseMeta: [
      {
        title: 'Duration',
        description: '6 weeks',
        image: '/assets/react-duration.png',
      },
      {
        title: 'Level',
        description: 'Beginner',
        image: '/assets/intermediate-level.png',
      },
      {
        title: 'Certification',
        description: 'Upon successful completion',
        image: '/assets/certification.png',
      },
      {
        title: 'Language',
        description: 'English and Hindi',
        image: '/assets/instructor.png',
      },
      {
        title: 'Instructor',
        description: 'John Doe',
        image: '/assets/instructor.png',
      },
      {
        title: 'Prerequisites',
        description: 'No prerequisites required',
        image: '/assets/prerequisites.png',
      },
      {
        title: 'Projects',
        description: 'Hands-on projects to reinforce learning concepts',
        image: '/assets/projects.png',
      },
      {
        title: 'Community',
        description:
          'Access to an exclusive online community for discussions and support',
        image: '/assets/community.png',
      },
    ],
  },
  {
    courseId: '7',
    title: 'Research Project in Remote Sensing and GIS',
    description:
      'Join us to work on your very own research project or pick from one of our ideas that aligns with your interests. This will involve working with our experts to apply your Remote Sensing and GIS skills to real world case studies. In the end, you get an opportunity to publish a research paper!',
    image: '/assets/report.png',
    tags: ['React', 'JavaScript', 'Frontend'],
    prevPrice: '₹9,600',
    currentPrice: '₹2,596',
    whatsapp: 'https://chat.whatsapp.com/CxMeIeJcX5v4NDtE0Inld2',
    contact: '9450906849',
    formLink: 'https://forms.gle/jCB9H6QSXfTuEzSj7',
    lessons: [
      {
        title: 'Topic Discussion',
        description:
          'Overview, A Brief History of GIS, Essential Components of GIS, Software Installation',
        day: 'Day 1',
      },
      {
        title: 'Synopsis Draft',
        description: 'GIS System, Projection System, Hands on Practice',
        day: 'Day 2',
      },
      {
        title: 'Data Collection and Cleanup',
        description:
          'Geodatabase Preparation, Type of GIS Layers, Hands on Practice',
        day: 'Day 3',
      },
      {
        title: 'Data Analysis',
        description:
          'Georeferencing of Vector, Georeferencing of Raster, Projection Transformation, Hands on Practice',
        day: 'Day 4',
      },
      {
        title: 'Data Management',
        description:
          'Digitisation of Point, Line and Polygon, Filling Attributes, Attribute Joining, Area and Perimeter Calculation, Calculations in Attributes, Hands on Practice',
        day: 'Day 5',
      },
      {
        title: 'Mapping and Visualisation',
        description:
          'Vector Operations in GIS Platform, ArcGIS-Clip Management and Mosaic, Raster and Vector Data Clipping, Making Sample Location with GPS Location, Hands on Practice',
        day: 'Day 6',
      },
      {
        title: 'Presentation',
        description:
          'Extraction by points, Extraction by mask, Maths tools, Reclassify, Hands on Practice',
        day: 'Day 7',
      },
      {
        title: 'Report Writing',
        description: 'Condition, Interpolation, Hands on Practice',
        day: 'Day 8',
      },
    ],
    relatedCourses: ['2', '5'],
    startDate: '2024-05-01',
    whatYouWillLearn: [
      'Mastering React.js fundamentals',
      'Building reusable components',
      'Managing state and props efficiently',
      'Implementing routing and navigation',
      'Exploring advanced React features like Hooks and Context API',
    ],
    courseMeta: [
      {
        title: 'Duration',
        description: '8 weeks',
        image: '/assets/react-duration.png',
      },
      {
        title: 'Level',
        description: 'Beginner',
        image: '/assets/intermediate-level.png',
      },
      {
        title: 'Certification',
        description: 'Upon successful completion',
        image: '/assets/certification.png',
      },
      {
        title: 'Language',
        description: 'English and Hindi',
        image: '/assets/instructor.png',
      },
      {
        title: 'Instructor',
        description: 'John Doe',
        image: '/assets/instructor.png',
      },
      {
        title: 'Prerequisites',
        description: 'No prerequisites required',
        image: '/assets/prerequisites.png',
      },
      {
        title: 'Projects',
        description: 'Hands-on projects to reinforce learning concepts',
        image: '/assets/projects.png',
      },
      {
        title: 'Community',
        description:
          'Access to an exclusive online community for discussions and support',
        image: '/assets/community.png',
      },
    ],
  },
];

export function getAllCourses() {
  return courses;
}

export function getCourseInfoById(id: string) {
  return courses.find((course) => course.courseId === id);
}

export function getCourseDetailById(id: string): CourseDetails | undefined {
  const course = detailedCourses.find((course) => course.courseId === id);
  return course;
}

export function getCourseByTitle(title: string): CourseDetails | undefined {
  const course = detailedCourses.find(
    (course) => slugify(course.title) === slugify(title)
  );
  return course;
}
