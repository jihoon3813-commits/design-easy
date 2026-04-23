import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  projects: defineTable({
    name: v.string(),
    data: v.any(), // PageData 객체 전체 저장
    updatedAt: v.string(),
    authorId: v.optional(v.string()), // 향후 인증 기능 추가 대비
  }),
});
