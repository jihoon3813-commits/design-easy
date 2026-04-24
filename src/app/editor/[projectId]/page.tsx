import EditorLayout from '@/components/editor/EditorLayout';

export default async function ProjectEditorPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  
  return (
    <main>
      <EditorLayout projectId={projectId} />
    </main>
  );
}
