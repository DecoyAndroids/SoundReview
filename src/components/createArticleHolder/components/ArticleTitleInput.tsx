'use client';

import { useState, useEffect } from 'react';
import { Input } from '../../../../axios/components/ui/input';
import { Label } from '../../../../axios/components/ui/label';
import { CreateArticleStore } from '~/store/createArticleStore';
import { Separator } from '~/components/ui/separator';

export default function ArticleTitleInput() {
  const setArticleName = CreateArticleStore((state) => state.setArticleName);
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const [savedTitle, setSavedTitle] = useState<string | null>(null);

  // Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      if (title.length === 0) return;

      if (title.length < 16 || title.length > 100) {
        setError('Название должно быть от 16 до 100 символов');
        setSavedTitle(null);
        return;
      }

      setArticleName(title);
      setSavedTitle(title);
      setError('');
    }, 500); // 500ms задержка

    return () => clearTimeout(handler);
  }, [title, setArticleName]);

  return (
    <div className="w-full mx-auto">
      <Label htmlFor="article-title" className="text-[2rem] font-semibold">
        Название статьи:
      </Label>
      <Input
        id="article-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Введите название..."
        className="w-full mb-2 bg-[rgb(var(--blackbrown))] border border-[rgb(var(--gray))] hover:border-[rgb(var(--gray-dark))] focus:border-[rgb(var(--gray-darker))] transition-colors duration-200"
      />
      {error && (
        <p className="text-[rgb(var(--red))] animate-pulse text-[1.2rem]">{error}</p>
      )}
      {savedTitle && !error && (
        <p className="text-[rgb(var(--green))] text-[1.1rem] mt-1">
          Сохранено: <strong>{savedTitle}</strong>
        </p>
      )}
    </div>
  );
}
