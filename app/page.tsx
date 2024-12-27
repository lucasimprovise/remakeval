import Link from 'next/link';
import { news } from '@/app/data/news';

export default function Home() {
    return (
        <main className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Actualités Valorant</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((article) => (
                    <Link
                        key={article.id}
                        href={`/news/${article.id}`}
                        className="block rounded-lg shadow-md hover:shadow-xl transition bg-white"
                    >
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-40 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{article.title}</h2>
                            <p className="text-sm text-gray-500 mt-2">
                                {article.content.substring(0, 60)}...
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
