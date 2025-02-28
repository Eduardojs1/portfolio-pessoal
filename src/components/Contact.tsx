import { Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
      <section id="contato" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-indigo-600 mb-12">
            Entre em Contato
          </h2>

          <div className="flex flex-col items-center space-y-12">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex items-center">
                <Mail className="text-indigo-600" size={24}/>
                <a
                    href="mailto:edujose2201@gmail.com"
                    className="text-gray-800 hover:text-indigo-600 text-lg font-bold ml-2"
                >
                  edujose2201@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex items-center">
                <MapPin className="text-indigo-600" size={20}/>
                <span className="text-lg text-gray-700 ml-2">Belém, PA - Brasil</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}