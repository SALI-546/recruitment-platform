# Recruitment Platform Frontend

This project is a web frontend application developed as part of a mobile and web recruitment platform. It is built using **Next.js 14** with the **App Router**, **Ant Design** for UI components, **Redux** for state management, and **i18next** for multi-language support (English and French). The application provides an interface for candidates to submit their information and for recruiters to view candidate lists and details.

## Features

- **Candidate Form Page**: A simple form for candidates to input personal information, education, skills, experience, and upload a CV.
- **Recruiter Candidate List Page**: A table listing all candidates with their names, emails, and desired positions.
- **Recruiter Candidate Details Page**: A detailed view of a selected candidate's information.
- **Theming**: Custom Ant Design theme for consistent UI styling.
- **Multi-language Support**: Translations in English and French, automatically detected based on browser settings.
- **State Management**: Managed with Redux for persistent candidate data.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: Ant Design
- **State Management**: Redux
- **Translations**: i18next with react-i18next
- **Development Tool**: Visual Studio Code (VSCode)
- **Diagrams**: UML designed with Draw.io
- **Version Control**: GitHub (public repository)

## Prerequisites

- **Node.js**: Version 18.x or higher
- **npm**: Version 9.x or higher
- **Git**: For cloning the repository

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/SALI-546/recruitment-platform.git
   cd recruitment-platform
   ```

npm install

npm run dev

Open your browser and navigate to http://localhost:3000

/recruitment-platform
├── /app
│ ├── /recruiters
│ │ ├── /details/[id]
│ │ │ └── page.js # Candidate Details Page
│ │ └── /list
│ │ └── page.js # Candidate List Page
│ ├── /layout.js # Root Layout with Redux, Ant Design, and i18next
│ └── /page.js # Candidate Form Page (root route)
├── /public
│ ├── /locales
│ │ ├── /en
│ │ │ └── translation.json # English translations
│ │ └── /fr
│ │ └── translation.json # French translations
│ └── /i18n.js # i18next configuration
├── /redux
│ └── /store.js # Redux store configuration
│ └── /candidateSlice.js # Redux slice for candidate data
├── /themeConfig.js # Ant Design theme configuration
├── /AntdRegistry.js # Ant Design CSS-in-JS registry
├── /globals.css # Global styles
├── /next.config.js # Next.js configuration
└── /README.md # Project documentation

#### Explications :

- **Next.js App (App Router)** : Point central de l’application, utilise l’App Router pour gérer les routes.
- **Redux Store (Candidates)** : Gère l’état des candidats (liste et détails).
- **i18next (Translations)** : Fournit les traductions en anglais et français.
- **CandidateForm** : Composant pour le formulaire des candidats, connecté à Redux et i18next.
- **CandidateList** : Liste des candidats pour les recruteurs, connectée à Redux et i18next.
- **CandidateDetails** : Détails d’un candidat sélectionné, connectée à Redux et i18next.
- **Ant Design (UI Components)** : Fournit les composants UI (Form, Table, etc.) utilisés par toutes les pages.

**Candidate Form**: `http://localhost:3000/` →

- **Candidate List**: `http://localhost:3000/recruiters/list`
- **Candidate Details**: `http://localhost:3000/recruiters/details/[id]`

## UML Diagram

The UML component diagram for this project is available in the repository:

- **Editable File**: [recruitment-platform-uml.drawio](./recruitment-platform-uml.drawio) (open in Draw.io)
