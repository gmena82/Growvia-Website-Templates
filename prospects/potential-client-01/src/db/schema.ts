import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core"

/**
 * Leads table schema
 * Stores contact form submissions from the website
 * Note: This is a placeholder schema. No live database connection is configured.
 */
export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  message: text("message").notNull(),
  subject: varchar("subject", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})

export type Lead = typeof leads.$inferSelect
export type NewLead = typeof leads.$inferInsert

