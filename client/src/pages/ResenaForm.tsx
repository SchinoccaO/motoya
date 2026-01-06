import { Link } from 'react-router-dom'

export default function ResenaForm() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#181611] dark:text-gray-100 min-h-screen flex flex-col">
      {/* TopNavBar */}
      <div className="w-full bg-white dark:bg-card-dark border-b border-[#f4f3f0] dark:border-[#3f3b2e]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-3">
          <header className="flex items-center justify-between whitespace-nowrap">
            <Link to="/" className="flex items-center gap-4">
              <div className="size-8 text-primary">
                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"
                    fill="currentColor"
                  ></path>
                  <path
                    clipRule="evenodd"
                    d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h2 className="text-[#181611] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">MotoYA</h2>
            </Link>
            <div className="hidden md:flex flex-1 justify-end gap-8">
              <div className="flex items-center gap-9">
                <a className="text-[#181611] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">
                  Talleres
                </a>
                <a className="text-[#181611] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">
                  Repuestos
                </a>
                <a className="text-[#181611] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">
                  Comunidad
                </a>
                <Link
                  to="/registro-taller"
                  className="text-[#181611] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors"
                >
                  Registrar taller
                </Link>
              </div>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100")',
                }}
              ></div>
            </div>
            <div className="flex md:hidden">
              <span className="material-symbols-outlined text-[#181611] dark:text-white cursor-pointer">menu</span>
            </div>
          </header>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex justify-center py-8 px-4 sm:px-6">
        <div className="w-full max-w-[640px]">
          {/* Breadcrumbs / Back button */}
          <div className="mb-6 flex items-center gap-2">
            <Link
              to="/"
              className="flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-primary transition-colors dark:text-gray-400"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
              Volver al taller
            </Link>
          </div>

          {/* Main Form Card */}
          <main className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-[#f4f3f0] dark:border-[#3f3b2e] overflow-hidden">
            {/* PageHeading */}
            <div className="p-6 md:p-8 pb-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-[#181611] dark:text-white tracking-tight text-[32px] font-bold leading-tight">
                  Escribe tu reseña
                </h1>
                <p className="text-[#887f63] dark:text-gray-400 text-sm font-normal leading-normal flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">storefront</span>
                  Estás calificando a{' '}
                  <span className="font-semibold text-[#181611] dark:text-gray-200">MotoRepuestos Central</span>
                </p>
              </div>
            </div>

            <form className="flex flex-col">
              {/* Rating Section */}
              <div className="px-6 md:px-8 py-4">
                <h2 className="text-[#181611] dark:text-gray-100 text-lg font-bold leading-tight tracking-[-0.015em] pb-3">
                  ¿Qué tal fue tu experiencia?
                </h2>
                <div className="flex gap-2 items-center">
                  {/* Interactive Stars (simulated state) */}
                  {[1, 2, 3, 4].map((star) => (
                    <button key={star} className="group focus:outline-none transition-transform active:scale-95" type="button">
                      <span className="material-symbols-outlined text-primary text-4xl filled">star</span>
                    </button>
                  ))}
                  <button className="group focus:outline-none transition-transform active:scale-95" type="button">
                    <span className="material-symbols-outlined text-gray-300 dark:text-gray-600 text-4xl hover:text-primary/50 transition-colors">
                      star
                    </span>
                  </button>
                  <span className="ml-3 text-sm font-medium text-primary">Muy buena</span>
                </div>
              </div>

              <div className="border-t border-gray-100 dark:border-gray-800 mx-8 my-2"></div>

              {/* Service Type Section */}
              <div className="px-6 md:px-8 py-4">
                <h2 className="text-[#181611] dark:text-gray-100 text-lg font-bold leading-tight tracking-[-0.015em] pb-4">
                  ¿Qué servicio realizaste?
                </h2>
                <div className="flex flex-wrap gap-3">
                  <label className="cursor-pointer">
                    <input className="peer sr-only" name="service" type="radio" defaultChecked />
                    <span className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium border border-primary bg-primary/10 text-primary-dark dark:text-primary peer-checked:bg-primary peer-checked:text-black peer-checked:border-primary transition-all">
                      Mantenimiento
                    </span>
                  </label>
                  <label className="cursor-pointer">
                    <input className="peer sr-only" name="service" type="radio" />
                    <span className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent text-gray-600 dark:text-gray-400 peer-checked:bg-primary peer-checked:text-black peer-checked:border-primary hover:border-primary/50 transition-all">
                      Reparación
                    </span>
                  </label>
                  <label className="cursor-pointer">
                    <input className="peer sr-only" name="service" type="radio" />
                    <span className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent text-gray-600 dark:text-gray-400 peer-checked:bg-primary peer-checked:text-black peer-checked:border-primary hover:border-primary/50 transition-all">
                      Compra de Repuestos
                    </span>
                  </label>
                  <label className="cursor-pointer">
                    <input className="peer sr-only" name="service" type="radio" />
                    <span className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent text-gray-600 dark:text-gray-400 peer-checked:bg-primary peer-checked:text-black peer-checked:border-primary hover:border-primary/50 transition-all">
                      Otro
                    </span>
                  </label>
                </div>
              </div>

              {/* Time Transparency Section */}
              <div className="px-6 md:px-8 py-4">
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-[#181611] dark:text-gray-100 text-lg font-bold leading-tight tracking-[-0.015em]">
                    Cumplimiento de plazos
                  </h2>
                  <span
                    className="material-symbols-outlined text-gray-400 text-[20px]"
                    title="Ayuda a otros usuarios a saber si cumplen con los tiempos"
                  >
                    info
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-background-light dark:bg-background-dark/50 p-4 rounded-lg border border-gray-100 dark:border-gray-800">
                  {/* Promised Time */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Tiempo Prometido</label>
                    <div className="relative">
                      <input
                        className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-card-dark text-gray-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary text-sm py-2.5 pl-3 pr-10"
                        placeholder="Ej: 2 días"
                        type="text"
                      />
                      <span className="material-symbols-outlined absolute right-3 top-2.5 text-gray-400 text-[20px]">
                        calendar_clock
                      </span>
                    </div>
                  </div>
                  {/* Actual Time */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Tiempo Real</label>
                    <div className="relative">
                      <input
                        className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-card-dark text-gray-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary text-sm py-2.5 pl-3 pr-10"
                        placeholder="Ej: 3 días"
                        type="text"
                      />
                      <span className="material-symbols-outlined absolute right-3 top-2.5 text-gray-400 text-[20px]">
                        history
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      Comparte si el taller cumplió con el tiempo estimado inicial.
                    </p>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="px-6 md:px-8 py-4 pb-6">
                <h2 className="text-[#181611] dark:text-gray-100 text-lg font-bold leading-tight tracking-[-0.015em] pb-3">
                  Tu opinión en breve
                </h2>
                <div className="relative">
                  <textarea
                    className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-card-dark text-gray-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary text-sm p-3 resize-y min-h-[120px]"
                    placeholder="Cuéntanos más detalles sobre el servicio, la atención y el precio..."
                    rows={6}
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-gray-400">0/280</div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="px-6 md:px-8 py-6 bg-gray-50 dark:bg-[#252015] border-t border-[#f4f3f0] dark:border-[#3f3b2e] flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
                <button
                  className="text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-4 py-2"
                  type="button"
                >
                  Cancelar
                </button>
                <button className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-[#181611] font-bold text-sm px-8 py-3 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2" type="button">
                  <span>Publicar Reseña</span>
                  <span className="material-symbols-outlined text-[18px] font-bold">send</span>
                </button>
              </div>
            </form>
          </main>

          {/* Trust Indicator */}
          <div className="mt-6 flex justify-center items-center gap-2 text-xs text-gray-400">
            <span className="material-symbols-outlined text-[16px]">verified_user</span>
            <span>Tu reseña ayuda a miles de motociclistas a elegir mejor.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
