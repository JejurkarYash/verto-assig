import { PrismaClient } from "@prisma/client";
const Prisma = globalThis.prisma ?? new PrismaClient();
if (process.env.NODE_ENV !== "production")
    globalThis.prisma = Prisma;
export default Prisma;
//# sourceMappingURL=prisma.js.map