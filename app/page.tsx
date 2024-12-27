import { news } from "./data/news";

export default function HomePage() {
    return (
        <main className="p-4">
            <h1 className="text-3xl font-bold mb-4">Dernières Actualités</h1>
            <div className="space-y-4">
                {news.map((item) => (
                    <div key={item.id} className="p-4 border rounded-lg bg-gray-100 shadow">
                        <h2 className="text-xl font-semibold">{item.title}</h2>
                        <p className="text-gray-700">{item.content}</p>
                        <div className="text-sm text-gray-500 mt-2">
                            Publié le {item.date} par {item.author}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}