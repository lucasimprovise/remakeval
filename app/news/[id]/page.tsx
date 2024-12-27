// app/news/[id]/page.tsx
import { news } from '@/app/data/news';
import { notFound } from 'next/navigation';

export default function NewsDetail({ params }: { params: { id: string } }) {
    const article = news.find((item) => item.id === params.id);

    if (!article) {
        notFound(); // Gère le cas où l'actualité n'existe pas
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
            <p className="text-lg">{article.content}</p>
        </div>
    );
}