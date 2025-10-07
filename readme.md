# Employee Management System

🌐 **Live Demo:** [https://verto-assig.vercel.app/](https://verto-assig.vercel.app/)

## Project Description

This is a full-stack Employee Management System built with modern web technologies. The application allows users to perform CRUD (Create, Read, Update, Delete) operations on employee records through a clean and intuitive user interface.

### Tech Stack

**Frontend:**

- Next.js 15 (React 19)
- TypeScript
- Tailwind CSS
- Radix UI Components
- Axios for API calls
- Sonner for toast notifications

**Backend:**

- Node.js with Express.js
- TypeScript
- Prisma ORM
- PostgreSQL database
- Zod for data validation
- CORS enabled

**Testing:**

- Vitest for backend API testing
- Supertest for HTTP testing

### Features

- ✅ Add new employees
- ✅ View all employees
- ✅ Edit employee information
- ✅ Delete employees
- ✅ Form validation
- ✅ Responsive design
- ✅ Real-time updates
- ✅ Error handling
- ✅ REST API with proper HTTP status codes

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or later)
- pnpm package manager
- PostgreSQL database

### Database Setup

1. Create a PostgreSQL database for the project
2. Copy the database URL for the next step

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd Backend
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the Backend directory with your database URL:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"
   ```

4. Run Prisma migrations to set up the database schema:

   ```bash
   npx prisma migrate dev
   ```

5. Generate Prisma client:

   ```bash
   npx prisma generate
   ```

6. Build the TypeScript code:

   ```bash
   pnpm build
   ```

7. Start the development server:
   ```bash
   pnpm dev
   ```

The backend will be running on `http://localhost:3000`

### Frontend Setup

1. Navigate to the web directory:

   ```bash
   cd web
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env.local` file in the web directory:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

The frontend will be running on `http://localhost:3001`

### Running Both Servers

You can run both frontend and backend simultaneously by opening two terminal windows:

**Terminal 1 (Backend):**

```bash
cd Backend
pnpm dev
```

**Terminal 2 (Frontend):**

```bash
cd web
pnpm dev
```

## Testing Instructions

### Backend API Tests

The backend includes comprehensive API tests using Vitest and Supertest.

1. Navigate to the backend directory:

   ```bash
   cd Backend
   ```

2. Run the test suite:
   ```bash
   pnpm test
   ```

### Test Coverage

The test suite covers:

- ✅ Server health check endpoint
- ✅ Employee creation with validation
- ✅ Employee retrieval (single and multiple)
- ✅ Employee updates with validation
- ✅ Employee deletion
- ✅ Error handling for invalid requests
- ✅ Duplicate email validation
- ✅ Input sanitization and validation

### API Endpoints

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| GET    | `/`                  | Server health check |
| GET    | `/api/employees`     | Get all employees   |
| GET    | `/api/employees/:id` | Get employee by ID  |
| POST   | `/api/employees`     | Create new employee |
| PUT    | `/api/employees/:id` | Update employee     |
| DELETE | `/api/employees/:id` | Delete employee     |

### Sample API Usage

**Create Employee:**

```bash
curl -X POST http://localhost:3000/api/employees \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com", "position": "Developer"}'
```

**Get All Employees:**

```bash
curl http://localhost:3000/api/employees
```

## Project Structure

```
verto-assignment/
├── Backend/
│   ├── src/
│   │   ├── app.ts          # Express app configuration
│   │   ├── index.ts        # API routes and logic
│   │   ├── server.ts       # Server startup
│   │   ├── prisma.ts       # Prisma client
│   │   └── zod/
│   │       └── index.ts    # Validation schemas
│   ├── test/
│   │   └── app.test.ts     # API tests
│   ├── prisma/
│   │   └── schema.prisma   # Database schema
│   └── package.json
├── web/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Dashboard.tsx
│   │   ├── AddEmployeeCard.tsx
│   │   ├── EditEmployeeCard.tsx
│   │   ├── DeleteEmployeeCard.tsx
│   │   ├── AllEmployeCard.tsx
│   │   └── ui/             # Reusable UI components
│   ├── store/
│   │   └── ContextProvider.tsx  # Global state management
│   └── package.json
└── README.md
```

## Environment Variables

### Backend (.env)

```env
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
```

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Troubleshooting

### Common Issues

1. **Database connection error:**

   - Ensure PostgreSQL is running
   - Check your DATABASE_URL in the .env file
   - Run `npx prisma migrate dev` to sync the database

2. **API connection error:**

   - Ensure the backend server is running on port 3000
   - Check NEXT_PUBLIC_API_URL in frontend .env.local

3. **Port conflicts:**
   - Backend runs on port 3000
   - Frontend runs on port 3001
   - Make sure these ports are available

### Development Tips

- Use `npx prisma studio` to view/edit database records visually
- Check browser console for frontend errors
- Monitor backend logs for API request/response details
- Use `pnpm dev` for hot-reload during development

## License

This project is for assignment purposes.
