'use client';

import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered,
  Heading1,
  Heading2,
} from 'lucide-react';

interface Props {
  content: string;
  onChange: (content: string) => void;
}

export default function RichTextEditor({ content, onChange }: Props) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div className="border border-neutral-800 rounded-lg overflow-hidden bg-neutral-900">
      <div className="flex items-center gap-1 p-1 bg-neutral-800 border-b border-neutral-800">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-1.5 rounded hover:bg-neutral-700 transition-colors ${editor.isActive('bold') ? 'bg-neutral-600 text-white' : 'text-neutral-400'}`}
        >
          <Bold className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-1.5 rounded hover:bg-neutral-700 transition-colors ${editor.isActive('italic') ? 'bg-neutral-600 text-white' : 'text-neutral-400'}`}
        >
          <Italic className="w-3.5 h-3.5" />
        </button>
        <div className="w-px h-4 bg-neutral-700 mx-1" />
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-1.5 rounded hover:bg-neutral-700 transition-colors ${editor.isActive('heading', { level: 1 }) ? 'bg-neutral-600 text-white' : 'text-neutral-400'}`}
        >
          <Heading1 className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-1.5 rounded hover:bg-neutral-700 transition-colors ${editor.isActive('bulletList') ? 'bg-neutral-600 text-white' : 'text-neutral-400'}`}
        >
          <List className="w-3.5 h-3.5" />
        </button>
      </div>
      <EditorContent 
        editor={editor} 
        className="p-3 text-sm text-white focus:outline-none min-h-[100px] prose prose-invert max-w-none"
      />
    </div>
  );
}
