import { GraduationCap, Book, Anvil, Languages, MapPin, Map } from 'lucide-react';


export function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sobre Mim</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <img
                      src="https://media1.tenor.com/m/TDY3rDhJ6MMAAAAC/racoon.gif"
                      alt="Profile"
                      className="rounded-lg shadow-lg"
                  />
              </div>
              <div className="space-y-6">
                  <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                      <div className="flex items-center mb-4">
                          <GraduationCap className="text-blue-500" size={20}/>
                          <h3 className="font-bold text-xl text-gray-800 ml-2">Educação</h3>
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                          <Book className="text-blue-500" size={20}/>
                          <span className="text-gray-700 ml-2">Cursando Bacharel em Sistemas da Informação. (7º semestre)</span>
                      </div>
                      <div className="flex items-center text-gray-500 mb-2">
                          <Anvil className="text-blue-500" size={20}/>
                          <span className="text-gray-700 ml-2">Universidade Federal Rural da Amazônia.</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                          <Languages className="text-blue-500" size={20}/>
                          <span
                              className="text-gray-700 ml-2">Graduação Aslan Idiomas - Inglês do Básico ao Avançado.</span>
                      </div>
                  </div>
                  <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
                      <div className="flex items-center mb-4">
                          <MapPin className="text-green-500" size={20}/>
                          <h3 className="font-bold text-xl text-gray-800 ml-2">Localização</h3>
                      </div>
                      <div className="flex items-center text-gray-600">
                          <Map className="text-green-500" size={20}/>
                          <span className="text-gray-700 ml-2">Belém, PA - Brasil</span>
                      </div>
                  </div>
              </div>

          </div>
      </div>
    </section>
  );
}