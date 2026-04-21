# Flower Smart Technology — Next.js 15 Rebuild

Welcome to your newly rebuilt website! This project has been upgraded from a static HTML/Vite setup to a professional, production-ready **Next.js 15** application.

## 🚀 Technology Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS & DaisyUI
- **Database**: MongoDB (via Mongoose)
- **Emails**: Nodemailer
- **State/Data**: Server Components & API Routes

---

## 🛠️ Environment Variables Configuration
To get the site fully functional (especially the contact form and MongoDB integration), you need to set up your environment variables.

1.  **Duplicate the template**:
    ```bash
    cp .env.local.example .env.local
    ```
2.  **Fill in the values in `.env.local`**:

### How to collect your variables:

#### 1. MongoDB Connection (`MONGODB_URI`)
- Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Create a free Cluster.
- Click **Connect** → **Drivers** → **Node.js**.
- Copy the connection string. It looks like: `mongodb+srv://<db_username>:<db_password>@cluster0.xxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
- Replace `<db_password>` with your actual database user password.

#### 2. Email Settings (Nodemailer)
We recommend using Gmail with an **App Password**:
- **SMTP_HOST**: `smtp.gmail.com`
- **SMTP_PORT**: `587`
- **SMTP_USER**: Your Gmail address.
- **SMTP_PASS**: **IMPORTANT!** This is NOT your normal Gmail password.
  - Go to your [Google Account Security settings](https://myaccount.google.com/security).
  - Enable **2-Step Verification**.
  - Search for **"App passwords"**.
  - Create a new app password (e.g., named "FlowerType Website").
  - Copy the 16-character code into `SMTP_PASS`.
- **SMTP_FROM**: Your Gmail address.
- **SMTP_TO**: The email address where you want to receive enquiries (e.g., `ridoyrkr@outlook.com`).

---

## 📸 How to Change Product Pictures
You can change pictures for the listing (home page) and the detail pages in one place.

### The Static Data Method
Open [src/data/products.ts](file:///Volumes/KINGSTON/Website/FlowerType/flowertype-next/data/products.ts).
- **Listing Image**: Change the `image` field.
- **Details Gallery**: Change or add items to the `images` array.
- **Local Files**: If you have a local image, put it in `public/images/products/` and reference it like `/images/products/your-image.jpg`.

### The MongoDB Method
If you have connected MongoDB, you can edit your database documents directly. The `image` and `images` fields in the `Product` collection will override the static data if the database is populated.

---

## 📂 Project Organization
- `/app`: Contains all pages and API routes.
- `/components`: Broken down into subfolders for organization.
  - `/layout`: Shared components like `Navbar` and `Footer`.
  - `/home`: Sections specifically for the landing page.
  - `/products`: Product-related components.
  - `/ui`: Smaller reusable UI elements.
- `/data`: Static fallback data.
- `/lib`: Helper libraries (Database, Mailer).
- `/models`: Database schemas.
- `/types`: TypeScript interfaces.

---

## 🧪 Testing Checklist
Follow these steps to ensure everything is working:

- [ ] **Home Page**: Scroll through all sections. Check if "Scroll Reveal" animations trigger.
- [ ] **Navigation**: Test all links in the Navbar and Footer.
- [ ] **Mobile Menu**: Shrink your browser and test the hamburger menu.
- [ ] **Product Filtering**: On the home page, click "Single Floor", "Double Layer", etc., to see if the grid updates.
- [ ] **Product Details**: Click a product card and verify the details page (`/products/[slug]`) loads with the correct info.
- [ ] **Contact Form**: 
  - Fill out the form with a test email.
  - Verify you see a success message.
  - Check your `SMTP_TO` email inbox for the notification.
  - Check the test email's inbox for the auto-reply.
- [ ] **Build Process**: Run `npm run build` to ensure there are no production errors.

---

## 🛠️ Commands
- `npm run dev`: Start the local development server.
- `npm run build`: Build the project for production.
- `npm run start`: Start the production server after building.
- `npm run lint`: Check for code quality issues.
