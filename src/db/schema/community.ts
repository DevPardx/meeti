import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const community = pgTable("communities", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    image: varchar("image", { length: 100 }),
    description: text("description").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    createdBy: text("created_by").notNull()
});