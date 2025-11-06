# COSMOS 우주 웹사이트 개발 프롬프트

## 프로젝트 개요

"COSMOS: 우주에 대한 모든 것" - 초보자부터 전문가까지 모두가 우주에 대한 지식을 탐험하고 배울 수 있는 종합 플랫폼을 구축합니다.

**비전**: 우주의 모든 지식을 한 곳에서, 누구나 쉽게
**핵심 가치**: 접근성, 전문성, 인터랙티브, 한국의 우주, 커뮤니티

## 기술 스택

### Frontend
- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI / shadcn/ui
- **Animation**: Framer Motion
- **3D Graphics**: Three.js + React Three Fiber
- **Data Visualization**: D3.js, Chart.js, Recharts
- **Maps**: Leaflet, Cesium.js (3D Earth)
- **State Management**: Zustand, React Query
- **Form**: React Hook Form + Zod

### Backend & Database
- **API**: Next.js API Routes
- **Database**: PostgreSQL (Supabase)
- **CMS**: MDX for content
- **Authentication**: NextAuth.js
- **Cache**: Redis

### DevOps
- **Hosting**: Vercel
- **CDN**: Cloudflare
- **CI/CD**: GitHub Actions
- **Monitoring**: Sentry

## 프로젝트 구조

```
cosmos-website/
├── src/
│   ├── app/                          # Next.js 14 App Router
│   │   ├── (home)/                   # 메인 홈
│   │   │   └── page.tsx
│   │   ├── universe-birth/           # 우주의 탄생과 역사
│   │   │   ├── page.tsx
│   │   │   ├── big-bang/
│   │   │   ├── timeline/
│   │   │   ├── stars-lifecycle/
│   │   │   └── stardust/
│   │   ├── observation/              # 우주 관측 기술
│   │   │   ├── page.tsx
│   │   │   ├── ground-telescopes/
│   │   │   ├── space-telescopes/
│   │   │   └── principles/
│   │   ├── exploration/              # 우주 탐사
│   │   │   ├── page.tsx
│   │   │   ├── moon/
│   │   │   ├── mars/
│   │   │   └── deep-space/
│   │   ├── korea-space/              # 대한민국의 우주
│   │   │   ├── page.tsx
│   │   │   ├── nuri/
│   │   │   ├── danuri/
│   │   │   ├── kasa/
│   │   │   └── companies/
│   │   ├── mysteries/                # 우주의 미스터리
│   │   │   ├── page.tsx
│   │   │   ├── hubble-tension/
│   │   │   ├── dark-matter/
│   │   │   ├── dark-energy/
│   │   │   ├── black-holes/
│   │   │   └── alien-life/
│   │   ├── challenges/               # 현대 우주의 도전과제
│   │   │   ├── page.tsx
│   │   │   ├── space-debris/
│   │   │   ├── new-space/
│   │   │   └── space-security/
│   │   ├── science-stories/          # 과학 이야기
│   │   │   ├── page.tsx
│   │   │   ├── mistakes/
│   │   │   └── interviews/
│   │   ├── live-data/                # 실시간 우주 데이터
│   │   │   ├── page.tsx
│   │   │   ├── iss-tracker/
│   │   │   ├── launch-schedule/
│   │   │   └── asteroids/
│   │   ├── learning/                 # 학습 센터
│   │   │   ├── page.tsx
│   │   │   ├── elementary/
│   │   │   ├── secondary/
│   │   │   ├── advanced/
│   │   │   ├── simulations/
│   │   │   └── quizzes/
│   │   ├── news/                     # 우주 뉴스
│   │   │   └── page.tsx
│   │   ├── community/                # 커뮤니티
│   │   │   ├── page.tsx
│   │   │   ├── qna/
│   │   │   ├── gallery/
│   │   │   └── forum/
│   │   ├── api/                      # API Routes
│   │   │   ├── nasa/
│   │   │   ├── spacex/
│   │   │   ├── iss/
│   │   │   └── satellites/
│   │   ├── layout.tsx                # Root Layout
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/                       # shadcn/ui components
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── interactive/
│   │   │   ├── SolarSystemSimulator.tsx
│   │   │   ├── BlackHoleSimulator.tsx
│   │   │   ├── UniverseTimeline.tsx
│   │   │   └── ISSTracker.tsx
│   │   ├── visualization/
│   │   │   ├── DataChart.tsx
│   │   │   ├── ParticleBackground.tsx
│   │   │   └── SpaceCanvas.tsx
│   │   └── content/
│   │       ├── ArticleCard.tsx
│   │       ├── ImageGallery.tsx
│   │       └── VideoPlayer.tsx
│   ├── lib/
│   │   ├── api/                      # API 유틸리티
│   │   │   ├── nasa.ts
│   │   │   ├── spacex.ts
│   │   │   └── satellite-tracker.ts
│   │   ├── utils/
│   │   │   ├── date.ts
│   │   │   ├── astronomy.ts
│   │   │   └── physics-calculator.ts
│   │   └── db/                       # Database 설정
│   │       └── supabase.ts
│   ├── hooks/
│   │   ├── useSpaceData.ts
│   │   ├── useISSPosition.ts
│   │   └── useTheme.ts
│   ├── stores/
│   │   ├── userStore.ts
│   │   └── themeStore.ts
│   ├── types/
│   │   ├── space.ts
│   │   ├── api.ts
│   │   └── content.ts
│   └── content/                      # MDX 콘텐츠
│       ├── articles/
│       ├── tutorials/
│       └── news/
├── public/
│   ├── images/
│   ├── models/                       # 3D 모델
│   ├── sounds/
│   └── fonts/
├── docs/
├── .env.local
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Phase 1 MVP 개발 상세 지침

### 1단계: 프로젝트 초기 설정

```bash
# Next.js 14 프로젝트 생성
npx create-next-app@latest cosmos-website --typescript --tailwind --app --src-dir

# 필수 패키지 설치
npm install framer-motion three @react-three/fiber @react-three/drei
npm install zustand react-query @tanstack/react-query
npm install @radix-ui/react-* # 필요한 Radix 컴포넌트들
npm install lucide-react # 아이콘
npm install date-fns # 날짜 유틸리티
npm install axios swr # API 요청
npm install recharts d3 # 데이터 시각화
npm install leaflet react-leaflet # 지도
npm install next-auth # 인증
npm install zod react-hook-form @hookform/resolvers # 폼
npm install @supabase/supabase-js # 데이터베이스

# 개발 도구
npm install -D @types/three @types/node
npm install -D prettier eslint-config-prettier
```

### 2단계: 디자인 시스템 구축

#### Tailwind 설정 (`tailwind.config.ts`)
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmos: {
          deep: '#0B0D3C',
          night: '#1A1A4F',
          nebula: '#2D1B69',
          star: '#FFD700',
          cyan: '#00F5FF',
          purple: '#8B5CF6',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-space-grotesk)'],
        mono: ['var(--font-fira-code)'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #FFD700, 0 0 10px #FFD700' },
          '100%': { boxShadow: '0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
```

#### 글로벌 스타일 (`globals.css`)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
  }

  body {
    @apply bg-cosmos-deep text-foreground;
    background-image: 
      radial-gradient(circle at 10% 20%, rgba(138, 92, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 90% 80%, rgba(0, 245, 255, 0.1) 0%, transparent 50%);
  }
}

/* 별 반짝임 효과 */
.star-field {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

/* 스크롤바 커스터마이징 */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--background);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #8B5CF6, #00F5FF);
  border-radius: 5px;
}
```

### 3단계: 핵심 컴포넌트 개발

#### 레이아웃 컴포넌트

**`src/components/layout/Header.tsx`**
```typescript
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Search, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: '우주의 탄생', href: '/universe-birth' },
    { name: '관측 기술', href: '/observation' },
    { name: '우주 탐사', href: '/exploration' },
    { name: '한국의 우주', href: '/korea-space' },
    { name: '미스터리', href: '/mysteries' },
    { name: '실시간 데이터', href: '/live-data' },
    { name: '학습센터', href: '/learning' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cosmos-deep/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cosmos-star to-cosmos-cyan rounded-full animate-glow" />
            <span className="text-2xl font-display font-bold bg-gradient-to-r from-cosmos-star to-cosmos-cyan bg-clip-text text-transparent">
              COSMOS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-cosmos-cyan transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-white/10 rounded-full transition">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 hover:bg-white/10 rounded-full transition"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              className="lg:hidden p-2 hover:bg-white/10 rounded-full transition"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 hover:bg-white/10 rounded-lg transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
```

**`src/components/layout/Footer.tsx`**
```typescript
import Link from 'next/link'
import { Github, Twitter, Youtube, Mail } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    '사이트맵': [
      { name: '우주의 탄생', href: '/universe-birth' },
      { name: '관측 기술', href: '/observation' },
      { name: '우주 탐사', href: '/exploration' },
      { name: '한국의 우주', href: '/korea-space' },
    ],
    '학습': [
      { name: '학습 센터', href: '/learning' },
      { name: '퀴즈', href: '/learning/quizzes' },
      { name: '시뮬레이션', href: '/learning/simulations' },
      { name: '교사 자료실', href: '/learning/teachers' },
    ],
    '커뮤니티': [
      { name: 'Q&A', href: '/community/qna' },
      { name: '갤러리', href: '/community/gallery' },
      { name: '포럼', href: '/community/forum' },
      { name: '이벤트', href: '/community/events' },
    ],
    '정보': [
      { name: '소개', href: '/about' },
      { name: '팀', href: '/team' },
      { name: '후원', href: '/support' },
      { name: '문의', href: '/contact' },
    ],
  }

  return (
    <footer className="bg-cosmos-night border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-cosmos-star">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-cosmos-cyan transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-between pt-8 border-t border-white/10">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cosmos-star to-cosmos-cyan rounded-full" />
            <span className="font-display font-bold text-lg">COSMOS</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="#" className="p-2 hover:bg-white/10 rounded-full transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 hover:bg-white/10 rounded-full transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 hover:bg-white/10 rounded-full transition">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 hover:bg-white/10 rounded-full transition">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2024 COSMOS. 우주는 멀리 있지만, 지식은 가까이에.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:text-cosmos-cyan transition">
              개인정보처리방침
            </Link>
            {' · '}
            <Link href="/terms" className="hover:text-cosmos-cyan transition">
              이용약관
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
```

#### 인터랙티브 컴포넌트

**`src/components/interactive/ParticleBackground.tsx`**
```typescript
'use client'

import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // 별 생성
    const stars: Array<{
      x: number
      y: number
      radius: number
      opacity: number
      twinkleSpeed: number
    }> = []

    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02,
      })
    }

    // 애니메이션
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        star.opacity += star.twinkleSpeed
        if (star.opacity > 1 || star.opacity < 0) {
          star.twinkleSpeed = -star.twinkleSpeed
        }

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    // 리사이즈 핸들러
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
```

**`src/components/interactive/SolarSystemSimulator.tsx`**
```typescript
'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Stars } from '@react-three/drei'
import * as THREE from 'three'

// 행성 컴포넌트
function Planet({ 
  position, 
  size, 
  color, 
  speed,
  name 
}: { 
  position: [number, number, number]
  size: number
  color: string
  speed: number
  name: string
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime()
      meshRef.current.position.x = Math.cos(time * speed) * position[0]
      meshRef.current.position.z = Math.sin(time * speed) * position[0]
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <group>
      <Sphere ref={meshRef} args={[size, 32, 32]} position={position}>
        <meshStandardMaterial color={color} />
      </Sphere>
    </group>
  )
}

// 태양 컴포넌트
function Sun() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
    }
  })

  return (
    <Sphere ref={meshRef} args={[2, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial
        color="#FDB813"
        emissive="#FDB813"
        emissiveIntensity={0.5}
      />
    </Sphere>
  )
}

export default function SolarSystemSimulator() {
  const planets = [
    { name: '수성', position: [5, 0, 0] as [number, number, number], size: 0.4, color: '#8C7853', speed: 0.4 },
    { name: '금성', position: [7, 0, 0] as [number, number, number], size: 0.9, color: '#FFC649', speed: 0.3 },
    { name: '지구', position: [10, 0, 0] as [number, number, number], size: 1, color: '#4A90E2', speed: 0.2 },
    { name: '화성', position: [13, 0, 0] as [number, number, number], size: 0.5, color: '#E27B58', speed: 0.15 },
    { name: '목성', position: [20, 0, 0] as [number, number, number], size: 2, color: '#C88B3A', speed: 0.08 },
    { name: '토성', position: [28, 0, 0] as [number, number, number], size: 1.8, color: '#FAD5A5', speed: 0.06 },
  ]

  return (
    <div className="w-full h-[600px] bg-black rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 30, 40], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[0, 0, 0]} intensity={2} />
        <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <Sun />
        {planets.map((planet) => (
          <Planet key={planet.name} {...planet} />
        ))}

        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minDistance={10}
          maxDistance={100}
        />
      </Canvas>
    </div>
  )
}
```

### 4단계: 페이지 개발

**`src/app/page.tsx` (홈페이지)**
```typescript
import { Suspense } from 'react'
import Link from 'next/link'
import { ArrowRight, Telescope, Rocket, Globe, Sparkles } from 'lucide-react'
import ParticleBackground from '@/components/interactive/ParticleBackground'
import SolarSystemSimulator from '@/components/interactive/SolarSystemSimulator'

export default function HomePage() {
  return (
    <main className="relative">
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center z-10">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 bg-gradient-to-r from-cosmos-star via-cosmos-cyan to-cosmos-purple bg-clip-text text-transparent animate-float">
            COSMOS
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            우주의 모든 지식을 한 곳에서, 누구나 쉽게
          </p>
          <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
            초보자부터 전문가까지, 호기심 많은 학생부터 연구자까지
            <br />
            모두가 우주에 대한 지식을 탐험하고 배울 수 있는 종합 플랫폼
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/universe-birth"
              className="px-8 py-4 bg-gradient-to-r from-cosmos-star to-cosmos-cyan text-cosmos-deep font-semibold rounded-full hover:shadow-xl hover:shadow-cosmos-cyan/50 transition-all flex items-center justify-center"
            >
              우주 탐험 시작하기
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/live-data"
              className="px-8 py-4 border-2 border-cosmos-cyan text-cosmos-cyan font-semibold rounded-full hover:bg-cosmos-cyan/10 transition-all"
            >
              실시간 데이터 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-16">
            무엇을 탐험할까요?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sparkles,
                title: '우주의 탄생',
                description: '빅뱅부터 현재까지, 138억 년의 우주 역사',
                href: '/universe-birth',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                icon: Telescope,
                title: '관측 기술',
                description: '제임스 웹, GMT, 한국의 우주 망원경',
                href: '/observation',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Rocket,
                title: '우주 탐사',
                description: '누리호, 다누리, 인류의 우주 도전',
                href: '/exploration',
                gradient: 'from-orange-500 to-red-500',
              },
              {
                icon: Globe,
                title: '한국의 우주',
                description: 'KASA, 누리호, 우주 산업 생태계',
                href: '/korea-space',
                gradient: 'from-green-500 to-teal-500',
              },
            ].map((section) => {
              const Icon = section.icon
              return (
                <Link
                  key={section.title}
                  href={section.href}
                  className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all hover:-translate-y-2"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${section.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:animate-glow`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-cosmos-cyan transition">
                    {section.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{section.description}</p>
                  <ArrowRight className="w-5 h-5 text-cosmos-cyan absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solar System Simulator */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-4">
            태양계 탐험
          </h2>
          <p className="text-center text-gray-400 mb-12">
            3D로 직접 태양계를 탐험해보세요
          </p>
          <Suspense fallback={<div className="w-full h-[600px] bg-white/5 rounded-lg animate-pulse" />}>
            <SolarSystemSimulator />
          </Suspense>
        </div>
      </section>

      {/* Live Data Preview */}
      <section className="relative py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-center mb-4">
            실시간 우주 데이터
          </h2>
          <p className="text-center text-gray-400 mb-12">
            지금 이 순간의 우주를 확인하세요
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'ISS 위치',
                value: '실시간 추적',
                description: '국제우주정거장의 현재 위치',
              },
              {
                title: '다음 발사',
                value: '3일 후',
                description: 'SpaceX Starlink 미션',
              },
              {
                title: '오늘 밤 관측',
                value: '목성, 토성',
                description: '관측 가능한 행성',
              },
            ].map((data) => (
              <div
                key={data.title}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <h3 className="text-sm text-gray-400 mb-2">{data.title}</h3>
                <p className="text-3xl font-bold text-cosmos-cyan mb-2">
                  {data.value}
                </p>
                <p className="text-sm text-gray-500">{data.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/live-data"
              className="inline-flex items-center text-cosmos-cyan hover:text-cosmos-star transition"
            >
              모든 실시간 데이터 보기
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            우주 여행을 시작할 준비가 되셨나요?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            우주는 멀리 있지만, 지식은 가까이에
          </p>
          <Link
            href="/learning"
            className="inline-block px-8 py-4 bg-gradient-to-r from-cosmos-star to-cosmos-cyan text-cosmos-deep font-semibold rounded-full hover:shadow-xl hover:shadow-cosmos-cyan/50 transition-all"
          >
            학습 시작하기
          </Link>
        </div>
      </section>
    </main>
  )
}
```

**`src/app/universe-birth/page.tsx` (우주의 탄생)**
```typescript
import Link from 'next/link'
import { Clock, Sparkles, Star, Atom } from 'lucide-react'

export default function UniverseBirthPage() {
  const sections = [
    {
      icon: Sparkles,
      title: '빅뱅과 우주의 시작',
      description: '138억 년 전, 모든 것의 시작',
      href: '/universe-birth/big-bang',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Clock,
      title: '우주의 진화 타임라인',
      description: '빅뱅부터 현재까지의 여정',
      href: '/universe-birth/timeline',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: Star,
      title: '별의 탄생과 죽음',
      description: '별의 생애 주기와 초신성',
      href: '/universe-birth/stars-lifecycle',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Atom,
      title: '우리는 별의 먼지',
      description: '원소의 우주적 기원',
      href: '/universe-birth/stardust',
      color: 'from-cyan-500 to-teal-500',
    },
  ]

  return (
    <main className="pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-cosmos-star to-cosmos-cyan bg-clip-text text-transparent">
            우주의 탄생과 역사
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            138억 년 전, 하나의 특이점에서 시작된 우주의 놀라운 여정을
            탐험해보세요
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-20 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
          <h2 className="text-3xl font-bold mb-4">우주의 시작</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            우리 우주는 약 138억 년 전 빅뱅이라는 사건으로 시작되었습니다.
            흔히 "폭발"로 오해되지만, 빅뱅은 공간 자체의 팽창이었습니다.
            우주는 한 점에서 시작된 것이 아니라, 모든 곳이 동시에 팽창을
            시작했습니다.
          </p>
          <p className="text-gray-300 leading-relaxed">
            초기 우주는 믿을 수 없을 만큼 뜨겁고 밀도가 높았으며, 시간이
            지나면서 팽창하고 냉각되어 오늘날 우리가 보는 복잡한 구조들이
            형성되었습니다.
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <Link
                key={section.title}
                href={section.href}
                className="group relative overflow-hidden p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all hover:-translate-y-2"
              >
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${section.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition`}
                />
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-2xl flex items-center justify-center mb-6 group-hover:animate-glow`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cosmos-cyan transition">
                  {section.title}
                </h3>
                <p className="text-gray-400">{section.description}</p>
              </Link>
            )
          })}
        </div>

        {/* Key Facts */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            핵심 개념
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: '우주의 나이',
                value: '138억 년',
                description:
                  '우주 배경 복사 관측을 통해 정밀하게 측정되었습니다',
              },
              {
                title: '관측 가능한 우주',
                value: '930억 광년',
                description:
                  '빛이 우리에게 도달할 수 있는 최대 거리의 직경',
              },
              {
                title: '우주의 구성',
                value: '5% 일반물질',
                description:
                  '27% 암흑물질, 68% 암흑에너지로 구성되어 있습니다',
              },
            ].map((fact) => (
              <div
                key={fact.title}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-center"
              >
                <h3 className="text-sm text-gray-400 mb-2">{fact.title}</h3>
                <p className="text-3xl font-bold text-cosmos-cyan mb-2">
                  {fact.value}
                </p>
                <p className="text-sm text-gray-500">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
```

### 5단계: API 통합

**`src/lib/api/nasa.ts`**
```typescript
const NASA_API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY

export interface APODData {
  date: string
  title: string
  explanation: string
  url: string
  hdurl?: string
  media_type: string
}

export interface ISSPosition {
  latitude: number
  longitude: number
  altitude: number
  velocity: number
  timestamp: number
}

export class NASAApi {
  private baseUrl = 'https://api.nasa.gov'

  async getAPOD(date?: string): Promise<APODData> {
    const params = new URLSearchParams({
      api_key: NASA_API_KEY || 'DEMO_KEY',
      ...(date && { date }),
    })

    const response = await fetch(
      `${this.baseUrl}/planetary/apod?${params}`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch APOD')
    }

    return response.json()
  }

  async getISSPosition(): Promise<ISSPosition> {
    const response = await fetch('http://api.open-notify.org/iss-now.json')

    if (!response.ok) {
      throw new Error('Failed to fetch ISS position')
    }

    const data = await response.json()
    return {
      latitude: parseFloat(data.iss_position.latitude),
      longitude: parseFloat(data.iss_position.longitude),
      altitude: 408, // ISS는 약 408km 고도를 유지
      velocity: 27600, // 시속 약 27,600km
      timestamp: data.timestamp,
    }
  }

  async getNearEarthObjects(startDate: string, endDate: string) {
    const params = new URLSearchParams({
      start_date: startDate,
      end_date: endDate,
      api_key: NASA_API_KEY || 'DEMO_KEY',
    })

    const response = await fetch(
      `${this.baseUrl}/neo/rest/v1/feed?${params}`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch NEO data')
    }

    return response.json()
  }

  async getMarsRoverPhotos(rover: string = 'curiosity', sol: number = 1000) {
    const params = new URLSearchParams({
      sol: sol.toString(),
      api_key: NASA_API_KEY || 'DEMO_KEY',
    })

    const response = await fetch(
      `${this.baseUrl}/mars-photos/api/v1/rovers/${rover}/photos?${params}`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch Mars rover photos')
    }

    return response.json()
  }
}

export const nasaApi = new NASAApi()
```

**`src/lib/api/spacex.ts`**
```typescript
export interface SpaceXLaunch {
  id: string
  name: string
  date_utc: string
  date_local: string
  rocket: string
  success: boolean
  details: string
  links: {
    webcast?: string
    article?: string
    wikipedia?: string
    patch?: {
      small?: string
      large?: string
    }
  }
}

export class SpaceXApi {
  private baseUrl = 'https://api.spacexdata.com/v4'

  async getUpcomingLaunches(limit: number = 10): Promise<SpaceXLaunch[]> {
    const response = await fetch(
      `${this.baseUrl}/launches/upcoming?limit=${limit}`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch upcoming launches')
    }

    return response.json()
  }

  async getPastLaunches(limit: number = 10): Promise<SpaceXLaunch[]> {
    const response = await fetch(
      `${this.baseUrl}/launches/past?limit=${limit}`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch past launches')
    }

    return response.json()
  }

  async getLatestLaunch(): Promise<SpaceXLaunch> {
    const response = await fetch(`${this.baseUrl}/launches/latest`)

    if (!response.ok) {
      throw new Error('Failed to fetch latest launch')
    }

    return response.json()
  }

  async getRockets() {
    const response = await fetch(`${this.baseUrl}/rockets`)

    if (!response.ok) {
      throw new Error('Failed to fetch rockets')
    }

    return response.json()
  }
}

export const spacexApi = new SpaceXApi()
```

**`src/app/api/iss/route.ts` (Next.js API Route)**
```typescript
import { NextResponse } from 'next/server'
import { nasaApi } from '@/lib/api/nasa'

export async function GET() {
  try {
    const position = await nasaApi.getISSPosition()
    return NextResponse.json(position)
  } catch (error) {
    console.error('Error fetching ISS position:', error)
    return NextResponse.json(
      { error: 'Failed to fetch ISS position' },
      { status: 500 }
    )
  }
}

export const runtime = 'edge'
export const revalidate = 5 // 5초마다 재검증
```

### 6단계: 환경 변수 설정

**`.env.local` 파일 생성**
```env
# NASA API
NEXT_PUBLIC_NASA_API_KEY=your_nasa_api_key_here

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_here

# Google Analytics (선택)
NEXT_PUBLIC_GA_ID=your_ga_id
```

### 7단계: 배포 준비

**`next.config.js`**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images-assets.nasa.gov',
      'apod.nasa.gov',
      'mars.nasa.gov',
      'images.nasa.gov',
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
}

module.exports = nextConfig
```

## 개발 실행 명령어

```bash
# 개발 서버 시작
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm start

# 린트
npm run lint

# 타입 체크
npm run type-check
```

## MVP 개발 체크리스트

### Week 1-2: 기획 & 디자인
- [ ] 프로젝트 초기 설정 완료
- [ ] 디자인 시스템 구축
- [ ] 컴포넌트 라이브러리 설정
- [ ] 글로벌 스타일 작성

### Week 3-4: 레이아웃 & 공통 컴포넌트
- [ ] Header 컴포넌트
- [ ] Footer 컴포넌트
- [ ] Navigation 시스템
- [ ] ParticleBackground 효과
- [ ] 반응형 레이아웃 완성

### Week 5-6: 핵심 페이지 (1차)
- [ ] 홈페이지 완성
- [ ] 우주의 탄생과 역사 페이지
- [ ] 빅뱅 섹션
- [ ] 타임라인 섹션

### Week 7-8: 핵심 페이지 (2차)
- [ ] 우주 관측 기술 페이지
- [ ] 대한민국의 우주 페이지
- [ ] 누리호 섹션
- [ ] 다누리 섹션

### Week 9-10: 인터랙티브 기능
- [ ] 3D 태양계 시뮬레이터
- [ ] ISS 실시간 추적 시스템
- [ ] 우주 타임라인 인터랙티브
- [ ] 기본 계산기 (2-3개)

### Week 11: API 통합
- [ ] NASA API 연동
- [ ] SpaceX API 연동
- [ ] ISS 위치 추적 API
- [ ] 데이터 캐싱 구현

### Week 12: 테스트 & 최적화
- [ ] 반응형 테스트 (모바일/태블릿/데스크탑)
- [ ] 성능 최적화 (Lighthouse 90+ 목표)
- [ ] SEO 최적화
- [ ] 접근성 검증
- [ ] 베타 테스트
- [ ] 버그 수정
- [ ] Vercel 배포

## 추가 개발 가이드

### 성능 최적화
1. **이미지 최적화**: Next.js Image 컴포넌트 사용
2. **코드 스플리팅**: 동적 import로 번들 크기 최소화
3. **캐싱**: React Query로 API 응답 캐싱
4. **SSG/ISR**: 정적 페이지는 빌드 타임에 생성

### SEO 최적화
```typescript
// 각 페이지에 메타데이터 추가
export const metadata = {
  title: '우주의 탄생 - COSMOS',
  description: '빅뱅부터 현재까지 138억 년의 우주 역사를 탐험하세요',
  openGraph: {
    title: '우주의 탄생 - COSMOS',
    description: '빅뱅부터 현재까지 138억 년의 우주 역사를 탐험하세요',
    images: ['/og-image.jpg'],
  },
}
```

### 접근성
- 모든 인터랙티브 요소에 키보드 접근 가능
- ARIA 라벨 추가
- 색상 대비 4.5:1 이상 유지
- 스크린 리더 지원

## 다음 단계 (Phase 2 이후)

Phase 1 MVP 완료 후:
1. **콘텐츠 확대**: 미스터리, 도전과제, 과학 이야기 섹션
2. **커뮤니티 기능**: Q&A, 갤러리, 포럼
3. **학습 센터**: 퀴즈, 배지 시스템
4. **고급 시뮬레이터**: 블랙홀, 우주 팽창
5. **모바일 앱**: React Native로 확장

## 지원 및 문서

- Next.js: https://nextjs.org/docs
- React Three Fiber: https://docs.pmnd.rs/react-three-fiber
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
- Supabase: https://supabase.com/docs

---

**시작 명령어**:
```bash
# 새 프로젝트 생성
npx create-next-app@latest cosmos-website --typescript --tailwind --app --src-dir

# 디렉토리 이동
cd cosmos-website

# 필수 패키지 설치
npm install framer-motion three @react-three/fiber @react-three/drei zustand @tanstack/react-query lucide-react

# 개발 서버 시작
npm run dev
```

이제 http://localhost:3000 에서 개발을 시작할 수 있습니다! 🚀✨
