import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2e4c762ba60796",
      pass: "3326fb5bd10edb"
    }
  });  

export class NodemailerMailAdapter implements MailAdapter {

     async sendMail({subject, body}: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Renan Freire <renangomesfreire@gmail.com>',
            subject,
            html: body,
        })
     }

}