import React, { useState } from 'react'
import { BiCheck, BiSend } from 'react-icons/bi'

const Contact = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [topic, setTopic] = useState<string>("")
    const [subject, setSubject] = useState<string>("")
    const [message, setMessage] = useState<string>(``)
    const [isSending, setIsSending] = useState<boolean>(false)
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSending(true)
        let mailSubject
        if (topic === "Autre") {
            mailSubject = subject
        } else {
            mailSubject = topic
        }
        const messageContent = message.split(/\r?\n/)
        fetch('https://atmailer.herokuapp.com/send', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                topic: topic,
                subject: mailSubject,
                message: messageContent
            })
        }).then(res => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                setIsSending(false)
                setIsSubmitted(true)
                setName("")
                setEmail("")
                setTopic("")
                setSubject("")
                setMessage("")
            } else {
                console.log('Response failed')
                setIsSending(false)
                setIsError(true)
            }
        }).catch((err:any) => {
            setIsSending(false)
            setIsError(true)
            console.log('Response failed!')
            console.log(err)
        }) 
    }

    const topics = [
        {value: "", label: "Merci de choisir un motif de contact"},
        {value: "Offre d'emploi", label: "Offre d'emploi"},
        {value: "Collaboration", label: "Collaboration"},
        {value: "Question", label: "Question"},
        {value: "Bug", label: "Bug"},
        {value: "Autre", label: "Autre"},
    ]

    const Dropdown = ({options, value, onChange}:any) => {
        return (
            <select
                className={`${!value ? "text-gray-400" : "text-gray-900"} bg-gray-50 border border-gray-300 font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-2`}
                value={value}
                onChange={e => onChange(e.target.value)}
            >
                {options.map((option:any) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        )
    }

    return (
        <section id="contact" className="relative z-0 mx-10 antialiased lg:mx-20">
            <hr />
            <div>
                <h3 className="py-6 text-4xl text-white text-center">
                    Me contacter
                </h3>
                <div className='container relative flex flex-col px-6 mx-auto my-6 space-y-8'>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="mb-6">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Votre nom *</label>
                                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="bg-gray-50 border border-gray-300 font-medium text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Jean DUPONT" required />
                            </div> 
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Votre adresse email *</label>
                                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 font-medium text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="jean.dupont@company.com" required />
                            </div> 
                        </div>
                        <div className="grid gap-6 mb-6">
                            <div className="">
                                <label htmlFor="motif" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Motif du contact *</label>
                                <Dropdown options={topics} value={topic} onChange={setTopic} />
                            </div> 
                            {
                                topic === "Autre" && (
                                    <div className="">
                                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Sujet du message *</label>
                                        <input type="text" id="subject" value={subject} onChange={e => setSubject(e.target.value)} className="bg-gray-50 border border-gray-300 font-medium text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sujet du message" required />
                                    </div>
                                )
                            }
                            <div className="">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Sujet du message *</label>
                                <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} className="bg-gray-50 h-32 border border-gray-300 font-medium text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sujet du message" required />
                            </div>
                        </div>
                        <div className={`flex ${(!isSubmitted && !isError) ? "justify-end" : "justify-between"}`}>
                            {
                                isSubmitted &&
                                <div id="toast-success" className="flex items-center p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                                    <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                        <span className="sr-only">Check icon</span>
                                    </div>
                                    <div className="ml-3 text-sm font-normal mr-2">Votre message a bien été envoyé. J'y répondrai dès que possible. Merci pour l'attention que vous me portez.</div>
                                    <button onClick={() => setIsSubmitted(false)} type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
                                        <span className="sr-only">Close</span>
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>
                            }
                            {
                                isError &&
                                <div id="toast-danger" className="flex items-center p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                                    <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <span className="sr-only">Error icon</span>
                                    </div>
                                    <div className="ml-3 text-sm font-normal mr-2">Une erreur s'est produite, merci de vérifier votre connexion ainsi que les éléments du formulaire et de réessayer...</div>
                                    <button onClick={() => setIsError(false)} type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
                                        <span className="sr-only">Close</span>
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>
                            }
                            <div>
                                <button type="submit" className={`text-white ${isSubmitted && "bg-green-500"} ${(!isError && !isSubmitted) && "bg-blue-700"} hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center`} disabled={isSending || isSubmitted}>
                                    {isSending ? 
                                        <>
                                            <svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                            </svg>
                                            Envoi en cours...
                                        </>
                                        :
                                        isSubmitted ? <><span className='mr-1'><BiCheck /></span><span>Message envoyé !</span></> : <><span className='mr-1'>Envoyer</span><span><BiSend /></span></>
                                    }
                                </button>
                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact