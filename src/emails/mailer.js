const sgMail = require('@sendgrid/mail')

sgMail.setApiKey('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')

const sendPasswordVerificationCode = (email, firstName, type, verificationCode)=>{
    console.log(email, firstName, type, verificationCode)
    sgMail.send({
        to: email,
        from: 'youssefrashad119@gmail.com',
        subject: 'Forget Password!',
        text: `Hello ${firstName}, ur verification code is  ${verificationCode}`
    })
}


module.exports = {
    sendPasswordVerificationCode
}