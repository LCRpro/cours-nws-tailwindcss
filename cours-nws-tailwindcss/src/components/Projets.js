"use client";

import { PROJETS } from "@/constants/projets"
import Projet from '@/components/Projet';
import Categorie from "@/components/Categorie";
import { useEffect, useState } from "react";

const Projets = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredProjects, setFilteredProjects] = useState(PROJETS);

    // Obtenir les catégories uniques à partir des projets
    const categories = [
        "All", 
        ...new Set(PROJETS.map(({categoryName}) => categoryName)),
    ];

    useEffect(() => {
        // Filtrer les projets en fonction de la catégorie sélectionnée
        if (selectedCategory === "All") {
        setFilteredProjects(PROJETS);
        } else {
            setFilteredProjects(
            PROJETS.filter(({categoryName}) => categoryName === selectedCategory)
            );
            }
    }, [selectedCategory])
    
    return (
        <div className="px-6 py-8">
            <div className="container flex justify-between mx-auto">
            <div className="hidden w-4/12 -mx-8 lg:block">
                <div className="px-8">
                <h1 className="mb-4 text-xl font-bold text-gray-700">Stacks</h1>
                <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
                    <ul className="-mx-4">
                    {categories.map((category) => (
                        <Categorie key={`categ-${category}`} name={category} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
                    ))}
                    </ul>
                </div>
                </div>
            </div>

            <div className="w-full lg:w-8/12">
                <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-gray-700 md:text-2xl">
                    Projets {selectedCategory !== "All" && `: ${selectedCategory}`}
                </h1>
                </div>
                <div className="mt-6">
                {filteredProjects.map((project) => (
                    <Projet key={`project-${project.name}`} project={project} />
                ))}

                {filteredProjects.length === 0 && (
                    <p className="text-gray-500">
                    Aucun projet trouvé pour cette catégorie.
                    </p>
                )}
                </div>
            </div>
            </div>
        </div>
)}

export default Projets;