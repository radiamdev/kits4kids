'use client'

import { useFormik } from 'formik'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { ContactSchema } from '@/lib/utils'

const ContactSection2 = () => {
    const [isLoading, setIsLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
            honeypot: '', // anti-spam
        },
        validationSchema: ContactSchema,
        onSubmit: async (values, { resetForm }) => {
            if (values.honeypot) {
                toast.error("Erreur d'envoi")
                return
            }

            setIsLoading(true)
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                })

                if (res.ok) {
                    toast.success('✉️ Message envoyé avec succès !')
                    resetForm()
                } else {
                    toast.error('❌ Une erreur est survenue !')
                }
            } catch (err) {
                console.error(err)
                toast.error('⚠️ Erreur de connexion au serveur')
            } finally {
                setIsLoading(false)
            }
        },
    })

    return (
        <section className="tf__contact_3 mt_100">
            <div className="container">
                <div className="tf__contact_3_area">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="tf__contact_3_text">
                                <h2>
                                    Empowering you to <span>reach</span> your
                                    potential
                                </h2>
                                <p>
                                    Together as a family, we all strive to
                                    empower each other...
                                </p>
                                <a href="#!">apply now</a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <form
                                className="tf__contact_3_form"
                                onSubmit={formik.handleSubmit}
                            >
                                <div className="row">
                                    <div className="col-12">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name*"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.name}
                                        />
                                        {formik.touched.name &&
                                            formik.errors.name && (
                                                <p className="text-danger">
                                                    {formik.errors.name}
                                                </p>
                                            )}
                                    </div>

                                    {/* Anti-spam */}
                                    <input
                                        type="text"
                                        name="honeypot"
                                        style={{ display: 'none' }}
                                        onChange={formik.handleChange}
                                        value={formik.values.honeypot}
                                    />

                                    <div className="col-12">
                                        <input
                                            type="text"
                                            name="subject"
                                            placeholder="Subject*"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.subject}
                                        />
                                        {formik.touched.subject &&
                                            formik.errors.subject && (
                                                <p className="text-danger">
                                                    {formik.errors.subject}
                                                </p>
                                            )}
                                    </div>
                                    <div className="col-12">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email*"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}
                                        />
                                        {formik.touched.email &&
                                            formik.errors.email && (
                                                <p className="text-danger">
                                                    {formik.errors.email}
                                                </p>
                                            )}
                                    </div>
                                    <div className="col-12">
                                        <textarea
                                            name="message"
                                            placeholder="Message"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.message}
                                        />
                                        {formik.touched.message &&
                                            formik.errors.message && (
                                                <p className="text-danger">
                                                    {formik.errors.message}
                                                </p>
                                            )}
                                    </div>
                                    <div className="col-12 mt-3">
                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                        >
                                            {isLoading
                                                ? 'Sending...'
                                                : 'Send message'}
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection2
