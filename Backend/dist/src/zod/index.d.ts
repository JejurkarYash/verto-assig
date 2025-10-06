import { z } from "zod";
export declare const EmployeeSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    position: z.ZodString;
}, z.core.$strip>;
export declare const EmployeeUpdateSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    position: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=index.d.ts.map