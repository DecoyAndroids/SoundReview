'use client';

import dynamic from 'next/dynamic';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $generateHtmlFromNodes } from '@lexical/html';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import {
  $isTextNode,
  DOMConversionMap,
  DOMExportOutput,
  DOMExportOutputMap,
  isHTMLElement,
  Klass,
  LexicalEditor,
  LexicalNode,
  ParagraphNode,
  TextNode,
} from 'lexical';

import ExampleTheme from '../ui/ToolBarPlugin/exampleTheme';
import ToolbarPlugin from '../ui/ToolBarPlugin/ToolbarPlugin';
import { parseAllowedColor, parseAllowedFontSize } from '../ui/ToolBarPlugin/styleConfig';
import ArticleTitleInput from './components/ArticleTitleInput';
import ArticleCoverUpload from './components/ArticleCoverUpload';
import { Label } from '~/components/ui/shadcn/label';
import { useEffect, useState } from 'react';
import { CreateArticleStore } from '~/store/createArticleStore';


const placeholder = 'Введите текст...';

const removeStylesExportDOM = (
  editor: LexicalEditor,
  target: LexicalNode,
): DOMExportOutput => {
  const output = target.exportDOM(editor);
  if (output && isHTMLElement(output.element)) {
    for (const el of [
      output.element,
      ...output.element.querySelectorAll('[style],[class],[dir="ltr"]'),
    ]) {
      el.removeAttribute('class');
      el.removeAttribute('style');
      if (el.getAttribute('dir') === 'ltr') {
        el.removeAttribute('dir');
      }
    }
  }
  return output;
};

const exportMap: DOMExportOutputMap = new Map<
  Klass<LexicalNode>,
  (editor: LexicalEditor, target: LexicalNode) => DOMExportOutput
>([
  [ParagraphNode, removeStylesExportDOM],
  [TextNode, removeStylesExportDOM],
]);

const getExtraStyles = (element: HTMLElement): string => {
  let extraStyles = '';
  const fontSize = parseAllowedFontSize(element.style.fontSize);
  const backgroundColor = parseAllowedColor(element.style.backgroundColor);
  const color = parseAllowedColor(element.style.color);
  if (fontSize !== '' && fontSize !== '15px') {
    extraStyles += `font-size: ${fontSize};`;
  }
  if (backgroundColor !== '' && backgroundColor !== 'rgb(255, 255, 255)') {
    extraStyles += `background-color: ${backgroundColor};`;
  }
  if (color !== '' && color !== 'rgb(0, 0, 0)') {
    extraStyles += `color: ${color};`;
  }
  return extraStyles;
};

const constructImportMap = (): DOMConversionMap => {
  const importMap: DOMConversionMap = {};

  for (const [tag, fn] of Object.entries(TextNode.importDOM?.() ?? {})) {
    importMap[tag] = (importNode) => {
      const importer = fn(importNode);
      if (!importer) {
        return null;
      }
      return {
        ...importer,
        conversion: (element) => {
          const output = importer.conversion(element);
          if (
            output?.forChild === undefined ||
            output?.after !== undefined ||
            output?.node !== null
          ) {
            return output;
          }
          const extraStyles = getExtraStyles(element);
          if (extraStyles) {
            const { forChild } = output;
            return {
              ...output,
              forChild: (child, parent) => {
                const textNode = forChild(child, parent);
                if ($isTextNode(textNode)) {
                  textNode.setStyle(textNode.getStyle() + extraStyles);
                }
                return textNode;
              },
            };
          }
          return output;
        },
      };
    };
  }
  return importMap;
};

const editorConfig = {
  html: {
    export: exportMap,
    import: constructImportMap(),
  },
  namespace: 'Next.js Demo',
  nodes: [ParagraphNode, TextNode],
  onError(error: Error) {
    throw error;
  },
  theme: ExampleTheme,
};


function AutoSavePlugin() {
  const setArticleText = CreateArticleStore((state) => state.setArticleText);
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const html = $generateHtmlFromNodes(editor, null);
        setArticleText(html); 
      });
    });
  }, [editor, setArticleText]);

  return null; 
}


const Editor = () => {
  return (
    <div className="w-full ">
      <ArticleTitleInput/>
      <ArticleCoverUpload/>
      <Label htmlFor="article-cover" className="text-[2rem] font-semibold">
        Текст статьи:
      </Label>
    
    <LexicalComposer initialConfig={editorConfig}>

      <div className="editor-container">
        <ToolbarPlugin />
        <div
            className="bg-[rgb(var(--blackbrown))] p-2 rounded-b-lg h-fit border-x border-b"
            style={{ borderColor: 'rgb(var(--gray))' }}
          >
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className='h-fit min-h-[10rem]'
                aria-placeholder={placeholder}
                placeholder={
                  <div className="editor-placeholder pt-[4.5rem] h-[10rem]">{placeholder}</div>
                }
              />
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <AutoFocusPlugin />
        </div>
        <AutoFocusPlugin />
        <AutoSavePlugin />
      </div>
    </LexicalComposer>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Editor), { ssr: false });
