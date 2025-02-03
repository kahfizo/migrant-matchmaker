import * as z from "zod";

export const registrationSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  idNumber: z.string().min(16, "ID number must be 16 digits").max(16),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  birthPlace: z.string().min(3, "Birth place must be at least 3 characters"),
  birthDate: z.string(),
});