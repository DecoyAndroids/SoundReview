// import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
// import {mergeRegister} from '@lexical/utils';
// import Image from 'next/image';
// import arrowCounterclockwise from './icons/arrow-counterclockwise.png'
// import arrowDockwise from './icons/arrow-dockwise.png'
// import boldTextIcon from './icons/boldTextIcon.png'
// import strikethroughIcon from './icons/strikethrough.png'
// import italicTextIcon from './icons/italicTextIcon.png'
// import unserlineTextIcon from './icons/underline.png'
// import leftIcon from './icons/left-align.png'
// import rightIcon from './icons/right-alignment.png'
// import centerIcon from './icons/center.png'
// import justifyIcon from './icons/justify.png'

// import {
//   $getSelection,
//   $isRangeSelection,
//   CAN_REDO_COMMAND,
//   CAN_UNDO_COMMAND,
//   FORMAT_ELEMENT_COMMAND,
//   FORMAT_TEXT_COMMAND,
//   REDO_COMMAND,
//   SELECTION_CHANGE_COMMAND,
//   UNDO_COMMAND,
// } from 'lexical';
// import {useCallback, useEffect, useRef, useState} from 'react';

// const LowPriority = 1;

// function Divider() {
//   return <div className="divider" />;
// }

// export default function ToolbarPlugin() {
//   const [editor] = useLexicalComposerContext();
//   const toolbarRef = useRef(null);
//   const [canUndo, setCanUndo] = useState(false);
//   const [canRedo, setCanRedo] = useState(false);
//   const [isBold, setIsBold] = useState(false);
//   const [isItalic, setIsItalic] = useState(false);
//   const [isUnderline, setIsUnderline] = useState(false);
//   const [isStrikethrough, setIsStrikethrough] = useState(false);

//   const $updateToolbar = useCallback(() => {
//     const selection = $getSelection();
//     if ($isRangeSelection(selection)) {
//       setIsBold(selection.hasFormat('bold'));
//       setIsItalic(selection.hasFormat('italic'));
//       setIsUnderline(selection.hasFormat('underline'));
//       setIsStrikethrough(selection.hasFormat('strikethrough'));
//     }

//   }, []);

//   useEffect(() => {
//     return mergeRegister(
//       editor.registerUpdateListener(({editorState}) => {
//         editorState.read(() => {
//           $updateToolbar();
//         });
//       }),
//       editor.registerCommand(
//         SELECTION_CHANGE_COMMAND,
//         (_payload, _newEditor) => {
//           $updateToolbar();
//           return false;
//         },
//         LowPriority,
//       ),
//       editor.registerCommand(
//         CAN_UNDO_COMMAND,
//         (payload) => {
//           setCanUndo(payload);
//           return false;
//         },
//         LowPriority,
//       ),
//       editor.registerCommand(
//         CAN_REDO_COMMAND,
//         (payload) => {
//           setCanRedo(payload);
//           return false;
//         },
//         LowPriority,
//       ),
//     );
//   }, [editor, $updateToolbar]);

//   return (
//     <div className="toolbar flex" ref={toolbarRef}>
//       <button
//         disabled={!canUndo}
//         onClick={() => {
//           editor.dispatchCommand(UNDO_COMMAND, undefined);
//         }}
        
//         className="toolbar-item spaced"
//         aria-label="Undo">
//         <Image src={arrowCounterclockwise} alt='Undo' width={30} height={30} className=''/>
//       </button>
//       <button
//         disabled={!canRedo}
//         onClick={() => {
//           editor.dispatchCommand(REDO_COMMAND, undefined);
//         }}
//         className="toolbar-item spaced"
//         aria-label="Redo">
//         <Image src={arrowDockwise} alt='Redo' width={30} height={30} className=''/>
//       </button>
//       <Divider />
//       <button
//         onClick={() => {
//           editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
//         }}
//         className={'toolbar-item spaced ' + (isBold ? 'active' : '') }
//         aria-label="Format Bold">
//         <Image src={boldTextIcon} alt='Format Bold' width={30} height={30} className='format bold'/>
//       </button>
//       <button
//         onClick={() => {
//           editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
//         }}
//         className={'toolbar-item spaced ' + (isItalic ? 'active' : '')}
//         aria-label="Format Italics">
//         <Image src={italicTextIcon} alt='Format Italics' width={30} height={30} className='format italic'/>
//       </button>
//       <button
//         onClick={() => {
//           editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
//         }}
//         className={'toolbar-item spaced ' + (isUnderline ? 'active' : '')}
//         aria-label="Format Underline">
//         <Image src={unserlineTextIcon} alt='Format Underline' width={30} height={30} className='format underline'/>
//       </button>
//       <button
//         onClick={() => {
//           editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
//         }}
//         className={'toolbar-item spaced ' + (isStrikethrough ? 'active' : '')}
//         aria-label="Format Strikethrough">
//         <Image src={strikethroughIcon} alt='Format Strikethrough' width={30} height={30} className="format strikethrough" />
//       </button>
//       <Divider />
//       <button
//         onClick={() => {
//           editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left');
//         }}
//         className="toolbar-item spaced"
//         aria-label="Left Align">
//         <Image src={leftIcon} alt='Left Align' width={30} height={30} className="format left-align" />
//       </button>
//       <button
//         onClick={() => {
//           editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center');
//         }}
//         className="toolbar-item spaced"
//         aria-label="Center Align">
//         <Image src={centerIcon} alt='Center Align' width={30} height={30} className="format center-align" />
//       </button>
//       <button
//         onClick={() => {
//           editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right');
//         }}
//         className="toolbar-item spaced"
//         aria-label="Right Align">
//         <Image src={rightIcon} alt='Right Align' width={30} height={30} className="format right-align" />
//       </button>
//       <button
//         onClick={() => {
//           editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify');
//         }}
//         className="toolbar-item"
//         aria-label="Justify Align">
//         <Image src={justifyIcon} alt='Justify Align' width={30} height={30} className="format justify-align" />
//       </button>{' '}
//     </div>
//   );
// }
