const express = require('express');
const path = require('path');
const portfolio = require('./data/portfolio');

const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

function render(res, view, options = {}) {
  return res.render(view, {
    profile: portfolio.profile,
    education: portfolio.education,
    experience: portfolio.experience,
    skills: portfolio.skills,
    projects: portfolio.projects,
    ...options,
  });
}

app.get('/', (req, res) => {
  const featuredProjects = portfolio.projects.filter((p) => p.featured);
  render(res, 'home', { activePage: 'home', featuredProjects });
});

app.get('/about', (req, res) => {
  render(res, 'about', {
    activePage: 'about',
    pageTitle: 'About',
    metaDescription: `About ${portfolio.profile.name} — ${portfolio.profile.title}`,
  });
});

app.get('/projects', (req, res) => {
  render(res, 'projects', {
    activePage: 'projects',
    pageTitle: 'Projects',
  });
});

app.get('/projects/:slug', (req, res) => {
  const project = portfolio.projects.find((p) => p.slug === req.params.slug);
  if (!project) {
    return render(res, '404', { activePage: 'projects' }).status(404);
  }
  render(res, 'project-detail', {
    activePage: 'projects',
    pageTitle: project.title,
    project,
  });
});

app.get('/skills', (req, res) => {
  render(res, 'skills', {
    activePage: 'skills',
    pageTitle: 'Skills',
  });
});

app.get('/contact', (req, res) => {
  render(res, 'contact', {
    activePage: 'contact',
    pageTitle: 'Contact',
    sent: req.query.sent === '1',
  });
});

app.post('/contact', (req, res) => {
  res.redirect('/contact?sent=1');
});

app.use((req, res) => {
  render(res, '404', { activePage: '' }).status(404);
});

app.listen(port, () => {
  console.log(`Martin's portfolio running at http://localhost:${port}`);
});
