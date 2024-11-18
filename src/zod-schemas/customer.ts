import {createInsertSchema, createSelectSchema} from 'drizzle-zod';
import { customers } from '@/db/schemas';

export const insertCustomerSchema = createInsertSchema(customers, {
    firstName: (schema) => schema.firstName.min(1, "First name is required"),
    lastName: (schema) => schema.lastName.min(1, "Last name is required"),
    address1: (schema) => schema.address1.min(1, "Address is required"),
    city: (schema) => schema.city.min(1, "City is required"),
    state: (schema) => schema.state.length(2, "State must be exactly 2 characters"),
    email: (schema) => schema.email.email("Invalid email address"),
    zip: (schema) => schema.zip.regex(/^\d{6}?&/,"Invalid Zip Code. Write a proper 6 digit zip code."),
    phone: (schema) => schema.phone.regex(/^\d{10}&/,"Invalid Phone Number. Write a proper 10 digit phone number.")
});

export const selectCustomerSchema = createSelectSchema(customers);

export type insertCustomerSchemaType = typeof insertCustomerSchema._type

export type selectCustomerSchemaType = typeof selectCustomerSchema._type