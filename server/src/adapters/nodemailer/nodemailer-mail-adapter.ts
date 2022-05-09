

import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4c32cefa5520f0",
      pass: "d6d711982e639e"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail ({subject, body}:SendMailData ) {
        await transport.sendMail({
            from: 'Equipe Feedget<teste@teste.com',
            to:'Gustavo<gustavo@haserti.com.br>',
            subject,
            html: body,
        })
    }
}