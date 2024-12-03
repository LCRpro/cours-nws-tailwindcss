import Link from 'next/link';

const Projet = ({project}) => (
      <div
        key={project.slug}
        className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md mb-6"
      >
        <div className="flex items-center justify-between">
          <span className="font-light text-gray-600">
            {project.date || "Date inconnue"}
          </span>
          <span className="px-2 py-1 font-bold text-gray-100 bg-indigo-600 rounded">
            {project.categoryName}
          </span>
        </div>
        <div className="mt-2">
          <h2 className="text-2xl font-bold text-gray-700 hover:underline">
            {project.name}
          </h2>
          <p className="mt-2 text-gray-600">{project.description}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Link href={`/projets/${project.slug}`} className="text-blue-500 hover:underline">
            Voir plus
          </Link>
          <div>
            
            <h1 className="font-bold text-gray-700 hover:underline">
              {project.author || "Auteur inconnu"}
            </h1>
          </div>
        </div>
      </div>
  );

export default Projet;