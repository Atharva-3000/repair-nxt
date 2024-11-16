import {serial, varchar, boolean, timestamp, integer, text, pgTable } from "drizzle-orm/pg-core";

import { relations } from "drizzle-orm";

export const customers = pgTable("customers", {
    id: serial().primaryKey(),
    firstName: varchar("first_name").notNull(),
    lastName: varchar("last_name").notNull(),
    email: varchar("email").unique().notNull(),
    phone: varchar("phone").unique().notNull(),
    address1: varchar("address1").notNull(),
    address2: varchar("address2"),
    city: varchar("city").notNull(),
    state: varchar("state", { length: 2 }).notNull(),
    zip: varchar("zip",{length:6}).notNull(),
    notes: text("notes"),
    active: boolean().notNull().default(true),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(()=> new Date())
})


export const tickets = pgTable("tickets", {
    id: serial("id").primaryKey(),
    customerId: integer("customer_id").notNull().references(()=> customers.id),
    title: varchar("title").notNull(),
    description: text("description").notNull(),
    completed: boolean().notNull().default(false),
    tech: varchar("tech").notNull().default("unassigned"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow().$onUpdate(()=> new Date())
})

// Create a relation between customers and tickets
// a customer and have many tickets
// a ticket belongs to a customer

export const customersRelations = relations(customers,({many})=>({
    tickets: many(tickets),
}))

export const ticketsRelations = relations
(tickets,({one})=>({
    customer: one(customers,{
        fields: [tickets.customerId],
        references: [customers.id],
    })
}))