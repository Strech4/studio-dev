import React from 'react'

export const EmailTemplate = ({ message, senderEmail, emailObject }) => {
    return (
        <div>
            <h1 
                style={{ 
                    color: "#16433C",
                    marginBottom: "40px",
                    padding: "10px",
                    fontWeight: "bold",
                }}
            >
                {emailObject}
            </h1>
            <p
                style={{
                    color: "#16433C",
                    padding: "10px",
                }}
            >
                {message}
            </p>
            <p
                style={{
                    color: "#16433C",
                    padding: "10px",
                }}
            >
                Envoyé par : {senderEmail}
            </p>
        </div>
    )
}
