import Projets from "@/components/Projets";
import Link from "next/link";

const Home = () => (
    <div className="overflow-x-hidden">
      <div className="w-full">
        <div className="flex bg-white" style={{ height: "400px" }}>
          <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                Liam <span className="text-indigo-600">Cariou</span>
              </h2>
              <p className="mt-2 text-sm text-gray-500 md:text-base">
                Développeur Web & SEO
              </p>
              <div className="flex justify-center lg:justify-start mt-6">
                <Link
                  href="/projets"
                  className="px-4 py-3 bg-indigo-600 text-gray-200 text-xs font-semibold rounded hover:bg-indigo-800"
                >
                  Mes projets
                </Link>
                <Link
                  href="/about"
                  className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                >
                  À propos
                </Link>
              </div>
            </div>
          </div>
          <div
            className="hidden lg:block lg:w-1/2"
            style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
          >
            <div
              className="h-full object-cover"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80)",
                backgroundPosition: "bottom",
                backgroundSize: "cover",
              }}
            >
              <div className="h-full bg-black opacity-25"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Mes projets */}
      <Projets />
    </div>
);

export default Home;