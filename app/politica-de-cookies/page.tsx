import NavbarGlass from '@/components/ui/NavbarGlass'
import Footer from '@/components/sections/Footer'

export const metadata = {
  title: 'Política de Cookies · MKGENIA',
  description: 'Política de uso de cookies de MKGENIA.',
}

export default function PoliticaCookies() {
  return (
    <>
      <NavbarGlass />
      <main className="min-h-screen bg-slate-50 dark:bg-[#09090b] pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
            Política de Cookies
          </h1>
          <p className="text-sm text-slate-500 mb-12">Última actualización: mayo 2025</p>

          <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un
                sitio web. Permiten que el sitio recuerde tus acciones y preferencias durante un periodo de tiempo.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Cookies que utilizamos</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse mt-2">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-white/[0.08]">
                      <th className="text-left py-3 pr-4 font-semibold text-slate-800 dark:text-slate-200">Nombre</th>
                      <th className="text-left py-3 pr-4 font-semibold text-slate-800 dark:text-slate-200">Tipo</th>
                      <th className="text-left py-3 pr-4 font-semibold text-slate-800 dark:text-slate-200">Finalidad</th>
                      <th className="text-left py-3 font-semibold text-slate-800 dark:text-slate-200">Duración</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-white/[0.05]">
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">mkgenia_cookie_consent</td>
                      <td className="py-3 pr-4">Esencial</td>
                      <td className="py-3 pr-4">Guarda tu preferencia de cookies</td>
                      <td className="py-3">1 año</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-xs">theme</td>
                      <td className="py-3 pr-4">Funcional</td>
                      <td className="py-3 pr-4">Recuerda si prefieres modo claro u oscuro</td>
                      <td className="py-3">Permanente</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Cómo gestionar las cookies</h2>
              <p>
                Puedes controlar y eliminar las cookies desde la configuración de tu navegador. Ten en cuenta que
                desactivar ciertas cookies puede afectar al funcionamiento del sitio web.
              </p>
              <ul className="mt-4 space-y-2 pl-5 list-disc">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Microsoft Edge</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Más información</h2>
              <p>
                Para cualquier consulta sobre nuestra política de cookies, escríbenos a{' '}
                <a href="mailto:hola@mkgenia.com" className="text-accent hover:underline">hola@mkgenia.com</a>.
                También puedes consultar nuestra{' '}
                <a href="/politica-de-privacidad" className="text-accent hover:underline">Política de Privacidad</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
