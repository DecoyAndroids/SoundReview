'use client';

import dynamic from 'next/dynamic';
import '~/../src/styles/globals.scss';
import { Button } from '~/components/ui/button';
import { useCreateArticle } from '~/hooks/ArticleHooks/useCreateArticle';
import { useAuthStore } from '~/store/authStore';
import { CreateArticleStore } from '~/store/createArticleStore';
import { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

const Editor = dynamic(() => import('~/components/createArticleHolder/CreateArticleHolder'), {
  ssr: false,
});

export default function HomePage() {
  const { mutate: postArticle } = useCreateArticle();
  const articleName = CreateArticleStore(state => state.articleName);
  const articleText = CreateArticleStore(state => state.articleText);
  const articleCover = CreateArticleStore(state => state.articleCover);
  const user = useAuthStore(state => state.user);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsPageLoading(false), 1000); // имитация короткой загрузки
    return () => clearTimeout(timer);
  }, []);

  const handlePost = () => {
    if (typeof articleName === 'string' && typeof articleText === 'string') {
      if (!articleName.trim() || !articleText.trim()) {
        alert('Название и текст статьи не должны быть пустыми');
        return;
      }

      setIsSubmitting(true);
      postArticle(
        {
          articleName,
          userId: user?.id ?? '',
          articleText,
          articleCover: articleCover!,
        },
        {
          onSuccess: () => {
            alert('Ваша статья была успешно отправлена на модерацию');
            window.location.reload();
          },
          onError: () => {
            alert('Произошла ошибка при отправке статьи');
            setIsSubmitting(false);
          },
        }
      );
    }
  };

  if (isPageLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-transparent">
        <Loader2 className="h-10 w-10 animate-spin text-white" />
      </div>
    );
  }

  return (
    <main className="m-[15px] flex h-fit grow flex-col items-center justify-center gap-3 font-ubuntu">
      <Editor />

      <Button
        onClick={handlePost}
        disabled={isSubmitting}
        className="mb-4 w-[15rem] transition-colors duration-200 hover:bg-[rgb(var(--green))] hover:text-[rgb(var(--gray))]"
      >
        {isSubmitting ? (
          <div className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Публикуем...
          </div>
        ) : (
          'Опубликовать'
        )}
      </Button>
    </main>
  );
}
