# 🛒 Lista de Compras

A modern and intuitive shopping list application built with Next.js, TypeScript, and Tailwind CSS. Manage your shopping items efficiently with features like categories, quantity tracking, and persistent storage.

![Next.js](https://img.shields.io/badge/Next.js-15.5.6-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8)


## 🚦 Integrated Backend Branch

> **Important:**
>
> There is a dedicated branch called `integrated-main` where this project is fully integrated with a backend API. The backend repository is available at:
>
> [`backend-lista-de-compras`](https://github.com/Ramontaffa/backend-lista-de-compras.git)
>
> In this branch:
> - **Zustand is replaced by backend API calls** for all shopping list operations (add, edit, delete, fetch, etc.)
> - **New features and code refinements** are available, including improved data synchronization, error handling, and advanced functionalities.
> - **Recommended for production and collaborative use**.
>
> To use the backend integration, switch to the `integrated-main` branch:
>
> ```bash
> git checkout integrated-main
> ```
>
> Make sure to follow the backend setup instructions in the [backend repo](https://github.com/Ramontaffa/backend-lista-de-compras.git) for API configuration and environment variables.

> **Deploy:**
> [https://lista-de-compras-integrada.vercel.app/](https://lista-de-compras-integrada.vercel.app/)

---
## ✨ Features

- ✅ **Add Items** - Create shopping items with name, quantity, unit, and category
- ✏️ **Edit Items** - Modify existing items through an intuitive dialog
- 🗑️ **Delete Items** - Remove items with confirmation dialog
- ✔️ **Mark as Purchased** - Check off items as you shop
- 🏷️ **Categories** - Organize items by categories (Fruits, Vegetables, Meat, etc.)
- 💾 **Persistent Storage** - Items saved automatically using localStorage
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI** - Clean interface with smooth animations and transitions

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Package Manager:** [pnpm](https://pnpm.io/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 20.x or higher) - [Download](https://nodejs.org/)
- **pnpm** (recommended) - Install via: `npm install -g pnpm`
  - Alternatively, you can use npm, yarn, or bun

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Ramontaffa/Lista-de-compras.git
cd Lista-de-compras
```

### 2. Install Dependencies

Using pnpm (recommended):
```bash
pnpm install
```

Or using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Run the Development Server

```bash
pnpm run dev
```

The application will start on [http://localhost:3000](http://localhost:3000)

> **Note:** If port 3000 is already in use, Next.js will automatically use the next available port (e.g., 3001, 3002).

### 4. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📁 Project Structure

```
listaDeCompras/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Main page component
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── ListForm/          # Form components
│   │   │   ├── ShoppingForm.tsx
│   │   │   ├── SelectCategory.tsx
│   │   │   └── quantityInput.tsx
│   │   ├── ListItem/          # Item display components
│   │   │   ├── shoppingList.tsx
│   │   │   ├── shoppingItem.tsx
│   │   │   ├── deleteItem.tsx
│   │   │   └── tag.tsx
│   │   ├── ShoppingPage/      # Page-level components
│   │   └── ui/                # Reusable UI components
│   ├── store/                 # Zustand state management
│   │   └── useShoppingStore.ts
│   ├── types/                 # TypeScript type definitions
│   ├── lib/                   # Utility functions
│   ├── utils/                 # Helper functions
│   └── assets/                # Static assets (images, etc.)
├── public/                    # Public static files
├── package.json              # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── next.config.ts           # Next.js configuration
```

## 🎯 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with Turbopack |
| `pnpm build` | Build production-ready application |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint to check code quality |

## 🎨 Features in Detail

### Add New Items
Fill out the form with:
- **Item Name** - Name of the product
- **Quantity** - Amount needed (numeric input)
- **Unit** - Measurement unit (UN, KG, L, PCT)
- **Category** - Product category with icon

### Edit Items
Click the three dots menu (⋮) next to any item and select "Editar" to modify:
- Item name
- Quantity and unit
- Category

### Delete Items
Click the three dots menu (⋮) and select "Excluir". A confirmation dialog will appear to prevent accidental deletion.

### Mark as Purchased
Click the checkbox next to any item to mark it as purchased. Completed items move to a separate "Comprados" section at the bottom.

## 💾 Data Persistence

The application uses Zustand with persist middleware to automatically save your shopping list to browser's localStorage. Your data persists across:
- Page refreshes
- Browser restarts
- Multiple sessions

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Ramon Taffa**
- GitHub: [@Ramontaffa](https://github.com/Ramontaffa)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Lucide Icons](https://lucide.dev/)

---

Made with ❤️ using Next.js and TypeScript
