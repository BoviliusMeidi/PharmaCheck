# Website
```bash
https://pharma-check-wheat.vercel.app/
```

## How to run the PharmaCheck website

### Prerequisites
1. Node.js v20 or above
2. npm v10 or above
3. Visual Studio Code or other code editor

### Clone the UNIQLO github
```bash
git clone https://github.com/BoviliusMeidi/UNIQLO.git
cd UNIQLO
```
### Run the BackEnd Environment

1. Install the node package manager, that we need for this web.
```bash
npm install
```
```bash
Package NPM (Node Package Manager) yang akan terinstall
"@supabase/ssr": "^0.6.1",
"@supabase/supabase-js": "^2.49.4",
"lucide-react": "^0.510.0",
"next": "15.3.1",
"prisma": "^6.6.0",
"react": "^19.0.0",
"react-dom": "^19.0.0",
"react-icons": "^5.5.0",
"supabase": "^2.22.12"
```
2. Copy file `.env.example` to the `.env`.
```bash
cp .env.example .env
```
3. Run the server
```bash
npm run dev
```

Website will run in `http://127.0.0.1:3000`
