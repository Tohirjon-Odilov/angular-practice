# PrimeNG O'rnatish va Konfiguratsiya Dokumentatsiyasi

## PrimeNG Nima?

**PrimeNG** - bu Angular uchun kuchli, professional UI komponentilar kutubxonasi. Bu kutubxona orqali siz qimmat va moddiy kamaytirish bilan buton, dialog, jadval, forma va boshqa ko'plab komponentlarni ishlatishingiz mumkin.

## O'rnatish Qadamlari

### 1-Qadam: PrimeNG va Ularning Bog'liq Paketlarini O'rnatish

```bash
npm install primeng@^21.0.0 primeicons --legacy-peer-deps
npm install primeflex --legacy-peer-deps
npm install @angular/cdk --legacy-peer-deps
```

**Nimaga `--legacy-peer-deps`?**
- Bu flag Angular va PrimeNG versiyalari o'rtasida kichik nomuvofiqlikni hal qiladi
- Modern npm versiyalari peer dependencies ni qat'iy tekshiradi, shuning uchun bu flag kerak

**O'rnatilgan Paketlar:**

| Paket | Maqsad |
|-------|--------|
| **primeng** | Asosiy UI komponentlar kutubxonasi |
| **primeicons** | 600+ ta ikonka uchun kutubxona |
| **primeflex** | CSS utility klasslar (Tailwind kabi) |
| **@angular/cdk** | Component Development Kit (PrimeNG uchun talab) |

---

### 2-Qadam: Stillarni angular.json Faylida Sozlash

Fayl: `angular.json`

```json
"styles": [
  "node_modules/primeicons/primeicons.css",
  "node_modules/primeflex/primeflex.css",
  "src/styles.css"
]
```

**Nima qilardi:**
- `primeicons.css` - ikonkaklarni ko'rsatish uchun
- `primeflex.css` - CSS grid va layout utility klasslar
- `src/styles.css` - sizning o'z stillaringiz

---

### 3-Qadam: App Konfiguratsiyasini O'rnatish

Fayl: `src/app/app.config.ts`

```typescript
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAnimationsAsync(),  // ← PrimeNG animatsiyalari uchun
    providePrimeNG({
      ripple: true  // ← "Ripple" effekti (click animatsiyasi)
    })
  ]
};
```

**Har bir `provide` nima qiladi:**

| Provider | Maqsad |
|----------|--------|
| `provideBrowserGlobalErrorListeners()` | Xatolarni global darajada tutish |
| `provideRouter(routes)` | Marshrutizatsiyani yoqish |
| `provideAnimationsAsync()` | **PrimeNG komponentlar animatsiyalari uchun JUDA MUHIM** |
| `providePrimeNG()` | PrimeNG asosiy konfiguratsiyasi |

---

## PrimeNG Komponentlarini Qanday Ishlatish?

### Misol 1: Buttoni Ishlatish

**Komponent fayli:** `my-component.ts`

```typescript
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [ButtonModule],  // ← PrimeNG modulini import qiling
  template: `
    <p-button label="Click Me!" icon="pi pi-check"></p-button>
  `
})
export class MyComponentComponent {}
```

**Nima bo'ldi:**
- `ButtonModule` - PrimeNG button komponentini qo'shdi
- `p-button` - PrimeNG buton tagi
- `icon="pi pi-check"` - primeicons dan ikonka

---

### Misol 2: Tablitsani Ishlatish

```typescript
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [TableModule],
  template: `
    <p-table [value]="users">
      <ng-template pTemplate="header">
        <tr>
          <th>ID</th>
          <th>Ism</th>
          <th>Email</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-user>
        <tr>
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </ng-template>
    </p-table>
  `
})
export class UserTableComponent {
  users = [
    { id: 1, name: 'Ali', email: 'ali@example.com' },
    { id: 2, name: 'Fatima', email: 'fatima@example.com' }
  ];
}
```

---

### Misol 3: Dialogi (Modal) Ishlatish

```typescript
import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dialog-example',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  template: `
    <p-button label="Open Dialog" (onClick)="openDialog()"></p-button>
    
    <p-dialog 
      [(visible)]="isVisible" 
      header="Salom"
      [modal]="true"
    >
      <p>Bu dialog oynasi!</p>
    </p-dialog>
  `
})
export class DialogExampleComponent {
  isVisible = false;
  
  openDialog() {
    this.isVisible = true;
  }
}
```

---

## Muhim Qoidalar

### ✅ Dogar Qilish Kerak:
1. **Har doim modulni import qiling:**
   ```typescript
   imports: [ButtonModule, TableModule]
   ```

2. **Animatsiyalarni yoqing:**
   ```typescript
   provideAnimationsAsync()  // app.config.ts da
   ```

3. **PrimeNG dokumentatsiyasini tekshiring:**
   - https://primeng.org/

### ❌ Qilmash Kerak:
1. ❌ Modulni import qilmasdan `<p-button>` ishlatmang
2. ❌ `provideAnimationsAsync()` qo'shmasdan animatsiyali komponentlarni ishlatmang
3. ❌ CDN orqali stillarni qo'shmang

---

## Xatolik Hal Qilish

### Muammo: "Cannot find module 'primeng/button'"

**Yechim:**
```typescript
// ❌ Noto'g'ri:
import { Button } from 'primeng/button';

// ✅ To'g'ri:
import { ButtonModule } from 'primeng/button';
```

---

### Muammo: Animatsiyalar ishlamadi

**Yechim:**
`app.config.ts` da quyidagini tekshiring:
```typescript
providers: [
  provideAnimationsAsync()  // ← BU KERAK!
]
```

---

### Muammo: Ikonkalar ko'rsatilmadi

**Yechim:**
`angular.json` da quyidagini tekshiring:
```json
"styles": [
  "node_modules/primeicons/primeicons.css"  // ← BU KERAK!
]
```

---

## PrimeNG Komponentlari Ro'yxati

PrimeNG da 80+ ta komponent bor:

| Kategoriya | Komponentlar |
|-----------|--------------|
| **Form** | Input, Button, Checkbox, Radio, Dropdown, Calendar, FileUpload |
| **Data** | Table, Tree, VirtualScroller, Paginator |
| **Panel** | Dialog, Panel, TabView, Card, Accordion |
| **Overlay** | Toast, Tooltip, ConfirmDialog, Popup |
| **Menu** | Menu, Menubar, ContextMenu, Steps |
| **Chart** | Chart (Chart.js bilan) |

**Barcha komponentlar bu yerda:** https://primeng.org/showcase

---

## Amaliy Qadamlar

### 1. Birinchi komponent yarating:

```bash
# Terminal da
ng generate component test-primeng
```

### 2. ButtonModule qo'shing:

```typescript
// test-primeng.component.ts
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-test-primeng',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <div style="padding: 20px;">
      <p-button label="Yaxshi!" severity="success"></p-button>
      <p-button label="Ogohlantirish" severity="warning"></p-button>
      <p-button label="Xato" severity="danger"></p-button>
    </div>
  `
})
export class TestPrimengComponent {}
```

### 3. App komponentiga qo'shing:

```typescript
// app.ts
import { TestPrimengComponent } from './test-primeng/test-primeng.component';

@Component({
  imports: [TestPrimengComponent],
  template: `
    <app-test-primeng></app-test-primeng>
  `
})
export class AppComponent {}
```

### 4. Ilovani ishga tushiring:

```bash
npm start
```

---

## Qo'shimcha Ma'lumotlar

- **PrimeNG Dokumentatsiya:** https://primeng.org/
- **PrimeNG GitHub:** https://github.com/primefaces/primeng
- **PrimeIcons Katalogi:** https://primeng.org/icons
- **Tailwind + PrimeNG:** https://primeng.org/tailwind

---

## Xulosa

| Qadam | Nima | Fayl |
|------|------|------|
| 1️⃣ O'rnatish | `npm install primeng primeicons primeflex` | - |
| 2️⃣ Stillar | CSS fayllarini `angular.json` ga qo'shing | `angular.json` |
| 3️⃣ Konfiguratsiya | `providePrimeNG()` va `provideAnimationsAsync()` | `src/app/app.config.ts` |
| 4️⃣ Ishlatish | Komponentga `Module` import qiling | `*.component.ts` |
| 5️⃣ Template | `<p-button>` yoki boshqa PrimeNG tagi | `*.component.ts` |

**Tayyor! Endi PrimeNG bilan Angular loyihalaringizni yarata boshlashingiz mumkin!** 🚀

