"use client"

import { PROJETS } from "@/constants/projets"

const Categorie = ({ name, onSelectCategory, selectedCategory }) => (
    <li key={name} className="flex items-center">
        <img
            src={
            PROJETS.find((project) => project.categoryName === name)
                ?.CatImage || "/assets/categorie.webp"
            }
            alt={name}
            className="object-cover w-10 h-10 mx-4 rounded-full"
        />
        <p>
            <button
            className={`mx-1 font-bold text-gray-700 hover:underline ${
                selectedCategory === name ? "text-indigo-600" : ""
            }`}
            onClick={() => onSelectCategory(name)}
            >
            {name}
            </button>
            <span className="text-sm font-light text-gray-700">
            (
            {name === "All"
                ? PROJETS.length 
                : PROJETS.filter((project) => project.categoryName === name).length}{" "}
            projet
            {(name === "All" ? PROJETS.length : PROJETS.filter((project) => project.categoryName === name).length) > 1 &&
                "s"}
            )
            </span>
        </p>
    </li>
)

export default Categorie;