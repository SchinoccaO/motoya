import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light text-[#181611] font-display">
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-solid border-b-[#f4f3f0]">
        <div className="px-4 md:px-10 py-3 flex items-center justify-between max-w-[1280px] mx-auto w-full">
          <Link to="/" className="flex items-center gap-4 text-[#181611]">
            <div className="size-8 text-primary">
              <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
                <path clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-[#181611] text-2xl font-bold leading-tight tracking-[-0.015em]">MotoYA</h2>
          </Link>
          <div className="hidden md:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#181611] text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Talleres</a>
              <a className="text-[#181611] text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Repuestos</a>
              <a className="text-[#181611] text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Cómo funciona</a>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-[#d6aa28] transition-colors text-[#181611] text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Buscar talleres</span>
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-[#181611]">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="flex-1 justify-center py-5 bg-white">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto flex-1">
          <div className="@container">
            <div className="flex flex-col-reverse lg:flex-row gap-8 px-4 py-10 md:px-10 items-center">
              <div className="flex flex-col gap-4 text-left flex-1">
                <div className="flex flex-col gap-3">
                  <h1 className="text-[#181611] text-3xl font-black leading-tight tracking-tight @[480px]:text-4xl">
                    El taller de confianza, <span className="text-primary">más cerca.</span>
                  </h1>
                  <p className="text-[#181611] text-base font-normal leading-normal text-gray-600">
                    Encontrá mecánicos y repuestos calificados por la comunidad motera. Transparencia y rapidez para que vuelvas a rodar.
                  </p>
                </div>
                <label className="flex flex-col w-full max-w-[500px]">
                  <div className="flex w-full items-stretch rounded-lg h-12">
                    <div className="flex items-center flex-1 bg-[#f4f3f0] rounded-l-lg border border-transparent focus-within:border-primary/50 transition-colors">
                      <div className="text-[#887f63] flex items-center justify-center pl-3">
                        <span className="material-symbols-outlined text-xl">search</span>
                      </div>
                      <input
                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden text-[#181611] text-sm focus:outline-0 bg-transparent border-none placeholder:text-[#887f63] px-3 h-full font-normal"
                        placeholder="Ej: Cambio de aceite, Frenos..."
                      />
                    </div>
                    <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-r-lg px-5 bg-primary hover:bg-[#d6aa28] transition-colors text-[#181611] text-sm font-bold">
                      <span className="truncate">Buscar</span>
                    </button>
                  </div>
                  <span className="text-xs text-gray-500 mt-2">Ej: Palermo, Belgrano, Centro...</span>
                </label>
                {/* Trust badges */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img
                      alt="User avatar"
                      className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk9LG2c7_8npsPaImWPeYYLpRXmUk6uXcoDt8elvjKLk2Y2fXAoS7azFR-YQbe9PxYo_CW9zjJbPtfyiinMMVMqqrgBF-EkRj8VrZpDFTqdaiXue181fvgOhpcXqlhXN63jc5unhGWxglBt0whKjoM5doeNW0nGpiWg1yvh33UvNEAdEIFETofkm91c8oGt2vtWvji0Pz_u7zbuUv8xnqkph1tuvm9-udRxGCGvMRD_Vt9kwf7WADwswQsVTRXon60-4keDicgue7p"
                    />
                    <img
                      alt="User avatar"
                      className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT6pOXv2GGiQFyRyDsRobweumF46j9DMxAG22RVaVy-MdC6cO1PqtDWSrk8F9bUeualHQvJ01Iv7SqqJym0N-sbxajLgkk7BpVHBACCGcwwDfdyOB-Aticcb2-fhumoY2vi3uyLc15aZMgzfXgUA4ayo4vDjzP8T4FVmhxYQm-WSpKnGNUIqGydKnEf21Fd5ffxIOjv0G5gdHvgproGyjY6ej7foi8_xrQ445zaea8L1EqbnzDegd8VBNZ9iE2Wk1-f3eId6BITyRE"
                    />
                    <img
                      alt="User avatar"
                      className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXgMMit5f3R6hl4f2hHX__INpDfAG_7gfQzHd9ArqE2TkmrGkUpKkyfNLrs5B4MMdCJNVCTI5F7S4h89kvlQL7Du-eE4wLIRf282iMSOfap43U2A2vWbIKDKL9P5hiUK8m-qa9CDfBBJPMtvegzxaTwi34tVyJOtVnNsxmgmY--HfvARVETE_xSVYv8Y1hg9uc2TiPYkjTrrRbI4A-8fQYbW04Pq6-B9CMNKXvwtKwBmenTBNwaqzexr1q3wgryuAEq68wTpAYJyJF"
                    />
                  </div>
                  <p className="text-xs font-medium text-gray-600">+1000 moteros confían en nosotros</p>
                </div>
              </div>
              <div
                className="w-full bg-center bg-no-repeat bg-cover rounded-xl shadow-lg flex-1 max-w-[480px]"
                style={{ 
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwL1G3THtpq6QwJ4058HyUXlDZPghOx_Zc3gpu8zBATUstkbsY26GQHRJmHwrXloT7_ZW8SPDv6xw6iQfRddzlM1QsXtZyhz4kNvML96Sp49SIyo3AyOnkLuS3ChpEWjne1jwcGE4eWNqpPjfqiRwWEC8rhuzNS5IYxisAi6ubmbY2NqoqzCP9xx8gPk-HQ7mR6WD62erbENPr_UqIGkRCJG8WYiliCmExV9FpGDVZ8VEcj-0cgk69o_r_-niquovmSdeNwhWZAcZR")',
                  aspectRatio: '16/10',
                  minHeight: '280px'
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="flex-1 justify-center py-5 bg-[#fcfbf9]">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto flex-1">
          <div className="flex flex-col gap-10 px-4 py-16 md:px-10 @container">
            <div className="flex flex-col gap-4 text-center items-center">
              <h1 className="text-[#181611] tracking-tight text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black max-w-[720px]">
                Cómo funciona
              </h1>
              <p className="text-gray-600 text-lg font-normal leading-normal max-w-[720px]">
                Encontrá lo que necesitás en 3 simples pasos.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-0">
              <div className="flex flex-1 gap-6 rounded-xl border border-[#e5e3dc] bg-white p-8 flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#181611] bg-primary/20 p-4 rounded-full flex items-center justify-center size-16">
                  <span className="material-symbols-outlined text-4xl text-primary">location_on</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-[#181611] text-xl font-bold leading-tight">1. Elegí tu zona</h2>
                  <p className="text-gray-600 text-base font-normal leading-relaxed">
                    Filtrá por ubicación y encontrá las opciones más cercanas a vos, ya sea taller o casa de repuestos.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-6 rounded-xl border border-[#e5e3dc] bg-white p-8 flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#181611] bg-primary/20 p-4 rounded-full flex items-center justify-center size-16">
                  <span className="material-symbols-outlined text-4xl text-primary">star</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-[#181611] text-xl font-bold leading-tight">2. Compará reseñas</h2>
                  <p className="text-gray-600 text-base font-normal leading-relaxed">
                    Lee opiniones 100% reales de otros motociclistas sobre el servicio, precios y atención.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-6 rounded-xl border border-[#e5e3dc] bg-white p-8 flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#181611] bg-primary/20 p-4 rounded-full flex items-center justify-center size-16">
                  <span className="material-symbols-outlined text-4xl text-primary">build</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-[#181611] text-xl font-bold leading-tight">3. Repará tu moto</h2>
                  <p className="text-gray-600 text-base font-normal leading-relaxed">
                    Contactá al taller directamente a través de WhatsApp o llamada y solucioná tu problema.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Props Section */}
     {/* Value Props Section */}
<div className="flex-1 justify-center py-5 bg-white">
  <div className="layout-content-container max-w-[1280px] mx-auto px-4 md:px-10 py-16">

    {/* Layout principal */}
    <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 items-start">

      {/* Columna izquierda */}
      <div className="flex flex-col gap-4">
        <h1 className="text-[#181611] tracking-tight text-[32px] font-bold leading-tight">
          Por qué elegir MotoYA
        </h1>

        <p className="text-gray-600 text-lg">
          Transparencia y confianza para tu moto.
        </p>

        <button className="text-primary font-bold hover:underline flex items-center gap-1 mt-2 w-fit">
          Ver todos los beneficios
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>

      {/* Columna derecha: cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="flex gap-4 rounded-lg bg-[#f8f7f6] p-6 hover:bg-[#f0efec] transition-colors">
          <div className="bg-white p-2 rounded-lg shadow-sm">
            <span className="material-symbols-outlined text-primary">verified_user</span>
          </div>
          <div>
            <h2 className="text-[#181611] text-lg font-bold">Reseñas Reales</h2>
            <p className="text-gray-600 text-sm">
              Opiniones verificadas de usuarios reales. Adiós a las sorpresas.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex gap-4 rounded-lg bg-[#f8f7f6] p-6 hover:bg-[#f0efec] transition-colors">
          <div className="bg-white p-2 rounded-lg shadow-sm">
            <span className="material-symbols-outlined text-primary">schedule</span>
          </div>
          <div>
            <h2 className="text-[#181611] text-lg font-bold">Tiempos Claros</h2>
            <p className="text-gray-600 text-sm">
              Información sobre disponibilidad y demoras promedio del taller.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex gap-4 rounded-lg bg-[#f8f7f6] p-6 hover:bg-[#f0efec] transition-colors">
          <div className="bg-white p-2 rounded-lg shadow-sm">
            <span className="material-symbols-outlined text-primary">near_me</span>
          </div>
          <div>
            <h2 className="text-[#181611] text-lg font-bold">Cercanía</h2>
            <p className="text-gray-600 text-sm">
              Geolocalización precisa para urgencias en la ruta o ciudad.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex gap-4 rounded-lg bg-[#f8f7f6] p-6 hover:bg-[#f0efec] transition-colors">
          <div className="bg-white p-2 rounded-lg shadow-sm">
            <span className="material-symbols-outlined text-primary">attach_money</span>
          </div>
          <div>
            <h2 className="text-[#181611] text-lg font-bold">Precios Transparentes</h2>
            <p className="text-gray-600 text-sm">
              Rangos de precios estimados por tipo de servicio.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="flex gap-4 rounded-lg bg-[#f8f7f6] p-6 hover:bg-[#f0efec] transition-colors">
          <div className="bg-white p-2 rounded-lg shadow-sm">
            <span className="material-symbols-outlined text-primary">groups</span>
          </div>
          <div>
            <h2 className="text-[#181611] text-lg font-bold">Comunidad</h2>
            <p className="text-gray-600 text-sm">
              Foros y preguntas frecuentes respondidas por expertos.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="flex gap-4 rounded-lg bg-[#f8f7f6] p-6 hover:bg-[#f0efec] transition-colors">
          <div className="bg-white p-2 rounded-lg shadow-sm">
            <span className="material-symbols-outlined text-primary">motorcycle</span>
          </div>
          <div>
            <h2 className="text-[#181611] text-lg font-bold">Especialistas</h2>
            <p className="text-gray-600 text-sm">
              Filtrá por marca y modelo de tu moto.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      {/* CTA Section */}
      <div className="flex-1 justify-center py-5 bg-[#181611] text-white">
        <div className="layout-content-container flex flex-col max-w-[1280px] mx-auto flex-1">
          <div className="@container">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-4 py-16 md:px-10">
              <div className="flex flex-col gap-4 text-center md:text-left max-w-[600px]">
                <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black">
                  ¿Tenés un taller mecánico?
                </h1>
                <p className="text-gray-300 text-lg font-normal leading-normal">
                  Sumate a MotoYA y llegá a más clientes en tu zona. Gestioná tus turnos y construí tu reputación online.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/registro-taller"
                  className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-[#d6aa28] transition-colors text-[#181611] text-base font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Registrar mi taller</span>
                </Link>
                <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 border border-white/20 hover:bg-white/10 transition-colors text-white text-base font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Más información</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-[#f4f3f0]">
        <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[#181611]">
                <div className="size-6 text-primary">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
                    <path clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fillRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-xl font-bold">MotoYA</span>
              </div>
              <p className="text-gray-500 text-sm">La plataforma líder para conectar motociclistas con talleres de confianza.</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-[#181611]">Compañía</h4>
              <a className="text-gray-600 hover:text-primary text-sm" href="#">Sobre nosotros</a>
              <a className="text-gray-600 hover:text-primary text-sm" href="#">Carreras</a>
              <a className="text-gray-600 hover:text-primary text-sm" href="#">Blog</a>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-[#181611]">Soporte</h4>
              <a className="text-gray-600 hover:text-primary text-sm" href="#">Ayuda</a>
              <a className="text-gray-600 hover:text-primary text-sm" href="#">Términos y condiciones</a>
              <a className="text-gray-600 hover:text-primary text-sm" href="#">Privacidad</a>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-[#181611]">Síguenos</h4>
              <div className="flex gap-4">
                <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                  <span className="sr-only">Facebook</span>
                  <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                  </svg>
                </a>
                <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                  <span className="sr-only">Instagram</span>
                  <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.409-.06 3.809-.06h.63zm1.673 5.378l-1.29 1.726c-.372-.111-.763-.17-1.162-.17-2.21 0-4.006 1.795-4.006 4.006 0 2.21 1.796 4.007 4.006 4.007 2.21 0 4.006-1.797 4.006-4.007 0-1.144-.482-2.181-1.246-2.91l1.196-1.61c.07-.094.025-.233-.092-.25l-1.318-.192zm-5.679 5.562c0 1.107.897 2.006 2.006 2.006 1.106 0 2.006-.899 2.006-2.006 0-1.107-.899-2.006-2.006-2.006-1.109 0-2.006.899-2.006 2.006z" fillRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-100 pt-8 text-center text-sm text-gray-500">
            <p>© 2023 MotoYA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
