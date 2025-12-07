
# ArtConnect Community (Frontend)

## 1. Deskripsi Umum

ArtConnect adalah platform komunitas seni tempat pengguna dapat membagikan karya, berdiskusi, mengikuti artist, serta menjelajahi galeri atau koleksi kuratorial. Repository ini berisi modul **Frontend Community**, yaitu salah satu bagian dari keseluruhan project ArtConnect yang dikerjakan oleh beberapa anggota tim secara terpisah.

Modul Community dikembangkan menggunakan React, TypeScript, Vite, dan TailwindCSS, dengan arsitektur berbasis fitur untuk memastikan modularitas dan kemudahan integrasi antar anggota tim.

---

## 2. Teknologi yang Digunakan

* React + TypeScript
* Vite
* TailwindCSS
* React Router
* React Query (TanStack Query)
* Zustand (opsional untuk state UI)
* Axios
* CSS Variables untuk design tokens

---

## 3. Struktur Folder

Struktur folder mengikuti pendekatan feature-based agar scalable dan mudah digabungkan antar modul Frontend.

```
src/
│
├── app/
│   └── routes/
│       ├── auth/
│       │   ├── components/
│       │   │   ├── ArtConnectLogin.tsx
│       │   │   └── ArtConnectSignup.tsx
│       │   │
│       │   ├── login/
│       │   │   └── LoginPage.tsx
│       │   └── signup/
│       │       └── SignupPage.tsx
│       │
│       ├── community/
│       │   ├── components/
│       │   │   ├── PostCard.tsx
│       │   │   ├── PostList.tsx
│       │   │   └── index.ts
│       │   │
│       │   ├── feature/
│       │   │   ├── FeaturePage.tsx
│       │   │   └── index.ts
│       │   │
│       │   ├── feed/
│       │   │   ├── FeedPage.tsx
│       │   │   └── index.ts
│       │   │
│       │   ├── hooks/
│       │   │   └── useInfinitePosts.ts
│       │   │
│       │   ├── profile/
│       │   │   ├── ProfilePage.tsx
│       │   │   └── index.ts
│       │   │
│       │   └── services/
│       │       ├── community.api.ts
│       │       └── community.types.ts
│       │
│       └── home/
│           ├── HomePage.tsx
│           └── index.ts
│
├── assets/
│   └── (semua asset gambar dan file statis)
│
├── components/
│   └── common/
│       ├── Avatar.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       └── index files (opsional)
│
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Section1.tsx
│   └── Sidebar.tsx
│
├── providers/
│   ├── AuthProviders.tsx
│   └── QueryProvider.tsx
│
├── styles/
│   ├── globals.css
│   └── tokens.css
│
├── utils/
│   ├── App.css
│   ├── App.tsx
│   └── index.css
│
├── main.tsx
├── index.html
├── App.tsx
└── App.css

```

## 4. Design Tokens (Warna, Spasi, Radius)

Proyek ini menggunakan palet warna berikut yang telah memenuhi standar kontras dan estetika:

| Token            | Nilai   | Fungsi            |
| ---------------- | ------- | ----------------- |
| `--color-deep`   | #07332c | Brand utama       |
| `--color-olive`  | #485b46 | Warna sekunder    |
| `--color-soft`   | #afb7ac | Netral lembut     |
| `--color-accent` | #bca879 | Aksen/higlight    |
| `--color-bg`     | #ededed | Background global |
| `--color-text`   | #1f1f1f | Teks utama        |

Seluruh token disimpan pada `src/styles/tokens.css`.


## 5. Lisensi

Project internal dan tidak untuk publikasi.

---
