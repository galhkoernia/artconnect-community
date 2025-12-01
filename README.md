
# ArtConnect Community (Frontend)

## 1. Deskripsi Umum

ArtConnect adalah platform komunitas seni tempat pengguna dapat membagikan karya, berdiskusi, mengikuti artist, serta menjelajahi galeri atau koleksi kuratorial. Repository ini berisi modul **Frontend Community**, yaitu salah satu bagian dari keseluruhan project ArtConnect yang dikerjakan oleh beberapa anggota tim secara terpisah.

Modul Community dikembangkan menggunakan React, TypeScript, Vite, dan TailwindCSS, dengan arsitektur berbasis fitur untuk memastikan modularitas dan kemudahan integrasi antar anggota tim.

---

## 2. Struktur Tim

| Role       | Bagian                                  | Teknologi             | Penanggung Jawab      |
| ---------- | --------------------------------------- | --------------------- | --------------------- |
| UI/UX       | Modul lain            | Figma                 | UI/UX Design  |
| Frontend 1  | Community Module      | React + TypeScript    | Pengembang Community  |
| Frontend 2  | Modul lain            | React + TypeScript    | Pengembang FE lainnya |
| Backend 1   | Modul lain            | NodeJS/NestJS/Express |Pengembang BE lainnya |
| Backend 2   | Modul lain            | NodeJS/NestJS/Express | Pengembang BE lainnya |

Setiap anggota tim mengembangkan modulnya masing-masing secara terpisah lalu digabungkan dalam satu repository utama.

---

## 3. Teknologi yang Digunakan

* React + TypeScript
* Vite
* TailwindCSS
* React Router
* React Query (TanStack Query)
* Zustand (opsional untuk state UI)
* Axios
* CSS Variables untuk design tokens

---

## 4. Struktur Folder

Struktur folder mengikuti pendekatan feature-based agar scalable dan mudah digabungkan antar modul Frontend.

```
src/
  app/
    routes/
      community/
        feed/
          FeedPage.tsx
          index.ts
        post/
          PostPage.tsx
          CreatePostPage.tsx
          index.ts
        profile/
          ProfilePage.tsx
          index.ts
        components/
          PostCard.tsx
          PostList.tsx
          CommentList.tsx
          CreatePostModal.tsx
          ProfileHeader.tsx
          GalleryGrid.tsx
        hooks/
          useInfinitePosts.ts
        services/
          community.api.ts
          community.types.ts
  components/
    common/
      Button.tsx
      Card.tsx
      Modal.tsx
      Avatar.tsx
      Skeleton.tsx
  layout/
    Header.tsx
    Footer.tsx
    Sidebar.tsx
  providers/
    QueryProvider.tsx
    AuthProvider.tsx
  styles/
    tokens.css
    globals.css
  utils/
    formatter.ts
    imageHelper.ts
  App.tsx
  main.tsx
```

### Alasan penggunaan struktur ini:

1. Setiap modul bekerja dalam ruangnya sendiri sehingga merge antar developer lebih aman.
2. Komponen global berada pada `components/common`, sehingga dapat digunakan oleh seluruh tim.
3. API per fitur dipisahkan pada folder `services`.
4. Provider seperti React Query, Auth, atau Theme ditempatkan di folder `providers`, memudahkan integrasi dengan modul lain.
5. Styles dan design tokens dibuat terpusat agar konsisten di seluruh aplikasi.

---

## 5. Design Tokens (Warna, Spasi, Radius)

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

---

## 6. Fitur Modul Community

Modul Community bertanggung jawab atas:

### Fitur Utama

* Halaman feed komunitas dengan pagination berbasis kursor
* Halaman detail post (gambar, metadata, komentar)
* Upload post (gambar, judul, deskripsi, tag)
* Like, komentar, dan simpan post
* Profil pengguna (karya, follower, bio)
* Follow dan unfollow pengguna lain

### Fitur Pendukung

* Skeleton UI
* Error handling
* Responsive layout
* Konsistensi UI sesuai desain

---

## 7. API yang Digunakan

Format komunikasi Frontend–Backend konsisten dengan:

* REST API
* JSON format
* Cursor-based pagination

Contoh endpoint:

| Endpoint                   | Fungsi            |
| -------------------------- | ----------------- |
| `GET /posts?cursor=`       | Feed              |
| `GET /posts/:id`           | Detail post       |
| `POST /posts`              | Membuat post      |
| `POST /posts/:id/like`     | Like/unlike       |
| `GET /posts/:id/comments`  | Komentar          |
| `POST /posts/:id/comments` | Menambah komentar |
| `GET /users/:username`     | Profil user       |

---

## 8. Cara Menjalankan Proyek

Instalasi dependensi:

```
npm install
```

Menjalankan mode pengembangan:

```
npm run dev
```

Membangun aplikasi:

```
npm run build
```

Preview hasil build:

```
npm run preview
```

---

## 9. Standar Coding

1. Menggunakan TypeScript strict mode
2. Tidak menggunakan inline style kecuali kondisi khusus
3. Seluruh warna wajib menggunakan Tailwind atau CSS variable
4. Seluruh service API disimpan pada folder `services`
5. Seluruh komponen global berada pada `components/common`
6. Seluruh halaman berada pada `routes/*`
7. Tidak diperbolehkan hardcode endpoint API

---

## 10. Alur Kerja Pengembangan

### Frontend

1. Kembangkan modul masing-masing sesuai folder
2. Commit dan push ke repository
3. Integrasi pada repository utama
4. Code review
5. Test build dan test integrasi
6. Deploy preview
7. Merge ke branch utama

### Backend

1. Menyusun OpenAPI
2. Menyediakan mock API
3. Implementasi progresif
4. Menghubungkan endpoint ke FE
5. Testing integrasi

---

## 11. Rencana Pengembangan (Roadmap)

**Sprint 0 — Setup**

* Setup Vite + TS + Tailwind
* Struktur folder
* Design tokens
* Halaman dummy

**Sprint 1 — Feed dan komponen PostCard**

**Sprint 2 — Detail post dan komentar**

**Sprint 3 — Create post dan upload**

**Sprint 4 — Profil user dan gallery grid**

**Sprint 5 — Search, filter, notifications**

---

## 12. Lisensi

Project internal dan tidak untuk publikasi.

---
