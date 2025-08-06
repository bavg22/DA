# BusinessBoost - SMB Digital Productivity Platform

A comprehensive digital productivity platform designed specifically for small restaurants and coffee shops. Transform your business with powerful tools to convert receipts to CSV, analyze finances, manage inventory, and boost productivity.

## 🚀 Features

- **PDF to CSV Conversion**: Upload receipts, bills, and invoices with AI-powered data extraction
- **Financial Analytics**: Track expenses, revenue, and profit margins with beautiful charts
- **Inventory Management**: Monitor stock levels with smart reorder suggestions
- **Cost Analysis**: Calculate food costs, portion sizes, and pricing strategies
- **Sales Forecasting**: Predict future sales based on historical data
- **Secure & Private**: Encrypted data with enterprise-grade security

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **Recharts** - Data visualization
- **React Dropzone** - File upload interface
- **Lucide React** - Beautiful icons

### Backend & Services
- **Firebase Auth** - User authentication
- **Firebase Firestore** - NoSQL database
- **Firebase Storage** - File storage
- **Stripe** - Payment processing
- **PDF Parse** - PDF text extraction
- **Papa Parse** - CSV processing

### Hosting & Deployment
- **Vercel** - Frontend hosting (recommended)
- **Firebase** - Backend services
- **CDN** - Global content delivery

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Firebase account
- Stripe account (for payments)

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/bavg22/DA
cd smb-productivity-platform
npm install
```

### 2. Environment Setup

Copy `.env.example` to `.env.local` and fill in your credentials:

```bash
cp .env.example .env.local
```

### 3. Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Authentication (Email/Password)
3. Create Firestore database
4. Enable Storage
5. Copy configuration to `.env.local`

### 4. Stripe Setup

1. Create account at [Stripe Dashboard](https://dashboard.stripe.com)
2. Get API keys from Developers > API keys
3. Add keys to `.env.local`

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
smb-productivity-platform/
├── app/
│   ├── api/                    # API routes
│   │   ├── upload/            # File upload endpoint
│   │   └── create-payment-intent/ # Stripe payment
│   ├── components/            # Reusable components
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Pricing.tsx
│   │   ├── FileUpload.tsx
│   │   ├── FinancialChart.tsx
│   │   └── InventoryCalculator.tsx
│   ├── contexts/              # React contexts
│   │   └── AuthContext.tsx
│   ├── lib/                   # Utility libraries
│   │   ├── firebase.ts
│   │   ├── stripe.ts
│   │   └── pdf-parser.ts
│   ├── dashboard/             # Dashboard pages
│   ├── login/                 # Authentication pages
│   ├── signup/
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── public/                   # Static assets
├── .env.example             # Environment template
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind configuration
└── package.json             # Dependencies
```

## 🔧 Configuration

### Firebase Rules

**Firestore Security Rules:**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /files/{fileId} {
      allow read, write: if request.auth != null && request.auth.uid == resource.data.userId;
    }
  }
}
```

**Storage Security Rules:**
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /uploads/{userId}/{allPaths=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 💳 Payment Integration

The platform uses Stripe for payment processing with three pricing tiers:

- **Starter**: Free (5 PDF conversions/month)
- **Professional**: $19/month (Unlimited conversions + advanced features)
- **Enterprise**: $49/month (Multi-location + custom integrations)

## 📊 Analytics & Monitoring

### Built-in Analytics
- Financial overview charts
- Expense categorization
- Profit margin tracking
- Inventory turnover rates

### External Integrations
- Google Analytics (add tracking ID)
- Stripe Dashboard for payment analytics
- Firebase Analytics for user behavior

## 🔒 Security Features

- Firebase Authentication with email/password
- Secure file upload with type validation
- Data encryption in transit and at rest
- CORS protection
- Rate limiting on API endpoints
- Input sanitization and validation

## 🌐 SEO Optimization

### Implemented Features
- Meta tags and Open Graph
- Structured data (JSON-LD)
- Sitemap generation
- Image optimization
- Mobile-first responsive design
- Fast loading times with Next.js optimization

### SEO Checklist
- [x] Title tags and meta descriptions
- [x] Open Graph and Twitter Cards
- [x] Structured data markup
- [x] Mobile responsiveness
- [x] Fast loading speeds
- [x] SSL certificate
- [ ] Google Search Console setup
- [ ] Google Analytics integration
- [ ] Local business schema (for location-based businesses)

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

```bash
npm run build
```

### Alternative Hosting Options

| Platform | Pros | Cons | Cost |
|----------|------|------|------|
| **Vercel** | Easy deployment, great Next.js support | Limited server functions | Free tier available |
| **Netlify** | Good for static sites, form handling | Less optimal for Next.js | Free tier available |
| **Railway** | Full-stack hosting, databases | Newer platform | $5/month |
| **Render** | Free tier, easy setup | Slower cold starts | Free tier available |

## 🔌 Additional Integrations

### Recommended Free Tools

1. **WhatsApp Business API**
   - Customer support integration
   - Order notifications
   - Inventory alerts

2. **Google My Business**
   - Local SEO optimization
   - Customer reviews management
   - Business hours and contact info

3. **Wave Accounting**
   - Automated bookkeeping
   - Invoice generation
   - Tax preparation

4. **Zapier** (Free tier)
   - Workflow automation
   - Connect with 3000+ apps
   - Trigger actions based on events

### API Integrations

```javascript
// Example: Google Sheets integration
const updateGoogleSheet = async (data) => {
  const response = await fetch('/api/google-sheets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  return response.json()
}
```

## 📈 Growth & Marketing

### Viral Growth Features
- Referral program with rewards
- Social sharing of analytics results
- "Powered by BusinessBoost" branding
- Success story testimonials
- Free tools for lead generation

### Content Marketing Strategy
- Blog posts about restaurant management
- Financial tips for small businesses
- Inventory optimization guides
- Industry trend reports
- Video tutorials and demos

## 🐛 Troubleshooting

### Common Issues

**PDF Upload Fails:**
- Check file size (max 10MB)
- Ensure PDF is not password protected
- Verify CORS settings

**Authentication Issues:**
- Check Firebase configuration
- Verify environment variables
- Clear browser cache and cookies

**Payment Processing:**
- Confirm Stripe keys are correct
- Check webhook endpoints
- Verify SSL certificate

## 📞 Support

- **Documentation**: [Link to docs]
- **Email**: support@businessboost.com
- **Discord**: [Community link]
- **GitHub Issues**: [Repository issues]

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

**Built with ❤️ for small business owners**
