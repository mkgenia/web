import NavbarGlass from '@/components/ui/NavbarGlass'
import Footer from '@/components/sections/Footer'

export const metadata = {
  title: 'Política de Privacidad · MKGENIA',
  description: 'Política de privacidad y tratamiento de datos personales de MKGENIA.',
}

export default function PoliticaPrivacidad() {
  return (
    <>
      <NavbarGlass />
      <main className="min-h-screen bg-slate-50 dark:bg-[#09090b] pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
            Política de Privacidad
          </h1>
          <p className="text-sm text-slate-500 mb-12">Última actualización: mayo 2025</p>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">1. Responsable del tratamiento</h2>
              <p>
                <strong>MKGENIA</strong> (en adelante, &quot;nosotros&quot;) es la entidad responsable del tratamiento de
                los datos personales recogidos a través del sitio web <strong>mkgenia.com</strong>.
              </p>
              <ul className="mt-3 space-y-1 list-none pl-0">
                <li><span className="font-medium">Email de contacto:</span> hola@mkgenia.com</li>
                <li><span className="font-medium">Web:</span> https://mkgenia.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">2. Datos que recopilamos</h2>
              <p>Recopilamos los siguientes datos cuando utilizas nuestros formularios de contacto:</p>
              <ul className="mt-3 space-y-1 pl-5 list-disc">
                <li>Nombre y apellidos</li>
                <li>Dirección de correo electrónico</li>
                <li>Nombre de la empresa (opcional)</li>
                <li>Número de teléfono (opcional)</li>
                <li>Mensaje o consulta</li>
              </ul>
              <p className="mt-3">
                También recopilamos datos de navegación de forma anónima mediante cookies técnicas (ver{' '}
                <a href="/politica-de-cookies" className="text-accent hover:underline">Política de Cookies</a>).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">3. Finalidad del tratamiento</h2>
              <p>Utilizamos tus datos para:</p>
              <ul className="mt-3 space-y-1 pl-5 list-disc">
                <li>Gestionar y responder a tu consulta de contacto</li>
                <li>Informarte sobre nuestros servicios si nos has dado tu consentimiento</li>
                <li>Mejorar el funcionamiento de nuestro sitio web</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">4. Base legal del tratamiento</h2>
              <p>
                El tratamiento de tus datos se basa en el <strong>consentimiento</strong> que prestas al enviarnos un
                formulario, así como en el <strong>interés legítimo</strong> de MKGENIA para gestionar solicitudes
                comerciales.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">5. Conservación de los datos</h2>
              <p>
                Conservamos tus datos durante el tiempo necesario para gestionar tu consulta y, en caso de relación
                comercial, durante el plazo legalmente exigible. Una vez transcurrido este periodo, los datos serán
                eliminados de forma segura.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">6. Tus derechos</h2>
              <p>Tienes derecho a:</p>
              <ul className="mt-3 space-y-1 pl-5 list-disc">
                <li><strong>Acceso:</strong> conocer qué datos tuyos tenemos</li>
                <li><strong>Rectificación:</strong> corregir datos incorrectos</li>
                <li><strong>Supresión:</strong> solicitar la eliminación de tus datos</li>
                <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos</li>
                <li><strong>Portabilidad:</strong> recibir tus datos en formato electrónico</li>
              </ul>
              <p className="mt-3">
                Para ejercer cualquiera de estos derechos, escríbenos a{' '}
                <a href="mailto:hola@mkgenia.com" className="text-accent hover:underline">hola@mkgenia.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">7. Seguridad</h2>
              <p>
                Adoptamos medidas técnicas y organizativas adecuadas para proteger tus datos frente al acceso no
                autorizado, pérdida o destrucción. No vendemos ni cedemos tus datos a terceros salvo obligación
                legal.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
