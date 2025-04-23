'use client';

import { useState, useEffect, useRef } from 'react';
import { CreateArticleStore } from '~/store/createArticleStore';
import { ImageIcon } from 'lucide-react';

export default function ArticleCoverUpload() {
    const setArticleCover = CreateArticleStore(state => state.setArticleCover);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [error, setError] = useState('');
    const [savedImage, setSavedImage] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            setError('Файл должен быть изображением (JPG, PNG и т.д.)');
            return;
        }

        setImageFile(file);
        setPreviewUrl(URL.createObjectURL(file));
        setError('');
    };

    useEffect(() => {
        if (!imageFile) return;

        setSavedImage(imageFile);
        setArticleCover(imageFile);
    }, [imageFile, setArticleCover]);

    return (
        <div className='mx-auto mb-2 flex w-full flex-col'>
            <p className='font-semibold mb-3 text-[2rem]'>Обложка:</p>

            <label
                htmlFor='article-cover'
                className='flex w-fit cursor-pointer items-center gap-4 rounded-lg border border-[rgb(var(--gray))] bg-[rgb(var(--blackbrown))] p-3 transition-colors duration-200 focus-within:border-[rgb(var(--gray-darker))] hover:border-[rgb(var(--gray-dark))]'
            >
                <div className='flex h-12 w-12 items-center justify-center rounded-md border border-[rgb(var(--gray))] bg-[rgb(var(--blackbrown))]'>
                    <ImageIcon className='h-6 w-6 text-[rgb(var(--gray))]' />
                </div>
                <span className='text-sm font-medium text-white'>Выбрать файл</span>
                <input
                    id='article-cover'
                    ref={fileInputRef}
                    type='file'
                    accept='image/*'
                    onChange={handleImageChange}
                    className='hidden'
                />
            </label>

            {error && <p className='mt-2 animate-pulse text-[1.2rem] text-[rgb(var(--red))]'>{error}</p>}

            {previewUrl && (
                <div className='mt-4'>
                    <p className='text-lg mb-2'>Предпросмотр:</p>
                    <img
                        src={previewUrl}
                        alt='Предпросмотр обложки'
                        className='max-h-[300px] max-w-full rounded-xl shadow'
                    />
                </div>
            )}

            {savedImage && (
                <div className='mb-4 mt-4 text-[rgb(var(--green))]'>
                    Обложка сохранена: <strong>{savedImage.name}</strong>
                </div>
            )}
        </div>
    );
}
