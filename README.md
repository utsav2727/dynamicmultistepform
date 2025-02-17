# 🚀 Overview

This project is a dynamic multi-step form built using Next.js 15.x with the App Router and React 19.x. The form is flexible, allowing customization of steps, fields, and validation rules. It integrates with shadcn/ui, Tailwind CSS, and Framer Motion for a smooth and modern UI.

# ✨ Features

Dynamic Step Management – Easily configure steps and fields.

Validation Support – Uses Biome for validation.

State Management – Handles form data seamlessly across steps.

Animations – Smooth transitions using Framer Motion.

Custom Theming – Styled with Tailwind CSS and shadcn/ui.

# 📦 Tech Stack

Framework: Next.js 15.x (App Router)

Styling: Tailwind CSS

State Management: React Hooks

Validation: Biome 1.9.4

Animations: Framer Motion

# 🛠 Installation & Setup

# Clone the repository
git clone https://github.com/your-repo/nextjs-multistep-form.git

# Navigate to the project folder
cd nextjs-multistep-form

# Install dependencies
npm install  # or yarn install

# Run the development server
npm run dev  # or yarn dev

# ⚙️ Configuration

Customize form steps in config.ts:

export const formSteps = [
  { id: 'step1', label: 'Personal Info', fields: ['name', 'email'] },
  { id: 'step2', label: 'Address', fields: ['country', 'state', 'city'] },
  { id: 'step3', label: 'Review & Submit' },
];

# 🎨 Theming & Customization

Modify the Tailwind theme in tailwind.config.js or override styles in globals.css.


# 📌 Roadmap

✅ Basic multi-step form setup

✅ Dynamic step rendering

✅ Form validation with Biome

🚀 API integration for form submission

🚀 Database storage & authentication

#📄 License

MIT License.

💡 Contributions are welcome! Feel free to fork, improve, and submit PRs. 🚀
