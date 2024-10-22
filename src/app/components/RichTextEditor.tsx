'use client';

import React, { useCallback, useEffect } from 'react';
import Image from 'next/image';
import { EditorContent, useEditor } from "@tiptap/react";
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import TiptapImage from '@tiptap/extension-image';
import StarterKit from "@tiptap/starter-kit";
import TextAlign from '@tiptap/extension-text-align';
import Focus from '@tiptap/extension-focus';
import Underline from '@tiptap/extension-underline';
import CharacterCount from '@tiptap/extension-character-count';

interface RichTextEditorProps {
    label: string;
    characterCount: number;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ label, characterCount }) => {
    const editor = useEditor({
        extensions: [
            Document,
            Paragraph,
            Text,
            TiptapImage,
            Underline,
            StarterKit.configure({
                hardBreak: false,
                blockquote: false,
            }),
            CharacterCount.configure({
                limit: characterCount,
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
                defaultAlignment: 'left',
            }),
            Focus.configure({
                className: 'ring-2 ring-middleGrey rounded-md',
                mode: 'all',
            }),
        ],
        autofocus: true,
    });

    const addImage = useCallback(() => {
        const url = window.prompt('Enter image URL:');
        if (url) {
            editor?.chain().focus().setImage({ src: url }).run();
        }
    }, [editor]);

    useEffect(() => {
        return () => {
            editor?.destroy();
        };
    }, [editor]);

    const currentCharacterCount = editor?.storage.characterCount.characters() || 0;
    const currentWordCount = editor?.storage.characterCount.words() || 0;

    if (!editor) {
        return null;
    }

    return (
        <div className="p-4">
            <div className='flex justify-between items-center bg-middleGrey p-4 rounded-t-lg'>
                {/* placeholder */}
                <div>
                    {editor.isEmpty && (
                        <div className='absolute top-24 left-12 text-babyPowder opacity-40 pointer-events-none'>
                            {label}
                        </div>
                    )}
                </div>

                <div className='flex space-x-6 ml-2'>
                    {/* bold, italic, underline, strike */}
                    {['bold', 'italic', 'underline', 'strike'].map((type) => (
                        <button key={type} onClick={() => editor.chain().focus().toggleMark(type).run()} className={`toolbar-btn ${editor.isActive(type) ? 'border border-graniteGrey border-opacity-100 rounded-md' : ''}`}>
                            <Image src={`/assets/icons/toolbar/${type}.svg`} width={20} height={20} alt={type} />
                        </button>
                    ))}
                </div>

                <div className='flex space-x-6 ml-8'>
                    {/* text align: left, justify, right */}
                    {['left', 'justify', 'right'].map((align) => (
                        <button key={align} onClick={() => editor.chain().focus().setTextAlign(align).run()} className={editor.isActive({ textAlign: align }) ? 'border border-graniteGrey border-opacity-100 rounded-md' : ''}>
                            <Image src={`/assets/icons/toolbar/text-align-${align}.svg`} width={20} height={20} alt={`Text Align ${align}`} />
                        </button>
                    ))}
                </div>

                <div className='flex space-x-6 ml-8'>
                    {/* code block */}
                    <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={`toolbar-btn ${editor.isActive('codeBlock') ? 'border border-graniteGrey border-opacity-100 rounded-md' : ''}`}>
                        <Image src="/assets/icons/toolbar/code-block.svg" width={20} height={20} alt="Code Block" />
                    </button>

                    {/* add image */}
                    <button onClick={addImage}>
                        <Image src="assets/icons/toolbar/image.svg" width={20} height={20} alt="Upload Image" />
                    </button>
                </div>


                <div className='flex space-x-6 ml-auto mr-4'>
                    {/* undo */}
                    <button onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()}>
                        <Image src="/assets/icons/toolbar/undo.svg" width={20} height={20} alt="Undo" />
                    </button>

                    {/* redo */}
                    <button onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()}>
                        <Image src="/assets/icons/toolbar/redo.svg" width={20} height={20} alt="Redo" />
                    </button>
                </div>
            </div>

            <div className="relative">
                <EditorContent editor={editor} className='editor-content border border-middleGrey border-opacity-60 text-babyPowder p-4 rounded-b-lg min-h-[400px] max-h-[400px] overflow-y-auto' />

                {/* word, character count */}
                <div className="absolute bottom-4 right-4 text-babyPowder text-opacity-25">
                    {`Words: ${currentWordCount} | Characters: ${currentCharacterCount} / ${characterCount}`}
                </div>
            </div>
        </div>
    );
};

export default RichTextEditor;
