import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { end_points } from "../services/api";

function CandidateCreate() {
  function createCandidate(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    data.skills = formData.getAll("skills");
    data.createdAt = new Date();
    fetch(end_points.candidates, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="px-4 py-3 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-slate-900 text-lg font-bold tracking-tight">
            Crear candidato
          </h2>
          <p className="text-xs text-slate-600 mt-0.5">
            Formulario acorde al modelo
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/dashboard/candidates/"
            className="rounded-lg px-3 py-2 text-sm font-semibold border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Cancelar
          </Link>
        </div>
      </div>

      <form onSubmit={createCandidate} className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          <div className="lg:col-span-12">
            <p className="text-xs font-semibold text-slate-500">Datos</p>
          </div>

          <div className="lg:col-span-8">
            <label className="text-xs font-semibold text-slate-600">
              Nombre completo
            </label>
            <input
              name="fullName"
              type="text"
              placeholder="Ej: Ana Martínez"
              className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-slate-400"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="text-xs font-semibold text-slate-600">
              Estado
            </label>
            <select
              name="status"
              className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value={"new"}>new</option>
              <option value={"screening"}>screening</option>
              <option value={"interview"}>interview</option>
              <option value={"interview"}>offer</option>
              <option value={"hired"}>hired</option>
              <option value={"rejected"}>rejected</option>
            </select>
          </div>

          <div className="lg:col-span-6">
            <label className="text-xs font-semibold text-slate-600">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Ej: ana.martinez@gmail.com"
              className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-slate-400"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="text-xs font-semibold text-slate-600">
              Teléfono
            </label>
            <input
              name="phone"
              type="tel"
              placeholder="Ej: +57 301 555 0101"
              className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-slate-400"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="text-xs font-semibold text-slate-600">
              Ubicación
            </label>
            <input
              name="location"
              type="text"
              placeholder="Ej: Bogotá, CO"
              className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-slate-400"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="text-xs font-semibold text-slate-600">
              Senioridad
            </label>
            <select
              name="seniority"
              className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              <option value={"Junior"}>Junior</option>
              <option value={"Mid"}>Mid</option>
              <option value={"Senior"}>Senior</option>
              <option value={"Lead"}>Lead</option>
            </select>
          </div>

          <div className="lg:col-span-3">
            <label className="text-xs font-semibold text-slate-600">
              Años de experiencia
            </label>
            <input
              type="number"
              min="0"
              name="yearsExperience"
              placeholder="Ej: 1"
              className="mt-1 w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-slate-400"
            />
          </div>

          <div className="lg:col-span-3">
            <label className="text-xs font-semibold text-slate-600">
              Oferta aplicada (ID)
            </label>
            <input
              name="appliedOfferId"
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
            <p className="text-xs text-slate-600 mt-0.5">
              Selecciona habilidades
            </p>
          </div>

          <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            <label className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
              <input
                name="skills"
                type="checkbox"
                value={"React"}
                className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/20"
              />
              <span className="text-sm font-medium text-slate-700">React</span>
            </label>
            <label className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
              <input
                name="skills"
                type="checkbox"
                value={"JavaScript"}
                className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/20"
              />
              <span className="text-sm font-medium text-slate-700">
                JavaScript
              </span>
            </label>
            <label className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
              <input
                name="skills"
                type="checkbox"
                value={"HTML"}
                className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/20"
              />
              <span className="text-sm font-medium text-slate-700">HTML</span>
            </label>
            <label className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
              <input
                name="skills"
                type="checkbox"
                value={"CSS"}
                className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/20"
              />
              <span className="text-sm font-medium text-slate-700">CSS</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="rounded-lg mt-10 px-3 py-2 text-sm font-semibold bg-primary hover:bg-primary/90 text-white transition-colors"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default CandidateCreate;
