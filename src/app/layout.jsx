import { EduorProvider } from '../context/EduorContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/css/all.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-toastify/dist/ReactToastify.css'
import '@/styles/css/style.css'
import { ToastContainer, Bounce } from 'react-toastify'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <EduorProvider>
                <body>
                    {children}
                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick={false}
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        transition={Bounce}
                    />
                </body>
            </EduorProvider>
        </html>
    )
}
