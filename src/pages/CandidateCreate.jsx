import { Link } from "react-router-dom";

function CandidateCreate() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-slate-900 text-lg font-bold tracking-tight">Crear candidato</h2>
          <p className="text-xs text-slate-600 mt-0.5">Formulario acorde al modelo</p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/dashboard/candidates/"
            className="rounded-lg px-3 py-2 text-sm font-semibold border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Cancelar
          </Link>
          <button
            type="button"
            className="rounded-lg px-3 py-2 text-sm font-semibold bg-primary hover:bg-primary/90 text-white transition-colors"
          >
            Guardar
          </button>
        </div>
      </div>

      <form className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          <div className="lg:col-span-12">
            <p className="text-xs font-semibold text-slate-500">Datos</p>
          </div>

          <div className="lg:col-span-8">
            <label className="text-xs font-semibold text-slate-600">Nombre completo</label>
            <input
              type="text"
              placeholder="Ej: Ana Martínez"
              className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-slate-400"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="text-xs font-semibold text-slate-600">Estado</label>
            <select className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
              <option>new</option>
              <option>screening</option>
              <option>interview</option>
              <option>offer</option>
              <option>hired</option>
              <option>rejected</option>
            </select>
          </div>

          <div className="lg:col-span-6">
            <label className="text-xs font-semibold text-slate-600">Email</label>
            <input
              type="email"
              placeholder="Ej: ana.martinez@gmail.com"
              className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-slate-400"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="text-xs font-semibold text-slate-600">Teléfono</label>
            <input
              type="tel"
              placeholder="Ej: +57 301 555 0101"
              className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-slate-400"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="text-xs font-semibold text-slate-600">Ubicación</label>
            <input
              type="text"
              placeholder="Ej: Bogotá, CO"
              className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-slate-400"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="text-xs font-semibold text-slate-600">Senioridad</label>
            <select className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
              <option>Junior</option>
              <option>Mid</option>
              <option>Senior</option>
              <option>Lead</option>
            </select>
          </div>

          <div className="lg:col-span-3">
            <label className="text-xs font-semibold text-slate-600">Años de experiencia</label>
            <input
              type="number"
              min="0"
              placeholder="Ej: 1"
              className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-slate-400"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="text-xs font-semibold text-slate-600">Oferta aplicada (ID)</label>
            <input
              type="number"
              min="0"
              placeholder="Ej: 45"
              className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-slate-400"
            />
          </div>

          <div className="lg:col-span-12 pt-2">
            <div className="border-t border-slate-200" />
          </div>

          <div className="lg:col-span-12">
            <p className="text-xs font-semibold text-slate-500">Skills</p>
            <p className="text-xs text-slate-600 mt-0.5">Selecciona habilidades</p>
          </div>

          <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            <label className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/20" />
              <span className="text-sm font-medium text-slate-700">React</span>
            </label>
            <label className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/20" />
              <span className="text-sm font-medium text-slate-700">JavaScript</span>
            </label>
            <label className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/20" />
              <span className="text-sm font-medium text-slate-700">HTML</span>
            </label>
            <label className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/20" />
              <span className="text-sm font-medium text-slate-700">CSS</span>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CandidateCreate;
