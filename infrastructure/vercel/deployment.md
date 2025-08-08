# Vercel Deployment Configuration

## Project Setup for Vercel

### Framework Detection

- **Framework**: Next.js v15.3.5 (auto-detected by Vercel)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)
- **Install Command**: `npm install --legacy-peer-deps`

### Environment Variables

```env
# Production environment
NODE_ENV=production
NEXT_PUBLIC_ENV=production

# Legacy peer deps for installation
NPM_FLAGS=--legacy-peer-deps
```

### Build Configuration

#### vercel.json (Optional)

```json
{
    "buildCommand": "npm run build",
    "devCommand": "npm run dev",
    "installCommand": "npm install --legacy-peer-deps",
    "framework": "nextjs",
    "outputDirectory": ".next"
}
```

#### Package.json Scripts

```json
{
    "scripts": {
        "build": "next build",
        "dev": "next dev",
        "start": "next start",
        "build-storybook": "storybook build -o ./storybook-static"
    }
}
```

## Storybook Deployment on Vercel

### Separate Storybook Deployment

For deploying Storybook documentation as a separate site:

```json
// vercel-storybook.json
{
    "buildCommand": "npm run build-storybook",
    "outputDirectory": "storybook-static",
    "installCommand": "npm install --legacy-peer-deps"
}
```

### Deployment Commands

```bash
# Deploy main application
vercel --prod

# Deploy Storybook separately
vercel --prod --config vercel-storybook.json
```

## Performance Optimizations

### Next.js Configuration

```javascript
// next.config.js
const nextConfig = {
    // Optimize for Maslow components
    experimental: {
        optimizePackageImports: ["framer-motion", "three", "@react-three/fiber", "@react-three/drei"],
    },

    // WebGL shader support
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(glsl|vs|fs)$/,
            use: "raw-loader",
        });
        return config;
    },

    // Image optimization
    images: {
        formats: ["image/webp", "image/avif"],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },

    // Headers for security and performance
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "X-Frame-Options",
                        value: "DENY",
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "Content-Security-Policy",
                        value: "default-src 'self'; style-src 'self' 'unsafe-inline' fonts.googleapis.com fonts.bunny.net; font-src 'self' fonts.googleapis.com fonts.bunny.net; script-src 'self' 'unsafe-eval'; img-src 'self' data:;",
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
```

### Font Optimization

```javascript
// next.config.js - Font optimization
const nextConfig = {
    // Preload critical fonts
    experimental: {
        fontLoaders: [
            {
                loader: "next/font/google",
                options: {
                    subsets: ["latin"],
                    display: "swap",
                },
            },
        ],
    },
};
```

## Domain Configuration

### Custom Domain Setup

1. Add domain in Vercel dashboard
2. Configure DNS records:
    - **A Record**: `76.76.19.61` (Vercel IP)
    - **CNAME**: `cname.vercel-dns.com`
3. SSL automatically configured

### Subdomain for Storybook

- **Main App**: `yourapp.com`
- **Storybook**: `design.yourapp.com` or `storybook.yourapp.com`

## Environment-Specific Configuration

### Preview Deployments

```json
// vercel.json
{
    "github": {
        "silent": true
    },
    "functions": {
        "app/api/**/*.js": {
            "maxDuration": 10
        }
    }
}
```

### Branch Configuration

- **Production**: `main` branch auto-deploys to production domain
- **Preview**: All other branches create preview deployments
- **Development**: Local development with `npm run dev`

## Monitoring & Analytics

### Vercel Analytics

```javascript
// Enable in vercel.json
{
  "analytics": {
    "id": "your-analytics-id"
  }
}
```

### Web Vitals Monitoring

```javascript
// pages/_app.js (if using Pages Router)
export function reportWebVitals(metric) {
    // Send to Vercel Analytics
    console.log(metric);
}
```

### Speed Insights

```javascript
// Enable in next.config.js
const nextConfig = {
    experimental: {
        webVitalsAttribution: ["CLS", "LCP"],
    },
};
```

## CI/CD Integration

### GitHub Integration

1. Connect repository to Vercel
2. Automatic deployments on push
3. Preview deployments for pull requests
4. Production deployments on main branch merge

### Deployment Hooks

```json
// vercel.json
{
    "functions": {
        "api/deploy-hook.js": {
            "maxDuration": 30
        }
    }
}
```

## Performance Targets

### Core Web Vitals Goals

- **LCP (Largest Contentful Paint)**: <2.5s
- **FID (First Input Delay)**: <100ms
- **CLS (Cumulative Layout Shift)**: <0.1

### Lighthouse Scores

- **Performance**: >90
- **Accessibility**: 100 (WCAG 2.1 AA compliant)
- **Best Practices**: >95
- **SEO**: >95

## Error Handling & Monitoring

### Error Boundaries

```javascript
// components/ErrorBoundary.js
class ErrorBoundary extends Component {
    componentDidCatch(error, errorInfo) {
        // Log to Vercel Functions or external service
        console.error("Component Error:", error, errorInfo);
    }
}
```

### Serverless Function Monitoring

```javascript
// api/health-check.js
export default function handler(req, res) {
    res.status(200).json({
        status: "healthy",
        timestamp: new Date().toISOString(),
        components: {
            maslow: "operational",
            storybook: "operational",
        },
    });
}
```

## Security Configuration

### Security Headers

```javascript
// next.config.js
const securityHeaders = [
    {
        key: "X-DNS-Prefetch-Control",
        value: "on",
    },
    {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
    },
    {
        key: "X-XSS-Protection",
        value: "1; mode=block",
    },
];
```

### API Route Protection

```javascript
// api/protected-route.js
export default function handler(req, res) {
    // Add authentication/authorization logic
    if (!isAuthorized(req)) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    // Handle request
    res.status(200).json({ data: "Protected data" });
}
```

## Deployment Checklist

### Pre-Deployment

- [ ] `next.config.js` optimized for production
- [ ] Environment variables configured in Vercel dashboard
- [ ] Custom domain configured (if applicable)
- [ ] Security headers configured
- [ ] Analytics and monitoring enabled
- [ ] Font optimization configured

### Post-Deployment Verification

- [ ] Site loads correctly on production domain
- [ ] All Maslow components render properly
- [ ] WebGL backgrounds work (with fallbacks)
- [ ] Performance targets met (Lighthouse audit)
- [ ] Error monitoring functioning
- [ ] Analytics data collecting

### Ongoing Maintenance

- [ ] Monitor performance metrics
- [ ] Review error logs regularly
- [ ] Keep dependencies updated
- [ ] Monitor bundle size impact
- [ ] Security audit quarterly

---

_This Vercel deployment configuration ensures optimal performance and reliability for the Maslow Design System integrated component library._
