import { Link } from "react-router-dom"
const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 px-6 lg:px-10 py-4 bg-white">
        <div className="flex items-center gap-3 text-primary">
          <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">Nexus ATS</h2>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-slate-600">Registro</span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-slate-200 p-8 lg:p-10">
          <div className="flex flex-col items-center mb-8">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">person_add</span>
            </div>
            <h1 className="text-slate-900 text-2xl font-bold tracking-tight">Crear cuenta</h1>
            <p className="text-slate-500 text-sm mt-2 text-center">
              Completa los datos para crear un usuario nuevo.
            </p>
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-slate-700 text-sm font-medium">ID</label>
                <input
                  type="text"
                  placeholder="Ej: 1"
                  className="w-full px-4 py-3 rounded border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none placeholder:text-slate-400"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-slate-700 text-sm font-medium">Username</label>
                <input
                  type="text"
                  placeholder="Ej: jtorres"
                  className="w-full px-4 py-3 rounded border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-slate-700 text-sm font-medium">Nombre completo</label>
              <input
                type="text"
                placeholder="Ej: Juan Torres"
                className="w-full px-4 py-3 rounded border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none placeholder:text-slate-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-slate-700 text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Ej: juan.torres@am-talento.com"
                className="w-full px-4 py-3 rounded border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none placeholder:text-slate-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-slate-700 text-sm font-medium">Contraseña</label>
              <input
                type="password"
                placeholder="Ej: Admin2026!"
                className="w-full px-4 py-3 rounded border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none placeholder:text-slate-400"
              />
            </div>

            <button
              type="button"
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-4 rounded flex items-center justify-center gap-2 transition-colors"
            >
              Crear cuenta
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>

            <button
              type="button"
              className="w-full border border-slate-200 bg-white text-slate-700 font-semibold py-3 px-4 rounded hover:bg-slate-50 transition-colors"
            >
              <Link to="/">
                Cancelar
              </Link>
            </button>
          </form>
        </div>
      </main>

      <footer className="px-10 py-6 text-center text-slate-400 text-xs">
        <p>© 2024 Nexus Candidate Tracking System. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Register
