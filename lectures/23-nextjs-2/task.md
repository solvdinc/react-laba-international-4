# Homework: Country Explorer (Next.js Pages Router)

## Goal

Build a Country Explorer app using the Next.js Pages Router and the REST Countries API. You'll implement key Next.js features such as SSG, SSR, dynamic routes, API routes, client-side filtering, local storage, and global UI behaviors.

API Reference:  
REST Countries API – https://restcountries.com/#about-this-project  
Base URL: https://restcountries.com/v3.1

> Note: No design is provided for this assignment. Use your own layout and styling approach. You are free to style it to your own taste using CSS, Tailwind, or any other method.

---

## Required Work

### Project Setup

- [ ] Create a new Next.js project using the Pages Router
- [ ] Set up styling using CSS or Tailwind or other tools
- [ ] Deploy your finished app to Vercel

---

### `/pages/index` – All Countries

- [ ] Use `getStaticProps` to fetch the full list of countries
- [ ] Display:
  - Country name
  - Country flag
  - Region
- [ ] Link each country to `/countries/[name]`
- [ ] Add a client-side search bar to filter countries by name
- [ ] Add a continent/region filter using buttons or dropdown
- [ ] Add a favorite icon (❤️) to mark countries as favorites (store in localStorage)

---

### `/pages/countries/[name]` – Country Details

- [ ] Create a dynamic route page
- [ ] Use `getStaticPaths` and `getStaticProps`
- [ ] Display full details:
  - Name
  - Flag
  - Capital
  - Region
  - Population
  - Languages
  - Currencies
  - Borders

---

### `/pages/random` – Random Country

- [ ] Use `getServerSideProps`
- [ ] Fetch all countries and randomly select one to display

---

### `/pages/api/region` – API Route

- [ ] Create a custom API route
- [ ] Accept a `region` query param and return filtered countries

---

### Global Features

- [ ] Add a dark mode toggle (button or system-based)
- [ ] Add a custom 404 page (`pages/404.tsx`) for "Country Not Found"
- [ ] Create a `/favorites` page to show all countries marked as favorites (from localStorage)

---