import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// 모든 프로젝트 조회
export const getProjects = query({
  handler: async (ctx) => {
    return await ctx.db.query("projects").order("desc").collect();
  },
});

// 프로젝트 저장 (새로 생성)
export const saveProject = mutation({
  args: {
    name: v.string(),
    data: v.any(),
  },
  handler: async (ctx, args) => {
    const projectId = await ctx.db.insert("projects", {
      name: args.name,
      data: args.data,
      updatedAt: new Date().toISOString(),
    });
    return projectId;
  },
});

// 프로젝트 업데이트 (기존 수정)
export const updateProject = mutation({
  args: {
    id: v.id("projects"),
    name: v.optional(v.string()),
    data: v.optional(v.any()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    await ctx.db.patch(id, {
      ...updates,
      updatedAt: new Date().toISOString(),
    });
  },
});

// 프로젝트 삭제
export const deleteProject = mutation({
  args: { id: v.id("projects") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
