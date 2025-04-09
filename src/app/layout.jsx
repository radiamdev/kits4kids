import { EduorProvider } from '../context/EduorContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/css/all.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-toastify/dist/ReactToastify.css'
import '@/styles/css/style.css'
import { ToastContainer } from 'react-toastify'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <EduorProvider>
                <body>
                    {children}
                    <ToastContainer />
                </body>
            </EduorProvider>
        </html>
    )
}
