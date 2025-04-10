'use client'

import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import { ContactSchema } from '@/lib/utils'

const ContactForm = () => {
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
                const res = await fetch('http://localhost:3001/send-email', {
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
        <form onSubmit={formik.handleSubmit}>
            <div className="row">
                <div className="col-xl-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <p className="text-danger">{formik.errors.name}</p>
                    )}
                </div>
                <div className="col-xl-6">
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject*"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.subject}
                    />
                    {formik.touched.subject && formik.errors.subject && (
                        <p className="text-danger">{formik.errors.subject}</p>
                    )}
                </div>
                <div className="col-xl-12">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className="text-danger">{formik.errors.email}</p>
                    )}
                </div>
                <div className="col-xl-12">
                    <textarea
                        rows={4}
                        name="message"
                        placeholder="Message"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                    />
                    {formik.touched.message && formik.errors.message && (
                        <p className="text-danger">{formik.errors.message}</p>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="common_btn_2"
                    >
                        {isLoading ? 'Sending...' : 'Send message'}
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ContactForm
