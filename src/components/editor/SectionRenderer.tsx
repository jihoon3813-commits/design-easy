'use client';

import React from 'react';
import { SectionData, BaseElement } from '@/lib/types';
import EditableAsset from './EditableAsset';
import { useEditorStore } from '@/store/useEditorStore';
import * as LucideIcons from 'lucide-react';

interface Props {
  section: SectionData;
}

export default function SectionRenderer({ section }: Props) {
  const { updateElement } = useEditorStore();

  if (section.hidden) return null;

  const sectionStyle: React.CSSProperties = {
    backgroundColor: section.background?.type === 'color' ? section.background.value : undefined,
    backgroundImage: section.background?.type === 'image' ? `url(${section.background.value})` : undefined,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: section.styles?.paddingTop || '40px',
    paddingBottom: section.styles?.paddingBottom || '40px',
    position: 'relative',
  };

  return (
    <section style={sectionStyle} className="w-full">
      {section.background?.overlay && (
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ backgroundColor: `rgba(0,0,0,${section.background.overlay})` }} 
        />
      )}

      <div className="relative z-10 w-full px-6 mx-auto" style={{ maxWidth: section.styles?.maxWidth || '100%' }}>
        <div className="flex flex-col">
          {section.elements?.map((element) => (
            <EditableAsset 
              key={element.id} 
              sectionId={section.id} 
              elementId={element.id}
            >
              <ElementContent 
                element={element} 
                onUpdate={(updates) => updateElement(section.id, element.id, updates)}
              />
            </EditableAsset>
          ))}
        </div>
      </div>
    </section>
  );
}

function ElementContent({ element, onUpdate }: { element: BaseElement; onUpdate: (updates: Partial<BaseElement>) => void }) {
  const { styles, type, content } = element;

  const commonStyle: React.CSSProperties = {
    padding: styles.padding,
    marginTop: styles.margin, // margin 단축 속성 대신 개별 속성 사용
    marginBottom: styles.margin,
    color: styles.color,
    fontSize: styles.fontSize,
    fontWeight: styles.fontWeight,
    lineHeight: styles.lineHeight, // 행간 반영
    letterSpacing: styles.letterSpacing, // 자간 반영
    textAlign: styles.textAlign,
    borderRadius: styles.borderRadius,
    backgroundColor: styles.backgroundColor,
    border: styles.border,
    width: styles.width || (type === 'image' || type === 'video' ? '100%' : 'auto'),
    height: styles.height,
    display: (styles.textAlign === 'center' || styles.textAlign === 'right') ? 'block' : 'inline-block',
  };

  if (styles.textAlign === 'center') {
    commonStyle.marginLeft = 'auto';
    commonStyle.marginRight = 'auto';
  } else if (styles.textAlign === 'right') {
    commonStyle.marginLeft = 'auto';
    commonStyle.marginRight = '0';
  } else {
    commonStyle.marginLeft = '0';
    commonStyle.marginRight = '0';
  }

  switch (type) {
    case 'text':
      return (
        <div 
          contentEditable 
          suppressContentEditableWarning
          onBlur={(e) => onUpdate({ content: e.currentTarget.textContent })}
          style={commonStyle}
          className="focus:outline-none min-h-[1em] whitespace-pre-wrap"
        >
          {content}
        </div>
      );
    
    case 'image':
      return (
        <div style={{ ...commonStyle, overflow: 'hidden' }}>
          <img src={content} alt="" className="w-full h-auto block" />
        </div>
      );

    case 'button':
      return (
        <div style={{ textAlign: styles.textAlign }}>
          <button style={commonStyle} className="transition-transform active:scale-95">
            {content}
          </button>
        </div>
      );

    case 'icon':
      const IconComponent = (LucideIcons as any)[content] || LucideIcons.HelpCircle;
      return (
        <div style={{ textAlign: styles.textAlign }}>
          <IconComponent 
            style={{ 
              color: styles.color || '#2563eb',
              width: styles.fontSize || '32px',
              height: styles.fontSize || '32px',
              ...commonStyle
            }} 
          />
        </div>
      );

    case 'spacer':
      return <div style={{ height: content || '20px', width: '100%' }} />;

    default:
      return null;
  }
}
