export type SectionType = 
  | 'hero' 
  | 'benefits' 
  | 'feature-cards' 
  | 'comparison-table' 
  | 'faq' 
  | 'cta'
  | 'dynamic';

export type ElementType = 'text' | 'image' | 'video' | 'icon' | 'button' | 'spacer';

export interface ElementStyles {
  padding?: string;
  margin?: string;
  color?: string;
  backgroundColor?: string; // 요소 배경색
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;      // 행간
  letterSpacing?: string;   // 자간
  textAlign?: 'left' | 'center' | 'right';
  borderRadius?: string;
  border?: string;
  borderTop?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRight?: string;
  width?: string;
  height?: string;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
}

export interface BaseElement {
  id: string;
  type: ElementType;
  content: any; // text content, image url, video id, icon name etc.
  styles: ElementStyles;
  link?: {
    url: string;
    target: '_blank' | '_self';
  };
}

export interface SectionData {
  id: string;
  type: SectionType;
  elements: BaseElement[];
  background: {
    type: 'color' | 'image' | 'video';
    value: string;
    overlay?: number; // 0 to 1 opacity
  };
  styles: {
    paddingTop: string;
    paddingBottom: string;
    maxWidth?: string;
  };
  hidden?: boolean;
  locked?: boolean;
}

export interface BrandTheme {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: 'Inter' | 'Outfit' | 'Roboto';
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'full';
  darkMode: boolean;
}

export interface PageData {
  id: string;
  title: string;
  description?: string;
  metadata: {
    seoTitle?: string;
    seoDescription?: string;
    keywords?: string[];
  };
  theme: BrandTheme;
  sections: SectionData[];
}

export const DEFAULT_THEME: BrandTheme = {
  primaryColor: '#2563eb',
  secondaryColor: '#64748b',
  fontFamily: 'Inter',
  borderRadius: 'md',
  darkMode: false,
};

export const DEFAULT_PAGE: PageData = {
  id: 'new-page',
  title: '새 상세페이지',
  metadata: {},
  theme: DEFAULT_THEME,
  sections: [],
};
