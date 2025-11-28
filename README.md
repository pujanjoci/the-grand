# The Grand Hotel 🏨

A luxurious hotel website built with modern web technologies, showcasing elegant design and seamless user experience.

[![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## 🌟 Features

- **Modern Design**: Elegant, responsive UI with smooth animations using Framer Motion
- **Room Showcase**: Comprehensive room listings with detailed information and booking capabilities
- **Multiple Pages**: 
  - Home with hero section and featured rooms
  - About page with team information
  - Rooms & Suites catalog
  - Dining experiences
  - Spa & Wellness services
  - Events & Conferences facilities
  - Gallery showcase
  - Contact information
- **Booking System**: Interactive booking modal with date selection
- **Static Export**: Optimized for GitHub Pages deployment
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance**: Fast loading times with Next.js optimizations

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Custom fonts including Parfumerie for elegant typography
- **Deployment**: GitHub Pages with GitHub Actions

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/pujanjoci/the-grand.git
   cd the-grand
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📦 Build & Deploy

### Local Build

To create a production build:

```bash
npm run build
# or
yarn build
```

This generates a static export in the `out/` directory.

### GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages:

1. **Push to main branch**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Automatic deployment**
   
   GitHub Actions will automatically build and deploy your site to GitHub Pages.

3. **Access your site**
   
   Your site will be available at: `https://pujanjoci.github.io/the-grand/`

### Manual Deployment

To deploy manually:

```bash
npm run build
# Deploy the 'out' folder to your hosting provider
```

## 📁 Project Structure

```
the-grand/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── booking/           # Booking page
│   ├── dining/            # Dining page
│   ├── events/            # Events page
│   ├── gallery/           # Gallery page
│   ├── rooms/             # Rooms listing and detail pages
│   ├── spa/               # Spa page
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer with links
│   ├── BookingModal.tsx   # Booking modal
│   └── ...
├── data/                  # Data files
│   ├── rooms.ts           # Room data
│   └── team.ts            # Team member data
├── lib/                   # Utility functions
├── public/                # Static assets
│   └── assets/            # Images and media
├── styles/                # Global styles
├── .github/               # GitHub configuration
│   └── workflows/         # GitHub Actions workflows
└── next.config.ts         # Next.js configuration
```

## 🎨 Customization

### Updating Content

- **Rooms**: Edit `data/rooms.ts` to modify room information
- **Team**: Edit `data/team.ts` to update team members
- **Images**: Add images to `public/assets/`
- **Styling**: Modify Tailwind classes or update `styles/globals.css`

### Configuration

- **Next.js Config**: `next.config.ts`
- **TypeScript Config**: `tsconfig.json`
- **Tailwind Config**: `tailwind.config.ts`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Pujan Joshi**

- GitHub: [@pujanjoci](https://github.com/pujanjoci)

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com/)
- Icons from [Lucide](https://lucide.dev/)
- Built with [Next.js](https://nextjs.org/)

## 📞 Support

For support, email info@the-grand.com or open an issue in the repository.

---

<p align="center">Made with ❤️ by Pujan Joshi</p>
