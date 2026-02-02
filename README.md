# NorthSec 2026 - Andalusian Cipher

[![Deploy to GitHub Pages](https://github.com/NorthSec-2026/NorthSec-2026.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/NorthSec-2026/NorthSec-2026.github.io/actions/workflows/deploy.yml)
[![CI - Build Test](https://github.com/NorthSec-2026/NorthSec-2026.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/NorthSec-2026/NorthSec-2026.github.io/actions/workflows/ci.yml)

North Africa's premier applied security event landing page. A CTF narrative woven into the history of the Golden Age.

## 🚀 Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) - Fast, modern web framework
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS with custom theme
- **Icons**: [Lucide Svelte](https://lucide.dev/) - Beautiful, consistent icons
- **Runtime**: [Bun](https://bun.sh/) - Fast JavaScript runtime and package manager
- **Deployment**: GitHub Pages with automated CI/CD

## 🎨 Theme

The design blends three core elements:
- **Maritime Exploration** - Maps, navigation, and the spirit of discovery
- **Heritage** - Zellige patterns, Andalusian geometry, and cultural richness
- **Cybersecurity** - Terminal aesthetics, glitch effects, and digital warfare

### Color Palette

- **Ocean Dark**: `#0a1628` - Deep background
- **Ocean**: `#005B5B` - Primary brand color
- **Teal**: `#008080` - Accent and interactive elements
- **Teal Bright**: `#00CED1` - Highlights
- **Gold**: `#D4AF37` - Secondary accent (dark mode)
- **Parchment**: `#F5F0E1` - Light background
- **Parchment Paper**: `#FAF8F0` - Subtle light background

## 📦 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed (v1.0+)

### Installation

```bash
# Clone the repository
git clone https://github.com/NorthSec-2026/NorthSec-2026.github.io.git
cd NorthSec-2026.github.io

# Install dependencies
bun install
```

### Development

```bash
# Start development server
bun run dev

# Open http://localhost:5173
```

### Building

```bash
# Build for production
bun run build

# Preview production build
bun run preview
```

## 🏗️ Project Structure

```
NorthSec-2026.github.io/
├── src/
│   ├── lib/
│   │   ├── assets/          # Images, fonts, icons
│   │   ├── components/      # Svelte components
│   │   │   ├── Countdown.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── GameplaySection.svelte
│   │   │   ├── Marquee.svelte
│   │   │   ├── Navbar.svelte
│   │   │   ├── OracleChat.svelte
│   │   │   ├── OrganizersSection.svelte
│   │   │   ├── StoryTimeline.svelte
│   │   │   └── VisualExplorer.svelte
│   │   ├── services/        # API and service integrations
│   │   └── types.ts         # TypeScript type definitions
│   └── routes/
│       ├── +layout.svelte   # Root layout with theme toggle
│       ├── +page.svelte     # Main landing page
│       └── layout.css       # Global styles and Tailwind config
├── static/                  # Static assets
├── .github/workflows/       # CI/CD workflows
├── svelte.config.js         # SvelteKit configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.ts           # Vite configuration
└── package.json             # Dependencies and scripts
```

## 🎭 Features

- ✨ **Dark/Light Theme Toggle** - Seamless theme switching
- 📱 **Fully Responsive** - Mobile-first design
- 🎯 **Interactive Sections**:
  - Hero section with animated HUD elements
  - Live countdown timer
  - Partner logos marquee
  - Mission briefing with cyber mosaic grid
  - Gameplay section with feature cards
  - Interactive story timeline
  - Visual explorer with themed imagery
  - Team/organizers section
- 🎨 **Custom Animations** - Glitch effects, scanning lines, marquees
- ⚡ **Performance Optimized** - Fast loading with SvelteKit
- 🔒 **Type Safe** - Full TypeScript support

## 🚢 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `master` branch.

### Workflows

- **CI (Continuous Integration)**: Runs build tests on all branches except master
- **Deploy**: Builds and deploys to GitHub Pages on master branch
- **Manual Trigger**: Both workflows support manual dispatch from the Actions tab

Workflows are optimized to run only when relevant files change:
- `src/**` - Source code changes
- `*.config.*` - Configuration file changes
- `package.json` - Dependency changes
- `bun.lockb` - Lock file changes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Event Details

**NorthSec 2026 - The Andalusian Cipher**
- 📍 Location: Tangier, Morocco
- 💰 Prize Pool: $25,000
- ⏱️ Duration: 48 Hours Non-Stop
- 👥 Team Size: Max 8 Operators per team
- 🎮 Format: CTF with realistic network simulation

---

Built with ❤️ by the NorthSec Association
