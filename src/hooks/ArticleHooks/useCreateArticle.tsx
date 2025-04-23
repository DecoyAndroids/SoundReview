import { useMutation } from '@tanstack/react-query';
import { CreateArticleDataResponse } from '~/app/types/propsTypes.module';
import { supabase } from '~/lib/supabaseClient';

export function useCreateArticle() {
  return useMutation({
    mutationFn: async ({
      articleName,
      userId,
      articleText,
      articleCover,
    }: {
      articleName: string;
      userId: string;
      articleText: string;
      articleCover: File;
    }) => {
      try {
        const { data: insertData, error: insertError } = await supabase
          .from('User_articles')
          .insert([
            {
              user_id: userId,
              article_name: articleName,
              article_text: articleText,
            },
          ])
          .select();

        if (insertError) throw insertError;

        const SafeInsertData = insertData as CreateArticleDataResponse[]
        
        const articleId = Array.isArray(SafeInsertData) && SafeInsertData[0]?.id
  ? String(SafeInsertData[0].id)
  : '';
        // SafeInsertData[0].id as string
        // Array.isArray(insertData) ? insertData[0].id: ''
        if (!articleId) throw new Error('Не удалось получить ID статьи');

        const extension = articleCover.name.split('.').pop()?.toLowerCase() ?? 'jpg';
        const newFileName = `public/${articleId}.${extension}`;

        const { error: uploadError } = await supabase.storage
          .from('article.preview.pic')
          .upload(newFileName, articleCover, {
            cacheControl: '3600',
            upsert: true,
          });

        if (uploadError) throw uploadError;
        return { articleId, fileName: newFileName };
      } catch (err) {
        throw err;
      }
    },
  });
}