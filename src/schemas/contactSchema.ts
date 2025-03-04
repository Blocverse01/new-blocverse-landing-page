import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .regex(/^[A-Za-z\s]*[A-Za-z][A-Za-z\s]*$/, "Name must contain only letters")
    .transform((val) => val.trim())
    .refine((val) => val.length > 0, "Name cannot be empty"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(1000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
