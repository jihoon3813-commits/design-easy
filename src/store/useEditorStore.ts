'use client';

import { create } from 'zustand';
import { PageData, SectionData, BaseElement } from '@/lib/types';

interface EditorState {
  pageData: PageData;
  selectedSectionId: string | null;
  selectedElementId: string | null;
  previewMode: 'mobile' | 'desktop';
  history: PageData[];
  historyIndex: number;
  
  // Actions
  setPageData: (data: PageData) => void;
  setPreviewMode: (mode: 'mobile' | 'desktop') => void;
  setSelectedSectionId: (id: string | null) => void;
  setSelectedElementId: (id: string | null) => void;
  
  // Section Actions
  updateSection: (sectionId: string, updates: Partial<SectionData>) => void;
  addSection: (section: SectionData, index?: number) => void;
  removeSection: (sectionId: string) => void;
  reorderSections: (oldIndex: number, newIndex: number) => void;

  // Element Actions
  addElement: (sectionId: string, element: BaseElement, index?: number) => void;
  updateElement: (sectionId: string, elementId: string, updates: Partial<BaseElement>) => void;
  removeElement: (sectionId: string, elementId: string) => void;
  reorderElements: (sectionId: string, oldIndex: number, newIndex: number) => void;

  // History Actions
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  saveToHistory: () => void;
}

const DEFAULT_PAGE: PageData = {
  sections: [],
  globalStyles: {}
};

export const useEditorStore = create<EditorState>((set, get) => ({
  pageData: DEFAULT_PAGE,
  selectedSectionId: null,
  selectedElementId: null,
  previewMode: 'mobile',
  history: [DEFAULT_PAGE],
  historyIndex: 0,
  canUndo: false,
  canRedo: false,

  setPageData: (data) => {
    set({ pageData: data });
    get().saveToHistory();
  },

  setPreviewMode: (mode) => set({ previewMode: mode }),
  
  setSelectedSectionId: (id) => set({ selectedSectionId: id, selectedElementId: null }),
  
  setSelectedElementId: (id) => set({ selectedElementId: id }),

  updateSection: (sectionId, updates) => {
    const { pageData } = get();
    const newSections = pageData.sections.map(s => 
      s.id === sectionId ? { ...s, ...updates } : s
    );
    get().setPageData({ ...pageData, sections: newSections });
  },

  addSection: (section, index) => {
    const { pageData } = get();
    const newSections = [...pageData.sections];
    if (typeof index === 'number') {
      newSections.splice(index, 0, section);
    } else {
      newSections.push(section);
    }
    get().setPageData({ ...pageData, sections: newSections });
    set({ selectedSectionId: section.id });
  },

  removeSection: (sectionId) => {
    const { pageData, selectedSectionId } = get();
    const newSections = pageData.sections.filter(s => s.id !== sectionId);
    get().setPageData({ ...pageData, sections: newSections });
    if (selectedSectionId === sectionId) set({ selectedSectionId: null });
  },

  reorderSections: (oldIndex, newIndex) => {
    const { pageData } = get();
    const newSections = [...pageData.sections];
    const [removed] = newSections.splice(oldIndex, 1);
    newSections.splice(newIndex, 0, removed);
    get().setPageData({ ...pageData, sections: newSections });
  },

  addElement: (sectionId, element, index) => {
    const { pageData } = get();
    const newSections = pageData.sections.map(s => {
      if (s.id === sectionId) {
        const newElements = [...s.elements];
        if (typeof index === 'number') {
          newElements.splice(index, 0, element);
        } else {
          newElements.push(element);
        }
        return { ...s, elements: newElements };
      }
      return s;
    });
    get().setPageData({ ...pageData, sections: newSections });
    set({ selectedElementId: element.id });
  },

  updateElement: (sectionId, elementId, updates) => {
    const { pageData } = get();
    const newSections = pageData.sections.map(s => {
      if (s.id === sectionId) {
        const newElements = s.elements.map(el => 
          el.id === elementId ? { ...el, ...updates, styles: { ...el.styles, ...(updates.styles || {}) } } : el
        );
        return { ...s, elements: newElements };
      }
      return s;
    });
    get().setPageData({ ...pageData, sections: newSections });
  },

  removeElement: (sectionId, elementId) => {
    const { pageData, selectedElementId } = get();
    const newSections = pageData.sections.map(s => {
      if (s.id === sectionId) {
        return { ...s, elements: s.elements.filter(el => el.id !== elementId) };
      }
      return s;
    });
    get().setPageData({ ...pageData, sections: newSections });
    if (selectedElementId === elementId) set({ selectedElementId: null });
  },

  reorderElements: (sectionId, oldIndex, newIndex) => {
    const { pageData } = get();
    const newSections = pageData.sections.map(s => {
      if (s.id === sectionId) {
        const newElements = [...s.elements];
        const [removed] = newElements.splice(oldIndex, 1);
        newElements.splice(newIndex, 0, removed);
        return { ...s, elements: newElements };
      }
      return s;
    });
    get().setPageData({ ...pageData, sections: newSections });
  },

  saveToHistory: () => {
    const { pageData, history, historyIndex } = get();
    const currentDataStr = JSON.stringify(pageData);
    const lastHistoryStr = JSON.stringify(history[historyIndex]);
    
    if (currentDataStr === lastHistoryStr) return;

    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(JSON.parse(currentDataStr));
    
    if (newHistory.length > 50) newHistory.shift();
    
    set({ 
      history: newHistory, 
      historyIndex: newHistory.length - 1,
      canUndo: true,
      canRedo: false
    });
  },

  undo: () => {
    const { history, historyIndex } = get();
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      set({ 
        pageData: JSON.parse(JSON.stringify(history[newIndex])),
        historyIndex: newIndex,
        canUndo: newIndex > 0,
        canRedo: true,
        selectedSectionId: null,
        selectedElementId: null
      });
    }
  },

  redo: () => {
    const { history, historyIndex } = get();
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      set({ 
        pageData: JSON.parse(JSON.stringify(history[newIndex])),
        historyIndex: newIndex,
        canUndo: true,
        canRedo: newIndex < history.length - 1,
        selectedSectionId: null,
        selectedElementId: null
      });
    }
  }
}));
