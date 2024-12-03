import { notFound } from "next/navigation";
import { PROJETS } from "@/constants/projets";

export default async function ProjetSlug({ params }) {
  const slug = params.slug;
  const projet = PROJETS.find((projet) => projet.slug === slug);

  if (!slug || !projet) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-12 ">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-64 w-full bg-cover bg-center" style={{ backgroundImage: `url(${projet.image})` }}>
          <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
            <h1 className="text-4xl text-white font-bold drop-shadow-lg">{projet.name}</h1>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">À propos du projet</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">{projet.description}</p>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">{projet.txt2}</p>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">{projet.txt3}</p>
          <div className="border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-500">
              Catégorie :{" "}
              <span className="font-semibold text-indigo-600">
                {projet.categoryName}
              </span>
            </p>
            <p className="text-sm text-gray-500">
              Date :{" "}
              <span className="font-semibold text-indigo-600">
                {projet.date}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <a
          href="/projets"
          className="px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg shadow hover:bg-indigo-700"
        >
          Retour aux projets
        </a>
      </div>
    </div>
  );
}